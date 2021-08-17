<template>
  <div class="container py-8">
    <div class="bg-light rounded-3 p-sm-7 p-3">
      <div class="row g-sm-7 g-3">
        <div
          class="col-lg-6 cart-scroll-box position-relative d-lg-block d-flex mb-lg-0 mb-sm-3 mb-6"
          ref="scrollBtn"
        >
          <!--訂單內容-->
          <template v-for="(item, itemKey) in cart.carts" :key="item.id">
            <div
              v-for="(option, key) in item.options"
              :key="key"
              class="d-inline-block cart-scroll-box-item ms-lg-0"
              :class="{ 'ms-3': itemKey !== 0 || key !== 0 }"
            >
              <div class="px-3 py-4 mb-6 border border-primary rounded-1 position-relative">
                <div class="pb-3 mb-3 border-bottom border-gray">
                  <div class="row justify-content-between mb-sm-3 mb-2">
                    <div class="col-4">
                      <p class="h5 mb-2 d-sm-block d-none">
                        {{ option.start_date.split('-').join(' / ') }}
                      </p>
                      <img :src="item.product.imageUrl" :alt="item.title" class="cart-img" />
                    </div>
                    <div class="col-8 d-flex flex-column justify-content-between">
                      <p class="h5 mb-2 d-sm-none">
                        {{ option.start_date.split('-').join(' / ') }}
                      </p>
                      <div class="mb-sm-6 mb-3">
                        <p class="h3-sm mb-2">{{ item.product.title }}</p>
                        <p class="h4-sm h5">
                          {{ option.optionName }}
                          <span class="ms-2"> *{{ option.qtyDetail.adult }}</span>
                          <span v-if="item.product.lowestPriceUnit === '每人'" class="ms-1"
                            >大</span
                          >
                          <span
                            v-else-if="
                              item.product.category !== '包車服務' &&
                                item.product.lowestPriceUnit !== '每人'
                            "
                            class="ms-1"
                            >組</span
                          >
                          <span
                            v-else-if="
                              item.product.category === '包車服務' &&
                                item.product.lowestPriceUnit !== '每人'
                            "
                            class="ms-1"
                            >台</span
                          >
                          <span
                            v-if="
                              item.product.lowestPriceUnit === '每人' && option.qtyDetail.child > 0
                            "
                            class="ms-1"
                          >
                            {{ option.qtyDetail.child }} <span class="ms-1">小</span>
                          </span>
                        </p>
                      </div>
                      <p class="text-end">
                        NT
                        {{
                          addComma(
                            option.optionPrice * (option.qtyDetail.adult + option.qtyDetail.child),
                          )
                        }}
                      </p>
                    </div>
                  </div>
                  <template
                    v-for="(detail, key) in otherDetail"
                    :key="`${detail.product.title}-${key}`"
                  >
                    <div
                      v-if="
                        detail.product.title === item.product.title &&
                          detail.optionName === option.optionName &&
                          detail.start_date === option.start_date
                      "
                    >
                      <p class="mb-2" v-if="detail.product.transfer.time">
                        <i class="bi bi-check"></i>
                        <span class="ms-1">接送時間：</span>
                        <span class="ms-1">{{ detail.pickUpTime }}</span>
                      </p>
                      <p
                        class="mb-2"
                        v-if="
                          detail.product.transfer.place &&
                            detail.optionName.includes('火車') === false &&
                            detail.optionName.includes('高鐵') === false
                        "
                      >
                        <i class="bi bi-check"></i>
                        <span class="ms-1">接送地點：</span>
                        <span class="ms-1">{{ detail.pickUpPlace }}</span>
                      </p>
                      <a
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#rentCarScheduleNoteModal"
                        v-if="
                          detail.product.category === '包車服務' &&
                            detail.product.title.includes('包車')
                        "
                        class="text-secondary mb-2"
                      >
                        <i class="bi bi-check"></i>
                        <span class="ms-1">包車行程規劃</span>
                      </a>
                      <div
                        class="modal fade"
                        id="rentCarScheduleNoteModal"
                        tabindex="-1"
                        aria-labelledby="rentCarScheduleNoteModalLabel"
                        aria-hidden="true"
                        v-if="
                          detail.product.category === '包車服務' &&
                            detail.product.title.includes('包車')
                        "
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header bg-wave mb-3 position-relative">
                              <h3>
                                包車行程規劃：
                              </h3>
                              <div class="cable-car"></div>
                            </div>
                            <div class="modal-body p-6">
                              <p class="text-break">
                                {{ detail.schedule || '暫無規劃' }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#childInfoNoteModal"
                        v-if="detail.includeChild"
                        class="text-secondary mb-2"
                      >
                        <i class="bi bi-check"></i>
                        <span class="ms-1">含未滿 4 歲孩童</span>
                      </a>
                      <div
                        class="modal fade"
                        id="childInfoNoteModal"
                        tabindex="-1"
                        aria-labelledby="childInfoNoteModalLabel"
                        aria-hidden="true"
                        v-if="detail.includeChild"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header bg-wave mb-3 position-relative">
                              <h3>
                                未滿 4 歲孩童：
                              </h3>
                              <div class="cable-car"></div>
                            </div>
                            <div class="modal-body p-6 text-center">
                              <p class="mb-3">
                                <span class="h3">{{ detail.childBd }}</span>
                                <span class="ms-2 h5">出生</span>
                              </p>
                              <p class="mb-3">
                                <span class="h3">{{ detail.childHeight }}</span>
                                <span class="ms-2 h5">公分</span>
                                <span class="ms-2">/</span>
                                <span class="h3 ms-2">{{ detail.childWeight }}</span>
                                <span class="ms-2 h5">公斤</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p
                        class="mb-2"
                        v-if="detail.product.translate.eng || detail.product.translate.jpy"
                      >
                        導覽語言：
                        <span class="ms-1">{{ detail.translateLanguage }}</span>
                      </p>
                    </div>
                  </template>
                  <p
                    class="mb-2"
                    v-if="
                      otherDetail.length === 0 ||
                        otherDetail
                          .map((detail) => detail.product.title)
                          .includes(item.product.title) === false ||
                        otherDetail
                          .map((detail) => detail.optionName)
                          .includes(option.optionName) === false
                    "
                  >
                    此商品無備註項目
                  </p>
                </div>
                <div class="d-sm-flex align-items-center">
                  <p class="w-sm-25 mb-sm-0 mb-2">
                    <span v-if="item.product.lowestPriceUnit === '每人'">旅客：</span>
                    <span v-else>主要聯繫人：</span>
                  </p>
                  <div
                    class="d-flex flex-wrap btn-group"
                    role="group"
                    aria-label="Basic checkbox toggle button group"
                  >
                    <div
                      class="btn btn-secondary rounded-2 ms-sm-2 me-sm-0 me-2"
                      v-for="user in option.users"
                      :key="user"
                    >
                      {{ customerDetail.users[user].name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <!-- 電腦版提示可往下滑的圖案 -->
          <div
            class="scroll-btn d-lg-inline d-none"
            ref="scrollTooltipDownCfm"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="請向下滾動"
            v-if="scrollBtnShow"
          >
            <i class="bi bi-arrow-down-short"></i>
          </div>
        </div>
        <div class="col-lg-6">
          <!--客戶資料-->
          <div class="tab-content mb-6">
            <div
              v-for="(item, key) in customerDetail.users"
              :key="key"
              class="tab-pane fade"
              :class="{ show: key === 0, active: key === 0 }"
              :id="`pills-pax-${key}`"
              role="tabpanel"
              :aria-labelledby="`pills-tab-${key}`"
            >
              <div class="d-flex justify-content-between">
                <p class="mb-6 h3">
                  第 {{ key + 1 }} 位旅客
                  <span class="h4" v-if="key === 0"> / 主要聯絡人</span>
                </p>
                <p class="mb-3">
                  <span class="ms-1 h3">{{ item.name }}</span>
                  <span class="ms-3">{{ item.gender }}</span>
                </p>
              </div>
              <ul class="pb-6 mb-6 border-bottom border-gray">
                <li class="mb-3">
                  身分證：
                  <span class="ms-3">{{ item.idNum }}</span>
                </li>
                <li class="pb-6 mb-6 border-bottom border-gray">
                  護照號碼：
                  <span class="ms-3">{{ item.passportNum }}</span>
                </li>
                <template v-if="item.tel">
                  <li class="mb-3">
                    <i class="text-primary bi bi-telephone-fill"></i>
                    <span class="ms-3">{{ item.tel }}</span>
                  </li>
                  <li class="mb-3">
                    <i class="text-primary bi bi-envelope-fill"></i>
                    <span class="ms-3">{{ item.email }}</span>
                  </li>
                  <li>
                    <i class="text-primary bi bi-signpost-2-fill"></i>
                    <span class="ms-3">{{ item.address }}</span>
                  </li>
                </template>
                <li v-else>聯絡資料同主要聯絡人</li>
              </ul>
              <p class="mb-6">個人明細</p>
              <template v-for="option in item.products.product" :key="option.optionName">
                <div class="d-flex align-items-center pb-3 mb-3">
                  <p class="w-25 h5">
                    {{ option.date.split('-').join(' / ') }}
                  </p>
                  <div class="ms-3 w-75">
                    <p>
                      {{ option.productName }}
                    </p>
                    <p>{{ option.optionName }}</p>
                  </div>
                </div>
              </template>
            </div>
            <div
              class="tab-pane fade"
              id="pills-pax-note"
              role="tabpanel"
              aria-labelledby="pills-tab-note"
            >
              <div class="mb-6 pb-3 border-bottom border-gray">
                <p class="h3 mb-2">
                  其他特殊需求：
                </p>
                <p class="text-gray-dark">
                  此備註不在商品包含範圍，不保證提供，但我們仍將盡力替您達成特殊需求
                </p>
              </div>
              <p>
                {{ customerDetail.message }}
              </p>
            </div>
          </div>
          <ul
            class="nav nav-pills justify-content-center flex-wrap mb-8"
            id="cfm-cart-customer-pills-tab"
            role="tablist"
          >
            <li
              class="nav-item mb-1 position-relative"
              role="presentation"
              v-for="(user, key) in customerDetail.users"
              :key="`paxNum-${key}`"
              :class="{ 'ms-3': key !== 0 }"
            >
              <button
                type="button"
                class="nav-link nav-link-outline-primary rounded-1"
                :class="{ active: key === 0 }"
                :id="`pills-tab-${key}`"
                data-bs-toggle="pill"
                :data-bs-target="`#pills-pax-${key}`"
                role="tab"
                :aria-controls="`pills-pax-${key}`"
                aria-selected="false"
              >
                {{ key + 1 }}
              </button>
            </li>
            <li class="nav-item ms-3 position-relative" role="presentation">
              <button
                type="button"
                class="nav-link nav-link-outline-primary rounded-1"
                id="pills-tab-note"
                data-bs-toggle="pill"
                data-bs-target="#pills-pax-note"
                role="tab"
                aria-controls="pills-pax-note"
                aria-selected="false"
              >
                其他備註
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!--付款資料-->
      <Form :validation-schema="schema" @submit="addOrder">
        <div class="w-lg-50 mx-auto">
          <h2 class="h3 text-primary mb-6">付款資料</h2>
          <div class="row mb-7">
            <div class="mb-6">
              <label class="form-label mb-3">付款方式</label>
              <ErrorMessage name="payment" class="mb-3 d-block text-danger"></ErrorMessage>
              <div class="row g-sm-3 g-2">
                <div class="col-4">
                  <Field
                    type="radio"
                    id="paymentMethodCreditCard"
                    name="payment"
                    class="d-none"
                    value="刷卡"
                    v-model="paymentDetail.method"
                  >
                  </Field>
                  <label
                    for="paymentMethodCreditCard"
                    class="payment-box paymentGroup"
                    @click="addActive('paymentGroup', 0)"
                  >
                    <div class="mb-3">
                      <i class="bi bi-credit-card-2-back h2"></i>
                    </div>
                    刷卡
                  </label>
                </div>
                <div class="col-4">
                  <Field
                    type="radio"
                    id="paymentMethodATM"
                    name="payment"
                    class="d-none"
                    value="ATM 轉帳"
                    v-model="paymentDetail.method"
                  >
                  </Field>
                  <label
                    for="paymentMethodATM"
                    class="payment-box paymentGroup"
                    @click="addActive('paymentGroup', 1)"
                  >
                    <div class="mb-3">
                      <i class="bi bi-cash-coin h2"></i>
                    </div>
                    ATM
                  </label>
                </div>
                <div class="col-4">
                  <Field
                    type="radio"
                    id="paymentMethodCash"
                    name="payment"
                    class="d-none"
                    value="到貨付款"
                    v-model="paymentDetail.method"
                  >
                  </Field>
                  <label
                    for="paymentMethodCash"
                    class="payment-box paymentGroup"
                    @click="addActive('paymentGroup', 2)"
                  >
                    <div class="mb-3">
                      <i class="bi bi-shop h2"></i>
                    </div>
                    貨到付
                  </label>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label class="form-label mb-3">取件方式</label>
              <ErrorMessage name="send" class="mb-3 d-block text-danger"></ErrorMessage>
              <div class="row g-sm-3 g-2 justify-content-center">
                <div class="col-md-4 col-6">
                  <Field
                    type="radio"
                    id="sendByPost"
                    name="send"
                    class="d-none"
                    value="郵寄"
                    v-model="paymentDetail.sendMethod"
                  >
                  </Field>
                  <label
                    for="sendByPost"
                    class="payment-box sendGroup"
                    @click="addActive('sendGroup', 0)"
                  >
                    <div class="mb-3">
                      <i class="bi bi-mailbox h2"></i>
                    </div>
                    郵寄
                  </label>
                </div>
                <div class="col-md-4 col-6">
                  <Field
                    type="radio"
                    id="inStorePickup"
                    name="send"
                    class="d-none"
                    value="門市取貨"
                    v-model="paymentDetail.sendMethod"
                  >
                  </Field>
                  <label
                    for="inStorePickup"
                    class="payment-box sendGroup"
                    @click="addActive('sendGroup', 1)"
                  >
                    <div class="mb-3">
                      <i class="bi bi-shop h2"></i>
                    </div>
                    門市取貨
                  </label>
                </div>
              </div>
            </div>
            <div class="mb-6">
              <label for="taxIdInput" class="form-label mb-3">統一編號（選填）</label>
              <input
                type="text"
                id="taxIdInput"
                name="統一編號"
                class="form-control"
                v-model="paymentDetail.taxIdNum"
              />
            </div>
            <div>
              <label for="couponInput" class="form-label mb-3">優惠券（選填）</label>
              <div class="input-group mb-2">
                <input
                  type="text"
                  id="couponInput"
                  name="優惠券"
                  class="form-control"
                  v-model="paymentDetail.coupon"
                />
                <div
                  ref="checkCouponBtn"
                  class="input-group-text btn btn-primary"
                  @click="$emit('emit-check-coupon', paymentDetail.coupon)"
                >
                  <div
                    class="spinner-border spinner-border-sm text-light d-none me-1"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  套用優惠碼
                </div>
              </div>
              <p v-if="paymentDetail.coupon" class="ms-1 h5 text-primary">
                已套用優惠券 {{ paymentDetail.coupon }}
              </p>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column align-items-end">
          <h5 class="h3 mb-3">
            總金額
            <span class="h2 text-primary">NT {{ addComma(Math.floor(cart.final_total)) }}</span>
          </h5>
          <div class="d-flex">
            <button
              type="button"
              class="btn btn-outline-primary px-5 py-2 h3"
              @click="$emit('emit-pre-page')"
            >
              上一頁
            </button>
            <button
              type="submit"
              class="btn btn-primary px-5 py-2 ms-2
                        d-flex justify-content-center align-items-center"
              ref="addOrderBtn"
              :disabled="Object.keys(cart).length == 0 || cart.total == 0"
            >
              <div class="spinner-border spinner-border-sm text-light d-none me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="h3">結帳</p>
            </button>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import { Tooltip } from 'bootstrap';

export default {
  props: ['cartInfo', 'customer', 'otherInfo', 'payment', 'scrollBtnStatus'],
  emits: ['emit-check-coupon', 'emit-pre-page', 'emit-add-order'],
  data() {
    return {
      cart: {},
      customerDetail: {},
      otherDetail: [],
      paymentDetail: {},
      temp: {},
      scrollTooltipDownCfm: '',
      scrollBtnShow: true,
      schema: {
        payment: (value) => {
          if (value) {
            return true;
          }
          return '請選擇付款方式';
        },
        send: (value) => {
          if (value) {
            return true;
          }
          return '請選擇取件方式';
        },
      },
    };
  },
  methods: {
    addActive(groupName, target) {
      // 目標加上 active 其他相同群組的 active 刪掉
      document.querySelectorAll(`.${groupName}`).forEach((item, index) => {
        if (index !== target) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    },
    addOrder() {
      this.$emit('emit-add-order', this.paymentDetail, this.customerDetail.productsArr);
    },
    organizeUserProduct() {
      // 照產品分類分（該產品有哪些人買）
      const productsArr = [];
      this.cart.carts.forEach((product) => {
        product.options.forEach((option) => {
          const users = [];
          option.users.sort((x, y) => x - y); // 即使客人沒照旅客編號點選，也能照編號排列顯示出來
          option.users.forEach((user) => {
            users.push(this.customerDetail.users[user].name);
          });
          productsArr.push({
            productName: product.product.title,
            optionName: option.optionName,
            date: option.start_date,
            productImg: product.product.imageUrl,
            users,
          });
        });
      });
      // 照客人姓名分（同一人買了什麼）
      const usersArr = [];
      this.customerDetail.users.forEach((user, userKey) => {
        const product = [];
        productsArr.sort((x, y) => new Date(x.date) - new Date(y.date));
        productsArr.forEach((item) => {
          if (item.users.includes(user.name)) {
            product.push(item);
          }
        });
        usersArr[userKey] = {
          userName: user.name,
          product,
        };
        this.customerDetail.users[userKey].products = usersArr[userKey];
        this.customerDetail.productsArr = productsArr;
      });
    },
  },
  watch: {
    cartInfo: {
      handler() {
        this.cart = { ...this.cartInfo }; // props 有變時更改資料
        this.cart.final_total = this.cartInfo.final_total;
      },
      deep: true,
    },
    customer() {
      this.customerDetail = { ...this.customer };
    },
    otherInfo() {
      this.otherDetail = [...this.otherInfo];
    },
    payment: {
      handler() {
        this.paymentDetail = { ...this.payment };
      },
      deep: true,
    },
    scrollBtnStatus: {
      handler() {
        this.scrollBtnShow = this.scrollBtnStatus;
      },
      deep: true,
    },
  },
  computed: {
    addComma() {
      return (price) => {
        const parts = price.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `${parts.join(',')}`;
      };
    },
  },
  created() {
    this.cart = { ...this.cartInfo };
    this.customerDetail = { ...this.customer };
    this.otherDetail = [...this.otherInfo];
    this.paymentDetail = { ...this.payment };
    this.scrollBtnShow = this.scrollBtnStatus;
    this.organizeUserProduct();
  },
  mounted() {
    if (this.scrollBtnShow) {
      this.scrollTooltipDownCfm = new Tooltip(this.$refs.scrollTooltipDownCfm);
    }
    this.listener = () => {
      const btn = this.$refs.scrollBtn;
      this.scrollBtnShow = btn.scrollTop < btn.scrollHeight - 600;
    };
    this.$refs.scrollBtn.addEventListener('scroll', this.listener);
  },
};
</script>
