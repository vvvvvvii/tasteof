<template>
  <div class="container py-8">
    <div class="d-flex flex-md-row flex-column justify-content-center align-items-center">
      <img
        src="https://github.com/vvvvvvii/tasteof/blob/main/public/img/finish%20cart.png?raw=true"
        alt="恭喜您完成付款"
        class="w-25"
      />
      <div class="ms-6">
        <h2 class="h1 mb-6 text-md-start text-center">
          完成付款！
          <span class="h2 ms-lg-3 d-lg-inline d-none"
            >NT {{ addComma(paymentDetail.final_total) }}
          </span>
        </h2>
        <p class="h2 text-md-end text-center d-lg-none">
          NT {{ addComma(paymentDetail.final_total) }}
        </p>
        <div class="text-end">
          <router-link to="/product_list">
            <button type="button" class="btn btn-outline-primary mb-7">
              更多行程在這等著你
            </button>
          </router-link>
        </div>
        <a
          class="h3-md text-secondary text-decoration-underline
          text-md-start text-center cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target="#checkOrderDetailModal"
        >
          <span class="d-block mb-3">
            查看訂單細節
          </span>
          <span class="d-block h2">{{ orderDetail.orderId }}</span>
        </a>
        <!-- 訂單細節 Modal -->
        <div
          class="modal fade"
          id="checkOrderDetailModal"
          tabindex="-1"
          aria-labelledby="checkOrderDetailModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header bg-wave mb-3 position-relative">
                <h3>訂單明細</h3>
                <div class="cable-car"></div>
              </div>
              <div class="modal-body p-6">
                <div class="pb-6 mb-6 border-bottom border-gray">
                  <h3 class="text-primary mb-1">訂單資料</h3>
                  <p class="text-gray mb-3">編號：{{ orderDetail.orderId }}</p>
                  <div class="order-scroll-box d-flex">
                    <div
                      v-for="(product, key) in products"
                      :key="`${product.productName}-${key}`"
                      class="px-3 py-4 border border-primary rounded-1
                    order-scroll-box-item"
                      :class="{ 'ms-3': key !== 0 }"
                    >
                      <div class="pb-3 mb-3 border-bottom border-gray">
                        <div class="row mb-sm-3 mb-2">
                          <div class="col-sm-4 col-3">
                            <p class="h5 mb-2 d-sm-block d-none">
                              {{ product.date.split('-').join(' / ') }}
                            </p>
                            <img
                              :src="product.productImg"
                              :alt="product.productName"
                              class="order-img"
                            />
                          </div>
                          <div class="col-sm-8 col-9">
                            <p class="h5 mb-1 d-sm-none text-gray">
                              {{ product.date.split('-').join(' / ') }}
                            </p>
                            <p class="h3-sm mb-2">{{ product.productName }}</p>
                            <p class="h4-sm h5">{{ product.optionName }}</p>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <p class="w-25">
                          旅客：
                        </p>
                        <p v-for="(user, userKey) in product.users" :key="user" class="ms-1">
                          {{ user }}
                          <span v-if="userKey !== product.users.length - 1" class="ms-1">、</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 class="mb-3 text-primary">付款及收件資料</h3>
                <div class="mb-6">
                  <div class="mb-3">
                    <p class="mb-1">
                      <i class="bi bi-check"></i>
                      <span class="ms-1">{{ paymentDetail.payment_method }}</span>
                    </p>
                    <p v-if="paymentDetail.taxIdNum" class="mb-1">
                      <i class="bi bi-check"></i>
                      <span class="ms-1">統一編號：</span>
                      <span class="ms-1">{{ paymentDetail.taxIdNum }}</span>
                    </p>
                    <p class="mb-1">
                      <i class="bi bi-check"></i>
                      <span class="ms-1">{{ paymentDetail.send_method }}</span>
                    </p>
                  </div>

                  <div
                    v-if="paymentDetail.send_method === '郵寄'"
                    class="rounded-1 px-5 py-6 bg-light"
                  >
                    <p class="h3 text-center mb-3">
                      {{ contactDetail.name }}
                      <span class="ms-1 h4">收</span>
                    </p>
                    <p class="mb-1">
                      <i class="text-primary bi bi-telephone-fill"></i>
                      <span class="ms-3">{{ contactDetail.tel }}</span>
                    </p>
                    <p class="mb-1">
                      <i class="text-primary bi bi-envelope-fill"></i>
                      <span class="ms-3">{{ contactDetail.email }}</span>
                    </p>
                    <p class="mb-1">
                      <i class="text-primary bi bi-signpost-2-fill"></i>
                      <span class="ms-3">{{ contactDetail.address }}</span>
                    </p>
                  </div>
                </div>
                <p class="h2 text-end">NT {{ addComma(paymentDetail.final_total) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-wave py-7" id="moreActivitiesSection">
    <div class="container">
      <h3 class="text-primary mb-5">更多活動？</h3>
      <div class="row flex-nowrap random-box">
        <div class="col-lg-4 col-sm-5 col-9" v-for="(item, key) in randomProducts" :key="key">
          <router-link :to="`/product/${item.id}`" title="查看更多" class="card overflow-hidden">
            <div class="card-img-outer">
              <img :src="item.imageUrl" :alt="item.title" class="card-img" />
            </div>
            <div class="card-body random-box-inner">
              <h4 class="card-title">{{ item.title }}</h4>
              <p class="h3-md h5 text-end">NT {{ addComma(item.lowestPrice) }} 起</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['orderDetail'],
  emits: ['emit-alert'],
  data() {
    return {
      paymentDetail: {},
      contactDetail: {},
      products: [],
      orderModal: {},
      totalProducts: [],
      randomProducts: [],
    };
  },
  methods: {
    getOrder(id) {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.paymentDetail = { ...res.data.order.user.paymentDetail };
            this.products = [...res.data.order.user.products];
            this.contactDetail = {
              name: res.data.order.user.name,
              email: res.data.order.user.email,
              tel: res.data.order.user.tel,
              address: res.data.order.user.address,
            };
          } else {
            this.$emit('emit-alert', res.data.message);
          }
        })
        .catch((err) => {
          this.$emit('emit-alert', err.response);
        });
    },
    getTotalProducts() {
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
            this.getRandomProducts();
            this.getOrder(this.orderDetail.orderId);
          } else {
            this.$emit('emit-alert', res.data.message);
          }
        })
        .catch((err) => {
          this.$emit('emit-alert', err.response);
        });
    },
    getRandomProducts() {
      const arrSet = new Set([]);
      const maxSize = this.totalProducts.length < 3 ? this.totalProducts.length : 3;
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        const { length } = this.totalProducts;
        const num = Math.floor(Math.random(length) * length); // 隨機取得商品
        arrSet.add(num);
      }
      arrSet.forEach((i) => {
        this.randomProducts.push(this.totalProducts[i]); // 取得未重複的商品放進 randomProducts 陣列中
      });
    },
  },
  computed: {
    addComma() {
      return (price) => {
        if (typeof price !== 'undefined') {
          const parts = price.toString().split('.');
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return `${parts.join('.')}`;
        }
        return 0;
      };
    },
  },
  created() {
    this.getTotalProducts();
  },
};
</script>
