<template>
  <div class="container py-8">
    <div class="bg-light rounded-3 p-7">
      <div class="row g-7">
        <div class="col-6 cart-scroll-box position-relative" ref="scrollBtn">
          <!--訂單內容-->
          <template v-for="item in cart.carts" :key="item.id">
            <div v-for="(option, key) in item.options" :key="key">
              <div class="px-3 py-4 mb-6 border border-primary rounded-1 position-relative">
                <div
                  class="row justify-content-between pb-3 mb-3
                border-bottom border-gray"
                >
                  <div class="col-4">
                    <img :src="item.product.imageUrl" :alt="item.title" class="cart-img" />
                  </div>
                  <div class="col-8 d-flex flex-column justify-content-between">
                    <div class="mb-6">
                      <p class="mb-2 h5">{{ option.start_date.split('-').join(' / ') }}</p>
                      <p class="h3-sm">{{ item.product.title }}</p>
                      <p class="h4-sm h5">{{ option.optionName }}</p>
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
                <!--<div class="d-flex justify-content-evenly mb-2">
                  <div class="d-flex align-items-center h4-sm h5" v-if="option.qtyDetail">
                    <p>{{ option.qtyDetail.adult }}</p>
                    <span v-if="item.product.lowestPriceUnit === '每人'">大</span>
                    <span
                      v-else-if="
                        item.product.category !== '包車服務' &&
                          item.product.lowestPriceUnit !== '每人'
                      "
                      >組</span
                    >
                    <span
                      v-else-if="
                        item.product.category === '包車服務' &&
                          item.product.lowestPriceUnit !== '每人'
                      "
                      >台</span
                    >
                  </div>
                  <div
                    class="d-flex align-items-center h4-sm h5"
                    v-if="option.qtyDetail && item.product.lowestPriceUnit === '每人'"
                  >
                    {{ option.qtyDetail.child }}
                    <span class="ms-1">小</span>
                  </div>
                </div>-->
                <div class="d-flex">
                  <p v-for="(user, userKey) in option.users" :key="user">
                    <span class="h3">{{ customerDetail.users[user].name }}</span>
                    <span class="ms-1">{{ customerDetail.users[user].gender }}</span>
                    <span v-if="userKey !== option.users.length - 1">、</span>
                  </p>
                  <div class="ms-3 d-flex align-items-center h4-sm h5">
                    <p>（</p>
                    <p v-if="option.qtyDetail">
                      {{ option.qtyDetail.adult }}
                      <span v-if="item.product.lowestPriceUnit === '每人'">大</span>
                      <span
                        v-else-if="
                          item.product.category !== '包車服務' &&
                            item.product.lowestPriceUnit !== '每人'
                        "
                        >組</span
                      >
                      <span
                        v-else-if="
                          item.product.category === '包車服務' &&
                            item.product.lowestPriceUnit !== '每人'
                        "
                        >台</span
                      >
                    </p>
                    <p
                      v-if="
                        option.qtyDetail &&
                          option.qtyDetail.child !== 0 &&
                          item.product.lowestPriceUnit === '每人'
                      "
                    >
                      {{ option.qtyDetail.child }}
                      <span class="ms-1">小</span>
                    </p>
                    <p>）</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <!-- 提示可往下滑的圖案 -->
          <div
            class="scroll-btn"
            ref="scrollTooltip"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="請向下滾動"
            v-if="scrollBtnShow"
          >
            <i class="bi bi-arrow-down-short"></i>
          </div>
        </div>
        <div class="col-6">
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
              </ul>
              <p
                v-for="option in item.products.product"
                :key="option.optionName"
                class="pb-6 mb-6 border-bottom border-gray"
              >
                <span>{{ option.date.split('-').join('/') }}</span>
                <span class="ms-3">{{ option.productName }}</span>
                <span class="ms-1">{{ option.optionName }}</span>
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="pills-pax-note"
              role="tabpanel"
              aria-labelledby="pills-tab-note"
            >
              <template v-for="(detail, key) in otherDetail" :key="key">
                <div class="mb-6 pb-6 border-bottom border-gray">
                  <div class="mb-3">
                    <h4 class="h3 mb-1">{{ detail.product.title }}</h4>
                    <h4>{{ detail.optionName }}</h4>
                  </div>
                  <p class="mb-3" v-if="detail.product.transfer.time">
                    接送時間：
                    <span class="ms-1">{{ detail.pickUpTime }}</span>
                  </p>
                  <p
                    class="mb-3"
                    v-if="
                      detail.product.transfer.place &&
                        detail.optionName.includes('火車' || '高鐵') === false
                    "
                  >
                    接送地點：
                    <span class="ms-1">{{ detail.pickUpPlace }}</span>
                  </p>
                  <p
                    class="mb-3"
                    v-if="
                      detail.product.category === '包車服務' &&
                        detail.product.title.includes('包車')
                    "
                  >
                    包車行程規劃：
                    <span class="ms-1">{{ detail.schedule }}</span>
                  </p>
                  <p class="mb-3" v-if="detail.product.transfer.childRestrict">
                    旅客中有未滿 4 歲孩童：
                    <span class="ms-1">{{ detail.childBd }}</span>
                    <span class="ms-1">{{ detail.childHeight }} 公分</span>
                    <span class="ms-1">{{ detail.childWeight }} 公斤</span>
                  </p>
                  <p
                    class="mb-3"
                    v-if="detail.product.translate.eng || detail.product.translate.jpy"
                  >
                    導覽語言：
                    <span class="ms-1">{{ detail.translateLanguage }}</span>
                  </p>
                  <p class="mb-3">
                    其他特殊需求：
                    <span v-if="customerDetail.message">
                      {{ customerDetail.message }}
                    </span>
                    <span v-else>無</span>
                  </p>
                  <p class="mb-3" v-if="customerDetail.message">
                    （此備註不在商品包含範圍，不保證提供，但我們仍將盡力替您達成特殊需求）
                  </p>
                </div>
              </template>
            </div>
          </div>
          <ul
            class="nav nav-pills justify-content-center flex-wrap mb-8"
            id="pills-tab"
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
                備註
              </button>
            </li>
          </ul>
        </div>
      </div>
      <!-- 舊的勿動
      <h2 class="h3 text-primary mb-6">訂單內容</h2>
      <div class="row mb-7 rounded-1">
        <template v-for="item in cart.carts" :key="item.id">
          <div v-for="(option, key) in item.options" :key="key" class="col-md-6">
            <div class="px-3 py-4 mb-2 border border-primary rounded-1 position-relative">
              <div
                class="d-flex justify-content-between pb-2 mb-2
                border-bottom border-gray"
              >
                <div>
                  <p class="mb-2">{{ option.start_date }}</p>
                  <img :src="item.product.imageUrl" :alt="item.title" class="cart-img" />
                </div>
                <div class="w-50">
                  <p class="h3">{{ item.product.title }}</p>
                  <p class="h4 mb-3">{{ option.optionName }}</p>
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
              <div class="d-flex justify-content-between">
                <div class="d-flex justify-content-evenly w-50">
                  <div class="d-flex align-items-center">
                    {{ option.qtyDetail.adult }}
                    <span v-if="item.product.lowestPriceUnit === '每人'" class="ms-1">大</span>
                    <span
                      v-else-if="
                        item.product.category !== '包車服務' &&
                          item.product.lowestPriceUnit !== '每人'
                      "
                      class="ms-1"
                    >
                      組
                    </span>
                    <span
                      v-else-if="
                        item.product.category === '包車服務' &&
                          item.product.lowestPriceUnit !== '每人'
                      "
                      class="ms-1"
                    >
                      台
                    </span>
                  </div>
                  <div
                    class="d-flex align-items-center"
                    v-if="item.product.lowestPriceUnit === '每人'"
                  >
                    {{ option.qtyDetail.child }}
                    <span class="ms-1">小</span>
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#productRemark"
                  @click="openModal(item, option)"
                >
                  查看備註
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>-->
      <!-- Remark Modal -->
      <!--<div
        class="modal fade"
        id="productRemark"
        tabindex="-1"
        aria-labelledby="productRemarkLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header bg-wave mb-3 position-relative">
              <h3 class="modal-title">商品備註</h3>
              <div class="cable-car"></div>
            </div>
            <div class="modal-body p-6">
              <ul>
                <li v-if="temp.pickUpTime">接送時間：{{ temp.pickUpTime }}</li>
                <li v-if="temp.pickUpPlace">接送地點：{{ temp.pickUpPlace }}</li>
                <li v-if="temp.schedule">包車行程規劃：{{ temp.schedule }}</li>
                <li v-if="temp.includeChild">
                  <p>含有 4 歲以下幼童</p>
                  <p>出生年月日：{{ temp.childBd }}</p>
                  <p>{{ temp.childHeight }} 公分 / {{ temp.childWeight }} 公斤</p>
                </li>
                <li v-if="temp.translateLanguage && temp.translateLanguage !== '中文'">
                  導覽翻譯：{{ temp.translateLanguage }}
                </li>
                <li>其他特殊需求（飲食、禁菸房...）：{{ temp.message }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>-->
      <!--<h2 class="h3 text-primary mb-6">客戶資料</h2>
      <div class="row mb-7">
        <div class="col-lg-6" v-for="(item, key) in customer.users" :key="key">
          <div class="position-relative p-md-6 p-3 bg-white">
            <div class="d-flex justify-content-between">
              <div class="w-50 d-flex flex-column justify-content-between">
                <p class="h3 mb-5">
                  {{ item.name }}
                  <span class="h4 ms-1">
                    {{ item.gender }}
                  </span>
                </p>
                <p class="pax-num d-sm-inline d-none">{{ `第${key + 1}位旅客` }}</p>
                <img
                  src="https://github.com/vvvvvvii/tasteof/blob/main/public/img/num.png?raw=true"
                  :alt="`第${key + 1}位旅客`"
                  class="pax-num-img d-sm-block d-none"
                />
              </div>
              <div class="w-50">
                <p class="mb-2">身分證字號： {{ item.idNum }}</p>
                <p class="mb-4">護照號碼： {{ item.passportNum }}</p>
                <p class="mb-2 d-sm-block d-none">{{ item.tel }}</p>
                <p class="mb-2 d-sm-block d-none">{{ item.email }}</p>
                <p class="mb-2 d-sm-block d-none">{{ item.address }}</p>
              </div>
            </div>
            <p class="mb-2 h5 d-sm-none">{{ item.tel }}</p>
            <p class="mb-2 h5 d-sm-none">{{ item.email }}</p>
            <p class="mb-2 h5 d-sm-none">{{ item.address }}</p>
          </div>
        </div>
      </div>-->
      <h2 class="h3 text-primary mb-6">付款資料</h2>
      <Form v-slot="{ errors }" @submit="addOrder">
        <div class="row mb-7">
          <div class="col-lg-4 col-md-6 mb-lg-0 mb-3">
            <label for="paymentMethodInput" class="form-label">付款方式</label>
            <Field
              name="付款方式"
              class="form-select"
              id="paymentMethodInput"
              :class="{ 'is-invalid': errors['付款方式'] }"
              rules="required"
              v-model="paymentDetail.method"
              as="select"
            >
              <option disabled value="">請選擇付款方式</option>
              <option selected value="線上刷卡">線上刷卡</option>
              <option value="匯款">匯款</option>
            </Field>
            <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="col-lg-4 col-md-6 mb-md-0 mb-3">
            <label for="taxIdInput" class="form-label">統一編號（選填）</label>
            <input
              type="text"
              id="taxIdInput"
              name="統一編號"
              class="form-control"
              v-model="paymentDetail.taxIdNum"
            />
          </div>
          <div class="col-lg-4 col-md-6">
            <label for="couponInput" class="form-label">優惠券（選填）</label>
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
                <div class="spinner-border spinner-border-sm text-light d-none me-1" role="status">
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
  props: ['cartInfo', 'customer', 'otherInfo', 'payment'],
  emits: ['emit-check-coupon', 'emit-pre-page', 'emit-add-order'],
  data() {
    return {
      cart: {},
      customerDetail: {},
      otherDetail: [],
      paymentDetail: {},
      temp: {},
      scrollTooltip: '',
      scrollBtnShow: true,
    };
  },
  methods: {
    addOrder() {
      this.$emit('emit-add-order', this.paymentDetail);
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
            users,
          });
        });
      });
      // 照客人姓名分（同一人買了什麼）
      const usersArr = [];
      this.customerDetail.users.forEach((user, userKey) => {
        const product = [];
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
    this.organizeUserProduct();
  },
  mounted() {
    this.scrollTooltip = new Tooltip(this.$refs.scrollTooltip);
    this.listener = () => {
      const btn = this.$refs.scrollBtn;
      this.scrollBtnShow = btn.scrollTop < btn.scrollHeight - 800;
    };
    this.$refs.scrollBtn.addEventListener('scroll', this.listener);
  },
};
</script>
