<template>
  <div class="pt-7">
    <div class="container">
      <div class="row justify-content-center pt-8" :class="{ 'pb-8': randomProducts.length !== 0 }">
        <div class="col-lg-8">
          <div class="d-flex justify-content-between mb-lg-6 mb-md-4 mb-2">
            <div>
              <h2 class="mb-2">{{ article.title }}</h2>
              <p class="text-gray-dark">文：{{ article.author }}</p>
            </div>
            <p>{{ article.create_at }}</p>
          </div>
          <div class="mb-4">
            <span
              v-for="(item, key) in article.tagCheck"
              :key="key"
              class="text-secondary"
              :class="{ 'ms-2': key !== 0 }"
              >#{{ item }}</span
            >
          </div>
          <div class="mb-8">
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
              <SwiperSlide v-for="item in article.imagesUrl" :key="item.id">
                <img :src="item" class="swiper-img" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              @swiper="setThumbsSwiper"
              :loop="true"
              :slidesPerView="4"
              :spaceBetween="10"
              :freeMode="true"
              :watchSlidesVisibility="true"
              :watchSlidesProgress="true"
              class="gallery-thumbs"
            >
              <SwiperSlide v-for="item in article.imagesUrl" :key="item.id">
                <img :src="item" class="swiper-img" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div v-html="article.content" class="ckeditor-content"></div>
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

export default {
  data() {
    return {
      article: [],
      content: [],
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
  },
  methods: {
    getArticleData() {
      const seed = this.id;
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${seed}`)
        .then((res) => {
          if (res.data.success) {
            this.article = res.data.article;
            this.article.create_at = new Date(this.article.create_at * 1000)
              .toISOString()
              .split('T')[0]
              .replace(/-/g, ' / ');
            // // 如果 imagesUrl 裡有空字串，把它刪掉再顯示，避免圖片顯示錯誤
            // this.moreInfo.productInfo.imagesUrl = this.moreInfo.productInfo.imagesUrl.filter(
            //   (e) => e !== '',
            // );
            this.getTotalProducts();
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
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
        });
    },
    getRandomProducts() {
      const { tagCheck } = this.article;
      let area;
      if (
        tagCheck.find(
          (e) => e === '基隆'
            || e === '台北'
            || e === '新北'
            || e === '桃園'
            || e === '新竹'
            || e === '苗栗',
        )
      ) {
        area = '雙北';
      } else if (
        tagCheck.find((e) => e === '台中' || e === '彰化' || e === '南投' || e === '雲林')
      ) {
        area = '中彰投';
      } else if (tagCheck.find((e) => e === '嘉義' || e === '台南')) {
        area = '嘉南';
      } else if (tagCheck.find((e) => e === '高雄' || e === '屏東')) {
        area = '高屏';
      } else if (
        tagCheck.find((e) => e === '宜蘭' || e === '花蓮' || e === '台東' || e === '離島')
      ) {
        area = '花東';
      }
      const filterArr = [];
      this.totalProducts.forEach((item) => {
        item.tagCheck.forEach((i) => {
          if (i === area) {
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
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
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
    this.getArticleData();
    this.listener = () => {
      this.btnShow = window.scrollY > 0;
    };
    window.addEventListener('scroll', this.listener);
  },
  unmounted() {
    window.removeEventListener('scroll', this.listener);
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
