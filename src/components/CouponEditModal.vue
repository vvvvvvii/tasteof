<template>
  <div
    id="couponModal"
    ref="couponModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="couponModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content coupon-modal-bg">
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
            <form class="mb-4">
              <div class="row">
                <div class="col-6 mb-2">
                  <label for="couponTitle" class="form-label">優惠名稱</label>
                  <input
                    type="text"
                    id="couponTitle"
                    class="form-control"
                    :disabled="tempCoupon.over_due"
                    v-model="tempCoupon.title"
                  />
                </div>
                <div class="col-6 mb-2">
                  <label for="couponCode" class="form-label">優惠碼</label>
                  <input
                    type="text"
                    id="couponCode"
                    class="form-control"
                    :disabled="tempCoupon.over_due"
                    v-model="tempCoupon.code"
                  />
                </div>
                <div class="col-6 mb-2">
                  <label for="couponPercent" class="form-label">折扣幅度</label>
                  <input
                    type="number"
                    id="couponPercent"
                    class="form-control"
                    min="1"
                    max="99"
                    placeholder="原價將乘以此百分比，成為折扣後的新價錢"
                    :disabled="tempCoupon.over_due"
                    v-model.number="tempCoupon.percent"
                  />
                </div>
                <div class="col-6 mb-2">
                  <label for="couponDueDate" class="form-label">優惠到期日</label>
                  <flat-pickr
                    ref="startDate"
                    class="form-control"
                    :disabled="tempCoupon.over_due"
                    v-model="tempCoupon.due_date"
                  ></flat-pickr>
                </div>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="couponEnabled"
                  :disabled="tempCoupon.over_due"
                  v-model="tempCoupon.is_enabled"
                />
                <label class="form-check-label" for="couponEnabled">優惠是否啟用</label>
              </div>
            </form>
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-primary w-25 d-block"
                @click="emitData"
                :disabled="tempCoupon.over_due"
              >
                {{ modalTitle }}
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
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  props: ['modalTitle', 'temp'],
  data() {
    return {
      tempCoupon: {},
    };
  },
  components: {
    flatPickr,
  },
  methods: {
    emitData() {
      // 把日期轉回 timestamp
      this.tempCoupon.due_date = Math.floor(new Date(this.tempCoupon.due_date) / 1000);
      this.$emit('emit-coupon-modal', this.modalTitle, this.tempCoupon);
    },
  },
  watch: {
    temp() {
      this.tempCoupon = { ...this.temp }; // 當 temp props 有變時，把 tempCoupon 改掉
      if (Object.keys(this.tempCoupon).length !== 0) {
        this.tempCoupon.due_date = this.temp.due_date.split(' / ').join('-'); // 把日期改回 flatpickr 的格式
      }
    },
  },
  created() {
    this.tempCoupon = { ...this.temp };
  },
};
</script>
