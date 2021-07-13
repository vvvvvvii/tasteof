<template>
  <div class="container py-8">
    <div class="bg-light rounded-3 p-7">
      <h2 class="h3 text-primary mb-6">訂單內容</h2>
      <div class="row mb-7 rounded-1">
        <div v-for="item in cart.carts" :key="item.id" class="col-xl-4 col-md-6">
          <div class="px-3 py-4 mb-2 border border-primary rounded-1 position-relative">
            <div
              class="d-flex justify-content-between pb-2 mb-2
           border-bottom border-gray"
            >
              <div>
                <p class="mb-2">{{ item.start_date }}</p>
                <img :src="item.product.imageUrl" :alt="item.title" class="cart-img" />
              </div>
              <div class="w-50">
                <p class="h3">{{ item.product.title }}</p>
                <p class="h4 mb-3">{{ item.optionName }}</p>
                <p class="text-end">NT {{ addComma(item.total) }}</p>
              </div>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="d-flex align-items-center">{{ item.qtyDetail.adult }} 大</div>
              <div class="d-flex align-items-center">{{ item.qtyDetail.child }} 小</div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="h3 text-primary mb-6">客戶資料</h2>
      <div class="row mb-7">
        <div
          class="col-lg-6 position-relative p-md-6 p-3 bg-white"
          v-for="(item, key) in customer.users"
          :key="key"
        >
          <div class="d-flex justify-content-between">
            <div class="w-50 d-flex flex-column justify-content-between">
              <p class="h3 mb-5">
                {{ item.name }}
                <span class="h4 ms-1">
                  {{ item.gender }}
                </span>
              </p>
              <p class="pax-num d-sm-inline d-none">{{ `第${key + 1}位旅客` }}</p>
              <img
                src="https://github.com/vvvvvvii/tasteof/blob/main/public/img/num.png?raw=true"
                :alt="`第${key + 1}位旅客`"
                class="pax-num-img d-sm-block d-none"
              />
            </div>
            <div class="w-50">
              <p class="mb-2">身分證字號： {{ item.idNum }}</p>
              <p class="mb-4">護照號碼： {{ item.passportNum }}</p>
              <p class="mb-2 d-sm-block d-none">{{ item.tel }}</p>
              <p class="mb-2 d-sm-block d-none">{{ item.email }}</p>
              <p class="mb-2 d-sm-block d-none">{{ item.address }}</p>
            </div>
          </div>
          <p class="mb-2 h5 d-sm-none">{{ item.tel }}</p>
          <p class="mb-2 h5 d-sm-none">{{ item.email }}</p>
          <p class="mb-2 h5 d-sm-none">{{ item.address }}</p>
        </div>
      </div>
      <h2 class="h3 text-primary mb-6">付款資料</h2>
      <Form v-slot="{ errors }" @submit="addOrder">
        <div class="row mb-7">
          <div class="col-lg-4 col-md-6 mb-lg-0 mb-3">
            <label for="paymentMethodInput" class="form-label">付款方式</label>
            <Field
              name="付款方式"
              class="form-select"
              id="paymentMethodInput"
              :class="{ 'is-invalid': errors['付款方式'] }"
              rules="required"
              v-model="paymentDetail.method"
              as="select"
            >
              <option disabled value="">請選擇付款方式</option>
              <option selected value="線上刷卡">線上刷卡</option>
              <option value="匯款">匯款</option>
            </Field>
            <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col-lg-4 col-md-6 mb-md-0 mb-3">
            <label for="taxIdInput" class="form-label">統一編號（選填）</label>
            <input
              type="text"
              id="taxIdInput"
              name="統一編號"
              class="form-control"
              v-model="paymentDetail.taxIdNum"
            />
          </div>
          <div class="col-lg-4 col-md-6">
            <label for="couponInput" class="form-label">優惠券（選填）</label>
            <div class="input-group">
              <input
                type="text"
                id="couponInput"
                name="優惠券"
                class="form-control"
                v-model="paymentDetail.coupon"
              />
              <div
                ref="checkCouponBtn"
                class="input-group-text btn btn-primary"
                @click="$emit('emit-check-coupon', paymentDetail.coupon)"
              >
                <div class="spinner-border spinner-border-sm text-light d-none me-1" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                套用優惠碼
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column align-items-end">
          <h5 class="h3 mb-3">
            總金額
            <span class="h2 text-primary">NT {{ addComma(Math.floor(cart.final_total)) }}</span>
          </h5>
          <div class="d-flex">
            <button
              type="button"
              class="btn btn-outline-primary px-5 py-2 h3"
              @click="$emit('emit-pre-page')"
            >
              上一頁
            </button>
            <button
              type="submit"
              class="btn btn-primary px-5 py-2 ms-2
              d-flex justify-content-center align-items-center"
              ref="addOrderBtn"
              :disabled="Object.keys(cart).length == 0 || cart.total == 0"
            >
              <div class="spinner-border spinner-border-sm text-light d-none me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="h3">結帳</p>
            </button>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['cartInfo', 'customer', 'payment'],
  data() {
    return {
      cart: { ...this.cartInfo },
      customerDetail: { ...this.customer },
      paymentDetail: { ...this.payment },
    };
  },
  methods: {
    addOrder() {
      this.$emit('emit-add-order', this.paymentDetail);
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
    payment() {
      this.paymentDetail = { ...this.payment };
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
    this.paymentDetail = { ...this.payment };
  },
};
</script>
