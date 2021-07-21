<template>
  <div class="bg-light">
    <div class="container p-4">
      <div class="d-flex justify-content-between">
        <!--search input-->
        <div>
          <label for="searchArticle">
            <i class="bi bi-search"></i>
          </label>
          <input
            type="search"
            id="searchArticle"
            class="ms-2 rounded-3 px-3 border border-primary"
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
          <p v-if="articles.length == 0">目前尚無文章</p>
          <p v-else>目前有 {{ articles.length }} 篇文章</p>
        </small>
        <small v-else>
          <p v-if="filterArticle.length == 0">目前尚無文章</p>
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
          <th width="500">文章標題</th>
          <th width="350">標籤</th>
          <th width="120"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filterArticle" :key="item.id" class="light-primary-hover">
          <td width="150">{{ item.create_at }}</td>
          <td width="500" class="pe-4">
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
          </td>
          <td width="350">
            <span
              v-for="(tag, index) in item.tagCheck"
              :key="index"
              class="badge rounded-pill bg-success"
              :class="{ 'ms-1': index !== 0 }"
            >
              {{ tag }}
            </span>
          </td>
          <td width="120">
            <i class="bi bi-pencil-square" @click="openModal(item, 'editArticle')"></i>
            <i
              class="bi bi-trash-fill ms-2"
              @click="openModal(item, 'deleteArticle')"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            ></i>
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
      v-if="pagination.total_pages > 1 && filterArticle.length > 9"
    ></pagination>
    <!--add / edit modal-->
    <article-edit-modal
      :modal-title="modalTitle"
      :temp="temp"
      :tag-category="tagCategory"
      @emit-article-modal="addNewArticle"
      ref="articleModal"
    ></article-edit-modal>
    <!--delete modal-->
    <article-delete-modal :temp="temp" @emit-delete-modal="deleteArticle"></article-delete-modal>
  </div>
</template>
<script>
import alert from '@/components/backend/Alert.vue';
import pagination from '@/components/backend/PaginationAdmin.vue';
import { Modal } from 'bootstrap';
import articleEditModal from '@/components/backend/ArticleEditModal.vue';
import articleDeleteModal from '@/components/backend/DeleteModal.vue';

export default {
  data() {
    return {
      temp: {
        title: '',
        description: '',
        image: '',
        tag: [],
        tempTag: '',
        create_at: 0,
        author: '',
        isPublic: true,
        content: '',
        otherImageUrl: '',
        imagesUrl: [],
        tagCheck: [],
      },
      tagCategory: [
        '基隆',
        '台北',
        '新北',
        '新竹',
        '苗栗',
        '桃園',
        '台中',
        '彰化',
        '南投',
        '雲林',
        '嘉義',
        '台南',
        '高雄',
        '屏東',
        '宜蘭',
        '花蓮',
        '台東',
        '離島',
        '親子',
        '浪漫',
        '冒險',
        '自然',
        '烹飪',
        '美食',
        '知性文化',
        '水上活動',
      ],
      articles: [],
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
            this.articles.forEach((item, index) => {
              if (typeof item.create_at === 'number') {
                // 避免已經轉成亦閱讀的日期後，因編輯重跑 getData() ，無法重複轉換而錯誤
                const time = new Date(item.create_at * 1000)
                  .toISOString()
                  .split('T')[0]
                  .replace(/-/g, ' / ');
                this.articles[index].create_at = time;
              }
            });
            this.pagination = res.data.pagination;
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
        });
    },
    getSingleData(id) {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`)
        .then((res) => {
          if (res.data.success) {
            const { data } = res;
            this.temp = data.article;
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
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
          this.getSingleData(item.id);
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
      this.temp = {
        title: '',
        description: '',
        image: '',
        tag: [],
        tempTag: '',
        create_at: 0,
        author: '',
        isPublic: true,
        content: '',
        otherImageUrl: '',
        imagesUrl: [],
      };
    },
    addNewArticle(target, tempArticle) {
      const { articleAdminBtn } = this.$refs.articleModal.$refs;
      articleAdminBtn.classList.add('disabled');
      articleAdminBtn.children[0].classList.remove('d-none');
      const item = {};
      item.data = { ...tempArticle };
      delete item.data.otherImageUrl; // 用這句把 otherImageUrl 刪掉
      item.data.create_at = Math.floor(new Date() / 1000);
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
              window.setTimeout(this.closeCustomAlert, 5000);

              articleAdminBtn.classList.remove('disabled');
              articleAdminBtn.children[0].classList.add('d-none');
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
            window.setTimeout(this.closeCustomAlert, 5000);

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
              window.setTimeout(this.closeCustomAlert, 5000);

              articleAdminBtn.classList.remove('disabled');
              articleAdminBtn.children[0].classList.add('d-none');
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
            window.setTimeout(this.closeCustomAlert, 5000);

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
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
        });
    },
  },
  computed: {
    filterArticle() {
      if (this.searchArticle !== '') {
        return this.articles.filter((i) => i.title.match(new RegExp(this.searchArticle, 'gi')));
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
      focus: false, // 解決 ckeditor link 在 bootstrap modal 點擊不到的問題
    });
    this.deleteModal = new Modal(document.getElementById('deleteModal'), {
      keyboard: false,
    });
  },
};
</script>
