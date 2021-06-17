<template>
  <!--top navbar-->
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
            <router-link to="/product_list" class="nav-link" active-class="active">
              產品頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link" active-class="active">
              購物車頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" active-class="active">
              登入頁
            </router-link>
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
  <router-view class="py-4"></router-view>
</template>
