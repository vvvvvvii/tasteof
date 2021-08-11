<template>
  <div
    id="commentModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="commentModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content product-modal-bg">
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
          <div class="container-fluid">
            <h2 class="text-center mb-6">{{ tempProduct.title }}</h2>
            <button
              type="button"
              class="btn btn-primary d-block w-50 mb-6 mx-auto"
              @click="addComment"
            >
              新增評論
            </button>
            <Form v-slot="{ errors }" @submit="submitComment">
              <div class="row">
                <div v-for="(item, key) in tempProduct.comments" :key="key" class="col-4 mb-6">
                  <div class="d-flex justify-content-between">
                    <img
                      :src="tempProduct.comments[key].imageUrl"
                      alt="使用者頭像"
                      class="comment-modal-img mb-2"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-primary h-50"
                      @click="deleteComment(key)"
                    >
                      刪除評論
                    </button>
                  </div>
                  <div class="mb-2">
                    <label :for="`userImgUrl-${key}`" class="form-label">使用者頭像</label>
                    <Field
                      type="text"
                      :id="`userImgUrl-${key}`"
                      :name="`使用者 ${key + 1} 頭像`"
                      class="form-control"
                      :class="{ 'is-invalid': errors[`使用者 ${key + 1} 頭像`] }"
                      rules="required"
                      placeholder="請輸入圖片網址"
                      v-model="tempProduct.comments[key].imageUrl"
                    ></Field>
                    <ErrorMessage
                      :name="`使用者 ${key + 1} 頭像`"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="mb-2">
                    <label :for="`userName-${key}`" class="form-label">使用者名稱</label>
                    <Field
                      type="text"
                      :id="`userName-${key}`"
                      :name="`使用者 ${key + 1} 名稱`"
                      class="form-control"
                      :class="{ 'is-invalid': errors[`使用者 ${key + 1} 名稱`] }"
                      rules="required"
                      v-model="tempProduct.comments[key].name"
                    ></Field>
                    <ErrorMessage
                      :name="`使用者 ${key + 1} 名稱`"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="mb-2">
                    <label :for="`userCommentScore-${key}`" class="form-label">對產品的評分</label>
                    <Field
                      :id="`userCommentScore-${key}`"
                      :name="`使用者 ${key + 1} 評分`"
                      class="form-control"
                      :class="{ 'is-invalid': errors[`使用者 ${key + 1} 評分`] }"
                      rules="required"
                      as="select"
                      v-model="tempProduct.comments[key].score"
                    >
                      <option selected disabled value="">請選擇分數</option>
                      <option>5</option>
                      <option>4</option>
                      <option>3</option>
                      <option>2</option>
                      <option>1</option>
                    </Field>
                    <ErrorMessage
                      :name="`使用者 ${key + 1} 評分`"
                      class="invalid-feedback"
                    ></ErrorMessage>
                  </div>
                  <div class="mb-2">
                    <label :for="`userCommentContent-${key}`" class="form-label"
                      >評語（選填）</label
                    >
                    <textarea
                      :id="`userCommentContent-${key}`"
                      cols="30"
                      rows="3"
                      class="form-control"
                      v-model="tempProduct.comments[key].content"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button
                  type="submit"
                  class="btn btn-primary w-25 d-flex
                        justify-content-center align-items-center"
                  ref="commentAdminBtn"
                >
                  <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <p class="ms-1">{{ modalTitle }}</p>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary w-25 d-block ms-3"
                  data-bs-dismiss="modal"
                >
                  取消
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['modalTitle', 'temp', 'comments'],
  emits: ['emit-comment-modal'],
  data() {
    return {
      tempProduct: {},
    };
  },
  methods: {
    addComment() {
      if (Object.keys(this.tempProduct).includes('comments') === false) {
        this.tempProduct.packageOptions = [];
        this.tempProduct.packageOptions[0] = {
          imageUrl: '',
          name: '',
          score: '',
          content: '',
        };
      } else {
        // 新增一個空物件讓新方案的內容可以放入
        this.tempProduct.comments[this.tempProduct.comments.length] = {
          imageUrl: '',
          name: '',
          score: '',
          content: '',
        };
      }
    },
    deleteComment(key) {
      this.tempProduct.comments.splice(key, 1);
    },
    submitComment() {
      this.$emit('emit-comment-modal', this.tempProduct);
    },
  },
  watch: {
    temp() {
      this.tempProduct = {
        ...this.temp,
      }; // 當 temp props 有變時，把 tempProduct 改掉
      if (Object.keys(this.tempProduct).includes('tagCheck') === false) {
        this.tempProduct.tagCheck = [];
      }
      if (Object.keys(this.tempProduct).includes('duration') === false) {
        this.tempProduct.duration = {
          day: 0,
          hours: 0,
          min: 0,
        };
      }
      if (Object.keys(this.tempProduct).includes('comments') === false) {
        this.tempProduct.comments = [
          {
            imageUrl: '',
            name: '',
            score: '',
            content: '',
          },
        ];
      }
    },
  },
  created() {
    this.tempProduct = {
      ...this.temp,
      tagCheck: [],
      comments: [],
    };
  },
};
</script>
