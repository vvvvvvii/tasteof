<template>
  <div class="bg-light-primary">
    <div class="container p-4">
      <div class="d-flex justify-content-between">
        <!--search input-->
        <div>
          <label for="searchProduct" class="search-icon">
            <span class="material-icons"> search </span>
          </label>
          <input
            type="search"
            id="searchProduct"
            class="search-bar"
            placeholder="搜尋產品"
            v-model="searchProduct"
          />
        </div>
        <!--add product btn-->
        <button
          type="button"
          class="btn btn-outline-dark d-inline-flex me-2"
          @click="openModal($event, 'addProduct')"
        >
          <span class="material-icons me-1"> tag_faces </span>
          新增產品
        </button>
      </div>
      <small class="ms-6" v-if="searchProduct === ''">
        <p class="ms-6 text-dark-primary" v-if="totalProducts.length == 0">目前尚無產品</p>
        <p v-else>目前有 {{ totalProducts.length }} 項產品</p>
      </small>
      <small class="ms-6" v-else>
        <p class="ms-6 text-dark-primary" v-if="filterProduct.length == 0">目前尚無產品</p>
        <p v-else>目前有 {{ filterProduct.length }} 項產品</p>
      </small>
    </div>
  </div>
  <div class="container py-4">
    <table class="table mb-6">
      <thead>
        <tr>
          <th width="100"></th>
          <th>產品名稱</th>
          <th width="150">原價</th>
          <th width="150">售價</th>
          <th width="120"></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, key) in filterProduct"
          :key="item.id"
          data-bs-toggle="collapse"
          :href="'#collapseProduct-' + key"
          aria-expanded="false"
          :aria-controls="'collapseProduct-' + key"
          class="light-primary-hover"
          title="點擊看詳細內容"
        >
          <td width="100">
            <span
              class="badge rounded-pill"
              :class="{
                'bg-danger': item.category === '城市導覽',
                'bg-primary': item.category === '體驗票券',
                'bg-info': item.category === '包車服務',
                'bg-success': item.category === '推薦住宿',
              }"
            >
              {{ item.category }}
            </span>
          </td>
          <td class="pe-4">
            <p>
              {{ item.title }}
              <span
                class="material-icons align-bottom d-inline"
                :class="{ 'text-success': item.is_enabled, 'text-secondary': !item.is_enabled }"
              >
                {{ item.is_enabled ? 'check_circle' : 'do_disturb' }}
              </span>
            </p>
            <small class="collapse" :id="'collapseProduct-' + key">{{ item.description }}</small>
          </td>
          <td width="150">
            {{ item.origin_price }} / <small>{{ item.unit }}</small>
          </td>
          <td width="150">
            {{ item.price }} / <small>{{ item.unit }}</small>
          </td>
          <td width="120">
            <a>
              <span class="material-icons" @click="openModal(item, 'editProduct')">
                mode_edit
              </span>
            </a>
            <a class="ms-2">
              <span
                class="material-icons"
                @click="openModal(item, 'deleteProduct')"
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
    <pagination :page="pagination" @emit-pagination="getData"></pagination>
    <!--add / edit modal-->
    <product-edit-modal
      :modal-title="modalTitle"
      :temp="temp"
      @emit-product-modal="addNewProduct"
      v-if="pagination.total_pages > 1"
    ></product-edit-modal>
    <!--delete modal-->
    <product-delete-modal :temp="temp" @emit-delete-modal="deleteProduct"></product-delete-modal>
  </div>
</template>
<script>
import alert from '@/components/Alert.vue';
import pagination from '@/components/Pagination.vue';
import { Modal } from 'bootstrap';
import productEditModal from '@/components/ProductEditModal.vue';
import productDeleteModal from '@/components/DeleteModal.vue';

export default {
  data() {
    return {
      temp: {
        title: '',
        category: '',
        origin_price: 0,
        price: 0,
        unit: '',
        description: '',
        content: '',
        is_enabled: true,
        imageUrl: '',
        otherImageUrl: '',
        imagesUrl: [],
      },
      products: [],
      totalProducts: [],
      pagination: {},
      modalTitle: '',
      productModal: {},
      deleteModal: {},
      searchProduct: '',
      showAlert: false,
      alertMsg: '',
    };
  },
  components: {
    alert,
    pagination,
    productEditModal,
    productDeleteModal,
  },
  methods: {
    getData(currentPage = 1) {
      // 若未傳入則預設為第一頁
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${currentPage}`,
        )
        .then((res) => {
          if (res.data.success) {
            const { data } = res;
            this.products = data.products;
            this.pagination = res.data.pagination;
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.totalProducts = Object.values(res.data.products);
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
        case 'addProduct':
          this.clearModal(); // 不管使用者如何關掉 modal ，也還是能清空之前的資料
          this.modalTitle = '新增';
          this.productModal.show();
          break;
        case 'editProduct':
          this.modalTitle = '完成編輯';
          this.temp = { ...item };
          this.temp.is_enabled = this.temp.is_enabled === 1; // 把 1 0 轉回布林值，才會預設成正常打勾
          if (Object.prototype.hasOwnProperty.call(this.temp, 'imagesUrl') === false) {
            // 如果沒有 imagesUrl 這個屬性（一開始只上傳主圖，未上傳其他圖片），則幫 temp 加上這個屬性
            this.temp.imagesUrl = [];
          } else {
            // 如果 imagesUrl 裡有空字串，把它刪掉再顯示
            this.temp.imagesUrl = this.temp.imagesUrl.filter((e) => e !== '');
          }
          this.productModal.show();
          break;
        case 'deleteProduct':
          this.temp = { ...item };
          break;
        default:
          break;
      }
    },
    clearModal() {
      this.temp = {
        title: '',
        category: '',
        origin_price: 0,
        price: 0,
        unit: '',
        description: '',
        content: '',
        is_enabled: true,
        imageUrl: '',
        otherImageUrl: '',
        imagesUrl: [],
      };
    },
    addNewProduct(target, tempProduct) {
      const item = {};
      item.data = { ...tempProduct };
      item.data.is_enabled = item.data.is_enabled ? 1 : 0;
      delete item.data.otherImageUrl; // 用這句把 otherImageUrl 刪掉
      if (target === '新增') {
        // 若是開新增產品的 modal
        this.$http
          .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`, item)
          .then((res) => {
            if (res.data.success) {
              this.customAlert('新增完成');
              this.getData();
              this.productModal.hide();
              window.setTimeout(this.closeCustomAlert, 5000);
            } else {
              this.customAlert(res.data.message);
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
          });
      } else if (target === '完成編輯') {
        // 若是開編輯產品的 modal
        const { id } = tempProduct;
        this.$http
          .put(
            `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`,
            item,
          )
          .then((res) => {
            alert('編輯成功');
            if (res.data.success) {
              this.customAlert('編輯成功');
              this.getData();
              this.productModal.hide();
              window.setTimeout(this.closeCustomAlert, 5000);
            } else {
              this.customAlert(res.data.message);
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
          });
      }
    },
    deleteProduct() {
      const { id } = this.temp;
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`)
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
    filterProduct() {
      if (this.searchProduct !== '') {
        return this.totalProducts.filter((item) => item.title.match(this.searchProduct));
      }
      return this.products;
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    this.productModal = new Modal(document.getElementById('productModal'), {
      keyboard: false,
    });
    this.deleteModal = new Modal(document.getElementById('deleteModal'), {
      keyboard: false,
    });
  },
};
</script>
