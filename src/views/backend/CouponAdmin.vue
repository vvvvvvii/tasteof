<template>
  <div class="bg-light">
    <div class="container p-4">
      <div class="text-end">
        <button
          type="button"
          class="btn btn-outline-primary d-inline-flex"
          @click="openModal($event, 'addCoupon')"
        >
          新增優惠券
        </button>
      </div>
    </div>
  </div>
  <div class="container p-4">
    <!--add coupon btn-->
    <table class="table mb-6">
      <thead>
        <tr>
          <th width="150">優惠名稱</th>
          <th width="150">優惠碼</th>
          <th width="120">折扣幅度</th>
          <th width="120">優惠到期日</th>
          <th width="80"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td width="150">
            {{ item.title }}
            <i
              class="bi bi-check-circle-fill me-1 align-bottom d-inline"
              :class="{ 'text-success': item.is_enabled, 'text-gray': !item.is_enabled }"
            ></i>
          </td>
          <td width="150">{{ item.code }}</td>
          <td width="120">{{ item.percent }}%</td>
          <td width="120">{{ item.due_date }}</td>
          <td width="80">
            <i class="bi bi-pencil-square" @click="openModal(item, 'editCoupon')"></i>
            <i
              class="bi bi-trash-fill ms-2"
              @click="openModal(item, 'deleteCoupon')"
              data-bs-toggle="modal"
              data-bs-target="#deleteModal"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
    <!--alert-->
    <Alert v-if="showAlert" :alert-msg="alertMsg"></Alert>
    <!--pagination-->
    <Pagination
      v-if="pagination.total_pages > 1"
      :page="pagination"
      @emit-pagination="getData"
    ></Pagination>
    <!--add / edit modal-->
    <Coupon-edit-modal
      :modal-title="modalTitle"
      :temp="temp"
      @emit-coupon-modal="addNewCoupon"
      ref="couponModal"
    ></Coupon-edit-modal>
  </div>
  <!--delete modal-->
  <Coupon-delete-modal :temp="temp" @emit-delete-modal="deleteCoupon"></Coupon-delete-modal>
</template>
<script>
import Alert from '@/components/backend/Alert.vue';
import Pagination from '@/components/backend/PaginationAdmin.vue';
import { Modal } from 'bootstrap';
import CouponEditModal from '@/components/backend/CouponEditModal.vue';
import CouponDeleteModal from '@/components/backend/DeleteModal.vue';

export default {
  data() {
    return {
      temp: {},
      coupons: [],
      pagination: {},
      modalTitle: '',
      couponModal: {},
      deleteModal: {},
      showAlert: false,
      alertMsg: '',
    };
  },
  components: {
    Alert,
    Pagination,
    CouponEditModal,
    CouponDeleteModal,
  },
  methods: {
    getData(currentPage = 1) {
      // 若未傳入則預設為第一頁
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons/?page=${currentPage}`,
        )
        .then((res) => {
          if (res.data.success) {
            const { data } = res;
            this.coupons = data.coupons;
            if (Object.keys(this.coupons).length !== 0) {
              // coupons 有東西時
              // 把時間戳轉成易閱讀的日期
              this.coupons.forEach((item, index) => {
                if (Math.floor(new Date() / 1000) > item.due_date) {
                  // 如果現在的時間戳大於該項目，代表優惠到期日已經過了
                  this.coupons[index].is_enabled = 0;
                  this.coupons[index].over_due = true;
                } else {
                  this.coupons[index].over_due = false;
                }
                const time = new Date(item.due_date * 1000)
                  .toISOString()
                  .split('T')[0]
                  .replace(/-/g, ' / ');
                this.coupons[index].due_date = time;
              });
            }
            this.pagination = res.data.pagination;
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
      window.setTimeout(this.closeCustomAlert, 5000);
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    openModal(item, target) {
      switch (target) {
        case 'addCoupon':
          this.clearModal(); // 不管使用者如何關掉 modal ，也還是能清空之前的資料
          this.modalTitle = '新增';
          this.couponModal.show();
          break;
        case 'editCoupon':
          this.modalTitle = '完成編輯';
          this.temp = { ...item };
          this.temp.is_enabled = this.temp.is_enabled === 1; // 把 1 0 轉回布林值，才會預設成正常打勾
          this.couponModal.show();
          break;
        case 'deleteCoupon':
          this.temp = { ...item };
          break;
        default:
          break;
      }
    },
    clearModal() {
      this.temp = {};
    },
    addNewCoupon(target, temp) {
      const { couponAdminBtn } = this.$refs.couponModal.$refs;
      couponAdminBtn.classList.add('disabled');
      couponAdminBtn.children[0].classList.remove('d-none');
      const item = {};
      item.data = { ...temp };
      item.data.is_enabled = item.data.is_enabled ? 1 : 0;
      if (target === '新增') {
        // 若是開新增產品的 modal
        this.$http
          .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`, item)
          .then((res) => {
            if (res.data.success) {
              this.couponModal.hide();
              this.customAlert('新增完成');
              this.getData();
              couponAdminBtn.classList.remove('disabled');
              couponAdminBtn.children[0].classList.add('d-none');
            } else {
              couponAdminBtn.classList.remove('disabled');
              couponAdminBtn.children[0].classList.add('d-none');
              this.customAlert(res.data.message);
            }
          })
          .catch((err) => {
            couponAdminBtn.classList.remove('disabled');
            couponAdminBtn.children[0].classList.add('d-none');
            this.customAlert(err.response);
          });
      } else if (target === '完成編輯') {
        // 若是開編輯產品的 modal
        const { id } = temp;
        this.$http
          .put(
            `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`,
            item,
          )
          .then((res) => {
            if (res.data.success) {
              this.couponModal.hide();
              this.customAlert('編輯成功');
              this.getData();
              couponAdminBtn.classList.remove('disabled');
              couponAdminBtn.children[0].classList.add('d-none');
            } else {
              couponAdminBtn.classList.remove('disabled');
              couponAdminBtn.children[0].classList.add('d-none');
              this.customAlert(res.data.message);
            }
          })
          .catch((err) => {
            couponAdminBtn.classList.remove('disabled');
            couponAdminBtn.children[0].classList.add('d-none');
            this.customAlert(err.response);
          });
      }
    },
    deleteCoupon() {
      const { id } = this.temp;
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.customAlert('刪除成功');
            this.getData();
            this.clearModal();
            this.deleteModal.hide();
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    this.couponModal = new Modal(document.getElementById('couponModal'), {
      keyboard: false,
    });
    this.deleteModal = new Modal(document.getElementById('deleteModal'), {
      keyboard: false,
    });
  },
};
</script>
