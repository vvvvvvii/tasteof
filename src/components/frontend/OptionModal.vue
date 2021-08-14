<template>
  <div
    class="modal fade"
    id="bookingModal"
    tabindex="-1"
    aria-labelledby="bookingModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-secondary">
        <div class="modal-body p-6">
          <h3 class="text-center text-light mb-6">
            {{ this.optionDetail.optionName }}
          </h3>
          <Swiper
            :navigation="true"
            :slidesPerView="'auto'"
            :centeredSlides="true"
            :observer="true"
            :observeParents="true"
            class="addCartSwiper mb-6 pb-6 border-bottom border-light"
          >
            <SwiperSlide>
              <div class="d-flex flex-sm-row flex-column justify-content-center align-items-center">
                <div
                  class="d-flex flex-column align-items-center w-sm-auto w-50
                  p-3 mb-sm-0 mb-3 bg-light rounded-2"
                >
                  <p class="mb-3" v-if="productDetail.productInfo.lowestPriceUnit === '每人'">
                    成人
                  </p>
                  <p
                    class="mb-3"
                    v-else-if="
                      productDetail.productInfo.category !== '包車服務' &&
                        productDetail.productInfo.lowestPriceUnit !== '每人'
                    "
                  >
                    數量
                  </p>
                  <p
                    class="mb-3"
                    v-else-if="
                      productDetail.productInfo.category === '包車服務' &&
                        productDetail.productInfo.lowestPriceUnit !== '每人'
                    "
                  >
                    台
                  </p>
                  <div class="d-flex align-items-center">
                    <button
                      type="button"
                      class="bg-transparent px-2 py-1
                      rounded-circle border-secondary text-secondary"
                      @click="changeTktNum('adult', 'minus')"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <p class="p-3">
                      {{ productDetail.tktNum.adult }}
                    </p>
                    <button
                      type="button"
                      class="bg-transparent px-2 py-1
                      rounded-circle border-secondary text-secondary"
                      @click="changeTktNum('adult', 'plus')"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
                <div
                  class="d-flex flex-column align-items-center w-sm-auto w-50
                  p-3 bg-light rounded-2 ms-sm-3"
                  v-if="productDetail.productInfo.lowestPriceUnit === '每人'"
                >
                  <p class="mb-3">
                    孩童
                  </p>
                  <div class="d-flex align-items-center">
                    <button
                      type="button"
                      class="bg-transparent px-2 py-1 rounded-circle
                      border-secondary text-secondary"
                      @click="changeTktNum('child', 'minus')"
                    >
                      <i class="bi bi-dash-lg"></i>
                    </button>
                    <p class="p-3">
                      {{ productDetail.tktNum.child }}
                    </p>
                    <button
                      type="button"
                      class="bg-transparent px-2 py-1 rounded-circle
                      border-secondary text-secondary"
                      @click="changeTktNum('child', 'plus')"
                    >
                      <i class="bi bi-plus-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="mx-auto w-sm-50 w-75">
                <div class="d-flex flex-column align-items-center bg-light rounded-2 p-3">
                  <label for="startDate" class="mb-3">
                    日期
                  </label>
                  <flat-pickr
                    id="startDate"
                    ref="startDate"
                    :config="config"
                    v-model="productDetail.startDate"
                    class="py-sm-2 text-center"
                  ></flat-pickr>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div class="d-flex justify-content-between align-items-end">
            <p class="h3 text-light mb-2">
              NT
              <span class="h2">
                {{
                  addComma(
                    this.optionDetail.price *
                      (productDetail.tktNum.adult + productDetail.tktNum.child),
                  )
                }}
              </span>
            </p>
            <button
              type="button"
              class="btn btn-primary w-50 d-flex justify-content-center align-items-center py-2"
              ref="addCartBtn"
              @click="$emit('emit-add-cart', this.productDetail, this.optionDetail)"
              :disabled="productDetail.startDate === '' || productDetail.tktNum.adult < 1"
            >
              <div class="spinner-border spinner-border-sm text-dark d-none" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="ms-1">
                <span v-if="productDetail.startDate === ''">填寫日期</span>
                <span v-else>加入購物車</span>
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FlatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';

export default {
  props: ['temp', 'moreInfo'],
  emits: ['emit-add-cart'],
  data() {
    return {
      config: {
        altFormat: 'F j, Y',
        dateFormat: 'Y-m-d',
        minDate: 'today',
      },
      productDetail: {},
      optionDetail: {},
    };
  },
  components: {
    FlatPickr,
  },
  methods: {
    changeTktNum(tktType, calcType) {
      if (tktType === 'adult') {
        if (calcType === 'plus') {
          this.productDetail.tktNum.adult += 1;
        } else if (calcType === 'minus' && this.productDetail.tktNum.adult >= 2) {
          this.productDetail.tktNum.adult -= 1;
        }
      } else if (tktType === 'child') {
        if (calcType === 'plus') {
          this.productDetail.tktNum.child += 1;
        } else if (calcType === 'minus' && this.productDetail.tktNum.child >= 1) {
          this.productDetail.tktNum.child -= 1;
        }
      }
    },
  },
  watch: {
    moreInfo: {
      handler() {
        this.productDetail = JSON.parse(JSON.stringify(this.moreInfo));
      },
      deep: true,
    },
    temp() {
      this.optionDetail = { ...this.temp };
    },
  },
  created() {
    this.productDetail = JSON.parse(JSON.stringify(this.moreInfo));
    this.optionDetail = { ...this.temp };
  },
  computed: {
    addComma() {
      return (price) => {
        const parts = price.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return `${parts.join(',')}`;
      };
    },
  },
};
</script>
