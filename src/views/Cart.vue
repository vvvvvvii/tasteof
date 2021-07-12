<template>
  <div class="pt-7">
    <checkCart
      v-if="checkCartPageShow"
      ref="checkCart"
      :customer="customerDetail"
      :cart-info="cart"
      @emit-change-tkt-num="changeTktNum"
      @emit-delete-product="deleteProduct"
      @emit-delete-all-products="deleteAllProducts"
      @emit-add-pax="addPax"
      @emit-delete-pax="deletePax"
      @emit-next-page="saveCustomerDetail"
    ></checkCart>
    <confirmCart
      v-if="confirmCartPageShow"
      ref="confirmCart"
      :customer="customerDetail"
      :cart-info="cart"
      :payment="paymentDetail"
      @emit-check-coupon="checkCoupon"
      @emit-pre-page="backToFirstPage"
      @emit-add-order="addOrder"
    ></confirmCart>
    <finishCart v-if="finishCartPageShow" :order-detail="orderDetail"></finishCart>
  </div>
  <!--alert-->
  <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
</template>
<script>
import alert from '@/components/Alert.vue';
import checkCart from '@/components/CheckCart.vue';
import confirmCart from '@/components/ConfirmCart.vue';
import finishCart from '@/components/FinishCart.vue';
import emitter from '../assets/js/emitter';

export default {
  data() {
    return {
      customerDetail: {
        users: [],
        message: '',
      },
      cart: {},
      paymentDetail: {
        method: '',
        taxIdNum: '',
        coupons: '',
      },
      orderDetail: {
        total: 0,
        orderId: '',
      },
      showAlert: false,
      alertMsg: '',
      checkCartPageShow: true,
      confirmCartPageShow: false,
      finishCartPageShow: false,
    };
  },
  components: {
    alert,
    checkCart,
    confirmCart,
    finishCart,
  },
  methods: {
    getCartInfo() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
        });
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    changeTktNum(tktType, calcType, detail, id) {
      const qtyDetail = { ...detail };
      if (tktType === 'adult') {
        if (calcType === 'plus') {
          qtyDetail.adult += 1;
        } else if (calcType === 'minus' && qtyDetail.adult >= 2) {
          qtyDetail.adult -= 1;
        }
      } else if (calcType === 'plus') {
        qtyDetail.child += 1;
      } else if (calcType === 'minus' && qtyDetail.child >= 1) {
        qtyDetail.child -= 1;
      }
      const data = {
        data: {
          product_id: id,
          qty: qtyDetail.adult + qtyDetail.child,
          qtyDetail,
        },
      };
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`, data)
        .then((res) => {
          if (res.data.success) {
            this.getCartInfo();
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
        });
    },
    deleteProduct(id) {
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.customAlert('已清除商品');
            this.getCartInfo();
            window.setTimeout(this.closeCustomAlert, 5000);
            emitter.emit('update-cart');
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
            emitter.emit('update-cart');
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
        });
    },
    deleteAllProducts() {
      //   if (confirm('真的要全數清空嗎Ｑ口Ｑ')) {
      const { deleteOrderBtn } = this.$refs.checkCart.$refs;
      deleteOrderBtn.classList.add('disabled');
      deleteOrderBtn.children[0].classList.remove('d-none');
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          if (res.data.success) {
            this.customAlert('已清除購物車');
            this.getCartInfo();
            deleteOrderBtn.classList.remove('disabled');
            deleteOrderBtn.children[0].classList.add('d-none');
            window.setTimeout(this.closeCustomAlert, 3500);
            window.setTimeout(this.backToHomePage, 4000);
            emitter.emit('update-cart');
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
            deleteOrderBtn.classList.remove('disabled');
            deleteOrderBtn.children[0].classList.add('d-none');
            emitter.emit('update-cart');
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
          deleteOrderBtn.classList.remove('disabled');
          deleteOrderBtn.children[0].classList.add('d-none');
        });
      //   }
    },
    addPax() {
      if (Object.keys(this.customerDetail).includes('users') === false) {
        this.customerDetail.users = [];
        this.customerDetail.users[0] = {};
      } else {
        // 新增一個空物件讓新方案的內容可以放入
        this.customerDetail.users[this.customerDetail.users.length] = {};
      }
    },
    deletePax(num) {
      this.customerDetail.users.splice(num, 1);
    },
    saveCustomerDetail(info) {
      this.customerDetail = info;
      this.checkCartPageShow = false; // 關掉第一頁
      this.confirmCartPageShow = true; // 換成第二頁
    },
    backToFirstPage() {
      this.checkCartPageShow = true;
      this.confirmCartPageShow = false;
    },
    checkCoupon(item) {
      const { checkCouponBtn } = this.$refs.confirmCart.$refs;
      checkCouponBtn.classList.add('disabled');
      checkCouponBtn.children[0].classList.remove('d-none');
      const CouponData = {
        data: {
          code: item,
        },
      };
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`, CouponData)
        .then((res) => {
          if (res.data.success) {
            const { data } = res;
            this.customAlert(data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
            data.data.final_total = Math.floor(this.cart.final_total);
            checkCouponBtn.classList.remove('disabled');
            checkCouponBtn.children[0].classList.add('d-none');
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
            checkCouponBtn.classList.remove('disabled');
            checkCouponBtn.children[0].classList.add('d-none');
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
          checkCouponBtn.classList.remove('disabled');
          checkCouponBtn.children[0].classList.add('d-none');
        });
    },
    addOrder() {
      const { addOrderBtn } = this.$refs.confirmCart.$refs;
      addOrderBtn.classList.add('disabled');
      addOrderBtn.children[0].classList.remove('d-none');
      this.customerDetail.user = { ...this.customerDetail.users[0] };
      const data = {
        data: this.customerDetail,
      };
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          if (res.data.success) {
            this.orderDetail.total = res.data.total;
            this.orderDetail.orderId = res.data.orderId;
            this.getCartInfo();
            addOrderBtn.classList.remove('disabled');
            addOrderBtn.children[0].classList.add('d-none');
            this.confirmCartPageShow = false;
            this.finishCartPageShow = true;
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
            addOrderBtn.classList.remove('disabled');
            addOrderBtn.children[0].classList.add('d-none');
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
          addOrderBtn.classList.remove('disabled');
          addOrderBtn.children[0].classList.add('d-none');
        });
    },
  },
  created() {
    this.getCartInfo();
  },
};
</script>
