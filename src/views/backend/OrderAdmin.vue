<template>
  <div class="bg-light">
    <div class="container p-4">
      <div class="d-flex justify-content-between">
        <!--search input-->
        <div>
          <label for="searchOrder">
            <i class="bi bi-search"></i>
          </label>
          <input
            type="search"
            id="searchOrder"
            class="ms-2 rounded-3 px-3 border border-primary"
            placeholder="搜尋訂單編號"
            v-model="searchOrder"
          />
        </div>
        <!--delete all order btn-->
        <button type="button" class="btn btn-outline-primary d-inline-flex me-2" @click="deleteAll">
          刪除所有訂單
        </button>
      </div>
      <div class="mb-4">
        <small v-if="searchOrder === ''">
          <p v-if="orders.length == 0">目前尚無訂單</p>
          <p v-else>此分頁有 {{ orders.length }} 筆訂單</p>
        </small>
        <small v-else>
          <p v-if="filterOrder.length == 0">查找不到相關訂單</p>
          <p v-else>此分頁為您查到 {{ filterOrder.length }} 筆訂單</p>
        </small>
      </div>
    </div>
  </div>
  <div class="container py-4">
    <table class="table mb-6">
      <thead>
        <tr>
          <th width="150">建立日期</th>
          <th>訂單編號</th>
          <th width="120">金額</th>
          <th width="120">付款狀態</th>
          <th width="120"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, key) in filterOrder" :key="item.id">
          <tr
            data-bs-toggle="collapse"
            :href="'#collapseOrder-' + key"
            aria-expanded="false"
            :aria-controls="'collapseOrder-' + key"
            class="light-primary-hover"
            title="點擊看詳細內容"
          >
            <td width="150">
              {{ item.create_at }}
            </td>
            <td class="pe-4">
              {{ item.id }}
            </td>
            <td width="120">NT {{ item.total }}</td>
            <td width="120">
              <i
                class="bi bi-credit-card-2-back-fill"
                :class="{ 'text-success': item.is_paid, 'text-gray': !item.is_paid }"
              ></i>
            </td>
            <td width="120">
              <a @click="openModal(item, 'editOrder')">
                <i class="bi bi-pencil-square"></i>
              </a>
              <a
                @click="openModal(item, 'deleteOrder')"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
              >
                <i class="bi bi-trash-fill ms-2"></i>
              </a>
            </td>
          </tr>
          <!--折疊訂單內產品內容-->
          <tr>
            <td colspan="5" class="collapse border-bottom-0" :id="'collapseOrder-' + key">
              <small>訂單內容：</small>
              <ul v-for="(i, k) in item.products" :key="'product-' + k">
                <li v-for="(option, optionIndex) in i.options" :key="optionIndex">
                  <small>
                    {{ option.start_date.replace(/-/g, ' / ') }}
                    <span class="ms-2">
                      {{ i.product.title }} -
                      {{ option.optionName }}
                    </span>
                    <span v-if="option.qtyDetail" class="ms-2">
                      * {{ option.qtyDetail.adult }}
                      <span v-if="i.product.lowestPriceUnit === '每人'"> 大 </span>
                      <span
                        v-else-if="
                          i.product.category !== '包車服務' && i.product.lowestPriceUnit !== '每人'
                        "
                      >
                        組
                      </span>
                      <span
                        v-else-if="
                          i.product.category === '包車服務' && i.product.lowestPriceUnit !== '每人'
                        "
                      >
                        台
                      </span>
                      <span v-if="option.qtyDetail.child > 0">
                        {{ option.qtyDetail.child }} 小
                      </span>
                    </span>
                  </small>
                </li>
              </ul>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <!--alert-->
    <Alert v-if="showAlert" :alert-msg="alertMsg"></Alert>
    <!--add / edit modal-->
    <Order-edit-modal
      :modal-title="modalTitle"
      :temp="temp"
      @emit-order-modal="editOrder"
      ref="orderModal"
    ></Order-edit-modal>
    <!--delete modal-->
    <Order-delete-modal :temp="temp" @emit-delete-modal="deleteOrder"></Order-delete-modal>
    <!--pagination-->
    <Pagination
      v-if="pagination.total_pages > 1 && filterOrder.length > 10"
      :page="pagination"
      @emit-pagination="getData"
    ></Pagination>
  </div>
</template>
<script>
import Alert from '@/components/backend/Alert.vue';
import Pagination from '@/components/backend/PaginationAdmin.vue';
import { Modal } from 'bootstrap';
import OrderEditModal from '@/components/backend/OrderEditModal.vue';
import OrderDeleteModal from '@/components/backend/DeleteModal.vue';

export default {
  data() {
    return {
      orders: [],
      temp: {},
      pagination: {},
      modalTitle: '',
      orderModal: {},
      deleteModal: {},
      searchOrder: '',
      showAlert: false,
      alertMsg: '',
    };
  },
  components: {
    Alert,
    Pagination,
    OrderEditModal,
    OrderDeleteModal,
  },
  methods: {
    getData(currentPage = 1) {
      // 若未傳入則預設為第一頁
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/?page=${currentPage}`,
        )
        .then((res) => {
          if (res.data.success) {
            const { data } = res;
            this.orders = data.orders;
            // 把時間戳轉成易閱讀的日期
            this.orders.forEach((item, index) => {
              if (typeof item.create_at === 'number') {
                // 避免已經轉成亦閱讀的日期後，因編輯重跑 getData() ，無法重複轉換而錯誤
                const time = new Date(item.create_at * 1000)
                  .toISOString()
                  .split('T')[0]
                  .replace(/-/g, ' / ');
                this.orders[index].create_at = time;
              }
              // 整理付款資料
              this.orders[index].total = item.user.paymentDetail.final_total;
              if (item.user.paymentDetail.payment_method !== '') {
                this.orders[index].is_paid = true;
              }
            });
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
        case 'editOrder':
          this.modalTitle = '完成編輯';
          this.temp = { ...item };
          this.orderModal.show();
          break;
        case 'deleteOrder':
          this.temp = { ...item };
          break;
        default:
          break;
      }
    },
    clearModal() {
      this.temp = {};
    },
    editOrder(tempOrder) {
      const { orderAdminBtn } = this.$refs.orderModal.$refs;
      orderAdminBtn.classList.add('disabled');
      orderAdminBtn.children[0].classList.remove('d-none');
      const item = {};
      item.data = { ...tempOrder };
      const { id } = tempOrder;
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`, item)
        .then((res) => {
          if (res.data.success) {
            this.orderModal.hide();
            this.customAlert('編輯成功');
            this.getData();
            orderAdminBtn.classList.remove('disabled');
            orderAdminBtn.children[0].classList.add('d-none');
          } else {
            orderAdminBtn.classList.remove('disabled');
            orderAdminBtn.children[0].classList.add('d-none');
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          orderAdminBtn.classList.remove('disabled');
          orderAdminBtn.children[0].classList.add('d-none');
          this.customAlert(err.response);
        });
    },
    deleteOrder() {
      const { id } = this.temp;
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`)
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
    deleteAll() {
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/all`)
        .then((res) => {
          if (res.data.success) {
            this.customAlert('刪除成功');
            this.getData();
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
  },
  computed: {
    filterOrder() {
      if (this.searchOrder !== '') {
        return this.orders.filter((i) => i.id.match(new RegExp(this.searchOrder, 'gi')));
      }
      return this.orders;
    },
  },
  created() {
    this.getData();
  },
  mounted() {
    this.orderModal = new Modal(document.getElementById('orderModal'), {
      keyboard: false,
    });
    this.deleteModal = new Modal(document.getElementById('deleteModal'), {
      keyboard: false,
    });
  },
};
</script>
