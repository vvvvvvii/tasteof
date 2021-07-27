<template>
  <div class="pt-7 flex-fill">
    <div class="pt-5">
      <ul class="step-list d-flex justify-content-center">
        <li class="step-item" :class="{ 'bg-warning': checkCartPageShow }">
          <div class="step-icon">
            <i class="bi bi-flag-fill d-block" v-if="checkCartPageShow"></i>
          </div>
          <p class="step-text h3-md h4 text-center" :class="{ 'text-dark': checkCartPageShow }">
            查看
          </p>
        </li>
        <li class="step-item ms-md-5 ms-3" :class="{ 'bg-danger': confirmCartPageShow }">
          <div class="step-icon">
            <i class="bi bi-flag-fill d-block" v-if="confirmCartPageShow"></i>
          </div>
          <p class="step-text h3-md h4 text-center" :class="{ 'text-dark': confirmCartPageShow }">
            確認
          </p>
        </li>
        <li class="step-item ms-md-5 ms-3" :class="{ 'bg-success': finishCartPageShow }">
          <div class="step-icon">
            <i class="bi bi-flag-fill d-block" v-if="finishCartPageShow"></i>
          </div>
          <p class="step-text h3-md h4 text-center" :class="{ 'text-dark': finishCartPageShow }">
            完成
          </p>
        </li>
      </ul>
      <checkCart
        v-if="checkCartPageShow"
        ref="checkCart"
        :customer="customerDetail"
        :other-info="otherDetail"
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
  </div>
  <!--alert-->
  <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
</template>
<script>
import alert from '@/components/backend/Alert.vue';
import checkCart from '@/components/frontend/CheckCart.vue';
import confirmCart from '@/components/frontend/ConfirmCart.vue';
import finishCart from '@/components/frontend/FinishCart.vue';
import emitter from '../../assets/js/emitter';

export default {
  data() {
    return {
      customerDetail: {
        users: [{}],
        message: '無備註事項',
      },
      cart: {},
      paymentDetail: {
        method: '',
        taxIdNum: '',
        coupon: '',
      },
      otherDetail: [],
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
    getCartInfo(status) {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
            this.cart.total = 0;
            this.cart.carts.forEach((item, index) => {
              this.cart.carts[index].total = 0;
              item.options.forEach((i) => {
                this.cart.carts[index].total += i.total;
                this.cart.total += i.total;
              });
              if (Object.keys(item).includes('coupon') === false) {
                this.cart.carts[index].final_total = this.cart.carts[index].total;
                this.cart.final_total = this.cart.total;
              } else {
                this.cart.final_total = 0;
                this.cart.carts.forEach((i, key) => {
                  console.log(i);
                  this.cart.carts[key].final_total = (i.total * i.coupon.percent) / 100;
                  this.cart.final_total += this.cart.carts[key].final_total;
                });
                this.cart.final_total = Math.floor(this.cart.final_total);
                console.log(this.cart.carts);
              }
            });
            if (status) {
              // 若有傳入參數才進行這塊
              status.children[0].classList.add('d-none');
              status.children[1].classList.remove('d-none');
            }
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
            if (status) {
              // 若有傳入參數才進行這塊
              status.children[0].classList.add('d-none');
              status.children[1].classList.remove('d-none');
            }
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
          if (status) {
            // 若有傳入參數才進行這塊
            status.children[0].classList.add('d-none');
            status.children[1].classList.remove('d-none');
          }
        });
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    changeTktNum(tktType, calcType, option, key, id) {
      const adultStatus = this.$refs.checkCart.$refs[`adultStatus${option.optionName}`];
      const childStatus = this.$refs.checkCart.$refs[`childStatus${option.optionName}`];
      const qtyDetail = { ...option.qtyDetail };
      if (tktType === 'adult') {
        adultStatus.children[0].classList.remove('d-none');
        adultStatus.children[1].classList.add('d-none');
        if (calcType === 'plus') {
          qtyDetail.adult += 1;
        } else if (calcType === 'minus' && qtyDetail.adult >= 2) {
          qtyDetail.adult -= 1;
        }
      } else {
        childStatus.children[0].classList.remove('d-none');
        childStatus.children[1].classList.add('d-none');
        if (calcType === 'plus') {
          qtyDetail.child += 1;
        } else if (calcType === 'minus' && qtyDetail.child >= 1) {
          qtyDetail.child -= 1;
        }
      }
      let originQty = 0;
      let options = [];
      this.cart.carts.forEach((item) => {
        if (item.id === id) {
          originQty = item.qty;
          options = [...item.options];
        }
      });
      const dataOuter = {
        data: {
          product_id: id,
          qty: originQty + qtyDetail.adult + qtyDetail.child,
          options,
        },
      };
      dataOuter.data.options[key].qtyDetail = qtyDetail;
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`, dataOuter)
        .then((res) => {
          if (res.data.success) {
            if (tktType === 'adult') {
              this.getCartInfo(adultStatus);
            } else {
              this.getCartInfo(childStatus);
            }
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
            if (tktType === 'adult') {
              adultStatus.children[0].classList.add('d-none');
              adultStatus.children[1].classList.remove('d-none');
            } else {
              childStatus.children[0].classList.add('d-none');
              childStatus.children[1].classList.remove('d-none');
            }
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
          if (tktType === 'adult') {
            adultStatus.children[0].classList.add('d-none');
            adultStatus.children[1].classList.remove('d-none');
          } else {
            childStatus.children[0].classList.add('d-none');
            childStatus.children[1].classList.remove('d-none');
          }
        });
    },
    deleteProduct(option, key, id) {
      // 刪除相對應的方案 其他不動 > 用修改購物車的 api 去把該方案數字歸零並刪除
      const deleteCartProduct = this.$refs.checkCart.$refs[`deleteCartProduct${option.optionName}`];
      // 取得該筆 id 的所有資料
      const cartIds = this.cart.carts.map((product) => product.id);
      const repeatIndex = cartIds.indexOf(id);
      // 將該筆資料裡的 options 取出來 刪掉 key 那個號碼的資料
      this.cart.carts[repeatIndex].options.splice(key, 1);
      if (this.cart.carts[repeatIndex].options.length !== 0) {
        // 如果該產品還有其他方案 那用修改購物車 api 方式上傳
        const dataOuter = {
          data: { ...this.cart.carts[repeatIndex] },
        };
        const adultArr = dataOuter.data.options.map((item) => item.qtyDetail.adult);
        const childArr = dataOuter.data.options.map((item) => item.qtyDetail.child);
        dataOuter.data.qty = adultArr.reduce((x, y) => x + y) + childArr.reduce((x, y) => x + y);
        this.$http
          .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`, dataOuter)
          .then((res) => {
            if (res.data.success && res.data.message !== '更新購物車有誤') {
              this.customAlert('已清除商品');
              window.setTimeout(this.closeCustomAlert, 5000);
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
      } else {
        // 如果該產品已經沒有任何方案 那整個用 delete api 刪掉
        this.$http
          .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
          .then((res) => {
            if (res.data.success) {
              deleteCartProduct.children[0].classList.remove('d-none');
              deleteCartProduct.children[1].classList.add('d-none');
              this.customAlert('已清除商品');
              this.getCartInfo();
              window.setTimeout(this.closeCustomAlert, 5000);
              emitter.emit('update-cart'); // navbar 即時更新
            } else {
              this.customAlert(res.data.message);
              window.setTimeout(this.closeCustomAlert, 5000);
              emitter.emit('update-cart'); // navbar 即時更新
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
            window.setTimeout(this.closeCustomAlert, 5000);
          });
      }
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
      // 新增一個空物件讓新方案的內容可以放入
      this.customerDetail.users[this.customerDetail.users.length] = {};
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
          console.log(res);
          if (res.data.success) {
            const { data } = res;
            this.customAlert(data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
            this.getCartInfo();
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
          console.log(err);
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
          checkCouponBtn.classList.remove('disabled');
          checkCouponBtn.children[0].classList.add('d-none');
        });
    },
    addOrder(info) {
      this.paymentDetail = info;
      const { addOrderBtn } = this.$refs.confirmCart.$refs;
      addOrderBtn.classList.add('disabled');
      addOrderBtn.children[0].classList.remove('d-none');
      const data = {
        data: {
          user: {
            ...this.customerDetail.users[0],
            paymentDetail: {
              total: this.cart.total,
              final_total: this.cart.final_total,
              payment_method: this.paymentDetail.method,
              taxIdNum: this.paymentDetail.taxIdNum,
              coupon: this.paymentDetail.coupon,
            },
          },
          message: this.customerDetail.message,
        },
      };
      console.log(data.data);
      this.orderDetail.total = this.cart.final_total;
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          if (res.data.success) {
            this.orderDetail.orderId = res.data.orderId;
            this.getCartInfo();
            addOrderBtn.classList.remove('disabled');
            addOrderBtn.children[0].classList.add('d-none');
            this.confirmCartPageShow = false;
            this.finishCartPageShow = true;
            emitter.emit('update-cart');
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
            addOrderBtn.classList.remove('disabled');
            addOrderBtn.children[0].classList.add('d-none');
            emitter.emit('update-cart');
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
