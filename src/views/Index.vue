<template>
  <div>
    <div class="banner">
      <h2 class="h1 fw-bold mb-4">品嚐<span class="text-secondary">旅程</span>的滋味</h2>
      <i class="bi bi-arrow-down-circle-fill h2 text-secondary"></i>
    </div>
    <div class="container py-8">
      <div class="mb-7">
        <h2 class="h2 text-primary mb-3">下個目的地？</h2>
        <ul class="row">
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/img/TPE.png" alt="雙北" class="tab-img" />
              <div class="tab-title">雙北</div>
            </a>
          </li>
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/img/TXG.png" alt="中彰投" class="tab-img" />
              <div class="tab-title">中彰投</div>
            </a>
          </li>
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/img/TNN.png" alt="嘉南" class="tab-img" />
              <div class="tab-title">嘉南</div>
            </a>
          </li>
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/img/KAO.png" alt="高屏" class="tab-img" />
              <div class="tab-title">高屏</div>
            </a>
          </li>
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/img/HUN.png" alt="花東" class="tab-img" />
              <div class="tab-title">花東</div>
            </a>
          </li>
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/img/random.png" alt="來點驚喜" class="tab-img" />
              <div class="tab-title">來點驚喜</div>
            </a>
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
          class="mySwiper"
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
      <div>
        <h2 class="h2 text-primary mb-6">更多玩樂靈感</h2>
        <div class="row">
          <div class="col-lg-8">
            <div class="list-item">
              <!-- <router-link :to="`/product/${item.id}`" title="查看更多"> -->
              <div class="list-item-img-outer">
                <img class="list-item-img" />
              </div>
              <div class="list-item-inner">
                <h3 class="list-item-title"></h3>
                <p class="list-item-subtitle"></p>
              </div>
              <!-- </router-link> -->
            </div>
          </div>
          <div class="col-lg-4">
            <div></div>
            <div></div>
          </div>
          <div class="col-lg-6"></div>
          <div class="col-lg-6"></div>
        </div>
      </div>
    </div>
  </div>
  <!--alert-->
  <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
</template>
<script>
import alert from '@/components/Alert.vue';

export default {
  data() {
    return {
      mainProducts: [],
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
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
  },
  mounted() {
    this.getMainProduct();
  },
};
</script>
