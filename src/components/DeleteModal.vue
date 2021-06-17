<template>
  <div
    id="deleteModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content delete-modal-bg">
        <div class="modal-body">
          <button
            type="button"
            class="close-modal-btn close-modal-m-btn bg-danger"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span class="material-icons"> clear </span>
          </button>
          <div class="delete-modal-inner-bg mb-4">
            <!--若要刪除的是商品，跳出下列文字-->
            <div v-if="tempItem.hasOwnProperty('title')">
              <p class="h5">{{ tempItem.title }}</p>
              <p>商品一經刪除及無法復原，是否確認刪除？</p>
            </div>
            <!--若要刪除的是訂單，跳出下列文字-->
            <div v-else>
              <p class="h5">訂單編號：{{ tempItem.id }}</p>
              <p>訂單一經刪除及無法復原，是否確認刪除？</p>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-dark w-25 d-block"
              @click="$emit('emit-delete-modal')"
            >
              確認刪除
            </button>
            <button
              type="button"
              class="btn btn-outline-light w-25 d-block ms-3"
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
  data() {
    return {
      tempItem: { ...this.temp },
    };
  },
  watch: {
    temp() {
      this.tempItem = { ...this.temp }; // 當 temp props 有變時，把 tempItem 改掉
      console.log(this.tempItem);
    },
  },
  created() {
    this.tempItem = { ...this.temp };
  },
};
</script>
