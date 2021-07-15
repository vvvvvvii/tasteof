<template>
  <div class="bg-primary py-6">
    <div class="container">
      <ul class="d-flex justify-content-evenly pb-7 mb-5 border-bottom border-gray-dark">
        <li>
          <p class="text-white mb-5 ps-3">關於我們</p>
          <ul class="border-start border-gray ps-3">
            <li class="mb-2"><a href="#">認識我們</a></li>
            <li class="mb-2"><a href="#">版權聲明</a></li>
            <li class="mb-2"><a href="#">工作機會</a></li>
          </ul>
        </li>
        <li>
          <p class="text-white mb-5 ps-3">夥伴</p>
          <ul class="border-start border-gray ps-3">
            <li class="mb-2">
              <a href="#">如何成為夥伴</a>
            </li>
            <li class="mb-2">
              <a href="#">夥伴獨家福利</a>
            </li>
            <li class="mb-2">
              <a href="#">加入夥伴</a>
            </li>
            <li class="mb-2">
              <router-link v-if="checkSuccess" to="/admin/product">
                進入管理後台
              </router-link>
              <router-link v-else to="/login">
                登入管理後台
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <p class="text-white mb-5 ps-3">用戶</p>
          <ul class="border-start border-gray ps-3">
            <li class="mb-2"><a href="#">使用者條款</a></li>
            <li class="mb-2"><a href="#">常見問答</a></li>
            <li class="mb-2"><a href="#">聯繫客服</a></li>
          </ul>
        </li>
      </ul>
      <div class="d-flex justify-content-between px-3">
        <p class="text-white">© 2021 Taste_of</p>
        <ul class="d-flex h3">
          <li>
            <a href="#" class="d-block px-2" title="前往 facebook">
              <i class="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" class="d-block px-2" title="前往 instagram">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['checkSuccess'],
};
</script>
