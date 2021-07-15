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
                      <ul class="pt-2">
                        <li v-for="(item, key) in tempOrder.products" :key="key">
                          <p class="mb-2 ms-3">
                            <i class="bi bi-check2"></i>
                            {{ item.product.category }} / {{ item.product.title }} *
                            <span v-if="item.qtyDetail">
                              {{ item.qtyDetail.adult }} 大
                              <span v-if="item.qtyDetail.child > 0">
                                {{ item.qtyDetail.child }} 小
                              </span>
                            </span>
                          </p>
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
                  <li class="mb-3">
                    <h3 class="h4">
                      <span class="fw-bold">客戶訂單備註：</span>
                      <p class="pt-2 ms-3">{{ tempOrder.message }}</p>
                    </h3>
                  </li>
                </ul>
                <div class="form-check mb-2">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="paymentStatus"
                    v-model="tempOrder.is_paid"
                  />
                  <label class="form-check-label" for="paymentStatus">付款狀態</label>
                </div>
              </div>
              <div class="col-6">
                <h2 class="h3 pb-3 mb-3 border-bottom border-gray">客戶資料</h2>
                <ul>
                  <li>
                    {{ tempOrder.user.name }}
                    {{ tempOrder.user.gender }}
                  </li>
                  <li>身分證字號：{{ tempOrder.user.idNum }}</li>
                  <li>護照號碼：{{ tempOrder.user.passportNum }}</li>
                  <li>聯繫電話：{{ tempOrder.user.tel }}</li>
                  <li>聯繫信箱：{{ tempOrder.user.email }}</li>
                  <li>住址：{{ tempOrder.user.address }}</li>
                </ul>
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
