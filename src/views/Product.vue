<template>
  <div>
    <div class="container">
      <div class="row py-8">
        <div class="col-lg-4">
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
            <li class="list-group-item" @click.prevent="toMoreActivities">
              <a
                href="#"
                class="list-group-link"
                @click.prevent="goAnchor('#moreActivitiesSection')"
                >更多相似活動</a
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-8">
          <Swiper
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
            }"
            :loop="true"
            :slides-per-view="3"
            :spaceBetween="200"
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
          <!-- Modal -->
          <div
            class="modal fade p-0"
            id="productPageImgModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-xl">
              <div class="modal-content rounded-0">
                <div class="modal-body p-0">
                  <Swiper
                    :autoplay="{
                      delay: 5000,
                      disableOnInteraction: false,
                    }"
                    :loop="true"
                    :centeredSlides="true"
                    :navigation="true"
                    :thumbs="{ swiper: thumbsSwiper }"
                    class="gallery-top"
                  >
                    <SwiperSlide v-for="item in moreInfo.productInfo.imagesUrl" :key="item.id">
                      <img :src="item" class="swiper-img" />
                    </SwiperSlide>
                  </Swiper>
                  <swiper
                    @swiper="setThumbsSwiper"
                    :loop="true"
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
                    <!-- </swiper>

                  <Swiper
                    :autoplay="{
                      delay: 5000,
                      disableOnInteraction: false,
                    }"
                    :loop="true"
                    class="mySwiper"
                  >
                    <SwiperSlide v-for="item in moreInfo.productInfo.imagesUrl" :key="item.id">
                      <img :src="item" class="swiper-img" />
                    </SwiperSlide> -->
                  </swiper>
                </div>
              </div>
            </div>
          </div>
          <div class="px-6 pt-6 pb-3">
            <h2 class="text-primary text-center fw-bold mb-6">{{ moreInfo.productInfo.title }}</h2>
            <div class="d-flex justify-content-center mb-6">
              <div
                v-for="(item, index) in moreInfo.productInfo.attractionArr"
                :key="index"
                class="d-flex flex-column align-items-center h3 attraction-line"
                :class="{
                  'ms-5': index !== 0,
                }"
              >
                <i class="bi bi-record-circle mb-1"></i>
                <p>{{ item }}</p>
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
          <div class="px-6 pt-6 pb-8">
            <div class="d-flex justify-content-between mb-3" id="packageOptionsSection">
              <h3 class="text-primary">選擇方案</h3>
              <div class="d-flex h5">
                <div class="d-flex flex-column align-items-center">
                  <label for="tktAdultNum" class="mb-1">成人（ 12+ ）</label>
                  <div class="d-flex align-items-center">
                    <button
                      class="border-0 bg-transparent p-2"
                      @click="changeTktNum('adult', 'minus')"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <p class="p-1">
                      {{ moreInfo.tktNum.adult }}
                    </p>
                    <button
                      class="border-0 bg-transparent p-2"
                      @click="changeTktNum('adult', 'plus')"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
                <div class="d-flex flex-column align-items-center ms-2">
                  <label for="tktChildNum" class="mb-1">孩童（ 6~12 ）</label>
                  <div class="d-flex align-items-center">
                    <button
                      class="border-0 bg-transparent p-2"
                      @click="changeTktNum('child', 'minus')"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <p class="p-1">
                      {{ moreInfo.tktNum.child }}
                    </p>
                    <button
                      class="border-0 bg-transparent p-2"
                      @click="changeTktNum('child', 'plus')"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
                <div class="d-flex flex-column align-items-center ms-2">
                  <label for="startDate" class="mb-2 text-center">選擇日期</label>
                  <flat-pickr
                    id="startDate"
                    ref="startDate"
                    :config="config"
                    v-model="moreInfo.startDate"
                    class="py-1 text-center"
                  ></flat-pickr>
                </div>
              </div>
            </div>
            <ul class="mb-5">
              <li
                v-for="(item, index) in moreInfo.productInfo.packageOptions"
                :key="item.optionName"
                class="card card-row bg-light"
                :class="{ 'mb-3': index !== moreInfo.productInfo.packageOptions.length - 1 }"
              >
                <img
                  class="card-row-img"
                  :src="moreInfo.productInfo.imageUrl"
                  :alt="item.optionName"
                />
                <div class="card-body flex-row">
                  <div>
                    <h3 class="card-title mb-3">
                      {{ item.optionName }}
                      <span class="h4 ms-2">集合時間： {{ item.meetingTime }}</span>
                    </h3>
                    <template v-for="(content, key) in item.contentArr" :key="key">
                      <p v-if="key < 4">
                        <i class="bi bi-check2"></i>
                        {{ content }}
                      </p>
                    </template>
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      v-if="item.contentArr.length > 4"
                      class="text-secondary"
                    >
                      <i class="bi bi-question-diamond-fill"></i>
                      查看更多方案包含細項
                    </a>
                    <!-- Modal -->
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-body">
                            <h3 class="pb-3 mb-3 border-bottom border-gray">
                              {{ item.optionName }}
                            </h3>
                            <p v-for="(content, key) in item.contentArr" :key="key">
                              <i class="bi bi-check2"></i>
                              {{ content }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex flex-column justify-content-end align-items-end">
                    <p class="mb-2">
                      <span class="h3">NT {{ item.price }}</span>
                      / {{ item.unit }}
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary d-flex justify-content-center align-items-center"
                      ref="addCartBtn"
                      @click="addCart(item.optionName)"
                      :disabled="moreInfo.startDate === '' || moreInfo.tktNum.adult < 1"
                    >
                      <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <p class="ms-1" v-if="moreInfo.startDate === ''">填寫上方日期</p>
                      <p class="ms-1" v-else>現在預訂</p>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <div id="ruleSection">
              <h3 class="text-primary mb-5">相關規定</h3>
              <p>{{ moreInfo.productInfo.policy }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light pt-6 pb-8" id="moreActivitiesSection">
      <div class="container">
        <h3 class="text-primary mb-5">更多相似活動</h3>
        <div class="row">
          <div class="col-4" v-for="(item, key) in randomProducts" :key="key">
            <router-link :to="`/product/${item.id}`" title="查看更多" class="card overflow-hidden">
              <div class="card-img-outer">
                <img :src="item.imageUrl" :alt="item.title" class="card-img" />
              </div>
              <div class="card-body">
                <h4 class="card-title ellipsis">{{ item.title }}</h4>
                <p class="h3 text-end">
                  NT {{ item.lowestPrice }} 起
                  <span class="h4"> / {{ item.lowestPriceUnit }}</span>
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!--alert-->
    <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
  </div>
</template>
<script>
import alert from '@/components/Alert.vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  data() {
    return {
      config: {
        altFormat: 'F j, Y',
        dateFormat: 'Y-m-d',
        minDate: 'today',
      },
      moreInfo: {
        productInfo: {},
        startDate: '',
        tktNum: {
          adult: 1,
          child: 0,
        },
      },
      totalProducts: [],
      randomProducts: [],
      showAlert: false,
      alertMsg: '',
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
              // this.products[index].lowestPrice = packageOptionsPrice[0];
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
      console.log(tagCheck);
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
    goAnchor(selector) {
      const anchor = this.$el.querySelector(selector);
      document.body.scrollTop = anchor.offsetTop; // chrome
      document.documentElement.scrollTop = anchor.offsetTop; // firefox
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    addCart(optionName) {
      const { addCartBtn } = this.$refs;
      addCartBtn.classList.add('disabled');
      addCartBtn.children[0].classList.remove('d-none');
      const data = {
        data: {
          product_id: this.moreInfo.productInfo.id,
          qty: this.moreInfo.tktNum.adult + this.moreInfo.tktNum.child,
          qtyDetail: this.moreInfo.tktNum,
          start_date: this.moreInfo.startDate,
          optionName,
        },
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
          } else {
            console.log(res.data);
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.data);
          this.customAlert(err.response);
        });
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
  },
  created() {
    this.getData();
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.$router.go(); // 加這句不然按更多相似活動時，網址有變內容卻要手動重新整理才會變新商品
      },
    },
  },
};
</script>
