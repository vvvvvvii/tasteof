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
              <img src="../assets/TPE.png" alt="雙北" class="tab-img" />
              <div class="tab-title">雙北</div>
            </a>
          </li>
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/TXG.png" alt="中彰投" class="tab-img" />
              <div class="tab-title">中彰投</div>
            </a>
          </li>
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/TNN.png" alt="嘉南" class="tab-img" />
              <div class="tab-title">嘉南</div>
            </a>
          </li>
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/KAO.png" alt="高屏" class="tab-img" />
              <div class="tab-title">高屏</div>
            </a>
          </li>
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/HUN.png" alt="花東" class="tab-img" />
              <div class="tab-title">花東</div>
            </a>
          </li>
          <li class="col-4  mb-4">
            <a href="#" class="tab">
              <img src="../assets/random.png" alt="來點驚喜" class="tab-img" />
              <div class="tab-title">來點驚喜</div>
            </a>
          </li>
        </ul>
      </div>
      <div class="mb-7">
        <h2 class="h2 text-primary mb-6">本季主打</h2>
        <!-- :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
          }" -->
        <Swiper
          :navigation="true"
          :loop="true"
          :slides-per-view="3"
          :space-between="30"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="mySwiper opacity-25"
        >
          <SwiperSlide class="list-item rounded-3 bg-primary">
            <h3 class="list-item-title">坪林採品茶體驗</h3>
            <p class="list-item-subtitle">NT 1300</p>
          </SwiperSlide>
          <SwiperSlide class="list-item rounded-3 bg-primary">
            <h3 class="list-item-title">JATS 嘉年華門票加四張搭乘券套組</h3>
            <p class="list-item-subtitle">NT 1300</p>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
      </div>
      <div>
        <h2 class="h2 text-primary mb-6">更多玩樂靈感</h2>
      </div>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
export default {
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>
