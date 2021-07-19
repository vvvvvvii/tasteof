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
          <div class="text-end">
            <button
              type="button"
              class="bg-transparent border-0 p-2 text-secondary h3"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          <div class="container-fluid">
            <div class="row">
              <!--圖片上傳預覽區、標籤選擇-->
              <div class="col-4">
                <div class="bg-light p-3 rounded-2">
                  <div class="mb-2">
                    <Form v-slot="{ errors }">
                      <label for="imgUrl" class="form-label">產品封面圖片</label>
                      <Field
                        type="text"
                        id="imgUrl"
                        name="主圖"
                        class="form-control"
                        :class="{ 'is-invalid': errors['主圖'] }"
                        rules="required"
                        placeholder="請輸入圖片網址"
                        v-model="tempProduct.imageUrl"
                      ></Field>
                      <ErrorMessage name="主圖" class="invalid-feedback"></ErrorMessage>
                    </Form>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-primary mb-2"
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
                        <i class="bi bi-upload"></i>
                      </button>
                    </div>
                  </div>
                  <ul class="row g-1 mb-4">
                    <li class="col-4 mb-2">
                      <button
                        type="button"
                        v-if="tempProduct.imageUrl"
                        class="modal-img-outer"
                        @click="deleteImgs($event, 'mainImg')"
                      >
                        <img :src="tempProduct.imageUrl" alt="主圖片" class="modal-img" />
                        <i class="bi bi-trash-fill modal-delete-btn"></i>
                      </button>
                      <div v-else class="modal-img-default"></div>
                    </li>
                    <li class="col-4 mb-2" v-for="(item, key) in tempProduct.imagesUrl" :key="item">
                      <button
                        type="button"
                        v-if="item"
                        class="modal-img-outer"
                        @click="deleteImgs($event, 'subImg')"
                        :data-img="key"
                      >
                        <img :src="item" alt="副圖片" class="modal-img" />
                        <i class="modal-delete-btn bi bi-trash-fill"></i>
                      </button>
                      <div v-else class="modal-img-default"></div>
                    </li>
                  </ul>
                  <h5 class="h4 mb-2">選擇標籤</h5>
                  <div class="row">
                    <div v-for="(tag, tagIndex) in tagCategory" :key="tagIndex" class="col-4">
                      <input
                        type="checkbox"
                        :id="`tagCheck-${tagIndex}`"
                        v-model="tempProduct.tagCheck"
                        :value="tag"
                      />
                      <label :for="`tagCheck-${tagIndex}`" class="ms-1">{{ tag }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <!--文字登打區-->
              <div class="col-8">
                <Form v-slot="{ errors }" @submit="submitProduct" class="mb-4">
                  <div class="row">
                    <div class="col-8">
                      <div class="mb-2">
                        <label for="productTitle" class="form-label">標題</label>
                        <Field
                          type="text"
                          id="productTitle"
                          name="標題"
                          class="form-control"
                          :class="{ 'is-invalid': errors['標題'] }"
                          rules="required"
                          v-model="tempProduct.title"
                        ></Field>
                        <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
                      </div>
                    </div>
                    <div class="col-4">
                      <label for="totalBookingNum" class="form-label">累積參加人數</label>
                      <input
                        type="number"
                        id="totalBookingNum"
                        min="0"
                        class="form-control"
                        v-model.number="tempProduct.totalBookingNum"
                      />
                    </div>
                    <div class="col-6 mb-2">
                      <label for="productCategory" class="form-label">分類</label>
                      <Field
                        name="產品分類"
                        id="productCategory"
                        class="form-select"
                        :class="{ 'is-invalid': errors['產品分類'] }"
                        rules="required"
                        v-model="tempProduct.category"
                        as="select"
                      >
                        <option selected disabled value="">請選擇產品分類</option>
                        <option>城市導覽</option>
                        <option>體驗票券</option>
                        <option>包車服務</option>
                      </Field>
                      <ErrorMessage name="產品分類" class="invalid-feedback"></ErrorMessage>
                    </div>
                    <div class="col-6 mb-2">
                      <label for="productDurationDay" class="form-label">行程長度</label>
                      <div class="d-flex align-items-center">
                        <input
                          type="number"
                          id="productDurationDay"
                          class="form-control w-50"
                          min="0"
                          v-model.number="tempProduct.duration.day"
                        />
                        <span class="ms-2 w-50">天</span>
                        <input
                          type="number"
                          id="productDurationHours"
                          class="form-control w-50"
                          min="0"
                          max="23"
                          v-model.number="tempProduct.duration.hours"
                        />
                        <span class="ms-2 w-50">小時</span>
                        <input
                          type="number"
                          id="productDurationMin"
                          class="form-control w-50"
                          min="0"
                          max="59"
                          v-model.number="tempProduct.duration.min"
                        />
                        <span class="ms-2 w-50">分</span>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label for="productDescription" class="form-label">產品描述</label>
                    <Field
                      type="text"
                      id="productDescription"
                      name="產品描述"
                      class="form-control"
                      cols="30"
                      rows="3"
                      :class="{ 'is-invalid': errors['產品描述'] }"
                      rules="required"
                      v-model="tempProduct.description"
                      as="textarea"
                    ></Field>
                    <ErrorMessage name="產品描述" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-2">
                    <div class="d-flex justify-content-between mb-4">
                      <label class="form-label">行程所含地點</label>
                      <button
                        type="button"
                        class="btn btn-outline-primary d-block w-25"
                        @click="addNewAttraction"
                      >
                        加新地點
                      </button>
                    </div>
                    <div class="row">
                      <div
                        v-for="(item, key) in tempProduct.attractionArr"
                        :key="key"
                        class="col-3 mb-2"
                      >
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            v-model.trim="tempProduct.attractionArr[key]"
                          />
                          <button
                            type="button"
                            class="btn btn-outline-primary"
                            @click="deleteAttraction(key)"
                          >
                            <i class="bi bi-trash-fill"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <label for="productAgeRestriction" class="form-label">年齡限制</label>
                    <input
                      type="text"
                      id="productAgeRestriction"
                      class="form-control"
                      v-model.trim="tempProduct.ageRestriction"
                    />
                  </div>
                  <div class="mb-2">
                    <label for="productPolicy" class="form-label">適用規定</label>
                    <Field
                      type="text"
                      id="productPolicy"
                      name="適用規定"
                      class="form-control"
                      cols="50"
                      rows="3"
                      :class="{ 'is-invalid': errors['適用規定'] }"
                      rules="required"
                      v-model="tempProduct.policy"
                      as="textarea"
                    ></Field>
                    <ErrorMessage name="適用規定" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <button
                    type="button"
                    class="btn btn-primary d-block w-50 mb-6 mx-auto"
                    @click="addPackageOption"
                  >
                    新增方案
                  </button>
                  <div v-for="(item, key) in tempProduct.packageOptions" :key="key">
                    <div class="row align-items-end">
                      <div class="col-8 mb-2">
                        <label :for="`productPackageOptions-${key}`" class="form-label">{{
                          `方案 ${key + 1} 名稱`
                        }}</label>
                        <Field
                          type="text"
                          :id="`productPackageOptions-${key}`"
                          :name="`方案 ${key + 1} 名稱`"
                          class="form-control"
                          :class="{ 'is-invalid': errors[`方案 ${key + 1} 名稱`] }"
                          rules="required"
                          v-model="tempProduct.packageOptions[key].optionName"
                        ></Field>
                        <ErrorMessage
                          :name="`方案 ${key + 1} 名稱`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="col-4 mb-2 text-end">
                        <button
                          type="button"
                          class="btn btn-outline-primary"
                          @click="deletePackageOption(key)"
                        >
                          刪除方案
                        </button>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-4 mb-2">
                        <label :for="`productOriginalPrice-${key}`" class="form-label">原價</label>
                        <Field
                          type="number"
                          :id="`productOriginalPrice-${key}`"
                          :name="`方案 ${key + 1} 原價`"
                          min="0"
                          class="form-control"
                          :class="{ 'is-invalid': errors[`方案 ${key + 1} 原價`] }"
                          rules="required"
                          v-model="tempProduct.packageOptions[key].origin_price"
                        ></Field>
                        <ErrorMessage
                          :name="`方案 ${key + 1} 原價`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="col-4 mb-2">
                        <label :for="`productPrice-${key}`" class="form-label">售價</label>
                        <Field
                          type="number"
                          :id="`productPrice-${key}`"
                          :name="`方案 ${key + 1} 售價`"
                          min="0"
                          class="form-control"
                          :class="{ 'is-invalid': errors[`方案 ${key + 1} 售價`] }"
                          rules="required"
                          v-model="tempProduct.packageOptions[key].price"
                        ></Field>
                        <ErrorMessage
                          :name="`方案 ${key + 1} 售價`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="col-4 mb-2">
                        <label :for="`productUnit-${key}`" class="form-label">計費單位</label>
                        <Field
                          type="text"
                          :id="`productUnit-${key}`"
                          :name="`方案 ${key + 1} 單位`"
                          class="form-control"
                          :class="{ 'is-invalid': errors[`方案 ${key + 1} 單位`] }"
                          rules="required"
                          v-model="tempProduct.packageOptions[key].unit"
                          placeholder="每人"
                        ></Field>
                        <ErrorMessage
                          :name="`方案 ${key + 1} 單位`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="col-6 mb-2">
                        <label :for="`productMeetingPoint-${key}`" class="form-label"
                          >集合地點</label
                        >
                        <input
                          type="text"
                          :id="`productMeetingPoint-${key}`"
                          class="form-control"
                          v-model.trim="item.meetingPoint"
                        />
                      </div>
                      <div class="col-6 mb-4">
                        <label :for="`productMeetingTime-${key}`" class="form-label"
                          >集合時間</label
                        >
                        <input
                          type="text"
                          :id="`productMeetingTime-${key}`"
                          class="form-control"
                          v-model.trim="item.meetingTime"
                        />
                      </div>
                    </div>
                    <div class="mb-6">
                      <div class="d-flex justify-content-between mb-4">
                        <label class="form-label">方案內含</label>
                        <button
                          type="button"
                          class="btn btn-outline-primary d-block w-25"
                          @click="addNewContent(key)"
                        >
                          加新內容
                        </button>
                      </div>
                      <div class="row">
                        <div v-for="(i, index) in item.contentArr" :key="index" class="col-6 mb-2">
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              v-model="item.contentArr[index]"
                            />
                            <button
                              type="button"
                              class="btn btn-outline-primary"
                              @click="deleteContent(key, index)"
                            >
                              <i class="bi bi-trash-fill"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between mb-6">
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
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="freeCxl"
                        v-model="tempProduct.is_freeCxl"
                      />
                      <label class="form-check-label" for="freeCxl">是否享三天前免費取消</label>
                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button
                      type="submit"
                      class="btn btn-primary w-25 d-flex justify-content-center align-items-center"
                      ref="productAdminBtn"
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
                </Form>
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
import alert from '@/components/backend/Alert.vue';

export default {
  props: ['modalTitle', 'temp', 'tagCategory'],
  emits: ['emit-product-modal'],
  data() {
    return {
      tempProduct: {
        ...this.temp,
        tagCheck: [],
      },
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
        window.setTimeout(this.closeCustomAlert, 5000);
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
    addNewAttraction() {
      if (Object.keys(this.tempProduct).includes('attractionArr') === false) {
        this.tempProduct.attractionArr = [];
        this.tempProduct.attractionArr[0] = {};
      } else {
        // 新增一個空物件讓新地點可以放入
        this.tempProduct.attractionArr[this.tempProduct.attractionArr.length] = {};
      }
    },
    deleteAttraction(index) {
      this.tempProduct.attractionArr.splice(index, 1);
    },
    addNewContent(key) {
      if (Object.keys(this.tempProduct.packageOptions[key]).includes('contentArr') === false) {
        this.tempProduct.packageOptions[key].contentArr = [];
        this.tempProduct.packageOptions[key].contentArr[0] = '';
      } else {
        // 新增一個空字串讓新地點可以放入
        this.tempProduct.packageOptions[key].contentArr[
          this.tempProduct.packageOptions[key].contentArr.length
        ] = '';
      }
    },
    deleteContent(key, index) {
      this.tempProduct.packageOptions[key].contentArr.splice(index, 1);
    },
    addPackageOption() {
      if (Object.keys(this.tempProduct).includes('packageOptions') === false) {
        this.tempProduct.packageOptions = [];
        this.tempProduct.packageOptions[0] = {};
      } else {
        // 新增一個空物件讓新方案的內容可以放入
        this.tempProduct.packageOptions[this.tempProduct.packageOptions.length] = {};
      }
    },
    deletePackageOption(key) {
      this.tempProduct.packageOptions.splice(key, 1);
    },
    submitProduct() {
      this.$emit('emit-product-modal', this.modalTitle, this.tempProduct);
    },
  },
  watch: {
    temp() {
      this.tempProduct = {
        ...this.temp,
      }; // 當 temp props 有變時，把 tempProduct 改掉
      if (Object.keys(this.tempProduct).includes('tagCheck') === false) {
        this.tempProduct.tagCheck = [];
      }
      if (Object.keys(this.tempProduct).includes('duration') === false) {
        this.tempProduct.duration = {
          day: 0,
          hours: 0,
          min: 0,
        };
      }
    },
  },
  created() {
    this.tempProduct = {
      ...this.temp,
      tagCheck: [],
    };
  },
};
</script>
