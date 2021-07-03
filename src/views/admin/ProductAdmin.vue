<template>
  <div class="bg-light">
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
          class="btn btn-outline-primary d-inline-flex me-2"
          @click="openModal($event, 'addProduct')"
        >
          新增產品
        </button>
      </div>
      <div class="mb-4">
        <small v-if="searchProduct === ''">
          <p class="ms-6 text-dark-primary" v-if="totalProducts.length == 0">目前尚無產品</p>
          <p v-else>目前有 {{ totalProducts.length }} 項產品</p>
        </small>
        <small v-else>
          <p class="ms-6 text-dark-primary" v-if="filterProduct.length == 0">目前尚無產品</p>
          <p v-else>目前有 {{ filterProduct.length }} 項產品</p>
        </small>
      </div>
      <div class="row g-0 align-items-center">
        <div class="col-1">
          <p class="fw-bold">主力商品：</p>
        </div>
        <div class="col-11">
          <p v-if="mainProduct.length == 0">請新增主力商品</p>
          <ul class="d-flex flex-wrap">
            <li
              v-for="(item, key) in mainProduct"
              :key="key"
              class="ms-1 mb-1"
              title="刪除此項主力商品"
              @click="deleteMainProduct(item)"
            >
              <button type="button" class="tag-sm tag-warning">
                {{ item.title }}
                <i class="bi bi-x"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
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
                'bg-warning': item.category === '體驗票券',
                'bg-success': item.category === '包車服務',
              }"
            >
              {{ item.category }}
            </span>
          </td>
          <td class="pe-4">
            <p>
              {{ item.title }}
              <i
                class="bi align-bottom d-inline"
                :class="{
                  'text-success': item.is_enabled,
                  'bi-check-circle-fill': item.is_enabled,
                  'text-gray': !item.is_enabled,
                  'bi-dash-circle': !item.is_enabled,
                }"
              ></i>
              <i
                class="bi align-bottom d-inline ms-1"
                :class="{
                  'text-warning': item.is_mainProduct,
                  'bi-star-fill': item.is_mainProduct,
                }"
              ></i>
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
    <pagination
      :page="pagination"
      @emit-pagination="getData"
      v-if="pagination.total_pages > 1"
    ></pagination>
    <!--add / edit modal-->
    <product-edit-modal
      :modal-title="modalTitle"
      :temp="temp"
      :tag-category="tagCategory"
      @emit-product-modal="addNewProduct"
      ref="productModal"
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
        duration: {},
        is_enabled: true,
        is_mainProduct: false,
        imageUrl: '',
        otherImageUrl: '',
        imagesUrl: [],
        packageOptions: [],
        tagCheck: [],
      },
      tagCategory: [
        '雙北',
        '中彰投',
        '嘉南',
        '高屏',
        '花東',
        '親子',
        '浪漫',
        '冒險',
        '自然',
        '烹飪',
        '美食',
        '知性文化',
        '水上活動',
        '獨家代理',
      ],
      products: [],
      totalProducts: [],
      mainProduct: [],
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
            // 如果有勾主力商品，則放進 mainProduct 陣列
            this.totalProducts.forEach((item) => {
              if (item.is_mainProduct) {
                this.mainProduct.push(item);
              }
            });
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
      const { productAdminBtn } = this.$refs.productModal.$refs;
      productAdminBtn.classList.add('disabled');
      productAdminBtn.children[0].classList.remove('d-none');
      const item = {};
      item.data = { ...tempProduct };
      item.data.is_enabled = item.data.is_enabled ? 1 : 0;
      console.log(item.data.tagCheck);
      if (item.data.tagCheck.indexOf('體驗票券') > -1) {
        item.data.tagCheck.splice(item.data.tagCheck.indexOf('體驗票券'), 1);
      } else if (item.data.tagCheck.indexOf('城市導覽') > -1) {
        item.data.tagCheck.splice(item.data.tagCheck.indexOf('城市導覽'), 1);
      } else if (item.data.tagCheck.indexOf('包車服務') > -1) {
        item.data.tagCheck.splice(item.data.tagCheck.indexOf('包車服務'), 1);
      }
      console.log(item.data.tagCheck);
      // if (item.data.tagCheck.includes('體驗票券' || '城市導覽' || '包車服務')) {
      //   item.data.tagCheck.splice(
      //     item.data.tagCheck.indexOf('體驗票券' || '城市導覽' || '包車服務'),
      //     1,
      //   );
      // }
      item.data.tagCheck.push(item.data.category);
      delete item.data.otherImageUrl; // 用這句把 otherImageUrl 刪掉
      if (target === '新增') {
        // 若是開新增產品的 modal
        this.$http
          .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`, item)
          .then((res) => {
            if (res.data.success) {
              this.customAlert('新增完成');
              this.getData();
              productAdminBtn.classList.remove('disabled');
              productAdminBtn.children[0].classList.add('d-none');
              this.productModal.hide();
              window.setTimeout(this.closeCustomAlert, 5000);
            } else {
              this.customAlert(res.data.message);
              productAdminBtn.classList.remove('disabled');
              productAdminBtn.children[0].classList.add('d-none');
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
            productAdminBtn.classList.remove('disabled');
            productAdminBtn.children[0].classList.add('d-none');
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
            if (res.data.success) {
              this.customAlert('編輯成功');
              this.getData();
              productAdminBtn.classList.remove('disabled');
              productAdminBtn.children[0].classList.add('d-none');
              this.productModal.hide();
              window.setTimeout(this.closeCustomAlert, 5000);
            } else {
              this.customAlert(res.data.message);
              productAdminBtn.classList.remove('disabled');
              productAdminBtn.children[0].classList.add('d-none');
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
            productAdminBtn.classList.remove('disabled');
            productAdminBtn.children[0].classList.add('d-none');
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
    deleteMainProduct(product) {
      const item = {};
      item.data = { ...product };
      item.data.is_mainProduct = false; // 把點擊的刪掉 = 把該商品的 is_mainProduct 調成 false
      const { id } = item.data;
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`, item)
        .then((res) => {
          if (res.data.success) {
            this.customAlert('刪除成功');
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
