<template>
  <div
    id="deleteModal"
    ref="deleteModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content delete-modal-bg">
        <div class="modal-body">
          <div class="text-end">
            <button
              type="button"
              class="bg-transparent border-0 p-2 text-secondary h3"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          <div class="delete-modal-inner-bg mb-4">
            <!--若要刪除的是商品，跳出下列文字-->
            <div class="text-center" v-if="tempItem.hasOwnProperty('is_mainProduct')">
              <p class="h3 mb-2">{{ tempItem.title }}</p>
              <p>一經刪除及無法復原，是否確認刪除？</p>
            </div>
            <!--若要刪除的是優惠券，跳出下列文字-->
            <div class="text-center" v-else-if="tempItem.hasOwnProperty('code')">
              <p class="h3 mb-2">優惠券代碼：{{ tempItem.code }}</p>
              <p>一經刪除及無法復原，是否確認刪除？</p>
            </div>
            <!--若要刪除的是訂單，跳出下列文字-->
            <div class="text-center" v-else-if="tempItem.hasOwnProperty('user')">
              <p class="h3 mb-2">訂單編號：{{ tempItem.id }}</p>
              <p>一經刪除及無法復原，是否確認刪除？</p>
            </div>
            <!--若要刪除的是文章，跳出下列文字-->
            <div class="text-center" v-else-if="tempItem.hasOwnProperty('author')">
              <p class="h3 mb-2">{{ tempItem.title }}</p>
              <p>一經刪除及無法復原，是否確認刪除？</p>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-primary w-25 d-block"
              @click="$emit('emit-delete-modal')"
            >
              確認刪除
            </button>
            <button
              type="button"
              class="btn btn-outline-primary w-25 d-block ms-3"
              data-bs-dismiss="modal"
            >
              取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['temp'],
  emits: ['emit-delete-modal'],
  data() {
    return {
      tempItem: {},
    };
  },
  watch: {
    temp() {
      this.tempItem = { ...this.temp }; // 當 temp props 有變時，把 tempItem 改掉
    },
  },
  created() {
    this.tempItem = { ...this.temp };
  },
};
</script>
