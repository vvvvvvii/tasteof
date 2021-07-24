<template>
  <div class="d-flex flex-column min-vh-100">
    <!--top navbar-->
    <Navbar></Navbar>
    <router-view></router-view>
    <!--footer-->
    <Footer :check-success="checkSuccess"></Footer>
  </div>
</template>
<script>
import Navbar from '@/components/frontend/Navbar.vue';
import Footer from '@/components/frontend/Footer.vue';

export default {
  data() {
    return {
      checkSuccess: '',
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const data = { api_token: this.token };
        this.$http.post(`${process.env.VUE_APP_API}/api/user/check`, data).then((res) => {
          if (res.data.success) {
            this.checkSuccess = true;
          } else {
            this.checkSuccess = false;
          }
        });
      } else {
        this.checkSuccess = false;
      }
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
