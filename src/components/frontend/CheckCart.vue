<template>
  <div class="container py-8 position-relative">
    <div class="bg-light rounded-3 p-sm-7 p-3">
      <div v-show="cart.total > 0" class="row g-sm-7 g-3">
        <div
          class="col-lg-6 cart-scroll-box position-relative d-lg-block d-flex mb-lg-0 mb-md-3 mb-6"
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
              <div
                class="px-3 py-4 mb-6 border border-primary rounded-1 position-relative"
                :class="{
                  'border-danger': productWarningShow[itemKey],
                }"
              >
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
                        <router-link
                          :to="`/product/${item.product.id}`"
                          title="查看更多"
                          class="text-secondary h3-sm mb-2"
                        >
                          {{ item.product.title }}
                        </router-link>
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
                  <div class="d-sm-flex align-items-center">
                    <p
                      class="w-sm-25 mb-sm-0 mb-2 text-secondary fw-bold"
                      :class="{
                        'text-danger': productWarningShow[itemKey],
                      }"
                    >
                      選擇旅客：
                    </p>
                    <div
                      class="d-flex flex-wrap btn-group"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <div
                        class="ms-sm-2 me-sm-0 me-2"
                        v-for="(user, userIndex) in customerDetail.users"
                        :key="user.name"
                      >
                        <input
                          type="checkbox"
                          :id="`${user.name}-${option.optionName}-${option.start_date}`"
                          autocomplete="off"
                          class="btn-check"
                          :disabled="
                            user.name === undefined ||
                              (item.options[key].users.length >= item.options[key].optionQty &&
                                item.options[key].users.includes(userIndex) === false)
                          "
                          :value="userIndex"
                          v-model="item.options[key].users"
                        />
                        <label
                          :for="`${user.name}-${option.optionName}-${option.start_date}`"
                          class="btn btn-outline-secondary rounded-2"
                          >{{ user.name || '待填' }}
                        </label>
                      </div>
                    </div>
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
                    <div class="p-1" :ref="`adultStatus${option.optionName}-${option.start_date}`">
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
                    <div class="p-1" :ref="`childStatus${option.optionName}-${option.start_date}`">
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
          <!-- 電腦版提示可往下滑的圖案 -->
          <div
            class="scroll-btn d-lg-inline d-none"
            ref="scrollTooltipDownCheck"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="請向下滾動"
            v-show="scrollBtnShow"
          >
            <i class="bi bi-arrow-down-short"></i>
          </div>
        </div>
        <div class="col-lg-6">
          <!--客戶資料-->
          <Form v-slot="{ errors }" @submit="toNextPage">
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
                  <div v-if="key !== 0">
                    <input
                      type="checkbox"
                      :id="`sameInfo-${key}`"
                      v-model="contactInfoInputShow[key]"
                    />
                    <label :for="`sameInfo-${key}`" class="ms-1">聯絡資料等同主要聯絡人</label>
                  </div>
                </div>
                <div class="mb-3">
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
                <div class="mb-3">
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
                <div class="mb-3">
                  <label :for="`bookIdNumCartInput-${key}`" class="form-label">身分證字號</label>
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
                <div class="mb-3">
                  <label :for="`bookPassportNumCartInput-${key}`" class="form-label">
                    護照號碼
                  </label>
                  <Field
                    type="text"
                    :name="`第 ${key + 1} 位護照號碼`"
                    class="form-control"
                    :id="`bookPassportNumCartInput-${key}`"
                    :class="{ 'is-invalid': errors[`第 ${key + 1} 位護照號碼`] }"
                    rules="required|length:9|numeric"
                    v-model="customerDetail.users[key].passportNum"
                  ></Field>
                  <ErrorMessage
                    :name="`第 ${key + 1} 位護照號碼`"
                    class="invalid-feedback"
                  ></ErrorMessage>
                </div>
                <div class="mb-3" v-if="contactInfoInputShow[key] === false">
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
                <div class="mb-3" v-if="contactInfoInputShow[key] === false">
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
                <div class="mb-3" v-if="contactInfoInputShow[key] === false">
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
              <div
                class="tab-pane fade"
                id="pills-pax-note"
                role="tabpanel"
                aria-labelledby="pills-tab-note"
              >
                <template v-for="(detail, key) in otherDetail" :key="key">
                  <div class="mb-6 pb-3 border-bottom border-gray">
                    <div class="mb-3">
                      <p class="h5 text-gray-dark mb-1">{{ detail.start_date }}</p>
                      <h4 class="h3 mb-1">{{ detail.product.title }}</h4>
                      <h4>{{ detail.optionName }}</h4>
                    </div>
                    <div class="mb-3" v-if="detail.product.transfer.time">
                      <label :for="`note-pickupTime-${key}`" class="form-label">接送時間</label>
                      <FlatPickr
                        :config="config"
                        :id="`note-pickupTime-${key}`"
                        class="form-control"
                        v-model="otherDetail[key].pickUpTime"
                      ></FlatPickr>
                    </div>
                    <div
                      class="mb-3"
                      v-if="
                        detail.product.transfer.place &&
                          detail.optionName.includes('火車') === false &&
                          detail.optionName.includes('高鐵') === false
                      "
                    >
                      <label :for="`note-pickupPlace-${key}`" class="form-label">接送地點</label>
                      <Field
                        type="text"
                        :id="`note-pickupPlace-${key}`"
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
                      <label :for="`note-rentCarSchedule-${key}`" class="form-label"
                        >包車行程規劃</label
                      >
                      <textarea
                        class="form-control"
                        :id="`note-rentCarSchedule-${key}`"
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
                          :id="`note-rentCarChildInclude-${key}`"
                          v-model="otherDetail[key].includeChild"
                        />
                        <label class="form-check-label" :for="`note-rentCarChildInclude-${key}`">
                          旅客中有未滿 4 歲孩童
                        </label>
                      </div>
                    </div>
                    <div v-if="otherDetail[key].includeChild">
                      <div class="mb-3">
                        <label :for="`note-rentCarChildBd-${key}`" class="form-label"
                          >孩童出生年月日</label
                        >
                        <Field
                          type="text"
                          :id="`note-rentCarChildBd-${key}`"
                          :name="`${detail.product.title}：${detail.optionName} 的出生日期`"
                          class="form-control"
                          :class="{
                            'is-invalid':
                              errors[`${detail.product.title}：${detail.optionName} 的出生日期`],
                          }"
                          :rules="isBirthday"
                          placeholder="1900 / 01 / 01"
                          v-model="otherDetail[key].childBd"
                        ></Field>
                        <ErrorMessage
                          :name="`${detail.product.title}：${detail.optionName} 的出生日期`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="mb-3">
                        <label :for="`note-rentCarChildHeight-${key}`" class="form-label"
                          >孩童身高</label
                        >
                        <Field
                          type="text"
                          :id="`note-rentCarChildHeight-${key}`"
                          :name="`${detail.product.title}：${detail.optionName} 的孩童身高`"
                          class="form-control"
                          :class="{
                            'is-invalid':
                              errors[`${detail.product.title}：${detail.optionName} 的孩童身高`],
                          }"
                          rules="required|numeric|max:3"
                          placeholder="公分"
                          v-model="otherDetail[key].childHeight"
                        ></Field>
                        <ErrorMessage
                          :name="`${detail.product.title}：${detail.optionName} 的孩童身高`"
                          class="invalid-feedback"
                        ></ErrorMessage>
                      </div>
                      <div class="mb-3">
                        <label :for="`note-rentCarChildWeight-${key}`" class="form-label"
                          >孩童體重</label
                        >
                        <Field
                          type="text"
                          :id="`note-rentCarChildWeight-${key}`"
                          :name="`${detail.product.title}：${detail.optionName} 的孩童體重`"
                          class="form-control"
                          :class="{
                            'is-invalid':
                              errors[`${detail.product.title}：${detail.optionName} 的孩童體重`],
                          }"
                          rules="required|numeric|max:3"
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
                      <label for="note-translateLanguage" class="form-label">導覽語言</label>
                      <select
                        class="form-select"
                        id="note-translateLanguage"
                        v-model="otherDetail[key].translateLanguage"
                      >
                        <option value="中文" selected>中文</option>
                        <option value="英文" v-if="detail.product.translate.eng">英文</option>
                        <option value="日文" v-if="detail.product.translate.jpy">日文</option>
                      </select>
                    </div>
                  </div>
                </template>
                <label for="note-bookMessageCart" class="form-label"
                  >其他特殊需求（飲食、禁菸房...）</label
                >
                <textarea
                  class="form-control mb-3"
                  id="note-bookMessageCart"
                  rows="2"
                  v-model="customerDetail.message"
                  placeholder="此備註不在商品包含範圍，不保證提供，但我們仍將盡力替您達成特殊需求"
                ></textarea>
              </div>
            </div>
            <ul
              class="nav nav-pills justify-content-center flex-wrap mb-8"
              id="check-cart-customer-pills-tab"
              role="tablist"
            >
              <li
                class="nav-item mb-1 position-relative"
                role="presentation"
                v-for="(user, key) in customerDetail.users"
                :key="`paxNum-${key}`"
                :class="{ 'ms-3': key !== 0 }"
              >
                <i
                  class="bi bi-exclamation-triangle-fill warning-icon"
                  v-if="pageWarningShow[key]"
                ></i>
                <button
                  type="button"
                  class="nav-link nav-link-outline-primary rounded-1"
                  :class="{ active: key === 0, 'nav-link-danger': pageWarningShow[key] }"
                  :id="`pills-tab-${key}`"
                  data-bs-toggle="pill"
                  :data-bs-target="`#pills-pax-${key}`"
                  role="tab"
                  :aria-controls="`pills-pax-${key}`"
                  aria-selected="false"
                >
                  {{ key + 1 }}
                </button>
                <button
                  type="button"
                  class="delete-pax-num"
                  :class="{
                    'd-none': key === 0 || customerDetail.users.length <= productMaxPaxQty,
                  }"
                  :title="`刪除第 ${key + 1} 位旅客`"
                  @click="deletePax(key)"
                >
                  <i class="bi bi-x"></i>
                </button>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="nav-link nav-link-outline-primary rounded-1 ms-3"
                  :class="{ 'd-none': customerDetail.users.length >= totalProductsMaxPaxQty }"
                  title="新增旅客"
                  @click="addPax()"
                >
                  <i class="bi bi-person-plus"></i>
                </button>
              </li>
              <li class="nav-item ms-3 position-relative" role="presentation">
                <i class="bi bi-exclamation-triangle-fill warning-icon" v-if="noteWarningShow"></i>
                <button
                  type="button"
                  class="nav-link nav-link-outline-primary rounded-1"
                  :class="{ 'nav-link-danger': noteWarningShow }"
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
            <div class="d-flex flex-column align-items-end">
              <h5 class="h3 mb-3">
                總金額
                <span class="h2 text-primary">NT {{ addComma(Math.floor(cart.final_total)) }}</span>
              </h5>
              <button
                type="submit"
                class="btn btn-primary d-block px-5 py-2"
                @click="validationCheck"
                :disabled="Object.keys(cart).length == 0 || cart.total == 0"
              >
                <p class="h3">下一步</p>
              </button>
            </div>
          </Form>
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
import flushPromises from 'flush-promises';
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  props: [
    'cartInfo',
    'customer',
    'otherInfo',
    'contactInfoInputStatus',
    'scrollBtnStatus',
    'productMaxPax',
    'totalProductsMaxPax',
  ],
  emits: [
    'emit-delete-all-products',
    'emit-change-tkt-num',
    'emit-delete-product',
    'emit-add-pax',
    'emit-delete-pax',
    'emit-delete-tab',
    'emit-next-page',
    'emit-alert',
  ],
  data() {
    return {
      config: {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true,
        defaultDate: '08:00',
      },
      cart: {},
      customerDetail: {},
      otherDetail: [],
      scrollTooltipDownCheck: '',
      scrollBtnShow: true,
      contactInfoInputShow: [],
      noteWarningShow: false,
      pageWarningShow: [],
      productWarningShow: [],
      productMaxPaxQty: 0,
      totalProductsMaxPaxQty: 0,
    };
  },
  components: {
    FlatPickr,
  },
  methods: {
    isIdNum(value) {
      const idNum = /^[A-Z][0-9]{9}$/;
      return idNum.test(value) ? true : '請輸入正確的身分證字號';
    },
    isBirthday(value) {
      const birthday = /^\d{4} \/ \d{2} \/ \d{2}$/;
      return birthday.test(value) ? true : '請以正確格式輸入生日';
    },
    addPax() {
      this.customerDetail.users[this.customerDetail.users.length] = {};
      this.contactInfoInputShow[this.customerDetail.users.length - 1] = false;
    },
    deletePax(num) {
      this.$emit('emit-delete-tab', num);
      this.customerDetail.users.splice(num, 1);
      this.contactInfoInputShow.splice(num, 1);
    },
    toNextPage() {
      // 初始化 productWarningShow ，長度要等於商品數，每個都調成 false
      for (let i = 0; i < this.cart.carts.length; i += 1) {
        this.productWarningShow[i] = false;
      }
      this.cart.carts.forEach((product, productKey) => {
        product.options.forEach((option) => {
          // 確認是否每個商品登陸的人數，等於該商品要使用的人數（不可放在 async validationCheck 會來不及正確運行）
          if (option.users.length !== option.optionQty) {
            // 沒有的那項調成 true
            this.productWarningShow[productKey] = true;
          }
        });
      });
      // 只要 productWarningShow 裡含有 true 就秀警告且不可繼續運行 emit
      if (this.productWarningShow.includes(true)) {
        this.$emit('emit-alert', '請登錄每項商品的客戶');
      } else {
        this.$emit(
          'emit-next-page',
          this.customerDetail,
          this.otherDetail,
          this.contactInfoInputShow,
        );
      }
    },
    async validationCheck() {
      // 如果有東西沒填，會直接不跑 toNextPage() ，所以按下下一步時多設一個函式檢查
      await flushPromises(); // 先確定渲染完，再跑下面的
      const errorArr = document.querySelectorAll('.is-invalid');
      const errorIdArr = [];
      let errorPageArr = [];
      if (errorArr.length > 0) {
        // 如果陣列裡有東西代表有錯誤
        this.$emit('emit-alert', '請填寫客戶資料及相關備註');
        errorArr.forEach((error) => {
          errorIdArr.push(error.id.split('-'));
        });
        this.noteWarningShow = !!errorIdArr.map((id) => id[0]).includes('note'); // id 陣列的第 0 項如果有 note 代表有備註沒填
        errorIdArr.forEach((id) => {
          if (id[0] !== 'note') {
            // 代表是客人資料沒填
            // 檢查陣列最後一項的數字，加一就是第幾位
            errorPageArr.push(id[id.length - 1]);
          }
        });
        errorPageArr = [...new Set(errorPageArr)]; // 刪掉重複的值
        // 初始化 pageWarningShow 陣列，讓長度等同目前客人數並調為 false
        for (let i = 0; i < this.customerDetail.users.length; i += 1) {
          this.pageWarningShow[i] = false;
        }
        // 有出現在 errorPageArr 陣列的調為 true
        errorPageArr.forEach((i) => {
          this.pageWarningShow[i] = true;
        });
      } else {
        // 沒錯誤時要把值調回 false
        this.noteWarningShow = false;
        for (let i = 0; i < this.customerDetail.users.length; i += 1) {
          this.pageWarningShow[i] = false;
        }
      }
    },
  },
  watch: {
    cartInfo: {
      handler() {
        this.cart = {
          ...this.cartInfo,
        }; // props 有變時更改資料
        this.cart.final_total = this.cartInfo.final_total;
        this.otherDetail = [];
        this.cart.carts.forEach((item) => {
          // 處理特殊備註是否要顯示翻譯接送等表格
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
        // 解決 flatPickr 設定 defaultDate 後不會自動將預設值綁定到 v-model 的問題
        this.otherDetail.forEach((detail, key) => {
          if (detail.product.transfer.time) {
            this.otherDetail[key].pickUpTime = this.config.defaultDate;
          }
        });
        // 初始化讓每個顧客都先顯示完整資料表單
        for (
          let i = this.contactInfoInputShow.length;
          i < this.customerDetail.users.length;
          i += 1
        ) {
          this.contactInfoInputShow[i] = false;
        }
      },
      deep: true,
    },
    customer: {
      handler() {
        this.customerDetail = { ...this.customer };
      },
      deep: true,
    },
    scrollBtnStatus: {
      handler() {
        this.scrollBtnShow = this.scrollBtnStatus;
      },
      deep: true,
    },
    productMaxPax: {
      handler() {
        this.productMaxPaxQty = this.productMaxPax;
      },
      deep: true,
    },
    totalProductsMaxPax: {
      handler() {
        this.totalProductsMaxPaxQty = this.totalProductsMaxPax;
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
    this.contactInfoInputShow = [...this.contactInfoInputStatus];
    this.scrollBtnShow = this.scrollBtnStatus;
    this.productMaxPaxQty = this.productMaxPax;
    this.totalProductsMaxPaxQty = this.totalProductsMaxPax;
  },
  mounted() {
    this.scrollTooltipDownCheck = new Tooltip(this.$refs.scrollTooltipDownCheck);
    this.listener = () => {
      const btn = this.$refs.scrollBtn;
      this.scrollBtnShow = btn.scrollTop < btn.scrollHeight - 600;
    };
    this.$refs.scrollBtn.addEventListener('scroll', this.listener);
  },
};
</script>
