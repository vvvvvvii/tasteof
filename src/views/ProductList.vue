<template>
  <div class="bg-light">
    <div class="container">
      <div class="row py-8">
        <div class="col-4">
          <div class="searchBox">
            <div class="searchBox-header">
              <h3 class="h2">搜尋</h3>
            </div>
            <div class="searchBox-body">
              <input type="text" placeholder="目的地" class="mb-3" />
              <select name="activityPeriod" class="mb-5">
                <option value="">行程長度</option>
              </select>
              <div class="pb-5 mb-5 border-bottom border-gray">
                <h4 class="mb-5">預算</h4>
                <vue-slider
                  v-model="budget"
                  v-bind="options"
                  :tooltip-formatter="'NT {value}'"
                ></vue-slider>
              </div>
              <ul>
                <li class="tag tag-outline-secondary">#城市導覽</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="d-flex justify-content-between mb-6">
            <h2>
              全部
              <span class="h3 ms-5">{{ totalProducts.length }} 項活動</span>
            </h2>
            <select name="productArrangement" class="arrangementSelect">
              <option value="expensiveToCheap">價格由高至低</option>
              <option value="cheapToExpensive">價格由低至高</option>
            </select>
          </div>
          <ul class="mb-8">
            <li class="mb-3" v-for="item in products" :key="item.id">
              <router-link :to="`/product/${item.id}`" class="card">
                <img class="card-img" :src="item.imageUrl" :alt="item.title" />
                <div class="card-body">
                  <div>
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                  </div>
                  <p class="text-end">
                    <span class="h3">NT {{ item.price }} 起</span>
                    / {{ item.unit }}
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
          <!--pagination-->
          <pagination :page="pagination" @emit-pagination="getData"></pagination>
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
import VueSlider from 'vue-slider-component';

export default {
  name: 'Product',
  data() {
    return {
      products: [],
      totalProducts: [],
      budget: [1000, 6000],
      options: {
        dotSize: 12,
        width: 'auto',
        height: 2,
        min: 0,
        max: 10000,
        duration: 0.5,
        tooltip: 'active',
        tooltipPlacement: 'top',
      },
      pagination: {},
    };
  },
  components: { alert, pagination, VueSlider },
  created() {
    this.$http
      .get(
        `${process.env.VUE_APP_API}/api/${
          process.env.VUE_APP_PATH
        }/products/?page=${(this.pagination.current_page = 1)}`,
      )
      .then((res) => {
        if (res.data.success) {
          const { data } = res;
          this.products = data.products;
          this.pagination = data.pagination;
        } else {
          this.customAlert(res.data.message);
        }
      })
      .catch((err) => {
        this.customAlert(err.response);
      });
    this.$http
      .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
      .then((res) => {
        if (res.data.success) {
          this.totalProducts = res.data.products;
        } else {
          this.customAlert(res.data.message);
        }
      })
      .catch((err) => {
        this.customAlert(err.response);
      });
  },
  methods: {
    getData(currentPage = 1) {
      // 若未傳入則預設為第一頁
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?page=${currentPage}`,
        )
        .then((res) => {
          if (res.data.success) {
            this.products = res.data.products;
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
};
</script>
