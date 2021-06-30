<template>
  <div class="bg-light">
    <div class="container p-4">
      <div class="d-flex justify-content-between">
        <!--search input-->
        <div>
          <label for="searchArticle" class="search-icon">
            <span class="material-icons"> search </span>
          </label>
          <input
            type="search"
            id="searchArticle"
            class="search-bar"
            placeholder="搜尋文章"
            v-model="searchArticle"
          />
        </div>
        <!--add article btn-->
        <button
          type="button"
          class="btn btn-outline-primary d-inline-flex me-2"
          @click="openModal($event, 'addArticle')"
        >
          新增文章
        </button>
      </div>
      <div class="mb-4">
        <small v-if="searchArticle === ''">
          <p class="ms-6 text-dark-primary" v-if="totalArticles.length == 0">目前尚無文章</p>
          <p v-else>目前有 {{ totalArticles.length }} 篇文章</p>
        </small>
        <small v-else>
          <p class="ms-6 text-dark-primary" v-if="filterArticle.length == 0">目前尚無文章</p>
          <p v-else>目前有 {{ filterArticle.length }} 篇文章</p>
        </small>
      </div>
    </div>
  </div>
  <div class="container py-4">
    <table class="table mb-6">
      <thead>
        <tr>
          <th width="150">發布時間</th>
          <th>文章標題</th>
          <th width="350">標籤</th>
          <th width="120"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in filterArticle"
          :key="item.id"
          data-bs-toggle="collapse"
          :href="'#collapseArticle-' + key"
          aria-expanded="false"
          :aria-controls="'collapseArticle-' + key"
          class="light-primary-hover"
          title="點擊看詳細內容"
        >
          <td width="150"></td>
          <td class="pe-4">
            <p>
              {{ item.title }}
              <i
                class="bi align-bottom d-inline"
                :class="{
                  'text-success': item.isPublic,
                  'bi-check-circle-fill': item.isPublic,
                  'text-gray': !item.isPublic,
                  'bi-dash-circle': !item.isPublic,
                }"
              ></i>
            </p>
            <small class="collapse" :id="'collapseArticle-' + key">{{ item.description }}</small>
          </td>
          <td width="350"></td>
          <td width="120">
            <a>
              <span class="material-icons" @click="openModal(item, 'editArticle')">
                mode_edit
              </span>
            </a>
            <a class="ms-2">
              <span
                class="material-icons"
                @click="openModal(item, 'deleteArticle')"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
              >
                delete
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <!--alert-->
    <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
    <!--pagination-->
    <pagination
      :page="pagination"
      @emit-pagination="getData"
      v-if="pagination.total_pages > 1"
    ></pagination>
    <!--add / edit modal-->
    <article-edit-modal
      :modal-title="modalTitle"
      :temp="temp"
      @emit-article-modal="addNewArticle"
      ref="articleModal"
    ></article-edit-modal>
    <!--delete modal-->
    <article-delete-modal :temp="temp" @emit-delete-modal="deleteArticle"></article-delete-modal>
  </div>
</template>
<script>
import alert from '@/components/Alert.vue';
import pagination from '@/components/Pagination.vue';
import { Modal } from 'bootstrap';
import articleEditModal from '@/components/ArticleEditModal.vue';
import articleDeleteModal from '@/components/DeleteModal.vue';

export default {
  data() {
    return {
      temp: {
        title: '',
        description: '',
        image: '',
        tag: [], //
        tempTag: '',
        create_at: 0, //
        author: '', //
        isPublic: true,
        content: '',
        otherImageUrl: '',
        imagesUrl: [],
      },
      articles: [],
      totalArticles: [],
      pagination: {},
      modalTitle: '',
      articleModal: {},
      deleteModal: {},
      searchArticle: '',
      showAlert: false,
      alertMsg: '',
    };
  },
  components: {
    alert,
    pagination,
    articleEditModal,
    articleDeleteModal,
  },
  methods: {
    getData(currentPage = 1) {
      // 若未傳入則預設為第一頁
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles/?page=${currentPage}`,
        )
        .then((res) => {
          if (res.data.success) {
            const { data } = res;
            this.articles = data.articles;
            this.pagination = res.data.pagination;
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    openModal(item, target) {
      switch (target) {
        case 'addArticle':
          this.clearModal(); // 不管使用者如何關掉 modal ，也還是能清空之前的資料
          this.modalTitle = '新增';
          this.articleModal.show();
          break;
        case 'editArticle':
          this.modalTitle = '完成編輯';
          this.temp = { ...item };
          if (Object.prototype.hasOwnProperty.call(this.temp, 'imagesUrl') === false) {
            // 如果沒有 imagesUrl 這個屬性（一開始只上傳主圖，未上傳其他圖片），則幫 temp 加上這個屬性
            this.temp.imagesUrl = [];
          } else {
            // 如果 imagesUrl 裡有空字串，把它刪掉再顯示
            this.temp.imagesUrl = this.temp.imagesUrl.filter((e) => e !== '');
          }
          this.articleModal.show();
          break;
        case 'deleteArticle':
          this.temp = { ...item };
          break;
        default:
          break;
      }
    },
    clearModal() {
      this.temp = {};
    },
    addNewArticle(target, tempArticle) {
      const { articleAdminBtn } = this.$refs.articleModal.$refs;
      articleAdminBtn.classList.add('disabled');
      articleAdminBtn.children[0].classList.remove('d-none');
      const item = {};
      item.data = { ...tempArticle };
      item.data.isPublic = item.data.isPublic ? 1 : 0;
      delete item.data.otherImageUrl; // 用這句把 otherImageUrl 刪掉
      if (target === '新增') {
        // 若是開新增文章的 modal
        this.$http
          .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`, item)
          .then((res) => {
            if (res.data.success) {
              this.customAlert('新增完成');
              this.getData();
              articleAdminBtn.classList.remove('disabled');
              articleAdminBtn.children[0].classList.add('d-none');
              this.articleModal.hide();
              window.setTimeout(this.closeCustomAlert, 5000);
            } else {
              this.customAlert(res.data.message);
              articleAdminBtn.classList.remove('disabled');
              articleAdminBtn.children[0].classList.add('d-none');
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
            articleAdminBtn.classList.remove('disabled');
            articleAdminBtn.children[0].classList.add('d-none');
          });
      } else if (target === '完成編輯') {
        // 若是開編輯文章的 modal
        const { id } = tempArticle;
        this.$http
          .put(
            `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`,
            item,
          )
          .then((res) => {
            if (res.data.success) {
              this.customAlert('編輯成功');
              this.getData();
              articleAdminBtn.classList.remove('disabled');
              articleAdminBtn.children[0].classList.add('d-none');
              this.articleModal.hide();
              window.setTimeout(this.closeCustomAlert, 5000);
            } else {
              this.customAlert(res.data.message);
              articleAdminBtn.classList.remove('disabled');
              articleAdminBtn.children[0].classList.add('d-none');
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
            articleAdminBtn.classList.remove('disabled');
            articleAdminBtn.children[0].classList.add('d-none');
          });
      }
    },
    deleteArticle() {
      const { id } = this.temp;
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.customAlert('刪除成功');
            this.getData();
            this.clearModal();
            this.deleteModal.hide();
            window.setTimeout(this.closeCustomAlert, 5000);
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
  },
  computed: {
    filterArticle() {
      if (this.searchArticle !== '') {
        return this.totalArticles.filter((item) => item.title.match(this.searchArticle));
      }
      return this.articles;
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    this.articleModal = new Modal(document.getElementById('articleModal'), {
      keyboard: false,
    });
    this.deleteModal = new Modal(document.getElementById('deleteModal'), {
      keyboard: false,
    });
  },
};
</script>
