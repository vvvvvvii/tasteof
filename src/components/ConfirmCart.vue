<template>
  <div class="container py-8">
    <div class="bg-light rounded-3 p-7">
      <h2 class="h3 text-primary mb-6">訂單內容</h2>
      <table class="table align-middle mb-7">
        <thead>
          <tr>
            <th scope="col">商品名稱</th>
            <th scope="col">使用日期</th>
            <th scope="col">成人（ 12+ ）</th>
            <th scope="col">孩童（ 6~12 ）</th>
            <th scope="col">商品總價</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="item in cart.carts" :key="item.id">
            <tr>
              <td scope="row">
                <p>{{ item.product.title }}</p>
                <p>{{ item.optionName }}</p>
              </td>
              <td>{{ item.start_date }}</td>
              <td>
                {{ item.qtyDetail.adult }}
              </td>
              <td>
                {{ item.qtyDetail.child }}
              </td>
              <td>NT {{ addComma(item.total) }}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <h2 class="h3 text-primary mb-4">客戶資料</h2>
      <div class="row mb-7">
        <div class="col-6 position-relative" v-for="(item, key) in customer.users" :key="key">
          <div class="d-flex justify-content-between p-6 bg-white">
            <div class="w-50 d-flex flex-column justify-content-between">
              <p class="h3 mb-5">
                {{ item.name }}
                <span class="h4 ms-1">
                  {{ item.gender }}
                </span>
              </p>
              <p class="pax-num h3">{{ `第${key + 1}位旅客` }}</p>
              <img
                src="https://github.com/vvvvvvii/tasteof/blob/main/src/assets/img/num.png?raw=true"
                :alt="`第${key + 1}位旅客`"
                class="w-50"
              />
            </div>
            <div class="w-50 d-flex flex-column justify-content-between">
              <div>
                <p class="mb-2">身分證字號： {{ item.idNum }}</p>
                <p>護照號碼： {{ item.passportNum }}</p>
              </div>
              <div>
                <p class="mb-2">{{ item.tel }}</p>
                <p class="mb-2">{{ item.email }}</p>
                <p class="mb-2">{{ item.address }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="h3 text-primary mb-4">付款資料</h2>
      <Form v-slot="{ errors }" @submit="addOrder">
        <div class="row mb-7">
          <div class="col-4">
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
          <div class="col-4">
            <label for="taxIdInput" class="form-label">統一編號（選填）</label>
            <input
              type="text"
              id="taxIdInput"
              name="統一編號"
              class="form-control"
              v-model="paymentDetail.taxIdNum"
            />
          </div>
          <div class="col-4">
            <label for="couponInput" class="form-label">優惠券（選填）</label>
            <div class="input-group">
              <input
                type="text"
                id="couponInput"
                name="優惠券"
                class="form-control"
                v-model="paymentDetail.coupon"
              />
              <span
                class="input-group-text btn btn-primary"
                @click="$emit('emit-check-coupon', paymentDetail.coupon)"
                >套用優惠碼</span
              >
            </div>
          </div>
        </div>
        <div class="d-flex flex-column align-items-end">
          <h5 class="h3 mb-3">
            總金額
            <span class="h2 text-primary">NT {{ addComma(cart.final_total) }}</span>
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
    cartInfo() {
      this.cart = { ...this.cartInfo }; // props 有變時更改資料
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
        return `${parts.join('.')}`;
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
