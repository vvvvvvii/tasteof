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
            class="mySwiper"
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
              <img :src="item" class="swiper-img opacity-50" />
            </SwiperSlide>
          </Swiper>
          <!-- 手機看產品圖 -->
          <div class="d-sm-none d-block">
            <Swiper
              :loop="true"
              :centeredSlides="true"
              :navigation="true"
              :thumbs="{ swiper: thumbsSwiper }"
              class="gallery-top-modal"
            >
              <SwiperSlide v-for="item in moreInfo.productInfo.imagesUrl" :key="item.id">
                <img :src="item" class="swiper-img" />
              </SwiperSlide>
            </Swiper>
            <swiper
              @swiper="setThumbsSwiper"
              :slidesPerView="4"
              :spaceBetween="10"
              :freeMode="true"
              :watchSlidesVisibility="true"
              :watchSlidesProgress="true"
              class="gallery-thumbs"
            >
              <SwiperSlide v-for="item in moreInfo.productInfo.imagesUrl" :key="item.id">
                <img :src="item" class="swiper-img" />
              </SwiperSlide>
            </swiper>
          </div>
          <!-- 電腦看產品圖 Modal -->
          <div
            class="modal fade p-0"
            id="productPageImgModal"
            tabindex="-1"
            aria-labelledby="productPageImgModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
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
          <div class="px-md-6 pt-7">
            <div
              class="d-flex flex-md-row flex-column
              justify-content-between mb-6"
              id="packageOptionsSection"
            >
              <h3 class="text-primary">選擇方案</h3>
              <div class="d-flex h5 justify-content-end">
                <div class="d-flex flex-column align-items-center">
                  <label for="tktAdultNum" class="mb-1">成人</label>
                  <div class="d-flex align-items-center">
                    <button
                      type="button"
                      class="border-0 bg-transparent p-2"
                      @click="changeTktNum('adult', 'minus')"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <p class="p-1">
                      {{ moreInfo.tktNum.adult }}
                    </p>
                    <button
                      type="button"
                      class="border-0 bg-transparent p-2"
                      @click="changeTktNum('adult', 'plus')"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
                <div class="d-flex flex-column align-items-center ms-2">
                  <label for="tktChildNum" class="mb-1">孩童</label>
                  <div class="d-flex align-items-center">
                    <button
                      type="button"
                      class="border-0 bg-transparent p-2"
                      @click="changeTktNum('child', 'minus')"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <p class="p-1">
                      {{ moreInfo.tktNum.child }}
                    </p>
                    <button
                      type="button"
                      class="border-0 bg-transparent p-2"
                      @click="changeTktNum('child', 'plus')"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
                <div class="d-flex flex-column  ms-2">
                  <label for="startDate" class="mb-2 text-center">使用日</label>
                  <flat-pickr
                    id="startDate"
                    ref="startDate"
                    :config="config"
                    v-model="moreInfo.startDate"
                    class="py-1 mb-1 text-center"
                  ></flat-pickr>
                  <p class="fw-bold">不同使用日煩請以不同訂單預購</p>
                </div>
              </div>
            </div>
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
                <div class="card-body flex-sm-row">
                  <div>
                    <h3 class="card-title mb-2">
                      {{ item.optionName }}
                    </h3>
                    <p class="h5 mb-sm-3 mb-2">集合時間： {{ item.meetingTime }}</p>
                    <template v-for="(content, key) in item.contentArr" :key="key">
                      <p v-if="key < 3" class="h4-lg h5 mb-2 d-sm-block d-none">
                        <i class="bi bi-check2"></i>
                        {{ content }}
                      </p>
                    </template>
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#optionModal"
                      v-if="item.contentArr.length > 3"
                      class="text-secondary d-sm-inline d-none"
                    >
                      <i class="bi bi-question-diamond-fill"></i>
                      查看更多方案包含細項
                    </a>
                    <!--手機版顯示-->
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#optionModal"
                      class="text-secondary d-sm-none mb-2 h5"
                    >
                      <i class="bi bi-question-diamond-fill"></i>
                      查看更多方案包含細項
                    </a>
                    <!-- 方案 Modal -->
                    <div
                      class="modal fade"
                      id="optionModal"
                      tabindex="-1"
                      aria-labelledby="optionModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header bg-wave mb-3 position-relative">
                            <h3>
                              {{ item.optionName }}
                            </h3>
                            <div class="cable-car"></div>
                          </div>
                          <div class="modal-body p-6">
                            <p v-for="(content, key) in item.contentArr" :key="key">
                              <i class="bi bi-check2"></i>
                              {{ content }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-column justify-content-end w-sm-50 ms-sm-2">
                    <p class="mb-2 h4-md h5">
                      <span class="h3-md h4">NT {{ addComma(item.price) }}</span>
                      / {{ item.unit }}
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary d-flex justify-content-center align-items-center"
                      :ref="`addCartBtn-${index}`"
                      @click="addCart(item, index)"
                      :disabled="moreInfo.startDate === '' || moreInfo.tktNum.adult < 1"
                    >
                      <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <p class="ms-1" v-if="moreInfo.startDate === ''">填寫日期</p>
                      <p class="ms-1" v-else>現在預訂</p>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <div id="ruleSection" :class="{ 'mb-7': moreInfo.productInfo.comments }">
              <h3 class="text-primary mb-6">
                相關規定
              </h3>
              <p>{{ moreInfo.productInfo.policy }}</p>
            </div>
            <div id="commentsSection" v-if="moreInfo.productInfo.comments">
              <div class="d-flex justify-content-between mb-6">
                <h3 class="text-primary">好評推薦</h3>
                <div class="bg-secondary p-2 rounded-2">
                  <p class="text-white">
                    <span class="h3 fw-bold">{{ moreInfo.productInfo.averageScore }}</span> 星
                  </p>
                </div>
              </div>
              <ul>
                <li
                  v-for="(item, key) in moreInfo.productInfo.comments"
                  :key="key"
                  class="d-flex align-items-center"
                  :class="{ 'mb-6': key !== moreInfo.productInfo.comments.length - 1 }"
                >
                  <div>
                    <img class="user-img" :src="item.imageUrl" :alt="`使用者頭像 -${key}`" />
                  </div>
                  <div>
                    <div class="dialog ms-3 px-6 py-4 rounded-pill">
                      <p class="mb-3 h4-md h5">
                        {{ item.content || '我給的星星就代表了我的評語～' }}
                      </p>
                      <h4 class="h5 text-gray-dark text-end">
                        - {{ item.name }}
                        <span class="d-sm-inline d-none">
                          / <i class="bi" :class="{ 'bi-star-fill': item.score >= 1 }"></i>
                          <i
                            class="bi"
                            :class="{
                              'bi-star-fill': item.score >= 2,
                              'bi-star': item.score <= 1,
                            }"
                          ></i>
                          <i
                            class="bi"
                            :class="{
                              'bi-star-fill': item.score >= 3,
                              'bi-star': item.score <= 2,
                            }"
                          ></i>
                          <i
                            class="bi"
                            :class="{
                              'bi-star-fill': item.score >= 4,
                              'bi-star': item.score <= 3,
                            }"
                          ></i>
                          <i
                            class="bi"
                            :class="{
                              'bi-star-fill': item.score == 5,
                              'bi-star': item.score <= 4,
                            }"
                          ></i>
                        </span>
                        <span class="d-sm-none">
                          / {{ item.score }} <i class="bi bi-star-fill"></i>
                        </span>
                      </h4>
                      <span class="triangle"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-wave pt-6 pb-8" id="moreActivitiesSection" v-if="randomProducts.length !== 0">
      <div class="container">
        <h3 class="text-primary mb-5">更多相似活動</h3>
        <div class="row">
          <div class="col-4" v-for="(item, key) in randomProducts" :key="key">
            <router-link :to="`/product/${item.id}`" title="查看更多" class="card overflow-hidden">
              <div class="card-img-outer">
                <img :src="item.imageUrl" :alt="item.title" class="card-img" />
              </div>
              <div class="card-body">
                <h4 class="card-title ellipsis ellipsis-one-line">{{ item.title }}</h4>
                <p class="h3-md h5 text-end">NT {{ addComma(item.lowestPrice) }} 起</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="to-top-btn" @click="scrollToTop" v-if="btnShow">
      <div class="to-top-btn-text">
        <p>回到</p>
        <p>上方</p>
      </div>
    </div>
    <!--alert-->
    <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
  </div>
</template>
<script>
import alert from '@/components/backend/Alert.vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import emitter from '../../assets/js/emitter';

export default {
  data() {
    return {
      config: {
        altFormat: 'F j, Y',
        dateFormat: 'Y-m-d',
        minDate: 'today',
      },
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
      btnShow: true,
      thumbsSwiper: null,
    };
  },
  props: ['id'],
  components: {
    alert,
    flatPickr,
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
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
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
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
        });
    },
    getRandomProducts() {
      const { tagCheck } = this.moreInfo.productInfo;
      const area = tagCheck.find(
        (e) => e === '雙北' || e === '中彰投' || e === '嘉南' || e === '高屏' || e === '花東',
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
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
        });
    },
    goAnchor(selector) {
      const anchor = this.$el.querySelector(selector);
      document.body.scrollTop = anchor.offsetTop; // chrome
      document.documentElement.scrollTop = anchor.offsetTop; // firefox
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    addCart(item, index) {
      const addCartBtn = this.$refs[`addCartBtn-${index}`];
      addCartBtn.classList.add('disabled');
      addCartBtn.children[0].classList.remove('d-none');
      const cartIds = this.carts.map((product) => product.product_id);
      if (cartIds.includes(this.moreInfo.productInfo.id)) {
        // 如果是 true 代表曾經加入過同商品，找出曾被加入的商品的 index
        const repeatIndex = cartIds.indexOf(this.moreInfo.productInfo.id);
        const propertyNameArr = Object.getOwnPropertyNames(this.carts[repeatIndex]);
        const name = `${this.moreInfo.startDate}-${item.optionName}`;
        if (propertyNameArr.includes(name)) {
          // 比對該商品是否有相同屬性的名字，代表曾被加入購物車項目的方案和時間，跟現在要加入的都相同，可以累加
          // 找到要累加的值跟現在加入的新值相加
          const data = {
            data: {
              product_id: this.moreInfo.productInfo.id,
              qty: 0,
            },
          };
          data.data[name] = {
            qtyDetail: {
              adult: this.carts[repeatIndex][name].qtyDetail.adult + this.moreInfo.tktNum.adult,
              child: this.carts[repeatIndex][name].qtyDetail.child + this.moreInfo.tktNum.child,
            },
            start_date: this.moreInfo.startDate,
            optionName: item.optionName,
          };
          this.$http
            .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, data)
            .then((res) => {
              if (res.data.success) {
                this.customAlert('已加入購物車');
                window.setTimeout(this.closeCustomAlert, 5000);
                this.moreInfo.startDate = '';
                this.moreInfo.tktNum.adult = 1;
                this.moreInfo.tktNum.child = 0;
                addCartBtn.classList.remove('disabled');
                addCartBtn.children[0].classList.add('d-none');
                emitter.emit('update-cart');
              } else {
                this.customAlert(res.data.message);
                window.setTimeout(this.closeCustomAlert, 5000);
                addCartBtn.classList.remove('disabled');
                addCartBtn.children[0].classList.add('d-none');
                emitter.emit('update-cart');
              }
            })
            .catch((err) => {
              this.customAlert(err.response);
              window.setTimeout(this.closeCustomAlert, 5000);
              addCartBtn.classList.remove('disabled');
              addCartBtn.children[0].classList.add('d-none');
              emitter.emit('update-cart');
            });
        } else {
          // 其中有東西不同，不要累加
          const data = {
            data: {
              ...this.carts[repeatIndex],
            },
          };
          data.data[name] = {
            qtyDetail: { ...this.moreInfo.tktNum },
            start_date: this.moreInfo.startDate,
            optionName: item.optionName,
          };
          this.$http
            .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, data)
            .then((res) => {
              if (res.data.success) {
                this.customAlert('已加入購物車');
                window.setTimeout(this.closeCustomAlert, 5000);
                this.moreInfo.startDate = '';
                this.moreInfo.tktNum.adult = 1;
                this.moreInfo.tktNum.child = 0;
                addCartBtn.classList.remove('disabled');
                addCartBtn.children[0].classList.add('d-none');
                emitter.emit('update-cart');
              } else {
                this.customAlert(res.data.message);
                window.setTimeout(this.closeCustomAlert, 5000);
                addCartBtn.classList.remove('disabled');
                addCartBtn.children[0].classList.add('d-none');
                emitter.emit('update-cart');
              }
            })
            .catch((err) => {
              this.customAlert(err.response);
              window.setTimeout(this.closeCustomAlert, 5000);
              addCartBtn.classList.remove('disabled');
              addCartBtn.children[0].classList.add('d-none');
              emitter.emit('update-cart');
            });
        }
      } else {
        // 如果是 false 代表不曾加入過同商品
        const data = {
          data: {
            product_id: this.moreInfo.productInfo.id,
            qty: 0,
          },
        };
        data.data[`${this.moreInfo.startDate}-${item.optionName}`] = {
          qtyDetail: { ...this.moreInfo.tktNum },
          start_date: this.moreInfo.startDate,
          optionName: item.optionName,
        };
        this.$http
          .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, data)
          .then((res) => {
            if (res.data.success) {
              this.customAlert('已加入購物車');
              window.setTimeout(this.closeCustomAlert, 5000);
              this.moreInfo.startDate = '';
              this.moreInfo.tktNum.adult = 1;
              this.moreInfo.tktNum.child = 0;
              addCartBtn.classList.remove('disabled');
              addCartBtn.children[0].classList.add('d-none');
              emitter.emit('update-cart');
            } else {
              this.customAlert(res.data.message);
              window.setTimeout(this.closeCustomAlert, 5000);
              addCartBtn.classList.remove('disabled');
              addCartBtn.children[0].classList.add('d-none');
              emitter.emit('update-cart');
            }
          })
          .catch((err) => {
            this.customAlert(err.response);
            window.setTimeout(this.closeCustomAlert, 5000);
            addCartBtn.classList.remove('disabled');
            addCartBtn.children[0].classList.add('d-none');
            emitter.emit('update-cart');
          });
      }
    },
    changeTktNum(tktType, calcType) {
      if (tktType === 'adult') {
        if (calcType === 'plus') {
          this.moreInfo.tktNum.adult += 1;
        } else if (calcType === 'minus' && this.moreInfo.tktNum.adult >= 2) {
          this.moreInfo.tktNum.adult -= 1;
        }
      } else if (tktType === 'child') {
        if (calcType === 'plus') {
          this.moreInfo.tktNum.child += 1;
        } else if (calcType === 'minus' && this.moreInfo.tktNum.child >= 1) {
          this.moreInfo.tktNum.child -= 1;
        }
      }
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
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
      this.btnShow = window.scrollY > 0;
    };
    window.addEventListener('scroll', this.listener);
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
