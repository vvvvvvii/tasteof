<template>
  <div class="container p-4">
    <!--add coupon btn-->
    <div class="text-end">
      <button
        type="button"
        class="btn btn-outline-dark d-inline-flex"
        @click="openModal($event, 'addCoupon')"
      >
        <span class="material-icons me-1"> tag_faces </span>
        新增優惠券
      </button>
    </div>
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
            <span class="material-icons me-1 align-bottom d-inline">{{
              item.is_enabled === 1 ? 'check_circle' : 'do_disturb'
            }}</span>
          </td>
          <td width="150">{{ item.code }}</td>
          <td width="120">{{ item.percent }}%</td>
          <td width="120">{{ item.due_date }}</td>
          <td width="80">
            <a>
              <span class="material-icons" @click="openModal(item, 'editCoupon')">
                mode_edit
              </span>
            </a>
            <a class="ms-2">
              <span
                class="material-icons"
                @click="openModal(item, 'deleteCoupon')"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
              >
                delete
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <!--alert-->
    <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
    <!--pagination-->
    <pagination :page="pagination" @emit-pagination="getData"></pagination>
    <!--add / edit modal-->
    <coupon-edit-modal
      :modal-title="modalTitle"
      :temp="temp"
      @emit-coupon-modal="addNewCoupon"
    ></coupon-edit-modal>
  </div>
  <!--delete modal-->
  <coupon-delete-modal :temp="temp" @emit-delete-modal="deleteCoupon"></coupon-delete-modal>
</template>
<script>
import alert from '@/components/Alert.vue';
import pagination from '@/components/Pagination.vue';
import { Modal } from 'bootstrap';
import couponEditModal from '@/components/CouponEditModal.vue';
import couponDeleteModal from '@/components/DeleteModal.vue';

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
    alert,
    pagination,
    couponEditModal,
    couponDeleteModal,
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
              // 把時間戳轉成易閱讀的日期
              this.coupons.forEach((item, index) => {
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
              window.setTimeout(this.closeCustomAlert, 5000);
            } else {
              this.customAlert(res.data.message);
            }
          })
          .catch((err) => {
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
              window.setTimeout(this.closeCustomAlert, 5000);
            } else {
              this.customAlert(res.data.message);
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
          });
      }
    },
    editCoupon(temp) {
      const item = {};
      item.data = { ...temp };
      const { id } = temp;
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`, item)
        .then((res) => {
          if (res.data.success) {
            this.couponModal.hide();
            this.customAlert('編輯成功');
            this.getData();
            window.setTimeout(this.closeCustomAlert, 5000);
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
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
            window.setTimeout(this.closeCustomAlert, 5000);
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
