<template>
  <div class="container py-8">
    <div class="d-flex flex-md-row flex-column align-items-center">
      <img
        src="https://github.com/vvvvvvii/tasteof/blob/main/public/img/finish%20cart.png?raw=true"
        alt="恭喜您完成付款"
        class="w-50"
      />
      <div class="text-primary">
        <h2 class="h1 mb-lg-7 mb-3 text-md-start text-center">
          完成付款！
          <span class="h2 ms-lg-3 d-lg-inline d-none"
            >NT {{ addComma(Math.floor(orderDetail.total)) }}</span
          >
        </h2>
        <p class="h2 text-md-end text-center d-lg-none mb-6">
          NT {{ addComma(Math.floor(orderDetail.total)) }}
        </p>
        <p class="mb-3 text-md-start text-center"><a class="h3-md text-primary">查看訂單細節</a></p>
        <p class="h2 text-md-start text-center">{{ orderDetail.orderId }}</p>
      </div>
    </div>
  </div>
  <div class="bg-wave py-7" id="moreActivitiesSection">
    <div class="container">
      <h3 class="text-primary mb-5">更多活動？</h3>
      <div class="row flex-nowrap overflow-scroll">
        <div class="col-sm-4 col-5" v-for="(item, key) in randomProducts" :key="key">
          <router-link :to="`/product/${item.id}`" title="查看更多" class="card overflow-hidden">
            <div class="card-img-outer">
              <img :src="item.imageUrl" :alt="item.title" class="card-img" />
            </div>
            <div class="card-body">
              <h4 class="card-title ellipsis ellipsis-one-line">{{ item.title }}</h4>
              <p class="h3-md h5 text-end">NT {{ item.lowestPrice }} 起</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!--alert-->
  <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
</template>
<script>
import alert from '@/components/backend/Alert.vue';

export default {
  props: ['orderDetail'],
  data() {
    return {
      totalProducts: [],
      randomProducts: [],
      showAlert: false,
      alertMsg: '',
    };
  },
  components: {
    alert,
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
            window.setTimeout(this.closeCustomAlert, 5000);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
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
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
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
