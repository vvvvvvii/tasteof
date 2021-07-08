<template>
  <div class="container py-8">
    <div class="d-flex align-items-center">
      <img
        src="https://github.com/vvvvvvii/tasteof/blob/main/src/assets/img/cart.png?raw=true"
        alt="恭喜您完成付款"
        class="w-50"
      />
      <div class="text-primary">
        <h2 class="h1 mb-7">
          完成付款！
          <span class="h2 ms-3">NT {{ addComma(orderDetail.total) }}</span>
        </h2>
        <p class="h2 mb-3">{{ orderDetail.orderId }}</p>
        <a class="h3 text-primary">查看訂單細節</a>
      </div>
    </div>
  </div>
  <div class="bg-light pt-6 pb-8" id="moreActivitiesSection">
    <div class="container">
      <h3 class="text-primary mb-5">更多活動？</h3>
      <div class="row">
        <div class="col-4" v-for="(item, key) in randomProducts" :key="key">
          <router-link :to="`/product/${item.id}`" title="查看更多" class="card overflow-hidden">
            <div class="card-img-outer">
              <img :src="item.imageUrl" :alt="item.title" class="card-img" />
            </div>
            <div class="card-body">
              <h4 class="card-title ellipsis">{{ item.title }}</h4>
              <p class="h3 text-end">
                NT {{ item.lowestPrice }} 起
                <span class="h4"> / {{ item.lowestPriceUnit }}</span>
              </p>
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
  data() {
    return {
      totalProducts: [],
      randomProducts: [],
    };
  },
  methods: {
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
            this.getRandomProducts();
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
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
        const parts = price.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `${parts.join('.')}`;
      };
    },
  },
  created() {
    this.getTotalProducts();
  },
};
</script>
