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
          <button
            type="button"
            class="close-modal-btn close-modal-lg-btn bg-light-primary"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span class="material-icons">
              clear
            </span>
          </button>
          <div class="container-fluid">
            <div class="row">
              <!--圖片上傳預覽區-->
              <div class="col-4">
                <div class="bg-light p-3 rounded-2">
                  <div class="mb-2">
                    <label for="imgUrl" class="form-label">文章圖片</label>
                    <input
                      type="text"
                      id="imgUrl"
                      class="form-control"
                      placeholder="請輸入圖片網址"
                      v-model="tempArticle.image"
                    />
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
                        <span class="material-icons">
                          add_task
                        </span>
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
                        <span class="modal-delete-btn material-icons">
                          delete
                        </span>
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
                        <span class="modal-delete-btn material-icons">
                          delete
                        </span>
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
                <form class="mb-4">
                  <div class="mb-2">
                    <div class="row">
                      <div class="col-8">
                        <label for="articleTitle" class="form-label">文章標題</label>
                        <input
                          type="text"
                          id="articleTitle"
                          class="form-control"
                          v-model="tempArticle.title"
                        />
                      </div>
                      <div class="col-4">
                        <label for="articleAuthor" class="form-label">文章作者</label>
                        <select
                          name="articleAuthor"
                          id="articleAuthor"
                          class="form-select"
                          v-model="tempArticle.author"
                        >
                          <option disabled value="">請選擇作者</option>
                          <option value="旅味精選">旅味精選</option>
                          <option value="小王子阿德">小王子阿德</option>
                          <option value="火車上的瑞秋">火車上的瑞秋</option>
                          <option value="Edward Ke">Edward Ke</option>
                          <option value="威爾森打排球">威爾森打排球</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <label for="articleDescription" class="form-label">文章描述</label>
                    <textarea
                      name="articleDescription"
                      id="articleDescription"
                      class="form-control"
                      cols="30"
                      rows="3"
                      v-model="tempArticle.description"
                    ></textarea>
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
                </form>
                <div class="d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btn-primary w-25 d-flex justify-content-center align-items-center"
                    ref="articleAdminBtn"
                    @click="$emit('emit-article-modal', modalTitle, tempArticle)"
                  >
                    <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <p class="ms-1">{{ modalTitle }}</p>
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-dark w-25 d-block ms-3"
                    data-bs-dismiss="modal"
                  >
                    取消
                  </button>
                </div>
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
  data() {
    return {
      tempArticle: { ...this.temp, tagCheck: [] },
      showAlert: false,
      alertMsg: '',
      editor: ClassicEditor,
      editorConfig: {
        toolbar: {
          items: ['heading', 'bold', 'image', 'italic', 'link', 'undo', 'redo'],
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
