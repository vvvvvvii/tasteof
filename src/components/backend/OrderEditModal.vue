<template>
  <div
    id="orderModal"
    ref="orderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
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
          <div class="container">
            <div class="row mb-8">
              <div class="col-6">
                <h2 class="h3 pb-3 mb-3 border-bottom border-gray">
                  訂單內容
                  <span class="ms-3">{{ tempOrder.id }}</span>
                </h2>
                <ul>
                  <li class="mb-3">
                    <h3 class="h4">
                      <span class="fw-bold">購買細項：</span>
                      <ul class="pt-3">
                        <li v-for="(item, key) in tempOrder.products" :key="key">
                          <template
                            v-for="(option, optionIndex) in item.options"
                            :key="optionIndex"
                          >
                            <div class="d-flex mb-3">
                              <p
                                class="badge rounded-pill h-50"
                                :class="{
                                  'bg-danger': item.product.category === '城市導覽',
                                  'bg-warning': item.product.category === '體驗票券',
                                  'bg-success': item.product.category === '包車服務',
                                }"
                              >
                                {{ item.product.category }}
                              </p>
                              <div class="ms-3">
                                <p class="mb-1 fw-bold">{{ item.product.title }}</p>
                                <p class="mb-1 text-gray">{{ option.optionName }}</p>
                                <p v-if="option.qtyDetail">
                                  {{ option.qtyDetail.adult }}
                                  <span v-if="item.product.lowestPriceUnit === '每人'"> 大 </span>
                                  <span
                                    v-else-if="
                                      item.product.category !== '包車服務' &&
                                        item.product.lowestPriceUnit !== '每人'
                                    "
                                  >
                                    組
                                  </span>
                                  <span
                                    v-else-if="
                                      item.product.category === '包車服務' &&
                                        item.product.lowestPriceUnit !== '每人'
                                    "
                                  >
                                    台
                                  </span>
                                  <span v-if="option.qtyDetail.child > 0">
                                    {{ option.qtyDetail.child }} 小
                                  </span>
                                </p>
                              </div>
                            </div>
                          </template>
                        </li>
                      </ul>
                    </h3>
                  </li>
                  <li class="mb-3">
                    <h3 class="h4">
                      <span class="fw-bold">訂單金額：</span>
                      <span>NT {{ tempOrder.total }}</span>
                    </h3>
                  </li>
                  <li class="mb-3" v-if="tempOrder.message">
                    <h3 class="h4">
                      <span class="fw-bold">客戶訂單備註：</span>
                      <p class="pt-2 ms-3">{{ tempOrder.message }}</p>
                    </h3>
                  </li>
                </ul>
                <div class="form-check mb-2"></div>
              </div>
              <div class="col-6">
                <div class="mb-7">
                  <h2 class="h3 pb-3 mb-3 border-bottom border-gray">客戶資料</h2>
                  <ul>
                    <li class="mb-3">
                      {{ tempOrder.user.name }}
                      {{ tempOrder.user.gender }}
                    </li>
                    <li>身分證字號：{{ tempOrder.user.idNum }}</li>
                    <li class="mb-3">護照號碼：{{ tempOrder.user.passportNum }}</li>
                    <li>聯繫電話：{{ tempOrder.user.tel }}</li>
                    <li>聯繫信箱：{{ tempOrder.user.email }}</li>
                    <li>住址：{{ tempOrder.user.address }}</li>
                  </ul>
                </div>
                <template v-if="tempOrder.user.paymentDetail">
                  <h2 class="h3 pb-3 mb-3 border-bottom border-gray">付款資料</h2>
                  <div class="d-flex align-items-center">
                    <label class="form-check-label" for="paymentStatus">{{
                      tempOrder.is_paid ? '已付款' : '未付款'
                    }}</label>
                    <input
                      type="checkbox"
                      class="form-check-input ms-2"
                      id="paymentStatus"
                      v-model="tempOrder.is_paid"
                    />
                  </div>
                  <ul>
                    <li>付款方式：{{ tempOrder.user.paymentDetail.payment_method }}</li>
                    <li>統一編號：{{ tempOrder.user.paymentDetail.taxIdNum || '不需統一編號' }}</li>
                    <li>
                      <p v-if="tempOrder.user.paymentDetail.coupon">
                        使用優惠碼： {{ tempOrder.user.paymentDetail.coupon }} （原價 NT{{
                          tempOrder.user.paymentDetail.total
                        }}
                        ）
                      </p>
                      <p v-else>未使用優惠碼</p>
                    </li>
                  </ul>
                </template>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-primary w-25 d-flex justify-content-center align-items-center"
                ref="orderAdminBtn"
                @click="$emit('emit-order-modal', tempOrder)"
              >
                <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <p class="ms-1">{{ modalTitle }}</p>
              </button>
              <button
                type="button"
                class="btn btn-outline-primary w-25 d-block ms-3"
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
</template>
<script>
export default {
  props: ['modalTitle', 'temp'],
  emits: ['emit-order-modal'],
  data() {
    return {
      tempOrder: {
        create_at: '',
        id: '',
        is_paid: false,
        message: '',
        num: 0,
        products: {},
        total: 0,
        user: {
          address: '',
          email: '',
          gender: '',
          idNum: '',
          name: '',
          passportNum: '',
          tel: '',
        },
      },
    };
  },
  watch: {
    temp() {
      this.tempOrder = { ...this.temp }; // 當 temp props 有變時，把 tempOrder 改掉
    },
  },
};
</script>
