<template>
  <div class="pt-7 flex-fill">
    <div class="banner">
      <div class="banner-inner">
        <h2 class="banner-title mb-3">品嚐旅程滋味</h2>
        <router-link
          :to="`/product_list?search=${bannerSubTitle}`"
          class="btn btn-outline-light h4-sm h5"
          active-class="active"
          exact-path
        >
          查看行程
        </router-link>
      </div>
    </div>
  </div>
  <div class="bg-light pb-7">
    <div class="container pt-8">
      <div class="mb-7">
        <h2 class="h2 text-primary mb-6">你愛的都在這！</h2>
        <ul class="row">
          <li class="col-lg-4 col-sm-6 mb-4" v-for="(item, key) in popularCategories" :key="key">
            <router-link
              :to="`/product_list?search=${item.urlTitle}`"
              class="tab bg-white border border-primary"
              active-class="active"
              exact-path
            >
              <img :src="`${item.imgUrl}`" :alt="`${item.name}`" class="tab-img" />
              <div>
                <h3 class="tab-title mb-2">{{ item.name }}</h3>
                <p class="tab-description">{{ item.description }}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="h2 text-primary mb-6">下個目的地？</h2>
        <ul class="row">
          <li class="col-lg-4 col-sm-6 mb-4" v-for="(item, key) in cities" :key="key">
            <router-link
              :to="`/product_list?search=${item.name}`"
              class="tab bg-white border border-primary"
              active-class="active"
              exact-path
            >
              <img :src="`${item.imgUrl}`" :alt="`${item.name}`" class="tab-img" />
              <div>
                <h3 class="tab-title mb-2">{{ item.name }}</h3>
                <p class="tab-description">{{ item.description }}</p>
              </div>
            </router-link>
          </li>
          <li class="col-lg-4 col-sm-6 mb-4">
            <router-link
              :to="`/product_list?search=${randomCity}`"
              class="tab bg-white border border-primary"
              active-class="active"
              exact-path
            >
              <img
                src="https://github.com/vvvvvvii/tasteof/blob/main/public/img/random.jpg?raw=true"
                alt="來點驚喜"
                class="tab-img"
              />
              <div>
                <h3 class="tab-title">來點<br />驚喜</h3>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container py-8">
    <div class="position-relative">
      <div class="car"></div>
    </div>
    <div class="mb-7" v-if="mainProducts.length > 0">
      <h2 class="h2 text-primary mb-6">本季主打</h2>
      <Swiper
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :navigation="true"
        :loop="true"
        :slides-per-view="3"
        :space-between="30"
        :breakpoints="swiperOptions.breakpoints"
      >
        <SwiperSlide class="list-item rounded-2" v-for="item in mainProducts" :key="item.id">
          <router-link :to="`/product/${item.id}`" title="查看更多">
            <div class="list-item-img-outer">
              <img :src="item.imageUrl" class="list-item-img" />
            </div>
            <div class="list-item-inner">
              <h3 class="list-item-title">{{ item.title }}</h3>
              <p class="list-item-subtitle">NT {{ item.price }}</p>
            </div>
          </router-link>
        </SwiperSlide>
      </Swiper>
    </div>
    <div v-if="articles.length > 0" class="pt-2">
      <div class="position-relative">
        <div class="car"></div>
      </div>
      <h2 class="h2 text-primary mb-6">更多玩樂靈感</h2>
      <div class="row mb-md-3 mb-2">
        <div class="col-lg-8 col-md-6 mb-md-0 mb-2">
          <div class="list-item rounded-2">
            <router-link :to="`/article/${articles[0].id}`" title="查看更多">
              <div class="list-item-img-outer">
                <img
                  class="list-item-img list-item-img-lg object-fit-cover"
                  :src="`${articles[0].image}`"
                />
              </div>
              <div class="list-item-inner">
                <h3 class="list-item-title">{{ articles[0].title }}</h3>
                <span
                  class="list-item-subtitle"
                  v-for="(item, key) in articles[0].tagCheck"
                  :key="key"
                >
                  # {{ item }}
                </span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="d-flex flex-column">
            <div class="list-item rounded-2 mb-2">
              <router-link :to="`/article/${articles[1].id}`" title="查看更多">
                <div class="list-item-img-outer">
                  <img
                    class="list-item-img list-item-img-sm object-fit-cover"
                    :src="`${articles[1].image}`"
                  />
                </div>
                <div class="list-item-inner">
                  <h3 class="list-item-title list-item-title-sm">{{ articles[1].title }}</h3>
                  <span
                    class="list-item-subtitle list-item-subtitle-sm"
                    v-for="(item, key) in articles[1].tagCheck"
                    :key="key"
                  >
                    # {{ item }}
                  </span>
                </div>
              </router-link>
            </div>
            <div class="list-item rounded-2">
              <router-link :to="`/article/${articles[2].id}`" title="查看更多">
                <div class="list-item-img-outer">
                  <img
                    class="list-item-img list-item-img-sm object-fit-cover"
                    :src="`${articles[2].image}`"
                  />
                </div>
                <div class="list-item-inner">
                  <h3 class="list-item-title list-item-title-sm">{{ articles[2].title }}</h3>
                  <span
                    class="list-item-subtitle list-item-subtitle-sm"
                    v-for="(item, key) in articles[2].tagCheck"
                    :key="key"
                  >
                    # {{ item }}
                  </span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-md-0 mb-2">
          <div class="list-item rounded-2">
            <router-link :to="`/article/${articles[3].id}`" title="查看更多">
              <div class="list-item-img-outer">
                <img class="list-item-img object-fit-cover" :src="`${articles[3].image}`" />
              </div>
              <div class="list-item-inner">
                <h3 class="list-item-title">{{ articles[3].title }}</h3>
                <span
                  class="list-item-subtitle"
                  v-for="(item, key) in articles[3].tagCheck"
                  :key="key"
                >
                  # {{ item }}
                </span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="list-item rounded-2">
            <router-link :to="`/article/${articles[4].id}`" title="查看更多">
              <div class="list-item-img-outer">
                <img class="list-item-img object-fit-cover" :src="`${articles[4].image}`" />
              </div>
              <div class="list-item-inner">
                <h3 class="list-item-title">{{ articles[4].title }}</h3>
                <span
                  class="list-item-subtitle"
                  v-for="(item, key) in articles[4].tagCheck"
                  :key="key"
                >
                  # {{ item }}
                </span>
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
  </div>
  <!--alert-->
  <Alert v-if="showAlert" :alert-msg="alertMsg"></Alert>
</template>
<script>
import Alert from '@/components/backend/Alert.vue';

export default {
  data() {
    return {
      swiperOptions: {
        breakpoints: {
          1: {
            slidesPerView: 1,
            spaceBetweenSlides: 30,
          },
          576: {
            slidesPerView: 2,
            spaceBetweenSlides: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetweenSlides: 30,
          },
        },
      },
      mainProducts: [],
      articles: [],
      popularCategories: [
        {
          name: '活動',
          urlTitle: '城市導覽',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/tour.jpg?raw=true',
          description: '帶您深入探索不曾接觸過的城市新樣貌',
        },
        {
          name: '票券',
          urlTitle: '體驗票券',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/tkt.jpg?raw=true',
          description: '一生一定要體驗一次的風景，都在這裡',
        },
        {
          name: '包車',
          urlTitle: '包車服務',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/car.jpg?raw=true',
          description: '不再需要攜老扶幼、大包小包趕車轉車',
        },
        {
          name: '親子',
          urlTitle: '親子',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/children.jpg?raw=true',
          description: '和孩子一起創造無可取代的專屬寶藏',
        },
        {
          name: '浪漫',
          urlTitle: '浪漫',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/romance.jpg?raw=true',
          description: '聽說一年有十三個情人節，準備好了嗎',
        },
        {
          name: '獨家',
          urlTitle: '獨家代理',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/special.jpg?raw=true',
          description: '只有我們有這些超讚行程，還在等什麼',
        },
      ],
      cities: [
        {
          name: '大台北',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/TPE.jpg?raw=true',
          description: '＃台北 101 ＃平溪天燈 ＃坪林採茶',
        },
        {
          name: '中彰投',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/TXG.jpg?raw=true',
          description: '＃彩虹眷村 ＃合歡山觀星 ＃日月潭',
        },
        {
          name: '嘉南',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/TNN.jpg?raw=true',
          description: '＃阿里山神木小火車 ＃台南美食之旅',
        },
        {
          name: '高屏',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/KAO.jpg?raw=true',
          description: '＃高雄建築巡禮',
        },
        {
          name: '花東',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/HUN.jpg?raw=true',
          description: '＃清水斷崖獨木舟',
        },
      ],
      randomCity: '',
      btnShow: false,
      showAlert: false,
      alertMsg: '',
      bannerSubTitle: '',
    };
  },
  components: { Alert },
  methods: {
    getMainProduct() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            const { products } = res.data;
            this.mainProducts = products.filter((item) => item.is_mainProduct);
            this.getRandomCity();
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    getArticles() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=1`)
        .then((res) => {
          if (res.data.success) {
            const { articles } = res.data;
            this.articles = articles;
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    getRandomCity() {
      const city = this.cities.map((item) => item.name);
      const { length } = city;
      const num = Math.floor(Math.random(length) * length);
      this.randomCity = city[num];
    },
    showBannerText(type) {
      this.bannerSubTitle = type;
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
      window.setTimeout(this.closeCustomAlert, 5000);
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.getMainProduct();
    this.getArticles();
    this.listener = () => {
      this.btnShow = window.scrollY > 400;
    };
    window.addEventListener('scroll', this.listener);
  },
  unmounted() {
    window.removeEventListener('scroll', this.listener);
  },
};
</script>
