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
            <Form v-slot="{ errors }" @submit="emitData" class="mb-4">
              <div class="row">
                <div class="col-6 mb-2">
                  <label for="couponTitle" class="form-label">優惠名稱</label>
                  <Field
                    type="text"
                    id="couponTitle"
                    name="名稱"
                    class="form-control"
                    :class="{ 'is-invalid': errors['名稱'] }"
                    :disabled="tempCoupon.over_due"
                    rules="required"
                    v-model="tempCoupon.title"
                  ></Field>
                  <ErrorMessage name="名稱" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-6 mb-2">
                  <label for="couponCode" class="form-label">優惠碼</label>
                  <Field
                    type="text"
                    id="couponCode"
                    name="優惠碼"
                    class="form-control"
                    :class="{ 'is-invalid': errors['優惠碼'] }"
                    :disabled="tempCoupon.over_due"
                    rules="required"
                    v-model="tempCoupon.code"
                  ></Field>
                  <ErrorMessage name="優惠碼" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-6 mb-2">
                  <label for="couponPercent" class="form-label">折扣幅度</label>
                  <Field
                    type="number"
                    id="couponPercent"
                    name="折扣幅度"
                    class="form-control"
                    :class="{ 'is-invalid': errors['折扣幅度'] }"
                    placeholder="原價將乘以此百分比，成為折扣後的新價錢"
                    :disabled="tempCoupon.over_due"
                    rules="required"
                    v-model.number="tempCoupon.percent"
                  ></Field>
                  <ErrorMessage name="折扣幅度" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="col-6 mb-2">
                  <label for="couponDueDate" class="form-label">優惠到期日</label>
                  <!-- 解決 flatpickr 在 disabled 時沒有顯示的問題 -->
                  <input
                    v-if="tempCoupon.over_due"
                    type="text"
                    class="form-control"
                    :disabled="tempCoupon.over_due"
                    :placeholder="tempCoupon.due_date"
                  />
                  <flat-pickr
                    v-else
                    id="couponDueDate"
                    ref="couponDueDate"
                    class="form-control"
                    :config="config"
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
            </Form>
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-primary w-25 d-flex justify-content-center align-items-center"
                ref="couponAdminBtn"
                @click="emitData"
                :disabled="tempCoupon.over_due"
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
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  props: ['modalTitle', 'temp'],
  emits: ['coupon-order-modal'],
  data() {
    return {
      tempCoupon: {},
      config: {
        altFormat: 'F j, Y',
        dateFormat: 'Y-m-d',
        minDate: 'today',
      },
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
