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
            <div class="mb-4">
              <h2>訂單內容</h2>
              <div class="mb-2">
                <ul>
                  <li>
                    <h3>
                      訂單編號：
                      <span>{{ tempOrder.id }}</span>
                    </h3>
                  </li>
                  <li>
                    <h3>
                      購買細項：
                      <ul v-for="(item, key) in tempOrder.products" :key="key">
                        <li>
                          <p>
                            {{ item.product.category }} / {{ item.product.title }} *
                            {{ item.qty }}
                          </p>
                          <p>NT.{{ item.final_total }}</p>
                        </li>
                      </ul>
                    </h3>
                  </li>
                  <li>
                    <h3>
                      客戶訂單備註：
                      <span>{{ tempOrder.message }}</span>
                    </h3>
                  </li>
                </ul>
              </div>
              <div class="form-check mb-2">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="paymentStatus"
                  v-model="tempOrder.is_paid"
                />
                <label class="form-check-label" for="paymentStatus">付款狀態</label>
              </div>
              <h2>客戶資料</h2>
              <ul>
                <li>
                  {{ tempOrder.user.name }} {{ tempOrder.user.gender == 'male' ? '先生' : '女士' }}
                </li>
                <li>身分證字號：{{ tempOrder.user.idNum }}</li>
                <li>護照號碼：{{ tempOrder.user.passportNum }}</li>
                <li>聯繫電話：{{ tempOrder.user.tel }}</li>
                <li>聯繫信箱：{{ tempOrder.user.email }}</li>
                <li>住址：{{ tempOrder.user.address }}</li>
              </ul>
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
</template>
<script>
export default {
  props: ['modalTitle', 'temp'],
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
