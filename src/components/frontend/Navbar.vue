<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div class="container align-items-center">
      <!-- 平板以下 logo 顯示 -->
      <h1 class="d-lg-none">
        <router-link href="#" to="/" class="logo">
          旅味
        </router-link>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <!-- 平板以上 logo 顯示 -->
        <h1 class="d-lg-block d-none">
          <router-link href="#" to="/" class="logo">
            旅味
          </router-link>
        </h1>
        <ul
          class="navbar-nav text-center align-items-center
          border-lg-bottom-0 border-bottom pb-lg-0 pb-3"
        >
          <li class="nav-item px-3">
            <router-link
              :to="{ path: '/product_list', query: { search: '城市導覽' } }"
              :class="{ active: this.$route.query.search === '城市導覽' }"
              class="nav-link"
            >
              活動
            </router-link>
          </li>
          <li class="nav-item d-lg-block d-none">
            <span class="border-start"></span>
          </li>
          <li class="nav-item px-3">
            <router-link
              :to="{ path: '/product_list', query: { search: '體驗票券' } }"
              :class="{ active: this.$route.query.search === '體驗票券' }"
              class="nav-link"
            >
              票券
            </router-link>
          </li>
          <li class="nav-item d-lg-block d-none">
            <span class="border-start"></span>
          </li>
          <li class="nav-item px-3">
            <router-link
              :to="{ path: '/product_list', query: { search: '包車服務' } }"
              :class="{ active: this.$route.query.search === '包車服務' }"
              class="nav-link"
            >
              包車
            </router-link>
          </li>
          <li class="nav-item d-lg-block d-none">
            <span class="border-start"></span>
          </li>
          <li class="nav-item px-3">
            <router-link to="/article_list" class="nav-link" active-class="active">
              靈感
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav h3 flex-row justify-content-around">
          <li class="nav-item">
            <router-link to="/cart" class="nav-link px-3 position-relative" active-class="active">
              <i class="bi bi-cart4"></i>
              <div class="cart-num">{{ this.cart.totalAmount }}</div>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3">
              <i class="bi bi-person-circle"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import emitter from '../../assets/js/emitter';

export default {
  data() {
    return {
      cart: {
        carts: [],
      },
    };
  },
  methods: {
    getCartInfo() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
            // 讓購物車以加入的方案計算總數
            this.cart.totalAmount = this.cart.carts.map((item) => item.options).flat().length;
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
  },
  mounted() {
    this.getCartInfo();
    emitter.on('update-cart', () => {
      this.getCartInfo();
    });
  },
  unmounted() {
    emitter.off('update-cart', () => {
      this.getCartInfo();
    });
  },
};
</script>
