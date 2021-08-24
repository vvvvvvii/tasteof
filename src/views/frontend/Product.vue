<template>
  <div class="pt-7 flex-fill">
    <!--平板以下搜尋欄-->
    <div class="bg-secondary pt-3 pb-2 position-fixed w-100 z-index-sticky d-lg-none">
      <div class="container">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="goAnchor('#packageOptionsSection')"
              >選擇方案</a
            >
          </li>
          <li class="nav-item" @click.prevent="toRules">
            <a href="#" class="nav-link" @click.prevent="goAnchor('#ruleSection')">相關規定</a>
          </li>
          <li class="nav-item" @click.prevent="toComments" v-if="moreInfo.productInfo.comments">
            <a href="#" class="nav-link" @click.prevent="goAnchor('#commentsSection')">好評推薦</a>
          </li>
          <li class="nav-item" @click.prevent="toMoreActivities" v-if="randomProducts.length !== 0">
            <a href="#" class="nav-link" @click.prevent="goAnchor('#moreActivitiesSection')"
              >更多活動</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="row py-8">
        <!--電腦以上搜尋欄-->
        <div class="col-lg-4 d-lg-block d-none position-relative">
          <div class="d-flex justify-content-between mb-6 px-2">
            <p class="h3">立即預購</p>
            <p class="text-end">
              <span class="h3">NT {{ moreInfo.productInfo.lowestPrice }} </span>
              起
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <a
                href="#"
                class="list-group-link"
                @click.prevent="goAnchor('#packageOptionsSection')"
                >選擇方案</a
              >
            </li>
            <li class="list-group-item" @click.prevent="toRules">
              <a href="#" class="list-group-link" @click.prevent="goAnchor('#ruleSection')"
                >相關規定</a
              >
            </li>
            <li
              class="list-group-item"
              @click.prevent="toComments"
              v-if="moreInfo.productInfo.comments"
            >
              <a href="#" class="list-group-link" @click.prevent="goAnchor('#commentsSection')"
                >好評推薦</a
              >
            </li>
            <li
              class="list-group-item"
              @click.prevent="toMoreActivities"
              v-if="randomProducts.length !== 0"
            >
              <a
                href="#"
                class="list-group-link"
                @click.prevent="goAnchor('#moreActivitiesSection')"
                >更多相似活動</a
              >
            </li>
          </ul>
          <ul>
            <li class="sky-lantern"></li>
            <li class="cloud1"></li>
            <li class="cloud2"></li>
            <li class="cloud3"></li>
          </ul>
        </div>
        <div class="col-lg-8 py-lg-0 py-md-6 py-sm-4 py-2">
          <Swiper
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :loop="true"
            :slides-per-view="3"
            :spaceBetween="0"
            class="mySwiper rounded-2"
          >
            <button
              type="button"
              class="btn extend-img-btn"
              data-bs-toggle="modal"
              data-bs-target="#productPageImgModal"
            >
              <i class="bi bi-arrows-fullscreen"></i>
            </button>
            <SwiperSlide v-for="item in moreInfo.productInfo.imagesUrl" :key="item.id">
              <img :src="item" class="swiper-img rounded-2" />
            </SwiperSlide>
          </Swiper>
          <!-- 手機看產品圖 -->
          <div class="d-sm-none d-block">
            <Swiper
              :loop="true"
              :centeredSlides="true"
              :navigation="true"
              :thumbs="{ swiper: thumbsSwiperMobile }"
              class="gallery-top-modal"
            >
              <SwiperSlide v-for="item in moreInfo.productInfo.imagesUrl" :key="item.id">
                <img :src="item" class="swiper-img rounded-2" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              @swiper="setThumbsSwiperMobile"
              :slidesPerView="4"
              :spaceBetween="10"
              :freeMode="true"
              :watchSlidesVisibility="true"
              :watchSlidesProgress="true"
              class="gallery-thumbs rounded-2"
            >
              <SwiperSlide v-for="item in moreInfo.productInfo.imagesUrl" :key="item.id">
                <img :src="item" class="swiper-img" />
              </SwiperSlide>
            </Swiper>
          </div>
          <!-- 電腦看產品圖 Modal -->
          <div
            class="modal fade p-0"
            id="productPageImgModal"
            tabindex="-1"
            aria-labelledby="productPageImgModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-xl">
              <div class="modal-content rounded-0">
                <div class="modal-body p-0">
                  <Swiper
                    :centeredSlides="true"
                    :loop="true"
                    :navigation="true"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :observer="true"
                    :observeParents="true"
                    class="gallery-top-modal"
                  >
                    <SwiperSlide v-for="item in moreInfo.productInfo.imagesUrl" :key="item.id">
                      <img :src="item" class="swiper-img" />
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    @swiper="setThumbsSwiper"
                    :slidesPerView="4"
                    :spaceBetween="10"
                    :freeMode="true"
                    :observer="true"
                    :observeParents="true"
                    :watchSlidesVisibility="true"
                    :watchSlidesProgress="true"
                    class="gallery-thumbs"
                  >
                    <SwiperSlide v-for="item in moreInfo.productInfo.imagesUrl" :key="item.id">
                      <img :src="item" class="swiper-img" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div class="px-6 py-7">
            <h2 class="text-primary text-center fw-bold mb-7">{{ moreInfo.productInfo.title }}</h2>
            <div class="d-flex justify-content-center mb-6">
              <div
                v-for="(item, index) in moreInfo.productInfo.attractionArr"
                :key="index"
                class="d-flex flex-column align-items-center h3 attraction-line"
                :class="{
                  'ms-5': index !== 0,
                }"
              >
                <i class="bi bi-circle-fill mb-1"></i>
                <p class="text-center">{{ item }}</p>
              </div>
            </div>
            <p>{{ moreInfo.productInfo.description }}</p>
          </div>
          <div class="bg-light d-flex justify-content-center py-3">
            <p>
              <i class="bi bi-people-fill"></i>
              <span class="ms-2">{{ moreInfo.productInfo.ageRestriction }}</span>
            </p>
            <p class="ms-6" v-if="moreInfo.productInfo.duration">
              <i class="bi bi-clock"></i>
              <span class="ms-2" v-if="moreInfo.productInfo.duration.day > 0"
                >{{ moreInfo.productInfo.duration.day }} 天</span
              >
              <span class="ms-2" v-if="moreInfo.productInfo.duration.hours > 0"
                >{{ moreInfo.productInfo.duration.hours }} 小時</span
              >
              <span class="ms-2" v-if="moreInfo.productInfo.duration.min > 0"
                >{{ moreInfo.productInfo.duration.min }} 分</span
              >
            </p>
          </div>
          <div class="px-md-6 pt-7" id="packageOptionsSection">
            <h3 class="text-primary mb-6">
              選擇方案
            </h3>
            <ul class="mb-7">
              <li
                v-for="(item, index) in moreInfo.productInfo.packageOptions"
                :key="item.optionName"
                class="card card-row bg-light"
                :class="{ 'mb-6': index !== moreInfo.productInfo.packageOptions.length - 1 }"
              >
                <img
                  class="card-row-img"
                  :src="moreInfo.productInfo.imageUrl"
                  :alt="item.optionName"
                />
                <div class="card-body">
                  <div class="d-flex flex-sm-row justify-content-between mb-3">
                    <div>
                      <h3 class="card-title mb-2">
                        {{ item.optionName }}
                      </h3>
                      <p class="h5">集合時間： {{ item.meetingTime }}</p>
                    </div>
                    <p class="text-end h4-md h5 w-50 d-sm-inline d-flex flex-column">
                      <span class="h3-md h4 mb-sm-0 mb-2">NT {{ addComma(item.price) }}</span>
                      <span class="d-sm-inline d-none"> / {{ item.unit }}</span>
                      <span class="d-sm-none d-inline">{{ item.unit }}</span>
                    </p>
                  </div>
                  <template v-for="(content, key) in item.contentArr" :key="key">
                    <p v-if="key < 3" class="h4-md h5 mb-2">
                      <i class="bi bi-check2"></i>
                      {{ content }}
                    </p>
                  </template>
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#optionModal"
                    v-if="item.contentArr.length > 3"
                    class="text-secondary d-md-inline mb-3 d-none"
                  >
                    <i class="bi bi-question-diamond-fill"></i>
                    查看更多方案包含細項
                  </a>
                  <!--手機版顯示-->
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#optionModal"
                    class="text-secondary d-md-none mb-3 h5"
                  >
                    <i class="bi bi-question-diamond-fill"></i>
                    查看更多方案包含細項
                  </a>
                  <!-- 方案細項 Modal -->
                  <div
                    class="modal fade"
                    id="optionModal"
                    tabindex="-1"
                    aria-labelledby="optionModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content">
                        <div class="modal-header bg-wave mb-3 position-relative">
                          <h3>
                            方案內含：
                          </h3>
                          <div class="cable-car"></div>
                        </div>
                        <div class="modal-body p-6">
                          <p v-for="(content, key) in item.contentArr" :key="key">
                            <i class="bi bi-check2"></i>
                            {{ content }}
                          </p>
                        </div>
                        <button
                          type="button"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          @click="openModal(item)"
                          class="btn btn-primary py-2 rounded-0
                          d-flex justify-content-center align-items-center"
                        >
                          現在預訂
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    @click="openModal(item)"
                    class="btn btn-primary d-flex
                    justify-content-center align-items-center w-100 py-2"
                  >
                    現在預訂
                  </button>
                </div>
              </li>
            </ul>
            <!-- 預訂 Modal -->
            <Option-modal
              ref="bookingModal"
              :temp="temp"
              :more-info="moreInfo"
              @emit-add-cart="addCart"
            ></Option-modal>
            <div id="ruleSection" :class="{ 'mb-7': moreInfo.productInfo.comments }">
              <h3 class="text-primary mb-6">
                相關規定
              </h3>
              <p>{{ moreInfo.productInfo.policy }}</p>
            </div>
            <div id="commentsSection" v-if="moreInfo.productInfo.comments">
              <h3 class="text-primary mb-6">好評推薦</h3>
              <div
                class="d-flex justify-content-around align-items-center
              text-center bg-light py-5 mb-6"
              >
                <div>
                  <h3 class="mb-3">
                    <span class="text-secondary fw-bold h2"
                      >{{ moreInfo.productInfo.averageScore }}
                    </span>
                    星
                  </h3>
                  <p>{{ moreInfo.productInfo.comments.length }} 則評論</p>
                </div>
                <ul class="w-50" v-if="moreInfo.productInfo.scoreObj">
                  <li
                    class="d-flex align-items-center mb-2"
                    v-for="(score, scoreKey) in moreInfo.productInfo.scoreObj"
                    :key="scoreKey"
                  >
                    <span class="d-sm-inline d-none">{{ scoreKey.split('r')[1] }} 星</span>
                    <div
                      class="progress ms-sm-3 w-75"
                      :class="{ 'align-items-center': score <= 0 }"
                    >
                      <p v-if="score <= 0" class="text-gray ms-3">
                        <span class="d-sm-none d-inline">{{ scoreKey.split('r')[1] }} 星</span>
                        <span class="d-sm-inline d-none">0 %</span>
                      </p>
                      <div
                        class="progress-bar bg-secondary"
                        role="progressbar"
                        :style="{ width: `${score}%` }"
                        :aria-valuenow="score"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <span class="d-sm-none d-inline">{{ scoreKey.split('r')[1] }} 星</span>
                        <span class="d-sm-inline d-none">{{ score }} %</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <ul class="px-6 py-3">
                <li
                  v-for="(item, key) in moreInfo.productInfo.comments"
                  :key="key"
                  :class="{
                    'pb-6': key !== moreInfo.productInfo.comments.length - 1,
                    'mb-6': key !== moreInfo.productInfo.comments.length - 1,
                    'border-bottom': key !== moreInfo.productInfo.comments.length - 1,
                    'border-light': key !== moreInfo.productInfo.comments.length - 1,
                  }"
                >
                  <div class="d-flex">
                    <img class="user-img" :src="item.imageUrl" :alt="`使用者頭像 -${key}`" />
                    <div class="ms-3 w-75">
                      <h5 class="text-gray-dark mb-1">
                        {{ item.name }}
                        <span class="d-sm-none text-warning h4 ms-2">
                          {{ item.score }} <i class="bi bi-star-fill"></i>
                        </span>
                      </h5>
                      <h4 class="text-warning mb-3">
                        <span class="d-sm-inline d-none">
                          <i class="bi" :class="{ 'bi-star-fill': item.score >= 1 }"></i>
                          <i
                            class="bi ms-1"
                            :class="{
                              'bi-star-fill': item.score >= 2,
                              'bi-star': item.score <= 1,
                            }"
                          ></i>
                          <i
                            class="bi ms-1"
                            :class="{
                              'bi-star-fill': item.score >= 3,
                              'bi-star': item.score <= 2,
                            }"
                          ></i>
                          <i
                            class="bi ms-1"
                            :class="{
                              'bi-star-fill': item.score >= 4,
                              'bi-star': item.score <= 3,
                            }"
                          ></i>
                          <i
                            class="bi ms-1"
                            :class="{
                              'bi-star-fill': item.score == 5,
                              'bi-star': item.score <= 4,
                            }"
                          ></i>
                        </span>
                      </h4>
                      <p class="h4-md h5">
                        {{ item.content || '我給的星星就代表了我的評語～' }}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-wave py-7" id="moreActivitiesSection" v-if="randomProducts.length !== 0">
      <div class="container">
        <h3 class="text-primary mb-5">更多相似活動</h3>
        <div class="row flex-nowrap random-box">
          <div class="col-lg-4 col-sm-5 col-9" v-for="(item, key) in randomProducts" :key="key">
            <router-link :to="`/product/${item.id}`" title="查看更多" class="card overflow-hidden">
              <div class="card-img-outer">
                <img :src="item.imageUrl" :alt="item.title" class="card-img" />
              </div>
              <div class="card-body random-box-inner">
                <h4 class="card-title">{{ item.title }}</h4>
                <p class="h3-md h5 text-end">NT {{ addComma(item.lowestPrice) }} 起</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="to-top-btn d-sm-block d-none" @click="scrollToTop" v-if="topBtnShow">
      <div class="to-top-btn-text">
        <p>回到</p>
        <p>上方</p>
      </div>
    </div>
    <div
      class="buy-now-btn d-sm-none d-block"
      @click="goAnchor('#packageOptionsSection')"
      v-if="buyBtnShow"
    >
      現在購買
    </div>
    <!--alert-->
    <Alert v-if="showAlert" :alert-msg="alertMsg"></Alert>
  </div>
</template>
<script>
import Alert from '@/components/backend/Alert.vue';

import { Modal } from 'bootstrap';
import OptionModal from '@/components/frontend/OptionModal.vue';
import emitter from '../../assets/js/emitter';

export default {
  data() {
    return {
      moreInfo: {
        productInfo: {
          comments: [],
        },
        startDate: '',
        tktNum: {
          adult: 1,
          child: 0,
        },
      },
      carts: [],
      totalProducts: [],
      randomProducts: [],
      showAlert: false,
      alertMsg: '',
      topBtnShow: true,
      buyBtnShow: true,
      thumbsSwiper: null,
      thumbsSwiperMobile: null,
      bookingModal: {},
      temp: {},
    };
  },
  props: ['id'],
  components: {
    Alert,
    OptionModal,
  },
  methods: {
    getData() {
      const seed = this.id;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${seed}`)
        .then((res) => {
          if (res.data.success) {
            this.moreInfo.productInfo = res.data.product;
            // 如果 imagesUrl 裡有空字串，把它刪掉再顯示，避免圖片顯示錯誤
            this.moreInfo.productInfo.imagesUrl = this.moreInfo.productInfo.imagesUrl.filter(
              (e) => e !== '',
            );
            let optionPrice = this.moreInfo.productInfo.packageOptions.map((item) => item.price);
            optionPrice = optionPrice.sort((x, y) => x - y);
            [this.moreInfo.productInfo.lowestPrice] = optionPrice;
            this.getTotalProducts();
            this.getCartInfo();
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    getTotalProducts() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.totalProducts = res.data.products;
            this.totalProducts.forEach((item, index) => {
              // 個別取出每個產品
              let packageOptionsPrice = item.packageOptions.map((i) => i.price); // 取出該產品的所有方案中的價格
              packageOptionsPrice = packageOptionsPrice.sort((x, y) => x - y); // 價格小排到大
              const [lowestPrice] = packageOptionsPrice; // 該產品最低價格為陣列第一個數
              this.totalProducts[index].lowestPrice = lowestPrice;
              // 找到該價格對應的單位
              item.packageOptions.forEach((i) => {
                if (i.price === lowestPrice) {
                  this.totalProducts[index].lowestPriceUnit = i.unit;
                }
              });
            });
            this.getRandomProducts();
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    getRandomProducts() {
      const { tagCheck } = this.moreInfo.productInfo;
      const area = tagCheck.find(
        (e) => e === '大台北' || e === '中彰投' || e === '嘉南' || e === '高屏' || e === '花東',
      );
      const filterArr = [];
      this.totalProducts.forEach((item) => {
        item.tagCheck.forEach((i) => {
          if (i === area && item.title !== this.moreInfo.productInfo.title) {
            // 不可包含此分頁產品本身
            filterArr.push(item);
          }
        });
      });
      this.randomProducts = [];
      const arrSet = new Set([]);
      const maxSize = filterArr.length < 3 ? filterArr.length : 3; // 該品項項目少於三項時，顯示該品項數量即可
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        const { length } = filterArr;
        const num = Math.floor(Math.random(length) * length); // 隨機取得商品
        arrSet.add(num);
      }
      arrSet.forEach((i) => {
        this.randomProducts.push(filterArr[i]); // 取得未重複的商品放進 randomProducts 陣列中
      });
    },
    getCartInfo() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.carts = res.data.data.carts;
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    goAnchor(selector) {
      const anchor = this.$el.querySelector(selector);
      document.body.scrollTop = anchor.offsetTop - 150; // chrome
      document.documentElement.scrollTop = anchor.offsetTop - 150; // firefox
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    setThumbsSwiperMobile(swiper) {
      this.thumbsSwiperMobile = swiper;
    },
    openModal(item) {
      this.temp = { ...item };
      this.bookingModal.show();
    },
    addCart(productDetail, optionDetail) {
      const { addCartBtn } = this.$refs.bookingModal.$refs;
      addCartBtn.classList.add('disabled');
      addCartBtn.children[0].classList.remove('d-none');
      let dataOuter = {};
      this.moreInfo = JSON.parse(JSON.stringify(productDetail));
      const cartIds = this.carts.map((product) => product.product_id);
      if (cartIds.includes(this.moreInfo.productInfo.id)) {
        // 如果是 true 代表曾經加入過同商品，找出曾被加入的商品的 index
        const repeatIndex = cartIds.indexOf(this.moreInfo.productInfo.id);
        // 比對方案是否相同 列出所有相同方案名稱的物件
        // 比對日期是否相同
        this.carts[repeatIndex].options.forEach((option, optionIndex) => {
          if (
            option.optionName === optionDetail.optionName
            && option.start_date === this.moreInfo.startDate
          ) {
            // 日期跟方案名稱都同時相同，代表購物車裡已經有相同的方案名稱
            // 找到要累加的值跟現在加入的新值相加
            dataOuter = {
              data: {
                ...this.carts[repeatIndex],
              },
            };
            dataOuter.data.options[optionIndex] = {
              qtyDetail: {
                adult:
                  this.carts[repeatIndex].options[optionIndex].qtyDetail.adult
                  + this.moreInfo.tktNum.adult,
                child:
                  this.carts[repeatIndex].options[optionIndex].qtyDetail.child
                  + this.moreInfo.tktNum.child,
              },
              optionQty:
                dataOuter.data.options[optionIndex].adult
                + dataOuter.data.options[optionIndex].child,
              start_date: this.moreInfo.startDate,
              optionName: optionDetail.optionName,
              optionPrice: Number(optionDetail.price),
              isEtkt: this.temp.is_etkt || false,
            };
            dataOuter.data.qty = this.moreInfo.tktNum.adult + this.moreInfo.tktNum.child;
          }
        });
        if (Object.keys(dataOuter).length === 0) {
          // 如果沒有，代表有東西不同，不要累加
          dataOuter = {
            data: {
              ...this.carts[repeatIndex],
            },
          };
          dataOuter.data.options[dataOuter.data.options.length] = {
            qtyDetail: { ...this.moreInfo.tktNum },
            start_date: this.moreInfo.startDate,
            optionName: optionDetail.optionName,
            optionPrice: Number(optionDetail.price),
            isEtkt: this.temp.is_etkt || false,
          };
          const { qtyDetail } = dataOuter.data.options[dataOuter.data.options.length - 1];
          dataOuter.data.options.forEach((i, key) => {
            dataOuter.data.options[key].optionQty = i.qtyDetail.adult + i.qtyDetail.child;
          });
          dataOuter.data.qty = qtyDetail.adult + qtyDetail.child;
        }
      } else {
        // 如果是 false 代表不曾加入過同商品
        dataOuter = {
          data: {
            product_id: this.moreInfo.productInfo.id,
            options: [],
          },
        };
        dataOuter.data.options.push({
          qtyDetail: { ...this.moreInfo.tktNum },
          start_date: this.moreInfo.startDate,
          optionName: optionDetail.optionName,
          optionPrice: Number(optionDetail.price),
          isEtkt: this.temp.is_etkt || false,
        });
        const { qtyDetail } = dataOuter.data.options[0];
        dataOuter.data.qty = qtyDetail.adult + qtyDetail.child;
      }
      dataOuter.data.options.forEach((i, key) => {
        dataOuter.data.options[key].optionQty = i.qtyDetail.adult + i.qtyDetail.child;
        dataOuter.data.options[key].total = i.optionPrice * (i.qtyDetail.adult + i.qtyDetail.child);
      });
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, dataOuter)
        .then((res) => {
          if (res.data.success) {
            this.customAlert('已加入購物車');
            this.moreInfo.startDate = '';
            this.moreInfo.tktNum.adult = 1;
            this.moreInfo.tktNum.child = 0;
            addCartBtn.classList.remove('disabled');
            addCartBtn.children[0].classList.add('d-none');
            this.bookingModal.hide();
            emitter.emit('update-cart');
          } else {
            this.customAlert(res.data.message);
            addCartBtn.classList.remove('disabled');
            addCartBtn.children[0].classList.add('d-none');
            emitter.emit('update-cart');
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          addCartBtn.classList.remove('disabled');
          addCartBtn.children[0].classList.add('d-none');
          emitter.emit('update-cart');
        });
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true;
      window.setTimeout(this.closeCustomAlert, 5000);
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    reinitializeSwiper(swiper) {
      setTimeout(() => {
        swiper.update();
      }, 400);
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
  mounted() {
    this.getData();
    this.listener = () => {
      this.topBtnShow = window.scrollY > 0;
      this.buyBtnShow = window.scrollY > 0;
      this.buyBtnShow = window.scrollY < document.body.clientHeight - 900;
    };
    window.addEventListener('scroll', this.listener);
    this.bookingModal = new Modal(document.getElementById('bookingModal'), {
      keyboard: false,
    });
  },
  unmounted() {
    window.removeEventListener('scroll', this.listener);
  },
  watch: {
    id() {
      this.getData();
    },
    carts() {
      this.getCartInfo();
    },
  },
};
</script>
