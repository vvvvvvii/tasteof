<template>
  <div class="bg-light">
    <div class="container">
      <div class="row py-8">
        <div class="col-4">
          <div class="searchBox">
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
        <div class="col-8">
          <ul class="mb-8">
            <li class="mb-3" v-for="item in filterArticle" :key="item.id">
              <router-link :to="`/article/${item.id}`" class="card card-row">
                <img class="card-row-img" :src="item.image" :alt="item.title" />
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
                    <button type="button" class="btn btn-primary">閱讀更多</button>
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
      pagination: {},
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
              }
            });
            this.pagination = res.data.pagination;
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
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
  created() {
    this.getData();
  },
};
</script>
