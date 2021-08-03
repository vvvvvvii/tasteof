<template>
  <div class="container py-8 position-relative">
    <div class="bg-light rounded-3 p-7">
      <div v-show="cart.total > 0">
        <div class="d-flex justify-content-between mb-6">
          <h2 class="h3 text-primary">訂單內容</h2>
          <button
            type="button"
            class="btn btn-outline-primary d-flex justify-content-center align-items-center
            px-sm-3 py-sm-2 opacity-25"
            @click="$emit('emit-delete-all-products')"
            ref="deleteOrderBtn"
            :disabled="Object.keys(cart).length == 0 || cart.total == 0"
          >
            <div class="spinner-border spinner-border-sm text-light d-none me-1" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="h4-md h5">清空購物車</p>
          </button>
        </div>
        <div class="row mb-7">
          <template v-for="item in cart.carts" :key="item.id">
            <div v-for="(option, key) in item.options" :key="key" class="col-lg-6">
              <div class="px-3 py-4 mb-2 border border-primary rounded-1 position-relative">
                <div
                  class="row justify-content-between pb-3 mb-2
                border-bottom border-gray"
                >
                  <div class="col-4">
                    <p class="mb-2">{{ option.start_date }}</p>
                    <img :src="item.product.imageUrl" :alt="item.title" class="cart-img" />
                  </div>
                  <div class="col-8 d-flex flex-column justify-content-between">
                    <div>
                      <p class="h3-sm">{{ item.product.title }}</p>
                      <p class="h4-sm h5 mb-3">{{ option.optionName }}</p>
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
                <div class="d-flex justify-content-evenly">
                  <div class="d-flex align-items-center h4-sm h5" v-if="option.qtyDetail">
                    <button
                      type="button"
                      class="border-0 bg-transparent p-2"
                      @click="$emit('emit-change-tkt-num', 'adult', 'minus', option, key, item.id)"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <div class="p-1" :ref="`adultStatus${option.optionName}`">
                      <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <p>{{ option.qtyDetail.adult }}</p>
                    </div>
                    <button
                      type="button"
                      class="border-0 bg-transparent p-2"
                      @click="$emit('emit-change-tkt-num', 'adult', 'plus', option, key, item.id)"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
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
                    <button
                      type="button"
                      class="border-0 bg-transparent p-2"
                      @click="$emit('emit-change-tkt-num', 'child', 'minus', option, key, item.id)"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <div class="p-1" :ref="`childStatus${option.optionName}`">
                      <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <p>{{ option.qtyDetail.child }}</p>
                    </div>
                    <button
                      type="button"
                      class="border-0 bg-transparent p-2"
                      @click="$emit('emit-change-tkt-num', 'child', 'plus', option, key, item.id)"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                    小
                  </div>
                  <a
                    type="button"
                    class="delete-cart-icon"
                    :ref="`deleteCartProduct${option.optionName}`"
                  >
                    <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <i
                      class="bi bi-trash-fill"
                      @click="$emit('emit-delete-product', option, key, item.id)"
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          </template>
        </div>
        <h2 class="h3 text-primary mb-6">客戶資料</h2>
        <div class="row">
          <div class="col-md-4 mb-md-0 mb-6">
            <div
              class="list-group rounded-md-2 rounded-0 flex-md-column flex-row flex-wrap"
              role="tablist"
            >
              <a
                class="list-group-item list-group-item-action
                px-3 py-2 w-md-100 w-50 border-0 border-bottom
                  d-flex flex-md-row flex-column justify-content-md-between align-items-center"
                :class="{ active: key === 0 }"
                data-bs-toggle="list"
                :href="`#listPax${key + 1}`"
                role="tab"
                v-for="(item, key) in customerDetail.users"
                :key="key"
              >
                <span class="mb-md-0 mb-3">{{ `旅客 ${key + 1}` }}</span>
                <span>
                  <button
                    type="button"
                    ref="addPaxTooltip"
                    class="btn btn-outline-light rounded-circle px-1 py-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    :title="`新增第 ${key + 2} 位旅客`"
                    @click="$emit('emit-add-pax')"
                  >
                    <i class="bi bi-person-plus"></i>
                  </button>
                  <button
                    type="button"
                    ref="deletePaxTooltip"
                    class="btn btn-outline-light rounded-circle ms-2 px-1 py-0"
                    :disabled="key === 0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    :title="`刪除第 ${key + 1} 位旅客`"
                    @click="$emit('emit-delete-pax', key)"
                  >
                    <i class="bi bi-person-x"></i>
                  </button>
                </span>
              </a>
              <a
                class="list-group-item list-group-item-action px-3 py-2
                w-md-100 w-50 border-0 border-bottom"
                data-bs-toggle="list"
                href="#requestNote"
                role="tab"
              >
                特殊需求備註
              </a>
            </div>
          </div>
          <div class="col-md-8">
            <Form v-slot="{ errors }" @submit="toNextPage">
              <div class="tab-content mb-7">
                <template v-for="(item, key) in customerDetail.users" :key="key">
                  <div
                    class="tab-pane"
                    :class="{ active: key === 0 }"
                    :id="`listPax${key + 1}`"
                    role="tabpanel"
                  >
                    <div class="row" :class="{ 'mb-6': key !== customerDetail.users.length - 1 }">
                      <div class="col-6 mb-3">
                        <label :for="`bookNameCartInput-${key}`" class="form-label">姓名</label>
                        <Field
                          type="text"
                          :id="`bookNameCartInput-${key}`"
                          :name="`第 ${key + 1} 位姓名`"
                          class="form-control"
                          :class="{ 'is-invalid': errors[`第 ${key + 1} 位姓名`] }"
                          rules="required"
                          v-model="customerDetail.users[key].name"
                        ></Field>
                        <ErrorMessage
                          :name="`第 ${key + 1} 位姓名`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="col-6 mb-3">
                        <label :for="`bookGenderCartInput-${key}`" class="form-label">稱謂</label>
                        <Field
                          :name="`第 ${key + 1} 位稱謂`"
                          class="form-select"
                          :id="`bookGenderCartInput-${key}`"
                          :class="{ 'is-invalid': errors[`第 ${key + 1} 位稱謂`] }"
                          rules="required"
                          v-model="customerDetail.users[key].gender"
                          as="select"
                        >
                          <option disabled value="">請選擇稱謂</option>
                          <option selected value="先生">先生</option>
                          <option value="女士">女士</option>
                        </Field>
                        <ErrorMessage
                          :name="`第 ${key + 1} 位稱謂`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="col-6 mb-3">
                        <label :for="`bookIdNumCartInput-${key}`" class="form-label"
                          >身分證字號</label
                        >
                        <Field
                          type="text"
                          :name="`第 ${key + 1} 位身分證`"
                          class="form-control"
                          :id="`bookIdNumCartInput-${key}`"
                          :class="{ 'is-invalid': errors[`第 ${key + 1} 位身分證`] }"
                          :rules="isIdNum"
                          v-model="customerDetail.users[key].idNum"
                        ></Field>
                        <ErrorMessage
                          :name="`第 ${key + 1} 位身分證`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="col-6 mb-3">
                        <label :for="`bookPassportNumCartInput-${key}`" class="form-label">
                          護照號碼
                        </label>
                        <Field
                          type="text"
                          :name="`第 ${key + 1} 位護照號碼`"
                          class="form-control"
                          :id="`bookPassportNumCartInput-${key}`"
                          :class="{ 'is-invalid': errors[`第 ${key + 1} 位護照號碼`] }"
                          rules="length:9|numeric"
                          v-model="customerDetail.users[key].passportNum"
                        ></Field>
                        <ErrorMessage
                          :name="`第 ${key + 1} 位護照號碼`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="col-lg-6 mb-3">
                        <label :for="`bookTelCartInput-${key}`" class="form-label">聯繫電話</label>
                        <Field
                          type="tel"
                          :name="`第 ${key + 1} 位電話`"
                          class="form-control"
                          :id="`bookTelCartInput-${key}`"
                          :class="{ 'is-invalid': errors[`第 ${key + 1} 位電話`] }"
                          rules="required|numeric|max:10"
                          v-model="customerDetail.users[key].tel"
                        ></Field>
                        <ErrorMessage
                          :name="`第 ${key + 1} 位電話`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="col-lg-6 mb-3">
                        <label :for="`bookEmailCartInput-${key}`" class="form-label">
                          電子信箱
                        </label>
                        <Field
                          type="email"
                          :name="`第 ${key + 1} 位 email`"
                          class="form-control"
                          :id="`bookEmailCartInput-${key}`"
                          placeholder="customer@example.com"
                          :class="{ 'is-invalid': errors[`第 ${key + 1} 位 email`] }"
                          rules="email|required"
                          v-model="customerDetail.users[key].email"
                        ></Field>
                        <ErrorMessage
                          :name="`第 ${key + 1} 位 email`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="mb-3">
                        <label :for="`bookAddrCartInput-${key}`" class="form-label">地址</label>
                        <Field
                          type="text"
                          :name="`第 ${key + 1} 位地址`"
                          class="form-control"
                          :id="`bookAddrCartInput-${key}`"
                          :class="{ 'is-invalid': errors[`第 ${key + 1} 位地址`] }"
                          rules="required"
                          v-model="customerDetail.users[key].address"
                        ></Field>
                        <ErrorMessage
                          :name="`第 ${key + 1} 位地址`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                    </div>
                  </div>
                </template>
                <div class="tab-pane fade" id="requestNote" role="tabpanel">
                  <div v-for="(detail, key) in otherDetail" :key="key">
                    <div class="mb-6 pb-6 border-bottom border-gray w-lg-75 mx-auto">
                      <div class="mb-3">
                        <h4 class="h3 mb-1">{{ detail.product.title }}</h4>
                        <h4>{{ detail.optionName }}</h4>
                      </div>
                      <div class="mb-3" v-if="detail.product.transfer.time">
                        <label :for="`pickupTime-${key}`" class="form-label">接送時間</label>
                        <Field
                          type="text"
                          :id="`pickupTime-${key}`"
                          :name="`${detail.product.title}：${detail.optionName} 的接送時間`"
                          class="form-control"
                          :class="{
                            'is-invalid':
                              errors[`${detail.product.title}：${detail.optionName} 的接送時間`],
                          }"
                          rules="required"
                          v-model="otherDetail[key].pickUpTime"
                        >
                        </Field>
                        <ErrorMessage
                          :name="`${detail.product.title}：${detail.optionName} 的接送時間`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div
                        class="mb-3"
                        v-if="
                          detail.product.transfer.place &&
                            detail.optionName.includes('火車' || '高鐵') === false
                        "
                      >
                        <label :for="`pickupPlace-${key}`" class="form-label">接送地點</label>
                        <Field
                          type="text"
                          :id="`pickupPlace-${key}`"
                          :name="`${detail.product.title}：${detail.optionName} 的接送地點`"
                          class="form-control"
                          :class="{
                            'is-invalid':
                              errors[`${detail.product.title}：${detail.optionName} 的接送地點`],
                          }"
                          rules="required"
                          v-model="otherDetail[key].pickUpPlace"
                        >
                        </Field>
                        <ErrorMessage
                          :name="`${detail.product.title}：${detail.optionName} 的接送地點`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div
                        class="mb-3"
                        v-if="
                          detail.product.category === '包車服務' &&
                            detail.product.title.includes('包車')
                        "
                      >
                        <label :for="`rentCarSchedule-${key}`" class="form-label"
                          >包車行程規劃</label
                        >
                        <textarea
                          class="form-control"
                          :id="`rentCarSchedule-${key}`"
                          rows="6"
                          v-model="otherDetail[key].schedule"
                          placeholder="歡迎提供您對包車行程的初步規劃，我們的司機將與您討論並協助行程安排"
                        ></textarea>
                      </div>
                      <div class="mb-3" v-if="detail.product.transfer.childRestrict">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            :id="`rentCarChildInclude-${key}`"
                            v-model="otherDetail[key].includeChild"
                          />
                          <label class="form-check-label" :for="`rentCarChildInclude-${key}`">
                            旅客中有未滿 4 歲孩童
                          </label>
                        </div>
                      </div>
                      <div class="row" v-if="otherDetail[key].includeChild">
                        <div class="col-lg-4 mb-3">
                          <label :for="`rentCarChildBd-${key}`" class="form-label"
                            >孩童出生年月日</label
                          >
                          <Field
                            type="text"
                            :id="`rentCarChildBd-${key}`"
                            :name="`${detail.product.title}：${detail.optionName} 的出生日期`"
                            class="form-control"
                            :class="{
                              'is-invalid':
                                errors[`${detail.product.title}：${detail.optionName} 的出生日期`],
                            }"
                            rules="required"
                            placeholder="1900 / 01 / 01"
                            v-model="otherDetail[key].childBd"
                          ></Field>
                          <ErrorMessage
                            :name="`${detail.product.title}：${detail.optionName} 的出生日期`"
                            class="invalid-feedback"
                          ></ErrorMessage>
                        </div>
                        <div class="col-lg-4 col-6 mb-3">
                          <label :for="`rentCarChildHeight-${key}`" class="form-label"
                            >孩童身高</label
                          >
                          <Field
                            type="text"
                            :id="`rentCarChildHeight-${key}`"
                            :name="`${detail.product.title}：${detail.optionName} 的孩童身高`"
                            class="form-control"
                            :class="{
                              'is-invalid':
                                errors[`${detail.product.title}：${detail.optionName} 的孩童身高`],
                            }"
                            rules="required"
                            placeholder="公分"
                            v-model="otherDetail[key].childHeight"
                          ></Field>
                          <ErrorMessage
                            :name="`${detail.product.title}：${detail.optionName} 的孩童身高`"
                            class="invalid-feedback"
                          ></ErrorMessage>
                        </div>
                        <div class="col-lg-4 col-6 mb-3">
                          <label :for="`rentCarChildWeight-${key}`" class="form-label"
                            >孩童體重</label
                          >
                          <Field
                            type="text"
                            :id="`rentCarChildWeight-${key}`"
                            :name="`${detail.product.title}：${detail.optionName} 的孩童體重`"
                            class="form-control"
                            :class="{
                              'is-invalid':
                                errors[`${detail.product.title}：${detail.optionName} 的孩童體重`],
                            }"
                            rules="required"
                            placeholder="公斤"
                            v-model="otherDetail[key].childWeight"
                          ></Field>
                          <ErrorMessage
                            :name="`${detail.product.title}：${detail.optionName} 的孩童體重`"
                            class="invalid-feedback"
                          ></ErrorMessage>
                        </div>
                      </div>
                      <div
                        class="mb-3"
                        v-if="detail.product.translate.eng || detail.product.translate.jpy"
                      >
                        <label for="translateLanguage" class="form-label">導覽語言</label>
                        <select
                          class="form-select"
                          id="translateLanguage"
                          v-model="otherDetail[key].translateLanguage"
                        >
                          <option value="中文" selected>中文</option>
                          <option value="英文" v-if="detail.product.translate.eng">英文</option>
                          <option value="日文" v-if="detail.product.translate.jpy">日文</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3 w-lg-75 mx-auto">
                    <label for="bookMessageCart" class="form-label"
                      >其他特殊需求（飲食、禁菸房...）</label
                    >
                    <textarea
                      class="form-control"
                      id="bookMessageCart"
                      rows="2"
                      v-model="customerDetail.message"
                      placeholder="此備註不在商品包含範圍，不保證提供，但我們仍將盡力替您達成特殊需求"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column align-items-end">
                <h5 class="h3 mb-3">
                  總金額
                  <span class="h2 text-primary"
                    >NT {{ addComma(Math.floor(cart.final_total)) }}</span
                  >
                </h5>
                <button
                  type="submit"
                  class="btn btn-primary d-block px-5 py-2"
                  :disabled="Object.keys(cart).length == 0 || cart.total == 0"
                >
                  <p class="h3">下一步</p>
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <!--無商品時顯示-->
      <div class="text-center" v-show="cart.total === 0">
        <p class="mb-4">
          購物車目前還沒有商品耶
          <i class="bi bi-eraser"></i>
        </p>
        <p class="mb-2">
          客倌要不要
          <router-link :to="`/product_list`" title="前往產品頁" class="text-secondary h3">
            來這裡挑挑看、選選看
          </router-link>
          呢？
        </p>
        <p>
          也可以
          <router-link :to="`/article_list`" title="前往文章頁" class="text-secondary h3">
            來這裡尋找玩樂靈感
          </router-link>
          唷！
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Tooltip } from 'bootstrap';

export default {
  props: ['cartInfo', 'customer', 'otherInfo'],
  emits: [
    'emit-delete-all-products',
    'emit-change-tkt-num',
    'emit-delete-product',
    'emit-add-pax',
    'emit-delete-pax',
    'emit-next-page',
  ],
  data() {
    return {
      cart: {},
      customerDetail: {},
      otherDetail: [],
      addPaxTooltip: '',
      deletePaxTooltip: '',
    };
  },

  methods: {
    isIdNum(value) {
      const idNum = /^[A-Z][0-9]{9}$/;
      return idNum.test(value) ? true : '請輸入正確的身分證字號';
    },
    toNextPage() {
      this.$emit('emit-next-page', this.customerDetail, this.otherDetail);
    },
  },
  watch: {
    cartInfo: {
      handler() {
        this.cart = { ...this.cartInfo }; // props 有變時更改資料
        this.cart.final_total = this.cartInfo.final_total;
        this.cart.carts.forEach((item) => {
          if (
            Object.values(item.product.transfer).includes(true)
            || Object.values(item.product.translate).includes(true)
          ) {
            if (this.otherDetail.map((i) => i.id).includes(item.id)) {
              // 確認有沒有方案名相同或時間相同的
              const otherDetailOptionName = this.otherDetail.map((i) => i.optionName);
              const otherDetailStartDate = this.otherDetail.map((i) => i.start_date);
              item.options.forEach((i) => {
                if (
                  otherDetailOptionName.includes(i.optionName) === false
                  && otherDetailStartDate.includes(i.start_date) === false
                ) {
                  this.otherDetail.push({
                    id: item.id,
                    product: { ...item.product },
                    optionName: i.optionName,
                    start_date: i.start_date,
                    pickUpTime: '',
                    pickUpPlace: '',
                    schedule: '',
                    includeChild: false,
                    childBd: '',
                    childHeight: '',
                    childWeight: '',
                    translateLanguage: '中文',
                  });
                }
              });
            } else {
              item.options.forEach((i) => {
                this.otherDetail.push({
                  id: item.id,
                  product: { ...item.product },
                  optionName: i.optionName,
                  start_date: i.start_date,
                  pickUpTime: '',
                  pickUpPlace: '',
                  schedule: '',
                  includeChild: false,
                  childBd: '',
                  childHeight: '',
                  childWeight: '',
                  translateLanguage: '中文',
                });
              });
            }
          }
        });
      },
      deep: true,
    },
    customer: {
      handler() {
        this.customerDetail = { ...this.customer };
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
  },
  mounted() {
    this.addPaxTooltip = new Tooltip(this.$refs.addPaxTooltip);
    this.deletePaxTooltip = new Tooltip(this.$refs.deletePaxTooltip);
  },
};
</script>
