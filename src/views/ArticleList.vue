<template>
  <!--平板以下搜尋欄-->
  <div class="bg-secondary d-lg-none">
    <div class="container pt-8 pb-4">
      <div class="searchBox-body">
        <button
          type="button"
          class="btn btn-outline-light w-100"
          data-bs-toggle="modal"
          data-bs-target="#filterArticlePadModal"
        >
          篩選
        </button>
        <!-- 篩選 Modal -->
        <div
          class="modal fade"
          id="filterArticlePadModal"
          tabindex="-1"
          aria-labelledby="filterArticlePadModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header py-2">
                <h5 class="modal-title fw-bold h4" id="filterArticlePadModalLabel">
                  篩出你的心有所屬
                </h5>
                <button
                  type="button"
                  class="bg-transparent border-0 p-2 text-secondary h3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
              <div class="modal-body p-6">
                <div
                  class="d-flex flex-wrap btn-group"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <div class="me-2 mb-2" v-for="(item, key) in tagCategory.cities" :key="key">
                    <input
                      type="checkbox"
                      :id="item"
                      autocomplete="off"
                      class="btn-check"
                      :value="item"
                      v-model="searchArticleTag"
                    />
                    <label :for="item" class="btn btn-outline-secondary rounded-2 h4"
                      ># {{ item }}
                    </label>
                  </div>
                </div>
                <div
                  class="d-flex flex-wrap btn-group"
                  role="group"
                  aria-label="Basic checkbox toggle button group"
                >
                  <div class="me-2 mb-2" v-for="(item, key) in tagCategory.type" :key="key">
                    <input
                      type="checkbox"
                      :id="item"
                      autocomplete="off"
                      class="btn-check"
                      :value="item"
                      v-model="searchArticleTag"
                    />
                    <label :for="item" class="btn btn-outline-secondary rounded-2 h4"
                      ># {{ item }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-light">
    <div class="container pt-lg-7">
      <div class="row py-lg-8 py-6">
        <!--電腦版搜尋欄-->
        <div class="col-lg-4 mb-lg-0">
          <div class="searchBox d-lg-block d-none">
            <div class="searchBox-header">
              <h3 class="fw-bold">篩選</h3>
            </div>
            <div class="searchBox-body">
              <h4 class="mb-6 h3">地區</h4>
              <div
                class="d-flex flex-wrap btn-group pb-3 mb-5 border-bottom border-gray"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <div v-for="(item, key) in tagCategory.cities" :key="key" class="me-2 mb-2">
                  <input
                    type="checkbox"
                    :id="item"
                    autocomplete="off"
                    class="btn-check"
                    :value="item"
                    v-model="searchArticleTag"
                  />
                  <label :for="item" class="btn btn-outline-secondary rounded-3"
                    ># {{ item }}
                  </label>
                </div>
              </div>
              <h4 class="mb-6 h3">類型</h4>
              <div
                class="d-flex flex-wrap btn-group"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <div v-for="(item, key) in tagCategory.type" :key="key" class="me-2 mb-2">
                  <input
                    type="checkbox"
                    :id="item"
                    autocomplete="off"
                    class="btn-check"
                    :value="item"
                    v-model="searchArticleTag"
                  />
                  <label :for="item" class="btn btn-outline-secondary rounded-3"
                    ># {{ item }}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <h2 class="mb-6">你想要的玩樂靈感都在這</h2>
          <ul class="mb-8">
            <li class="mb-3" v-for="item in filterArticle" :key="item.id">
              <router-link :to="`/article/${item.id}`" class="card card-row">
                <img class="card-row-img " :src="item.image" :alt="item.title" />
                <div class="card-body">
                  <div>
                    <div class="d-flex justify-content-between">
                      <h5 class="card-title mb-2">{{ item.title }}</h5>
                      <p class="h5 text-gray-dark">{{ item.create_at }}</p>
                    </div>
                    <p class="h5 text-gray-dark mb-5">
                      <span v-if="item.author !== '旅味精選'">網紅好評推薦 ｜ </span>
                      {{ item.author }}
                    </p>
                    <p>{{ item.description }}</p>
                  </div>
                  <p class="text-end">
                    <button type="button" class="btn btn-primary d-md-inline-block d-none">
                      閱讀更多
                    </button>
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
          <!--pagination-->
          <pagination
            :page="pagination"
            @emit-pagination="getData"
            v-if="pagination.total_pages > 1"
          ></pagination>
        </div>
      </div>
      <div class="to-top-btn" @click="scrollToTop" ref="toTopBtn" v-if="btnShow">
        <div class="to-top-btn-text">
          <p>回到</p>
          <p>上方</p>
        </div>
      </div>
      <!--alert-->
      <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
    </div>
  </div>
</template>

<script>
import alert from '@/components/Alert.vue';
import pagination from '@/components/Pagination.vue';

export default {
  name: 'Product',
  data() {
    return {
      articles: [],
      tagCategory: {
        cities: [
          '基隆',
          '台北',
          '新北',
          '桃園',
          '新竹',
          '苗栗',
          '台中',
          '彰化',
          '南投',
          '雲林',
          '嘉義',
          '台南',
          '高雄',
          '屏東',
          '宜蘭',
          '花蓮',
          '台東',
          '離島',
        ],
        type: ['親子', '浪漫', '冒險', '自然', '烹飪', '美食', '知性文化', '水上活動'],
      },
      searchArticleTag: [],
      pagination: {
        page_start: 0,
        page_end: 10,
        per_page: 10,
        has_pre: true,
        has_next: true,
      },
      btnShow: true,
    };
  },
  components: { alert, pagination },
  methods: {
    getData(currentPage = 1) {
      //   若未傳入則預設為第一頁
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles/?page=${currentPage}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.articles = res.data.articles;
            this.articles.forEach((item, index) => {
              if (typeof item.create_at === 'number') {
                // 避免已經轉成亦閱讀的日期後，因編輯重跑 getData() ，無法重複轉換而錯誤
                const time = new Date(item.create_at * 1000)
                  .toISOString()
                  .split('T')[0]
                  .replace(/-/g, ' / ');
                this.articles[index].create_at = time;
                this.pagination.totalResult = this.articles.length;
                if (currentPage === 1) {
                  this.pagination.has_pre = false;
                } else if (currentPage === this.pagination.total_pages) {
                  this.pagination.has_next = false;
                } else {
                  this.pagination.has_pre = true;
                  this.pagination.has_next = true;
                }
                this.pagination.total_pages = Math.ceil(
                  this.pagination.totalResult / this.pagination.per_page,
                );
                this.pagination.current_page = currentPage;
                if (this.pagination.current_page > this.pagination.total_pages) {
                  this.pagination.current_page = this.pagination.total_pages;
                }
                const current = this.pagination.current_page;
                const per = this.pagination.per_page;
                this.pagination.page_start = current * per - per + 1;
                this.pagination.page_end = current * per;
              }
            });
          } else {
            this.customAlert(res.data.message);
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
        });
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    changePage(p) {
      this.pagination = { ...p };
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    filterArticle() {
      if (this.searchArticleTag.length > 0) {
        return this.articles.filter(
          (i) => i.tagCheck.filter((val) => this.searchArticleTag.indexOf(val) !== -1).length > 0,
        );
      }
      return this.articles;
    },
  },
  mounted() {
    this.getData();
    this.listener = () => {
      console.log(window.scrollY);
      this.btnShow = window.scrollY > 0;
    };
    window.addEventListener('scroll', this.listener);
  },
  unmounted() {
    window.removeEventListener('scroll', this.listener);
  },
  watch: {
    // This resets the data for when the filter is changed
    filterProduct() {
      this.pagination.current_page = 1;
      this.pagination.page_start = 0;
      this.pagination.page_end = 10;
    },
  },
};
</script>
