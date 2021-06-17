<template>
  <!--top navbar--><!--還來不及處理，之後會讓前後台有不同 top navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid align-items-center">
      <router-link href="#" to="/" class="navbar-brand d-flex align-items-center">
        六腳青旅
        <span class="material-icons ms-2"> api </span>
      </router-link>
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              href="#"
              to="/admin/product"
              class="nav-link"
              aria-current="true"
              active-class="active"
            >
              產品列表
            </router-link>
          </li>
          <li class="nav-item">
            <router-link href="#" to="/admin/order" class="nav-link" active-class="active"
              >訂單列表</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" @click="openModal(this.accountBsModal)">
              <span class="material-icons"> account_circle </span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <span class="material-icons"> settings </span>
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
      <div class="modal-content logout-bg">
        <div class="modal-body px-3">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-11">
                <button
                  type="button"
                  class="close-modal-btn close-modal-sm-btn bg-light-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span class="material-icons"> clear </span>
                </button>
                <div class="text-center">
                  <span class="logout-icon material-icons text-danger mb-2">
                    account_circle
                  </span>
                  <h2 class="mb-6 text-danger">{{ this.accountData.hexLoginName }}</h2>
                  <ul class="text-start d-inline-block text-dark">
                    <li class="mb-2">
                      登入時間：<br />
                      {{ this.accountData.hexTokenStart }}
                    </li>
                    <li class="mb-6">
                      有效期限：<br />
                      {{ this.accountData.hexTokenExpired }}
                    </li>
                  </ul>
                  <button
                    type="button"
                    class="btn btn-primary mx-auto w-50 d-block"
                    @click="logout"
                  >
                    登出
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 主要內容 -->
  <div class="container py-4">
    <router-view></router-view>
  </div>
</template>
<script>
import { Modal } from 'bootstrap';

export default {
  data() {
    return {
      accountBsModal: '',
      accountData: {
        hexLoginName: '',
        hexToken: '',
        hexTokenStart: '',
        hexTokenExpired: '',
      },
    };
  },
  methods: {
    openModal(target) {
      target.show();
    },
    logout() {
      Object.keys(this.accountData).forEach((item) => {
        document.cookie = `${item}=${this.accountData.item};expires=Thu, 01-Jan-70 00:00:01 GMT;path=/`;
      });
      alert('已成功登出');
      this.accountBsModal.hide();
      this.$router.push('/'); // 自動跳轉畫面
    },
  },
  mounted() {
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
    if (!token) {
      alert('您尚未登入');
      this.$router.push('/');
    }
    this.$http.defaults.headers.common.Authorization = token;
    this.accountBsModal = new Modal(this.$refs.accountModal);
  },
};
</script>
