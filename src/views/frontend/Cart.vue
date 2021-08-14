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
      <CheckCart
        v-if="checkCartPageShow"
        ref="checkCart"
        :customer="customerDetail"
        :other-info="otherDetail"
        :cart-info="cart"
        :scroll-btn-status="scrollBtnShow"
        :contact-info-input-status="contactInfoInputShow"
        :product-max-pax="productMaxPaxQty"
        :total-products-max-pax="totalProductsMaxPaxQty"
        @emit-change-tkt-num="changeTktNum"
        @emit-delete-tab="deleteTab"
        @emit-delete-product="deleteProduct"
        @emit-delete-all-products="deleteAllProducts"
        @emit-next-page="saveCustomerDetail"
        @emit-alert="customAlert"
      ></CheckCart>
      <ConfirmCart
        v-if="confirmCartPageShow"
        ref="confirmCart"
        :customer="customerDetail"
        :cart-info="cart"
        :other-info="otherDetail"
        :payment="paymentDetail"
        :scroll-btn-status="scrollBtnShow"
        @emit-check-coupon="checkCoupon"
        @emit-pre-page="backToFirstPage"
        @emit-add-order="addOrder"
      ></ConfirmCart>
      <FinishCart
        v-if="finishCartPageShow"
        :order-detail="orderDetail"
        @emit-alert="customAlert"
      ></FinishCart>
    </div>
  </div>
  <!--alert-->
  <Alert v-if="showAlert" :alert-msg="alertMsg"></Alert>
</template>
<script>
import Alert from '@/components/backend/Alert.vue';
import CheckCart from '@/components/frontend/CheckCart.vue';
import ConfirmCart from '@/components/frontend/ConfirmCart.vue';
import FinishCart from '@/components/frontend/FinishCart.vue';
import emitter from '../../assets/js/emitter';

export default {
  data() {
    return {
      customerDetail: {
        users: [],
        message: '無備註事項',
      },
      cart: {},
      paymentDetail: {
        method: '',
        sendMethod: '',
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
      contactInfoInputShow: [false],
      productMaxPaxQty: 0,
      totalProductsMaxPaxQty: 0,
      scrollBtnShow: true,
    };
  },
  components: {
    Alert,
    CheckCart,
    ConfirmCart,
    FinishCart,
  },
  methods: {
    getCartInfo(status) {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
            const couponCheck = [];
            const paxQtyArr = [];
            this.cart.carts.forEach((product, key) => {
              if (Object.keys(product).includes('coupon')) {
                // 有加入優惠券時，會以商品為一項（即使很多方案），顯示 true
                couponCheck.push(true); // 如果購物車裡曾有任何一個商品加過優惠碼，顯示 true
              } else {
                couponCheck.push(false);
              }
              this.cart.carts[key].options.forEach((option, optionKey) => {
                // 在每個商品新增對應客人陣列
                this.cart.carts[key].options[optionKey].users = [];
                // 把各項商品方案的總人數抽出來，找到最高值，this.customerDetail.users 要包進 productMaxPaxQty 長度的空物件
                paxQtyArr.push(option.optionQty);
              });
            });
            [this.productMaxPaxQty] = paxQtyArr.flat().sort((x, y) => y - x);
            // 把各項商品方案的總人數抽出來相加，代表如果每個方案的人都不一樣，最多可以有這麼多不同的旅客資料
            this.totalProductsMaxPaxQty = paxQtyArr.flat().reduce((x, y) => x + y, 0);
            const difference = this.customerDetail.users.length - this.productMaxPaxQty;
            if (difference < 0) {
              for (let i = this.customerDetail.users.length; i < this.productMaxPaxQty; i += 1) {
                this.customerDetail.users.push({});
              }
            } else {
              for (let i = this.productMaxPaxQty; i < this.customerDetail.users.length; i += 1) {
                this.deleteTab(this.customerDetail.users.length - 1);
                this.customerDetail.users.pop();
              }
            }
            if (couponCheck.every((e) => e === false)) {
              // 加商品，尚未加優惠碼
              // couponCheck 每個都是 false ，計算購物車正確價錢
              this.cart.total = 0; // 整個購物車的總數歸零
              this.cart.carts.forEach((product, key) => {
                this.cart.carts[key].total = 0; // 各項商品的總數也歸零
                product.options.forEach((option) => {
                  this.cart.carts[key].total += option.total; // 各項商品真正的價格為各項方案價格相加
                  this.cart.total += option.total; // 整個購物車真正的價格為各項產品的各方案價格相加
                });
                // 各項商品的 final_total 等於 total、整個購物車的 final_total 等於 total
                this.cart.carts[key].final_total = this.cart.carts[key].total;
                this.cart.final_total = this.cart.total;
              });
            } else if (couponCheck.every((e) => e === true)) {
              // 加商品，已經加優惠碼
              // couponCheck 每個都是 true ，計算購物車正確價錢、該價錢乘以 coupon.percent / 100 等於優惠後的價錢
              const { coupon } = this.cart.carts.find((product) => product.coupon); // 找到已被加過的優惠碼物件
              this.paymentDetail.coupon = coupon.code;
              this.cart.total = 0; // 整個購物車的總數歸零
              this.cart.final_total = 0; // 整個購物車 final_total 歸零
              this.cart.carts.forEach((product, key) => {
                this.cart.carts[key].total = 0; // 各項商品的總數也歸零
                product.options.forEach((option) => {
                  this.cart.carts[key].total += option.total; // 各項商品真正的價格為各項方案價格相加
                  this.cart.total += option.total; // 整個購物車真正的價格為各項產品的各方案價格相加
                });
                // 各項商品的 final_total 等於 total 乘以優惠幅度、整個購物車的 final_total 等於 total 乘以優惠幅度後相加
                this.cart.carts[key].final_total = (product.total * product.coupon.percent) / 100;
                this.cart.final_total += this.cart.carts[key].final_total;
              });
              this.cart.final_total = Math.floor(this.cart.final_total); // 去掉小數點
            } else {
              // 加商品，已經加優惠碼，又再加新商品（新商品會沒有加到優惠）
              // couponCheck 有 true 也有 false ，找到有加過優惠的那個 coupon 物件，把每個產品都加上該物件，計算購物車正確價錢
              const { coupon } = this.cart.carts.find((product) => product.coupon); // 找到已被加過的優惠碼物件
              this.paymentDetail.coupon = coupon.code;
              this.cart.total = 0; // 整個購物車的總數歸零
              this.cart.final_total = 0; // 整個購物車 final_total 歸零
              this.cart.carts.forEach((product, key) => {
                this.cart.carts[key].coupon = coupon; // 每個產品都加上該優惠碼物件
                this.cart.carts[key].total = 0; // 各項商品的總數也歸零
                product.options.forEach((option) => {
                  this.cart.carts[key].total += option.total; // 各項商品真正的價格為各項方案價格相加
                  this.cart.total += option.total; // 整個購物車真正的價格為各項產品的各方案價格相加
                });
                // 各項商品的 final_total 等於 total 乘以優惠幅度、整個購物車的 final_total 等於 total 乘以優惠幅度後相加
                this.cart.carts[key].final_total = (product.total * product.coupon.percent) / 100;
                this.cart.final_total += this.cart.carts[key].final_total;
              });
              this.cart.final_total = Math.floor(this.cart.final_total); // 去掉小數點
            }
            const totalOptionNum = this.cart.carts.map((i) => i.options).flat().length;
            if (totalOptionNum <= 1) {
              // 如果總商品、方案數小於一，不秀出 this.scrollBtnShow
              this.scrollBtnShow = false;
            }
            if (status) {
              // 若有傳入參數才進行這塊
              status.children[0].classList.add('d-none');
              status.children[1].classList.remove('d-none');
            }
          } else {
            this.customAlert(res.data.message);
            if (status) {
              // 若有傳入參數才進行這塊
              status.children[0].classList.add('d-none');
              status.children[1].classList.remove('d-none');
            }
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          if (status) {
            // 若有傳入參數才進行這塊
            status.children[0].classList.add('d-none');
            status.children[1].classList.remove('d-none');
          }
        });
    },
    deleteTab(key) {
      // 如果使用者在要刪掉的客人 tab 頁面，刪掉時會自動往前跳到前一個客人 tab
      if (Array.from(document.querySelector(`#pills-tab-${key}`).classList).includes('active')) {
        document.querySelector(`#pills-tab-${key}`).classList.remove('active');
        document.querySelector(`#pills-pax-${key}`).classList.remove('active');
        document.querySelector(`#pills-pax-${key}`).classList.remove('show');
        document.querySelector(`#pills-tab-${key - 1}`).classList.add('active');
        document.querySelector(`#pills-pax-${key - 1}`).classList.add('active');
        document.querySelector(`#pills-pax-${key - 1}`).classList.add('show');
      }
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
      window.setTimeout(this.closeCustomAlert, 5000);
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    changeTktNum(tktType, calcType, option, key, id) {
      const adultStatus = this.$refs.checkCart.$refs[
        `adultStatus${option.optionName}-${option.start_date}`
      ];
      const childStatus = this.$refs.checkCart.$refs[
        `childStatus${option.optionName}-${option.start_date}`
      ];
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
      let options = [];
      this.cart.carts.forEach((item) => {
        if (item.id === id) {
          options = [...item.options];
        }
      });
      const dataOuter = {
        data: {
          product_id: id,
          qty: qtyDetail.adult + qtyDetail.child,
          options,
        },
      };
      dataOuter.data.options[key].qtyDetail = qtyDetail;
      dataOuter.data.options[key].optionQty = qtyDetail.adult + qtyDetail.child;
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
              this.getCartInfo();
            } else {
              this.customAlert(res.data.message);
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
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
              emitter.emit('update-cart'); // navbar 即時更新
            } else {
              this.customAlert(res.data.message);
              emitter.emit('update-cart'); // navbar 即時更新
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
          });
      }
    },
    deleteAllProducts() {
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
            window.setTimeout(this.backToHomePage, 4000);
            emitter.emit('update-cart');
          } else {
            this.customAlert(res.data.message);
            deleteOrderBtn.classList.remove('disabled');
            deleteOrderBtn.children[0].classList.add('d-none');
            emitter.emit('update-cart');
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          deleteOrderBtn.classList.remove('disabled');
          deleteOrderBtn.children[0].classList.add('d-none');
        });
    },
    saveCustomerDetail(info, remark, contactInfoInputStatus) {
      this.customerDetail = info;
      this.otherDetail = remark;
      this.contactInfoInputShow = contactInfoInputStatus;
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
            this.getCartInfo();
            checkCouponBtn.classList.remove('disabled');
            checkCouponBtn.children[0].classList.add('d-none');
          } else {
            this.customAlert(res.data.message);
            checkCouponBtn.classList.remove('disabled');
            checkCouponBtn.children[0].classList.add('d-none');
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
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
              send_method: this.paymentDetail.sendMethod,
              taxIdNum: this.paymentDetail.taxIdNum,
              coupon: this.paymentDetail.coupon,
            },
          },
          message: this.customerDetail.message,
        },
      };
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
            addOrderBtn.classList.remove('disabled');
            addOrderBtn.children[0].classList.add('d-none');
            emitter.emit('update-cart');
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
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
