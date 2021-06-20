<template>
  <div class="container">
    <h5 class="modal-title">
      {{ moreInfo.productInfo.title }}
    </h5>
    <div class="row mb-5">
      <div class="col-5">
        <div id="carouselExampleControls" class="carousel slide mb-3" data-bs-ride="carousel">
          <div class="carousel-inner">
            <!--用 :class="{'active':key==0}" 讓預設第一筆有 active 這個 class-->
            <div
              class="carousel-item"
              v-for="(item, key) in moreInfo.productInfo.imagesUrl"
              :key="key"
              :class="{ active: key == 0 }"
            >
              <img :src="item" class="d-block w-100" alt="商品參考圖片" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-7">
        <p class="mb-4">{{ moreInfo.productInfo.description }}</p>
        <p class="white-space-pre-wrap">{{ moreInfo.productInfo.content }}</p>
      </div>
    </div>
    <div class="mb-3 row">
      <label for="startDate" class="col-sm-2 col-form-label">使用日期</label>
      <div class="col-sm-3">
        <flat-pickr ref="startDate" v-model="moreInfo.startDate"></flat-pickr>
      </div>
      <label for="tktNum" class="col-sm-2 col-form-label">購買數量</label>
      <div class="col-sm-3">
        <input
          type="number"
          :placeholder="moreInfo.productInfo.unit"
          id="tktNum"
          min="1"
          v-model.number="moreInfo.tktNum"
        />
      </div>
    </div>
    <div class="mb-3 d-flex justify-content-evenly align-items-center">
      <p>總金額：{{ moreInfo.productInfo.price * moreInfo.tktNum }}</p>
      <button
        type="button"
        class="btn btn-primary d-flex align-items-center"
        ref="addCartBtn"
        @click="addCart()"
        :disabled="moreInfo.startDate === '' || moreInfo.tktNum < 1"
      >
        <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="ms-1">加入購物車</p>
      </button>
    </div>
  </div>
</template>
<script>
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  data() {
    return {
      date: null,
      moreInfo: {
        productInfo: {},
        startDate: '',
        tktNum: 1,
      },
    };
  },
  props: ['id'],
  components: {
    flatPickr,
  },
  created() {
    const seed = this.id;
    this.$http
      .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${seed}`)
      .then((res) => {
        if (res.data.success) {
          this.moreInfo.productInfo = res.data.product;
          // 如果 imagesUrl 裡有空字串，把它刪掉再顯示，避免圖片顯示錯誤
          this.moreInfo.productInfo.imagesUrl = this.moreInfo.productInfo.imagesUrl.filter(
            (e) => e !== '',
          );
        } else {
          console.log(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  },
  methods: {
    addCart() {
      const { addCartBtn } = this.$refs;
      addCartBtn.classList.add('disabled');
      addCartBtn.children[0].classList.remove('d-none');
      const data = {
        data: {
          product_id: this.moreInfo.productInfo.id,
          qty: this.moreInfo.tktNum,
          start_date: this.moreInfo.startDate,
        },
      };
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          if (res.data.success) {
            this.moreInfo.startDate = '';
            this.moreInfo.tktNum = 1;
            addCartBtn.classList.remove('disabled');
            addCartBtn.children[0].classList.add('d-none');
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
