<template>
  <!--top navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container align-items-center">
      <h1>
        <router-link href="#" to="/" class="logo">
          旅味
        </router-link>
      </h1>
      <div
        class="collapse navbar-collapse justify-content-between ms-3"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/admin/product"
              class="nav-link"
              aria-current="true"
              active-class="active"
            >
              管理產品
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/order" class="nav-link" active-class="active">
              管理訂單
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupon" class="nav-link" active-class="active">
              管理優惠券
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/article" class="nav-link" active-class="active">
              管理文章
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav h3">
          <li class="nav-item">
            <a class="nav-link px-3" @click="openModal(this.accountBsModal)">
              <i class="bi bi-person-circle"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3">
              <i class="bi bi-gear-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- account modal -->
  <div
    class="modal fade"
    ref="accountModal"
    tabindex="-1"
    aria-labelledby="accountModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-sm">
      <div class="modal-content bg-secondary">
        <div class="modal-body px-3">
          <div class="container-fluid">
            <div class="text-end">
              <button
                type="button"
                class="bg-transparent border-0 p-2 text-white h3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
            <div class="row justify-content-center">
              <div class="text-center text-white">
                <i class="bi bi-person-circle h1 mb-2"></i>
                <h2 class="mb-6">{{ accountData.hexLoginName }}</h2>
                <ul class="text-start d-inline-block">
                  <li class="mb-2">
                    登入時間：<br />
                    {{ accountData.hexTokenStart }}
                  </li>
                  <li class="mb-6">
                    有效期限：<br />
                    {{ accountData.hexTokenExpired }}
                  </li>
                </ul>
                <button
                  type="button"
                  class="btn btn-primary w-50 mx-auto
                    d-flex justify-content-center align-items-center"
                  ref="logoutBtn"
                  @click="logout"
                >
                  <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <p class="ms-1">登出</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 主要內容 -->
  <router-view v-if="checkSuccess"></router-view>
  <!--alert-->
  <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
</template>
<script>
import alert from '@/components/backend/Alert.vue';
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      checkSuccess: false,
      accountBsModal: '',
      accountData: {
        hexLoginName: '',
        hexToken: '',
        hexTokenStart: '',
        hexTokenExpired: '',
      },
      showAlert: false,
      alertMsg: '',
    };
  },
  components: {
    alert,
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      const loginName = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexLoginName\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      const tokenStart = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexTokenStart\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      const tokenExpired = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexTokenExpired\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      this.accountData.hexLoginName = loginName;
      this.accountData.hexToken = token;
      this.accountData.hexTokenStart = tokenStart;
      this.accountData.hexTokenExpired = tokenExpired;
      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const data = { api_token: this.token };
        this.$http.post(`${process.env.VUE_APP_API}/api/user/check`, data).then((res) => {
          if (res.data.success) {
            this.checkSuccess = true;
          } else {
            this.customAlert('您尚未登入');
            window.setTimeout(this.closeCustomAlert, 5000);
            this.$router.push('/login');
          }
        });
      } else {
        this.customAlert('您尚未登入');
        window.setTimeout(this.closeCustomAlert, 5000);
        this.$router.push('/login');
      }
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    openModal(target) {
      target.show();
    },
    logout() {
      const { logoutBtn } = this.$refs;
      logoutBtn.classList.add('disabled');
      logoutBtn.children[0].classList.remove('d-none');
      Object.keys(this.accountData).forEach((item) => {
        document.cookie = `${item}=${this.accountData.item};expires=Thu, 01-Jan-70 00:00:01 GMT;path=/`;
      });
      logoutBtn.classList.remove('disabled');
      logoutBtn.children[0].classList.add('d-none');
      this.customAlert('已成功登出');
      window.setTimeout(this.closeCustomAlert, 5000);
      this.accountBsModal.hide();
      this.$router.push('/'); // 自動跳轉畫面
    },
  },
  mounted() {
    this.accountBsModal = new Modal(this.$refs.accountModal);
    this.checkLogin();
  },
};
</script>
