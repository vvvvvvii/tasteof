<template>
  <div
    id="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content product-modal-bg">
        <div class="modal-body">
          <button
            type="button"
            class="close-modal-btn close-modal-lg-btn bg-light-primary"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span class="material-icons">
              clear
            </span>
          </button>
          <div class="container-fluid">
            <div class="row">
              <!--圖片上傳預覽區-->
              <div class="col-4">
                <div class="bg-light-primary p-3 rounded-3">
                  <div class="mb-2">
                    <label for="imgUrl" class="form-label">產品圖片</label>
                    <input
                      type="text"
                      id="imgUrl"
                      class="form-control"
                      placeholder="請輸入圖片網址"
                      v-model="tempProduct.imageUrl"
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-dark-primary mb-2"
                    data-bs-toggle="collapse"
                    href="#collapseAddImgs"
                    aria-expanded="false"
                    aria-controls="collapseAddImgs"
                  >
                    新增其他圖片
                  </button>
                  <div class="collapse" id="collapseAddImgs">
                    <div class="d-flex mb-2">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片網址"
                        v-model="tempProduct.otherImageUrl"
                      />
                      <button
                        type="button"
                        class="btn btn-outline-dark-primary rounded-pill ms-2"
                        @click="addImgs"
                      >
                        <span class="material-icons">
                          add_task
                        </span>
                      </button>
                    </div>
                  </div>
                  <ul class="row g-1">
                    <li class="col-4 mb-2">
                      <button
                        v-if="tempProduct.imageUrl"
                        class="modal-img-outer"
                        type="button"
                        @click="deleteImgs($event, 'mainImg')"
                      >
                        <img :src="tempProduct.imageUrl" alt="主圖片" class="modal-img" />
                        <span class="modal-delete-btn material-icons">
                          delete
                        </span>
                      </button>
                      <div v-else class="modal-img-default"></div>
                    </li>
                    <li class="col-4 mb-2" v-for="(item, key) in tempProduct.imagesUrl" :key="item">
                      <button
                        v-if="item"
                        class="modal-img-outer"
                        type="button"
                        @click="deleteImgs($event, 'subImg')"
                        :data-img="key"
                      >
                        <img :src="item" alt="副圖片" class="modal-img" />
                        <span class="modal-delete-btn material-icons">
                          delete
                        </span>
                      </button>
                      <div v-else class="modal-img-default"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <!--文字登打區-->
              <div class="col-8">
                <form class="mb-4">
                  <div class="mb-2">
                    <label for="productTitle" class="form-label">標題</label>
                    <input
                      type="text"
                      id="productTitle"
                      class="form-control"
                      v-model="tempProduct.title"
                    />
                  </div>
                  <div class="row">
                    <div class="col-6 mb-2">
                      <label for="productCategory" class="form-label">分類</label>
                      <select
                        id="productCategory"
                        class="form-select"
                        v-model="tempProduct.category"
                      >
                        <option selected disabled>請選擇產品分類</option>
                        <option>城市導覽</option>
                        <option>體驗票券</option>
                        <option>包車服務</option>
                        <option>推薦住宿</option>
                      </select>
                    </div>
                    <div class="col-6 mb-2">
                      <label for="productUnit" class="form-label">計費單位</label>
                      <input
                        type="text"
                        id="productUnit"
                        class="form-control"
                        v-model="tempProduct.unit"
                        placeholder="每人"
                      />
                    </div>
                    <div class="col-6 mb-2">
                      <label for="productOriginalPrice" class="form-label">原價</label>
                      <input
                        type="number"
                        id="productOriginalPrice"
                        class="form-control"
                        min="0"
                        v-model.number="tempProduct.origin_price"
                      />
                    </div>
                    <div class="col-6 mb-2">
                      <label for="productPrice" class="form-label">售價</label>
                      <input
                        type="number"
                        id="productPrice"
                        class="form-control"
                        min="0"
                        v-model.number="tempProduct.price"
                      />
                    </div>
                  </div>
                  <div class="mb-2">
                    <label for="productDescription" class="form-label">產品描述</label>
                    <textarea
                      name="productDescription"
                      id="productDescription"
                      class="form-control"
                      cols="30"
                      rows="3"
                      v-model="tempProduct.description"
                    ></textarea>
                  </div>
                  <div class="mb-2">
                    <label for="productContent" class="form-label">適用規定</label>
                    <textarea
                      name="productContent"
                      id="productContent"
                      class="form-control"
                      cols="30"
                      rows="3"
                      v-model="tempProduct.content"
                    ></textarea>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="productEnabled"
                      v-model="tempProduct.is_enabled"
                    />
                    <label class="form-check-label" for="productEnabled">產品是否啟用</label>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="mainProduct"
                      v-model="tempProduct.is_mainProduct"
                    />
                    <label class="form-check-label" for="mainProduct">是否為主打商品</label>
                  </div>
                </form>
                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-primary w-25 d-flex justify-content-center align-items-center"
                    ref="productAdminBtn"
                    @click="$emit('emit-product-modal', modalTitle, tempProduct)"
                  >
                    <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <p class="ms-1">{{ modalTitle }}</p>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-dark w-25 d-block ms-3"
                    data-bs-dismiss="modal"
                  >
                    取消
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--alert-->
  <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
</template>
<script>
import alert from '@/components/Alert.vue';

export default {
  props: ['modalTitle', 'temp'],
  data() {
    return {
      tempProduct: { ...this.temp },
      showAlert: false,
      alertMsg: '',
    };
  },
  components: {
    alert,
  },
  methods: {
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    addImgs() {
      if (this.tempProduct.imagesUrl.length < 5) {
        this.tempProduct.imagesUrl.push(this.tempProduct.otherImageUrl);
        this.tempProduct.otherImageUrl = '';
      } else {
        this.customAlert('最多只可上傳六張照片');
      }
    },
    deleteImgs(e, target) {
      if (target === 'mainImg') {
        this.tempProduct.imageUrl = '';
      } else if (target === 'subImg') {
        const deleteItem = e.currentTarget.dataset.img;
        this.tempProduct.imagesUrl.splice(deleteItem, 1);
      }
    },
  },
  watch: {
    temp() {
      this.tempProduct = { ...this.temp }; // 當 temp props 有變時，把 tempProduct 改掉
    },
  },
  created() {
    this.tempProduct = { ...this.temp };
  },
};
</script>
