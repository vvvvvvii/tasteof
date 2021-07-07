<template>
  <div class="container pt-7">
    <div class="py-8">
      <div class="bg-light rounded-3 p-7">
        <div v-if="cart.total > 0">
          <div class="d-flex justify-content-between mb-6">
            <h2 class="h3 text-primary">訂單內容</h2>
            <button
              type="button"
              class="btn btn-outline-primary d-flex justify-content-center align-items-center px-5"
              @click="deleteAllProducts()"
              ref="deleteOrderBtn"
              :disabled="Object.keys(cart).length == 0 || cart.total == 0"
            >
              <div class="spinner-border spinner-border-sm text-light d-none me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p>清空購物車</p>
            </button>
          </div>
          <table class="table mb-7">
            <!--購物車有東西才顯示這塊-->
            <thead>
              <tr>
                <th scope="col">商品名稱</th>
                <th scope="col">使用日期</th>
                <th scope="col">成人（ 12+ ）</th>
                <th scope="col">孩童（ 6~12 ）</th>
                <th scope="col">商品總價</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="item in cart.carts" :key="item.id">
                <tr>
                  <th scope="row">
                    <router-link
                      :to="`/product/${item.product_id}`"
                      title="前往產品頁"
                      class="text-primary"
                    >
                      <p>{{ item.product.title }}</p>
                      <p>{{ item.optionName }}</p>
                    </router-link>
                  </th>
                  <td>{{ item.start_date }}</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <button
                        class="border-0 bg-transparent p-2"
                        @click="changeTktNum('adult', 'minus', item.qtyDetail, item.id)"
                      >
                        <i class="bi bi-dash-lg"></i>
                      </button>
                      <p class="p-1">
                        {{ item.qtyDetail.adult }}
                      </p>
                      <button
                        class="border-0 bg-transparent p-2"
                        @click="changeTktNum('adult', 'plus', item.qtyDetail, item.id)"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                  </td>
                  <td>
                    <div class="d-flex align-items-center">
                      <button
                        class="border-0 bg-transparent p-2"
                        @click="changeTktNum('child', 'minus', item.qtyDetail, item.id)"
                      >
                        <i class="bi bi-dash-lg"></i>
                      </button>
                      <p class="p-1">
                        {{ item.qtyDetail.child }}
                      </p>
                      <button
                        class="border-0 bg-transparent p-2"
                        @click="changeTktNum('child', 'plus', item.qtyDetail, item.id)"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                  </td>
                  <td>NT {{ item.total }}</td>
                  <td>
                    <a type="button">
                      <span class="material-icons" @click="deleteProduct(item.id)">
                        delete
                      </span>
                    </a>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
          <h2 class="h3 text-primary mb-6">客戶資料</h2>
          <div class="d-flex justify-content-between mb-4">
            <p>第一位旅客</p>
            <div class="d-flex flex-column">
              <button type="button" class="btn btn-primary d-block mb-2 px-5">新增旅客</button>
              <button type="button" class="btn btn-outline-primary d-block px-5">
                清空資料
              </button>
            </div>
          </div>
          <Form class="row" v-slot="{ errors }" @submit="addOrder">
            <div class="col-3 mb-3">
              <label for="bookNameCartInput" class="form-label">姓名</label>
              <Field
                type="text"
                id="bookNameCartInput"
                name="姓名"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                rules="required"
                v-model="customerDetail.user.name"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-3 mb-3">
              <label for="bookGenderCartInput" class="form-label">稱謂</label>
              <Field
                name="稱謂"
                class="form-select"
                id="bookGenderCartInput"
                :class="{ 'is-invalid': errors['稱謂'] }"
                rules="required"
                v-model="customerDetail.user.gender"
                as="select"
              >
                <option disabled value="">請選擇稱謂</option>
                <option selected value="male">先生</option>
                <option value="female">女士</option>
              </Field>
            </div>
            <div class="col-3 mb-3">
              <label for="bookIdNumCartInput" class="form-label">身分證字號</label>
              <Field
                type="text"
                name="身分證"
                class="form-control"
                id="bookIdNumCartInput"
                :class="{ 'is-invalid': errors['身分證'] }"
                :rules="isIdNum"
                v-model="customerDetail.user.idNum"
              ></Field>
              <ErrorMessage name="身分證" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-3 mb-3">
              <label for="bookPassportNumCartInput" class="form-label">
                護照號碼
              </label>
              <Field
                type="text"
                name="護照號碼"
                class="form-control"
                id="bookPassportNumCartInput"
                :class="{ 'is-invalid': errors['護照號碼'] }"
                rules="length:9|numeric"
                v-model="customerDetail.user.passportNum"
              ></Field>
              <ErrorMessage name="護照號碼" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-3 mb-3">
              <label for="bookTelCartInput" class="form-label">聯繫電話</label>
              <Field
                type="tel"
                name="電話"
                class="form-control"
                id="bookTelCartInput"
                :class="{ 'is-invalid': errors['電話'] }"
                rules="required|numeric|max:10"
                v-model="customerDetail.user.tel"
              ></Field>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-3 mb-3">
              <label for="bookEmailCartInput" class="form-label">
                電子信箱
              </label>
              <Field
                type="email"
                name="email"
                class="form-control"
                id="bookEmailCartInput"
                placeholder="customer@example.com"
                :class="{ 'is-invalid': errors['email'] }"
                rules="email|required"
                v-model="customerDetail.user.email"
              ></Field>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="col-6 mb-3">
              <label for="bookAddrCartInput" class="form-label">地址</label>
              <Field
                type="text"
                name="地址"
                class="form-control"
                id="bookAddrCartInput"
                :class="{ 'is-invalid': errors['地址'] }"
                rules="required"
                v-model="customerDetail.user.address"
              ></Field>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="mb-7">
              <label for="exampleFormControlTextarea1" class="form-label">備註</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                v-model="customerDetail.message"
              ></textarea>
            </div>
            <div class="d-flex flex-column align-items-end">
              <h5 class="h4 mb-3">
                總金額
                <span class="h2 text-primary">NT {{ cart.final_total || 0 }}</span>
              </h5>
              <!--cart 是空物件或價格為 0 時不可點清空或結帳（確保購物車為空時不可點擊）-->
              <button
                type="submit"
                class="btn btn-primary d-block px-5"
                ref="addOrderBtn"
                :disabled="Object.keys(cart).length == 0 || cart.total == 0"
              >
                <p>下一步</p>
              </button>
            </div>

            <!-- <button
              type="submit"
              class="btn btn-primary w-25 d-flex justify-content-center align-items-center"
              ref="addOrderBtn"
              :disabled="Object.keys(cart).length == 0 || cart.total == 0"
            >
              <div class="spinner-border spinner-border-sm text-light d-none me-1" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p>下一步</p>
            </button> -->
          </Form>
        </div>
        <!--無商品時顯示-->
        <div class="text-center" v-else>
          <p class="mb-4">
            購物車目前還沒有商品耶
            <i class="bi bi-eraser"></i>
          </p>
          <p class="mb-2">
            客倌要不要
            <router-link :to="`/product_list`" title="前往產品頁" class="text-secondary h3">
              來這裡挑挑看、選選看
            </router-link>
            呢？
          </p>
          <p>
            也可以
            <router-link :to="`/article_list`" title="前往文章頁" class="text-secondary h3">
              來這裡尋找玩樂靈感
            </router-link>
            唷！
          </p>
        </div>
      </div>
    </div>
  </div>
  <!--alert-->
  <alert v-if="showAlert" :alert-msg="alertMsg"></alert>
</template>
<script>
import alert from '@/components/Alert.vue';

export default {
  data() {
    return {
      customerDetail: {
        user: {
          name: '',
          gender: '',
          idNum: '',
          passportNum: '',
          tel: '',
          email: '',
          address: '',
        },
        message: '',
      },
      cart: {},
      showAlert: false,
      alertMsg: '',
    };
  },
  components: {
    alert,
  },
  methods: {
    getCartInfo() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
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
    backToHomePage() {
      this.$router.push('/');
    },
    changeTktNum(tktType, calcType, detail, id) {
      const qtyDetail = { ...detail };
      if (tktType === 'adult') {
        if (calcType === 'plus') {
          qtyDetail.adult += 1;
        } else if (calcType === 'minus' && qtyDetail.adult >= 2) {
          qtyDetail.adult -= 1;
        }
      } else if (calcType === 'plus') {
        qtyDetail.child += 1;
      } else if (calcType === 'minus' && qtyDetail.child >= 1) {
        qtyDetail.child -= 1;
      }
      const data = {
        data: {
          product_id: id,
          qty: qtyDetail.adult + qtyDetail.child,
          qtyDetail,
        },
      };
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`, data)
        .then((res) => {
          if (res.data.success) {
            this.getCartInfo();
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    deleteProduct(id) {
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.customAlert('已清除商品');
            this.getCartInfo();
            window.setTimeout(this.closeCustomAlert, 5000);
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    deleteAllProducts() {
      //   if (confirm('真的要全數清空嗎Ｑ口Ｑ')) {
      const { deleteOrderBtn } = this.$refs;
      deleteOrderBtn.classList.add('disabled');
      deleteOrderBtn.children[0].classList.remove('d-none');
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          if (res.data.success) {
            this.customAlert('已清除購物車');
            this.getCartInfo();
            deleteOrderBtn.classList.remove('disabled');
            deleteOrderBtn.children[0].classList.add('d-none');
            window.setTimeout(this.closeCustomAlert, 3500);
            window.setTimeout(this.backToHomePage, 4000);
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
      //   }
    },
    addOrder() {
      const { addOrderBtn } = this.$refs;
      addOrderBtn.classList.add('disabled');
      addOrderBtn.children[0].classList.remove('d-none');
      const data = {
        data: this.customerDetail,
      };
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          if (res.data.success) {
            this.customAlert(`已建立訂單編號${res.data.orderId}`);
            this.getCartInfo();
            addOrderBtn.classList.remove('disabled');
            addOrderBtn.children[0].classList.add('d-none');
            window.setTimeout(this.closeCustomAlert, 3500);
            // 自動導回首頁，也達成購物車表單清空的功能（直接在此函式清空會讓 veevalidate 秀出未填的錯誤）
            window.setTimeout(this.backToHomePage, 4000);
          } else {
            this.customAlert(res.data.message);
          }
        })
        .catch((err) => {
          this.customAlert(err.response);
        });
    },
    isIdNum(value) {
      const idNum = /^[A-Z][0-9]{9}$/;
      return idNum.test(value) ? true : '請輸入正確的身分證字號';
    },
  },
  created() {
    this.getCartInfo();
  },
};
</script>
