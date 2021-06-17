<template>
  <div class="container">
    <ul class="mb-4">
      <li class="card mb-3" v-for="item in products" :key="item.id">
        <div class="row g-0">
          <div class="col-md-4">
            <div
              class="card-img-background"
              :style="{ backgroundImage: `url(${item.imageUrl})` }"
            ></div>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p>
                <span v-if="item.origin_price !== item.price">
                  <span class="text-decoration-line-through text-decoration-color-danger">{{
                    item.origin_price
                  }}</span>
                  <span class="fw-bold text-danger ms-2">{{ item.price }}</span>
                </span>
                <span v-else> {{ item.origin_price }} </span>
                / {{ item.unit }}
              </p>
              <p class="card-text mb-4">
                <small class="text-muted">{{ item.description }}</small>
              </p>
              <router-link :to="`/product/${item.id}`">MORE</router-link>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!--pagination-->
    <pagination :page="pagination" @emit-pagination="getData"></pagination>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue';

export default {
  name: 'Product',
  data() {
    return {
      products: [],
      totalProducts: [],
      pagination: {},
    };
  },
  components: { pagination },
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
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
    this.$http
      .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
      .then((res) => {
        if (res.data.success) {
          this.totalProducts = res.data.products;
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.response);
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
            this.$refs.mainLoader.classList.add('d-none'); // 取完全部資料才讓 loader 消失
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>
