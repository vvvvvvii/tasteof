<template>
  <div
    id="articleModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="articleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content article-modal-bg">
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
            <div class="row">
              <!--圖片上傳預覽區-->
              <div class="col-4">
                <div class="bg-light p-3 rounded-2">
                  <div class="mb-2">
                    <Form v-slot="{ errors }">
                      <label for="imgUrl" class="form-label">文章圖片</label>
                      <Field
                        type="text"
                        id="imgUrl"
                        name="主圖"
                        class="form-control"
                        :class="{ 'is-invalid': errors['主圖'] }"
                        rules="required"
                        placeholder="請輸入圖片網址"
                        v-model="tempArticle.image"
                      ></Field>
                      <ErrorMessage name="主圖" class="invalid-feedback"></ErrorMessage>
                    </Form>
                  </div>
                  <button
                    type="button"
                    class="btn btn-dark-primary mb-2"
                    data-bs-toggle="collapse"
                    href="#collapseAddImgs"
                    aria-expanded="false"
                    aria-controls="collapseAddImgs"
                  >
                    新增其他圖片
                  </button>
                  <div class="collapse" id="collapseAddImgs">
                    <div class="d-flex mb-2">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片網址"
                        v-model="tempArticle.otherImageUrl"
                      />
                      <button
                        type="button"
                        class="btn btn-outline-dark-primary rounded-pill ms-2"
                        @click="addImgs"
                      >
                        <i class="bi bi-upload"></i>
                      </button>
                    </div>
                  </div>
                  <ul class="row g-1 mb-4">
                    <li class="col-4 mb-2">
                      <button
                        v-if="tempArticle.image"
                        class="modal-img-outer"
                        type="button"
                        @click="deleteImgs($event, 'mainImg')"
                      >
                        <img :src="tempArticle.image" alt="主圖片" class="modal-img" />
                        <i class="modal-delete-btn bi bi-trash-fill"></i>
                      </button>
                      <div v-else class="modal-img-default"></div>
                    </li>
                    <li class="col-4 mb-2" v-for="(item, key) in tempArticle.imagesUrl" :key="item">
                      <button
                        v-if="item"
                        class="modal-img-outer"
                        type="button"
                        @click="deleteImgs($event, 'subImg')"
                        :data-img="key"
                      >
                        <img :src="item" alt="副圖片" class="modal-img" />
                        <i class="bi bi-trash-fill modal-delete-btn"></i>
                      </button>
                      <div v-else class="modal-img-default"></div>
                    </li>
                  </ul>
                  <h5 class="h4 mb-2">選擇標籤</h5>
                  <div class="row">
                    <div v-for="(tag, tagIndex) in tagCategory" :key="tagIndex" class="col-4">
                      <input
                        type="checkbox"
                        :id="`tagCheck-${tagIndex}`"
                        v-model="tempArticle.tagCheck"
                        :value="tag"
                      />
                      <label :for="`tagCheck-${tagIndex}`" class="ms-1">{{ tag }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <!--文字登打區-->
              <div class="col-8">
                <Form v-slot="{ errors }" @submit="submitArticle" class="mb-4">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-8">
                        <label for="articleTitle" class="form-label">文章標題</label>
                        <Field
                          type="text"
                          id="articleTitle"
                          name="標題"
                          class="form-control"
                          :class="{ 'is-invalid': errors['標題'] }"
                          rules="required"
                          v-model="tempArticle.title"
                        ></Field>
                        <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
                      </div>
                      <div class="col-4">
                        <label for="articleAuthor" class="form-label">文章作者</label>
                        <Field
                          name="文章分類"
                          id="articleAuthor"
                          class="form-select"
                          :class="{ 'is-invalid': errors['文章分類'] }"
                          rules="required"
                          v-model="tempArticle.author"
                          as="select"
                        >
                          <option disabled value="">請選擇作者</option>
                          <option value="旅味精選">旅味精選</option>
                          <option value="小王子阿德">小王子阿德</option>
                          <option value="火車上的瑞秋">火車上的瑞秋</option>
                          <option value="Edward Ke">Edward Ke</option>
                          <option value="威爾森打排球">威爾森打排球</option>
                        </Field>
                        <ErrorMessage name="文章分類" class="invalid-feedback"></ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <label for="articleDescription" class="form-label">文章描述</label>
                    <Field
                      type="text"
                      id="articleDescription"
                      name="文章描述"
                      class="form-control"
                      cols="30"
                      rows="3"
                      :class="{ 'is-invalid': errors['文章描述'] }"
                      rules="required"
                      v-model="tempArticle.description"
                      as="textarea"
                    ></Field>
                    <ErrorMessage name="文章描述" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="mb-2">
                    <label for="articleContent" class="form-label">文章內容</label>
                    <ckeditor
                      :editor="editor"
                      v-model="tempArticle.content"
                      :config="editorConfig"
                    ></ckeditor>
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="articleEnabled"
                      v-model="tempArticle.isPublic"
                    />
                    <label class="form-check-label" for="articleEnabled">文章是否公開發佈</label>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button
                      type="button"
                      class="btn btn-primary w-25 d-flex justify-content-center align-items-center"
                      ref="articleAdminBtn"
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
    </div>
  </div>
  <!--alert-->
  <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
</template>
<script>
import alert from '@/components/Alert.vue';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

export default {
  props: ['modalTitle', 'temp', 'tagCategory'],
  emits: ['emit-article-modal'],
  data() {
    return {
      tempArticle: { ...this.temp, tagCheck: [] },
      showAlert: false,
      alertMsg: '',
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          items: ['heading', 'bold', 'italic', 'link', 'undo', 'redo'],
        },
        link: {
          addTargetToExternalLinks: true,
        },
      },
    };
  },
  components: {
    alert,
  },
  methods: {
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    addImgs() {
      if (this.tempArticle.imagesUrl.length < 5) {
        this.tempArticle.imagesUrl.push(this.tempArticle.otherImageUrl);
        this.tempArticle.otherImageUrl = '';
      } else {
        this.customAlert('最多只可上傳六張照片');
        window.setTimeout(this.closeCustomAlert, 5000);
      }
    },
    deleteImgs(e, target) {
      if (target === 'mainImg') {
        this.tempArticle.image = '';
      } else if (target === 'subImg') {
        const deleteItem = e.currentTarget.dataset.img;
        this.tempArticle.imagesUrl.splice(deleteItem, 1);
      }
    },
    submitArticle() {
      this.$emit('emit-article-modal', this.modalTitle, this.tempArticle);
    },
  },
  watch: {
    temp() {
      this.tempArticle = { ...this.temp }; // 當 temp props 有變時，把 tempArticle 改掉
      this.tempArticle.imagesUrl = this.temp.imagesUrl || [];
      this.tempArticle.tagCheck = this.temp.tagCheck || [];
    },
  },
  created() {
    this.tempArticle = { ...this.temp, tagCheck: [] };
  },
};
</script>
