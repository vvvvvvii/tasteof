<template>
  <div class="bg-light">
    <div class="container">
      <div class="row py-8">
        <div class="col-4">
          <div class="searchBox">
            <div class="searchBox-header">
              <h3 class="fw-bold">搜尋</h3>
            </div>
            <div class="searchBox-body">
              <label for="searchProductDestination" class="mb-6 h3">篩選</label>
              <input
                type="search"
                id="searchProductDestination"
                placeholder="目的地"
                class="mb-3"
                v-model="searchProductDestination"
              />
              <select name="activityDuration" class="mb-6" v-model="searchActivityDuration">
                <option selected disabled>行程長度</option>
                <option value="default">全部顯示</option>
                <option value="lessThan4hrs">小於 4 小時</option>
                <option value="lessThan8hrs">4 - 8 小時</option>
                <option value="2DaysTrip">兩天一夜</option>
                <option value="3DaysTrip">三天兩夜</option>
              </select>
              <div class="pb-6 mb-6 border-bottom border-gray">
                <h4 class="mb-6 h3">預算</h4>
                <vue-slider
                  v-model="budget"
                  v-bind="options"
                  :tooltip-formatter="'NT {value}'"
                ></vue-slider>
              </div>
              <h4 class="mb-6 h3">早已心有所屬？</h4>
              <div
                class="d-flex flex-wrap btn-group"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <div class="me-2 mb-2" v-for="(item, key) in tagCategory" :key="key">
                  <input
                    type="checkbox"
                    :id="item"
                    autocomplete="off"
                    class="btn-check"
                    :value="item"
                    v-model="searchProductTag"
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
          <div class="d-flex justify-content-between mb-6">
            <h2>
              {{ searchProductDestination || searchProductTag.join('/') || '全部' }}
              <span class="h3 ms-5" v-if="filterProduct.length == 0">目前尚無產品</span>
              <span class="h3 ms-5" v-else> {{ filterProduct.length }} 項產品</span>
            </h2>
            <select
              name="productArrangement"
              class="arrangementSelect"
              v-model="productArrangement"
              @change="productArrange"
            >
              <option selected disabled>產品排列方式</option>
              <option value="default">預設排列</option>
              <option value="expensiveToCheap">價格由高至低</option>
              <option value="cheapToExpensive">價格由低至高</option>
            </select>
          </div>
          <ul class="mb-8">
            <li class="mb-3" v-for="item in filterProduct" :key="item.id">
              <router-link :to="`/product/${item.id}`" class="card">
                <img class="card-img" :src="item.imageUrl" :alt="item.title" />
                <div class="card-body">
                  <div>
                    <h5 class="card-title">{{ item.title }}</h5>
                    <p>{{ item.description }}</p>
                  </div>
                  <p class="text-end">
                    <span class="h3">NT {{ item.lowestPrice }} 起</span>
                    / {{ item.lowestPriceUnit }}
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
import VueSlider from 'vue-slider-component';

export default {
  name: 'Product',
  data() {
    return {
      // products: [],
      totalProducts: [],
      budget: [0, 2000],
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
      tagCategory: [
        '雙北',
        '中彰投',
        '嘉南',
        '高屏',
        '花東',
        '城市導覽',
        '票券體驗',
        '包車服務',
        '親子',
        '浪漫',
        '冒險',
        '自然',
        '烹飪',
        '美食',
        '知性文化',
        '水上活動',
        '獨家代理',
      ],
      productArrangement: '產品排列方式',
      searchProductDestination: '',
      searchActivityDuration: '行程長度',
      searchProductTag: [],
      pagination: {},
    };
  },
  components: { alert, pagination, VueSlider },
  methods: {
    getData() {
      // currentPage = 1
      // 若未傳入則預設為第一頁
      // this.$http
      //   .get(
      //     `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/
      //       products/?page=${currentPage}`,
      //   )
      //   .then((res) => {
      //     if (res.data.success) {
      //       this.products = res.data.products;
      //       this.products.forEach((item, index) => {
      //         // 個別取出每個產品
      //         let packageOptionsPrice = item.packageOptions.map((i) => i.price);
      // 取出該產品的所有方案中的價格
      //         packageOptionsPrice = packageOptionsPrice.sort((x, y) => x - y); // 價格小排到大
      //         // this.products[index].lowestPrice = packageOptionsPrice[0];
      //         const [lowestPrice] = packageOptionsPrice; // 該產品最低價格為陣列第一個數
      //         this.products[index].lowestPrice = lowestPrice;
      //         // 找到該價格對應的單位
      //         item.packageOptions.forEach((i) => {
      //           if (i.price === lowestPrice) {
      //             this.products[index].lowestPriceUnit = i.unit;
      //           }
      //         });
      //       });
      //       this.pagination = res.data.pagination;
      //     } else {
      //       this.customAlert(res.data.message);
      //     }
      //   })
      //   .catch((err) => {
      //     this.customAlert(err.response);
      //   });
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.totalProducts = res.data.products;
            this.totalProducts.forEach((item, index) => {
              // 個別取出每個產品
              let packageOptionsPrice = item.packageOptions.map((i) => i.price); // 取出該產品的所有方案中的價格
              packageOptionsPrice = packageOptionsPrice.sort((x, y) => x - y); // 價格小排到大
              // this.products[index].lowestPrice = packageOptionsPrice[0];
              const [lowestPrice] = packageOptionsPrice; // 該產品最低價格為陣列第一個數
              this.totalProducts[index].lowestPrice = lowestPrice;
              // 找到該價格對應的單位
              item.packageOptions.forEach((i) => {
                if (i.price === lowestPrice) {
                  this.totalProducts[index].lowestPriceUnit = i.unit;
                }
              });
            });
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
    productArrange() {
      let priceArr = [...new Set(this.totalProducts.map((item) => item.lowestPrice))]; // 刪掉重複的價格
      const arr = [];
      switch (this.productArrangement) {
        case 'expensiveToCheap':
          priceArr = priceArr.sort((x, y) => y - x);
          priceArr.forEach((price) => {
            this.totalProducts.forEach((item) => {
              if (item.lowestPrice === price) {
                arr.push(item);
              }
            });
          });
          this.totalProducts = arr;
          break;
        case 'cheapToExpensive':
          priceArr = priceArr.sort((x, y) => x - y);
          priceArr.forEach((price) => {
            this.totalProducts.forEach((item) => {
              if (item.lowestPrice === price) {
                arr.push(item);
              }
            });
          });
          this.totalProducts = arr;
          break;
        default:
          this.getData();
          break;
      }
    },
  },
  computed: {
    filterProduct() {
      if (this.searchProductDestination !== '' && this.searchProductTag.length > 0) {
        switch (this.searchActivityDuration) {
          case '3DaysTrip':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 3
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case '2DaysTrip':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 2
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan8hrs':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 0
                && item.duration.hours > 4
                && item.duration.hours <= 8
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan4hrs':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 0
                && item.duration.hours <= 4
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          default:
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
        }
      } else if (this.searchProductDestination === '' && this.searchProductTag.length > 0) {
        switch (this.searchActivityDuration) {
          case '3DaysTrip':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 3
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case '2DaysTrip':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 2
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan8hrs':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 0
                && item.duration.hours > 4
                && item.duration.hours <= 8
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan4hrs':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 0
                && item.duration.hours <= 4
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          default:
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
        }
      } else if (this.searchProductDestination !== '' && this.searchProductTag.length === 0) {
        switch (this.searchActivityDuration) {
          case '3DaysTrip':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.duration.day === 3
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case '2DaysTrip':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.duration.day === 2
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan8hrs':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.duration.day === 0
                && item.duration.hours > 4
                && item.duration.hours <= 8
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan4hrs':
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.duration.day === 0
                && item.duration.hours <= 4
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          default:
            return this.totalProducts.filter(
              (item) => item.title.match(this.searchProductDestination)
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
        }
      } else {
        switch (this.searchActivityDuration) {
          case '3DaysTrip':
            return this.totalProducts.filter(
              (item) => item.duration.day === 3
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case '2DaysTrip':
            return this.totalProducts.filter(
              (item) => item.duration.day === 2
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan8hrs':
            return this.totalProducts.filter(
              (item) => item.duration.day === 0
                && item.duration.hours > 4
                && item.duration.hours <= 8
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan4hrs':
            return this.totalProducts.filter(
              (item) => item.duration.day === 0
                && item.duration.hours <= 4
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          default:
            return this.totalProducts.filter(
              (item) => item.lowestPrice >= this.budget[0] && item.lowestPrice < this.budget[1],
            );
        }
      }
    },
  },
  created() {
    this.getData();
  },
};
</script>
