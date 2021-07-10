<template>
  <div class="container py-8">
    <div class="bg-light rounded-3 p-7">
      <div v-if="cart.total > 0">
        <div class="d-flex justify-content-between mb-6">
          <h2 class="h3 text-primary">訂單內容</h2>
          <button
            type="button"
            class="btn btn-outline-primary d-flex justify-content-center align-items-center px-5"
            @click="$emit('emit-delete-all-products')"
            ref="deleteOrderBtn"
            :disabled="Object.keys(cart).length == 0 || cart.total == 0"
          >
            <div class="spinner-border spinner-border-sm text-light d-none me-1" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p>清空購物車</p>
          </button>
        </div>
        <div class="row mb-7">
          <div
            v-for="item in cart.carts"
            :key="item.id"
            class="col-xl-4 col-md-6 px-3 py-4 border border-primary rounded-1 position-relative"
          >
            <div
              class="d-flex justify-content-between pb-2 mb-2
           border-bottom border-gray"
            >
              <p>{{ item.start_date }}</p>
              <div class="w-50">
                <p class="h3">{{ item.product.title }}</p>
                <p class="h4 mb-3">{{ item.optionName }}</p>
                <p class="text-end">NT {{ addComma(item.total) }}</p>
              </div>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="d-flex align-items-center">
                <button
                  class="border-0 bg-transparent p-2"
                  @click="$emit('emit-change-tkt-num', 'adult', 'minus', item.qtyDetail, item.id)"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
                <p class="p-1">
                  {{ item.qtyDetail.adult }}
                </p>
                <button
                  class="border-0 bg-transparent p-2"
                  @click="$emit('emit-change-tkt-num', 'adult', 'plus', item.qtyDetail, item.id)"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
                大
              </div>
              <div class="d-flex align-items-center">
                <button
                  class="border-0 bg-transparent p-2"
                  @click="$emit('emit-change-tkt-num', 'child', 'minus', item.qtyDetail, item.id)"
                >
                  <i class="bi bi-dash-lg"></i>
                </button>
                <p class="p-1">
                  {{ item.qtyDetail.child }}
                </p>
                <button
                  class="border-0 bg-transparent p-2"
                  @click="$emit('emit-change-tkt-num', 'child', 'plus', item.qtyDetail, item.id)"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
                小
              </div>
              <a type="button" class="delete-cart-icon">
                <i class="bi bi-trash-fill" @click="$emit('emit-delete-product', item.id)"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between mb-lg-4 mb-2">
          <h2 class="h3 text-primary">客戶資料</h2>
          <button type="button" class="btn btn-primary d-block px-5" @click="$emit('emit-add-pax')">
            新增旅客
          </button>
        </div>
        <Form v-slot="{ errors }" @submit="toNextPage">
          <template v-for="(item, key) in customerDetail.users" :key="key">
            <div class="d-flex justify-content-between mb-4">
              <p>{{ `第 ${key + 1} 位旅客` }}</p>
              <button
                type="button"
                class="btn btn-outline-primary d-block px-5"
                @click="$emit('emit-delete-pax', key)"
              >
                刪除旅客
              </button>
            </div>
            <div class="row" :class="{ 'mb-6': key !== customerDetail.users.length - 1 }">
              <div class="col-md-3 col-6 mb-3">
                <label :for="`bookNameCartInput-${key}`" class="form-label">姓名</label>
                <Field
                  type="text"
                  :id="`bookNameCartInput-${key}`"
                  :name="`第 ${key + 1} 位姓名`"
                  class="form-control"
                  :class="{ 'is-invalid': errors[`第 ${key + 1} 位姓名`] }"
                  rules="required"
                  v-model="customerDetail.users[key].name"
                ></Field>
                <ErrorMessage
                  :name="`第 ${key + 1} 位姓名`"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-md-3 col-6 mb-3">
                <label :for="`bookGenderCartInput-${key}`" class="form-label">稱謂</label>
                <Field
                  :name="`第 ${key + 1} 位稱謂`"
                  class="form-select"
                  :id="`bookGenderCartInput-${key}`"
                  :class="{ 'is-invalid': errors[`第 ${key + 1} 位稱謂`] }"
                  rules="required"
                  v-model="customerDetail.users[key].gender"
                  as="select"
                >
                  <option disabled value="">請選擇稱謂</option>
                  <option selected value="先生">先生</option>
                  <option value="女士">女士</option>
                </Field>
                <ErrorMessage
                  :name="`第 ${key + 1} 位稱謂`"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-md-3 col-6 mb-3">
                <label :for="`bookIdNumCartInput-${key}`" class="form-label">身分證字號</label>
                <Field
                  type="text"
                  :name="`第 ${key + 1} 位身分證`"
                  class="form-control"
                  :id="`bookIdNumCartInput-${key}`"
                  :class="{ 'is-invalid': errors[`第 ${key + 1} 位身分證`] }"
                  :rules="isIdNum"
                  v-model="customerDetail.users[key].idNum"
                ></Field>
                <ErrorMessage
                  :name="`第 ${key + 1} 位身分證`"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-md-3 col-6 mb-3">
                <label :for="`bookPassportNumCartInput-${key}`" class="form-label">
                  護照號碼
                </label>
                <Field
                  type="text"
                  :name="`第 ${key + 1} 位護照號碼`"
                  class="form-control"
                  :id="`bookPassportNumCartInput-${key}`"
                  :class="{ 'is-invalid': errors[`第 ${key + 1} 位護照號碼`] }"
                  rules="length:9|numeric"
                  v-model="customerDetail.users[key].passportNum"
                ></Field>
                <ErrorMessage
                  :name="`第 ${key + 1} 位護照號碼`"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-lg-3 col-sm-4 mb-3">
                <label :for="`bookTelCartInput-${key}`" class="form-label">聯繫電話</label>
                <Field
                  type="tel"
                  :name="`第 ${key + 1} 位電話`"
                  class="form-control"
                  :id="`bookTelCartInput-${key}`"
                  :class="{ 'is-invalid': errors[`第 ${key + 1} 位電話`] }"
                  rules="required|numeric|max:10"
                  v-model="customerDetail.users[key].tel"
                ></Field>
                <ErrorMessage
                  :name="`第 ${key + 1} 位電話`"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-lg-3 col-sm-8 mb-3">
                <label :for="`bookEmailCartInput-${key}`" class="form-label">
                  電子信箱
                </label>
                <Field
                  type="email"
                  :name="`第 ${key + 1} 位 email`"
                  class="form-control"
                  :id="`bookEmailCartInput-${key}`"
                  placeholder="customer@example.com"
                  :class="{ 'is-invalid': errors[`第 ${key + 1} 位 email`] }"
                  rules="email|required"
                  v-model="customerDetail.users[key].email"
                ></Field>
                <ErrorMessage
                  :name="`第 ${key + 1} 位 email`"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="col-lg-6 mb-3">
                <label :for="`bookAddrCartInput-${key}`" class="form-label">地址</label>
                <Field
                  type="text"
                  :name="`第 ${key + 1} 位地址`"
                  class="form-control"
                  :id="`bookAddrCartInput-${key}`"
                  :class="{ 'is-invalid': errors[`第 ${key + 1} 位地址`] }"
                  rules="required"
                  v-model="customerDetail.users[key].address"
                ></Field>
                <ErrorMessage
                  :name="`第 ${key + 1} 位地址`"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
            </div>
          </template>
          <div class="mb-7" v-if="customerDetail.users.length !== 0">
            <label :for="bookMessageCart" class="form-label">備註（選填）</label>
            <textarea
              class="form-control"
              :id="bookMessageCart"
              rows="2"
              v-model="customerDetail.message"
            ></textarea>
          </div>
          <div class="d-flex flex-column align-items-end">
            <h5 class="h3 mb-3">
              總金額
              <span class="h2 text-primary">NT {{ addComma(Math.floor(cart.final_total)) }}</span>
            </h5>
            <!--cart 是空物件或價格為 0 時不可點清空或結帳（確保購物車為空時不可點擊）-->
            <button
              type="submit"
              class="btn btn-primary d-block px-5 py-2"
              :disabled="
                Object.keys(cart).length == 0 ||
                  cart.total == 0 ||
                  customerDetail.users.length === 0
              "
            >
              <p class="h3">下一步</p>
            </button>
          </div>
        </Form>
      </div>
      <!--無商品時顯示-->
      <div class="text-center" v-else>
        <p class="mb-4">
          購物車目前還沒有商品耶
          <i class="bi bi-eraser"></i>
        </p>
        <p class="mb-2">
          客倌要不要
          <router-link :to="`/product_list`" title="前往產品頁" class="text-secondary h3">
            來這裡挑挑看、選選看
          </router-link>
          呢？
        </p>
        <p>
          也可以
          <router-link :to="`/article_list`" title="前往文章頁" class="text-secondary h3">
            來這裡尋找玩樂靈感
          </router-link>
          唷！
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cartInfo', 'customer'],
  data() {
    return {
      cart: { ...this.cartInfo },
      customerDetail: {
        users: [],
        message: '',
      },
    };
  },
  methods: {
    isIdNum(value) {
      const idNum = /^[A-Z][0-9]{9}$/;
      return idNum.test(value) ? true : '請輸入正確的身分證字號';
    },
    toNextPage() {
      this.$emit('emit-next-page', this.customerDetail);
    },
  },
  watch: {
    cartInfo: {
      handler() {
        this.cart = { ...this.cartInfo }; // props 有變時更改資料
        this.cart.final_total = this.cartInfo.final_total;
      },
      deep: true,
    },
    customer() {
      this.customerDetail = { ...this.customer };
    },
  },
  computed: {
    addComma() {
      return (price) => {
        const parts = price.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `${parts.join(',')}`;
      };
    },
  },
  created() {
    this.cart = { ...this.cartInfo };
    this.customerDetail = { ...this.customer };
  },
};
</script>
