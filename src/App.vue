<template>
  <div id="nav" class="px-2 py-5 text-center">
    <router-link to="/">首頁</router-link> |
    <router-link to="/product_list">前台產品頁</router-link> |
    <router-link to="/cart">前台購物車頁</router-link> |
    <router-link to="/login">登入頁</router-link> |
    <router-link to="/admin/product">後台</router-link>
  </div>
  <router-view></router-view>
</template>
<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
