<template>
  <div class="flex-fill">
    <!--平板以下搜尋欄-->
    <div class="bg-secondary d-lg-none">
      <div class="container">
        <div class="row justify-content-center pt-8 pb-4">
          <div class="col-8 d-lg-none d-block">
            <div class="searchBox-body">
              <div class="input-group mb-2">
                <label
                  for="searchProductDestinationPad"
                  class="input-group-text bg-white border-primary border-right-0"
                >
                  <span><i class="bi bi-search"></i></span>
                </label>
                <input
                  type="search"
                  class="form-control border-left-0"
                  placeholder="今天想去哪？"
                  v-model="searchProductDestination"
                  id="searchProductDestinationPad"
                />
              </div>
              <div class="d-flex">
                <div class="w-50">
                  <button
                    type="button"
                    class="btn btn-outline-light w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#filterProductPadModal"
                  >
                    篩選
                  </button>
                </div>
                <div class="w-50 ms-2">
                  <button
                    type="button"
                    class="btn btn-outline-light w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#sortProductPadModal"
                  >
                    排序
                  </button>
                </div>
              </div>
              <!-- 篩選 Modal -->
              <div
                class="modal fade"
                id="filterProductPadModal"
                tabindex="-1"
                aria-labelledby="filterProductPadModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header bg-wave mb-3 position-relative">
                      <h5 class="modal-title fw-bold h4" id="filterProductPadModalLabel">
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
                      <div class="cable-car"></div>
                    </div>
                    <div class="modal-body p-6">
                      <div class="d-flex justify-content-between align-items-center mb-6">
                        <h4 class="fw-bold">想要玩多久？</h4>
                        <select name="activityDuration" v-model="searchActivityDuration">
                          <option selected disabled>行程長度</option>
                          <option value="default">全部顯示</option>
                          <option value="lessThan4hrs">小於 4 小時</option>
                          <option value="lessThan8hrs">4 - 8 小時</option>
                          <option value="2DaysTrip">兩天一夜</option>
                          <option value="3DaysTrip">三天兩夜</option>
                        </select>
                      </div>
                      <div
                        class="pb-6 mb-6 border-bottom border-gray
                      d-flex justify-content-between align-items-center"
                      >
                        <h4 class="fw-bold">口袋有多深？</h4>
                        <vue-slider
                          v-model="budget"
                          v-bind="options"
                          :tooltip-formatter="'NT {value}'"
                          class="w-50"
                        ></vue-slider>
                      </div>
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
                          <label :for="item" class="btn btn-outline-secondary rounded-2 h4"
                            ># {{ item }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 排序 Modal -->
              <div
                class="modal fade"
                id="sortProductPadModal"
                tabindex="-1"
                aria-labelledby="sortProductPadModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header bg-wave mb-3 position-relative">
                      <h5 class="modal-title fw-bold h4" id="exampleModalLabel">
                        總是有個高低順序
                      </h5>
                      <button
                        type="button"
                        class="bg-transparent border-0 p-2 text-secondary h3"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i class="bi bi-x-lg"></i>
                      </button>
                      <div class="cable-car"></div>
                    </div>
                    <div class="modal-body p-6">
                      <select
                        name="productArrangement"
                        class="arrangementSelect mx-auto"
                        v-model="productArrangement"
                        @change="productArrange"
                      >
                        <option selected disabled>產品排列方式</option>
                        <option value="default">預設排列</option>
                        <option value="expensiveToCheap">價格由高至低</option>
                        <option value="cheapToExpensive">價格由低至高</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-wave">
      <div class="container pt-lg-7">
        <div class="row py-lg-8 py-6">
          <!--電腦版搜尋欄-->
          <div class="col-lg-4 mb-lg-0">
            <div class="searchBox d-lg-block d-none">
              <div class="searchBox-header"></div>
              <div class="searchBox-body">
                <label for="searchProductDestinationPc" class="mb-6 h3">篩選</label>
                <input
                  type="search"
                  id="searchProductDestinationPc"
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
                <div class="mb-6 pb-6 border-bottom border-gray position-relative">
                  <h4 class="mb-6 h3">預算</h4>
                  <vue-slider
                    v-model="budget"
                    v-bind="options"
                    :tooltip-formatter="'NT {value}'"
                  ></vue-slider>
                  <div class="cable-car"></div>
                </div>
                <h4 class="pt-3 mb-6 h3">早已心有所屬？</h4>
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
                    <label :for="item" class="btn btn-outline-secondary rounded-2"
                      ># {{ item }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="d-flex justify-content-between mb-6">
              <h2>
                {{ searchProductDestination || searchProductTag.join('/') || '全部' }}
                <span class="h3 ms-5" v-if="filterProduct.length == 0">目前尚無產品</span>
                <span class="h3 ms-5" v-else> {{ filterProduct.length }} 項產品</span>
              </h2>
              <select
                name="productArrangement"
                class="arrangementSelect d-lg-block d-none"
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
              <li class="mb-3" v-for="(item, index) in filterProduct" :key="item.id">
                <template v-if="index >= pagination.page_start - 1 && index < pagination.page_end">
                  <router-link :to="`/product/${item.id}`" class="card card-row">
                    <img class="card-row-img" :src="item.imageUrl" :alt="item.title" />
                    <div class="card-tag">
                      <i
                        class="bi"
                        :class="{
                          'bi-building': item.category === '城市導覽',
                          'bi-credit-card-2-front': item.category === '體驗票券',
                          'bi-truck': item.category === '包車服務',
                        }"
                      ></i>
                      <span class="d-sm-inline d-none ms-1">{{ item.category }}</span>
                      <!--城市導覽-->
                    </div>
                    <div class="card-body px-6">
                      <div>
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="ellipsis-multi-line">
                          {{ item.description }}
                        </p>
                      </div>
                      <div class="d-flex justify-content-between align-items-end">
                        <div class="h4-md h5 text-gray">
                          <p class="mb-1" v-if="item.comments">
                            <i class="bi bi-star-fill"></i>
                            <span class="ms-sm-2 ms-1"
                              >{{ item.averageScore }} ( {{ item.comments.length }} )</span
                            >
                          </p>
                          <p class="mb-1" v-if="item.totalBookingNum">
                            <i class="bi bi-hand-thumbs-up-fill"></i>
                            <span class="ms-sm-2 ms-1">{{ item.totalBookingNum }} + </span>
                            <span class="d-sm-inline d-none">已訂購</span>
                          </p>
                          <p v-if="item.is_freeCxl">
                            <i class="bi bi-hourglass-split"></i>
                            <span class="ms-sm-2 ms-1">免費取消政策</span>
                          </p>
                        </div>
                        <p class="card-paragraph text-end">
                          <span class="card-subtitle">NT {{ addComma(item.lowestPrice) }} 起</span>
                          <span class="d-sm-inline d-none"> / {{ item.lowestPriceUnit }}</span>
                        </p>
                      </div>
                    </div>
                  </router-link>
                </template>
              </li>
            </ul>
            <!--pagination-->
            <pagination
              :page="pagination"
              :filter-product="filterProduct"
              v-if="filterProduct.length > 10"
              @emit-pagination="changePage"
            ></pagination>
          </div>
        </div>
        <div class="to-top-btn d-sm-block d-none" @click="scrollToTop" v-if="btnShow">
          <div class="to-top-btn-text">
            <p>回到</p>
            <p>上方</p>
          </div>
        </div>
        <!--alert-->
        <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
      </div>
    </div>
  </div>
</template>

<script>
import alert from '@/components/backend/Alert.vue';
import pagination from '@/components/frontend/Pagination.vue';
import VueSlider from 'vue-slider-component';

export default {
  name: 'Product',
  data() {
    return {
      totalProducts: [],
      budget: [100, 7000],
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
        '體驗票券',
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
      pagination: {
        page_start: 0,
        page_end: 10,
        per_page: 10,
        has_pre: true,
        has_next: true,
      },
      btnShow: true,
      showAlert: false,
      alertMsg: '',
    };
  },
  components: { alert, pagination, VueSlider },
  methods: {
    getTotalData(currentPage = 1) {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.totalProducts = res.data.products;
            this.totalProducts.forEach((item, index) => {
              // 個別取出每個產品
              let packageOptionsPrice = item.packageOptions.map((i) => i.price); // 取出該產品的所有方案中的價格
              packageOptionsPrice = packageOptionsPrice.sort((x, y) => x - y); // 價格小排到大
              const [lowestPrice] = packageOptionsPrice; // 該產品最低價格為陣列第一個數
              this.totalProducts[index].lowestPrice = lowestPrice;
              // 找到該價格對應的單位
              item.packageOptions.forEach((i) => {
                if (i.price === lowestPrice) {
                  this.totalProducts[index].lowestPriceUnit = i.unit;
                }
              });
            });
            this.pagination.totalResult = this.totalProducts.length;
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
          this.getTotalData();
          break;
      }
    },
    changePage(p) {
      this.pagination = { ...p };
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    filterProduct() {
      if (this.searchProductDestination !== '' && this.searchProductTag.length > 0) {
        switch (this.searchActivityDuration) {
          case '3DaysTrip':
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 3
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case '2DaysTrip':
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 2
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan8hrs':
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
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
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 0
                && item.duration.hours <= 4
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          default:
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
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
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 3
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case '2DaysTrip':
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 2
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan8hrs':
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
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
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
                && item.tagCheck.filter((val) => this.searchProductTag.indexOf(val) !== -1).length
                  > 0
                && item.duration.day === 0
                && item.duration.hours <= 4
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          default:
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
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
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
                && item.duration.day === 3
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case '2DaysTrip':
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
                && item.duration.day === 2
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan8hrs':
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
                && item.duration.day === 0
                && item.duration.hours > 4
                && item.duration.hours <= 8
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          case 'lessThan4hrs':
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
                && item.duration.day === 0
                && item.duration.hours <= 4
                && item.lowestPrice >= this.budget[0]
                && item.lowestPrice < this.budget[1],
            );
          default:
            return this.totalProducts.filter(
              (item) => item.title.match(new RegExp(this.searchProductDestination, 'gi'))
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
    addComma() {
      return (price) => {
        const parts = price.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `${parts.join(',')}`;
      };
    },
  },
  mounted() {
    this.getTotalData();
    if (this.$route.query.search) {
      this.searchProductTag.push(this.$route.query.search);
    }
    this.listener = () => {
      this.btnShow = window.scrollY > 0;
    };
    window.addEventListener('scroll', this.listener);
  },
  unmounted() {
    window.removeEventListener('scroll', this.listener);
  },
  watch: {
    '$route.query': {
      handler() {
        if (this.searchProductTag.includes(this.$route.query.search) === false) {
          this.searchProductTag.push(this.$route.query.search);
        }
      },
    },
    // This resets the data for when the filter is changed
    filterProduct() {
      this.pagination.current_page = 1;
      this.pagination.page_start = 0;
      this.pagination.page_end = 10;
    },
  },
};
</script>
