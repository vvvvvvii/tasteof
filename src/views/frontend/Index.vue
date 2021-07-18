<template>
  <div class="pt-7">
    <div class="banner">
      <div class="container">
        <!--電腦以上-->
        <ul class="d-lg-block d-none">
          <li>
            <router-link to="/product_list?search=城市導覽" exact-path>
              <div class="banner-btn banner-btn-city-tour">
                <h3 class="banner-title h2-lg banner-btn-city-tour-title"># 城市導覽</h3>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/product_list?search=體驗票券" exact-path>
              <div class="banner-btn banner-btn-tkt">
                <h3 class="banner-title h2-lg banner-btn-tkt-title"># 體驗票券</h3>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/product_list?search=包車服務" exact-path>
              <div class="banner-btn banner-btn-rent-car">
                <h3 class="banner-title h2-lg banner-btn-rent-car-title"># 包車服務</h3>
              </div>
            </router-link>
          </li>
        </ul>
        <ul class="d-lg-block d-none">
          <li>
            <router-link :to="`/product_list?search=雙北`" exact-path>
              <div class="banner-btn banner-btn-tpe">
                <h3 class="banner-title h4 banner-btn-tpe-title"># 大台北</h3>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="`/product_list?search=中彰投`" exact-path>
              <div class="banner-btn banner-btn-txg">
                <h3 class="banner-title h4 banner-btn-txg-title"># 中彰投</h3>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="`/product_list?search=嘉南`" exact-path>
              <div class="banner-btn banner-btn-tnn">
                <h3 class="banner-title h4 banner-btn-tnn-title"># 嘉南</h3>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="`/product_list?search=高屏`" exact-path>
              <div class="banner-btn banner-btn-kao">
                <h3 class="banner-title h4 banner-btn-kao-title"># 高屏</h3>
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="`/product_list?search=花東`" exact-path>
              <div class="banner-btn banner-btn-hun">
                <h3 class="banner-title h4 banner-btn-hun-title"># 花東</h3>
              </div>
            </router-link>
          </li>
        </ul>
        <div class="car"></div>
        <div class="d-lg-block d-none banner-text">
          <h2 class="h1-lg fw-bold mb-2">品嚐</h2>
          <h2 class="h1-lg fw-bold mb-4 d-flex align-items-center">
            旅程滋味
            <i class="bi bi-arrow-down-circle-fill h2 ms-2"></i>
          </h2>
        </div>
        <!--平板以下-->
        <ul class="row d-lg-none align-items-center">
          <li class="col-sm-4 col-6 mb-4">
            <router-link to="/product_list?search=城市導覽" exact-path>
              <div class="banner-btn banner-btn-city-tour mx-auto mb-2"></div>
              <div class="text-center">
                <h3 class="banner-title h4 banner-btn-city-tour-title d-inline">
                  # 城市導覽
                </h3>
              </div>
            </router-link>
          </li>
          <li class="col-sm-4 col-6 mb-4">
            <router-link to="/product_list?search=體驗票券" exact-path>
              <div class="banner-btn banner-btn-tkt mx-auto mb-2"></div>
              <div class="text-center">
                <h3 class="banner-title h4 banner-btn-tkt-title d-inline"># 體驗票券</h3>
              </div>
            </router-link>
          </li>
          <li class="col-sm-4 col-6 mb-4">
            <router-link to="/product_list?search=包車服務" exact-path>
              <div class="banner-btn banner-btn-rent-car mx-auto mb-2"></div>
              <div class="text-center">
                <h3 class="banner-title h4 banner-btn-rent-car-title d-inline"># 包車服務</h3>
              </div>
            </router-link>
          </li>
          <li class="col-sm-4 col-6 mb-4">
            <router-link to="/product_list?search=嘉南" exact-path>
              <div class="banner-btn banner-btn-tnn mx-auto mb-2"></div>
              <div class="text-center">
                <h3 class="banner-title h4 banner-btn-tnn-title d-inline"># 嘉南</h3>
              </div>
            </router-link>
          </li>
          <li class="col-sm-4 mb-4">
            <div class="banner-text text-center">
              <h2 class="fw-bold mb-2">品嚐</h2>
              <h2 class="fw-bold mb-4">
                旅程滋味
                <i class="bi bi-arrow-down-circle-fill"></i>
              </h2>
            </div>
          </li>
          <li class="col-sm-4 col-6 mb-4">
            <router-link to="/product_list?search=高屏" exact-path>
              <div class="banner-btn banner-btn-kao mx-auto mb-2"></div>
              <div class="text-center">
                <h3 class="banner-title h4 banner-btn-kao-title d-inline"># 高屏</h3>
              </div>
            </router-link>
          </li>
          <li class="col-sm-4 col-6 mb-4">
            <router-link to="/product_list?search=雙北" exact-path>
              <div class="banner-btn banner-btn-tpe mx-auto mb-2"></div>
              <div class="text-center">
                <h3 class="banner-title h4 banner-btn-tpe-title d-inline"># 雙北</h3>
              </div>
            </router-link>
          </li>
          <li class="col-sm-4 col-6 mb-4">
            <router-link to="/product_list?search=花東" exact-path>
              <div class="banner-btn banner-btn-hun mx-auto mb-2"></div>
              <div class="text-center">
                <h3 class="banner-title h4 banner-btn-hun-title d-inline"># 花東</h3>
              </div>
            </router-link>
          </li>
          <li class="col-sm-4 col-6 mb-4">
            <router-link to="/product_list?search=中彰投" exact-path>
              <div class="banner-btn banner-btn-txg mx-auto mb-2"></div>
              <div class="text-center">
                <h3 class="banner-title h4 banner-btn-txg-title d-inline"># 中彰投</h3>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="container py-8">
      <div class="mb-7">
        <h2 class="h2 text-primary mb-3">下個目的地？</h2>
        <ul class="row">
          <li class="col-md-4 col-6 mb-4" v-for="(item, key) in cities" :key="key">
            <router-link
              :to="`/product_list?search=${item.name}`"
              class="tab"
              active-class="active"
              exact-path
            >
              <img :src="`${item.imgUrl}`" :alt="`${item.name}`" class="tab-img" />
              <div class="tab-title">{{ item.name }}</div>
            </router-link>
          </li>
          <li class="col-md-4 col-6 mb-4">
            <!-- 讓 search= 隨機一個 tag -->
            <router-link
              :to="`/product_list?search=${randomCity}`"
              class="tab"
              active-class="active"
              exact-path
            >
              <img
                src="https://github.com/vvvvvvii/tasteof/blob/main/public/img/random.png?raw=true"
                alt="來點驚喜"
                class="tab-img"
              />
              <div class="tab-title">
                <p>來點<br />驚喜</p>
              </div>
            </router-link>
          </li>
        </ul>
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
      <div v-if="articles.length > 0">
        <h2 class="h2 text-primary mb-6">更多玩樂靈感</h2>
        <div class="row mb-md-3 mb-2">
          <div class="col-lg-8 col-md-6 mb-md-0 mb-2">
            <div class="list-item">
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
              <div class="list-item mb-2">
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
              <div class="list-item">
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
            <div class="list-item">
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
            <div class="list-item">
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
  </div>
  <!--alert-->
  <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
</template>
<script>
import alert from '@/components/backend/Alert.vue';

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
      cities: [
        {
          name: '雙北',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/TPE.png?raw=true',
        },
        {
          name: '中彰投',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/TXG.png?raw=true',
        },
        {
          name: '嘉南',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/TNN.png?raw=true',
        },
        {
          name: '高屏',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/KAO.png?raw=true',
        },
        {
          name: '花東',
          imgUrl: 'https://github.com/vvvvvvii/tasteof/blob/main/public/img/HUN.png?raw=true',
        },
      ],
      randomCity: '',
      btnShow: false,
      showAlert: false,
      alertMsg: '',
    };
  },
  components: { alert },
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
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
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
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
        });
    },
    getRandomCity() {
      const city = this.cities.map((item) => item.name);
      const { length } = city;
      const num = Math.floor(Math.random(length) * length);
      this.randomCity = city[num];
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
