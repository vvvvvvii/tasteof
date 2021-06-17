<template>
  <div class="container">
    <table class="table" v-if="cart.total > 0">
      <!--購物車有東西才顯示這塊-->
      <thead>
        <tr>
          <th scope="col">商品名稱</th>
          <th scope="col">使用日期</th>
          <th scope="col">商品單價</th>
          <th scope="col">數量</th>
          <th scope="col">商品總價</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in cart.carts" :key="item.id">
          <tr>
            <th scope="row">{{ item.product.title }}</th>
            <td>{{ item.start_date }}</td>
            <td>
              {{ item.product.price }}
              <span class="ms-1">/ {{ item.product.unit }}</span>
            </td>
            <td>
              <input
                type="number"
                v-model.number="item.qty"
                @change="changeCartNum(item.qty, item.id)"
                min="1"
              />
            </td>
            <td>{{ item.total }}</td>
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
    <p class="fs-5 text-center mb-6" v-else>購物車目前暫無商品唷 ꉂ(ˊᗜˋ*)</p>
    <Form class="row" v-slot="{ errors }" @submit="addOrder">
      <div class="col-3 mb-3">
        <label for="bookNameCartInput" class="form-label">姓名 Name</label>
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
        <label for="bookGenderCartInput" class="form-label">稱謂 Gender</label>
        <Field
          name="稱謂"
          class="form-select"
          id="bookGenderCartInput"
          :class="{ 'is-invalid': errors['稱謂'] }"
          rules="required"
          v-model="customerDetail.user.gender"
          as="select"
        >
          <option selected value="male">Mr. / 先生</option>
          <option value="female">Ms. / 女士</option>
        </Field>
      </div>
      <div class="col-3 mb-3">
        <label for="bookIdNumCartInput" class="form-label">身分證字號 Id Number</label>
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
          護照號碼 Passport Number
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
        <label for="bookTelCartInput" class="form-label">聯繫電話 Contact Number</label>
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
          電子信箱 Email Address
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
        <label for="bookAddrCartInput" class="form-label">地址 Address</label>
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
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">備註</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="customerDetail.message"
        ></textarea>
      </div>
      <div class="d-flex justify-content-between">
        <h5>總金額：{{ cart.final_total || 0 }}</h5>
        <div class="d-flex">
          <!--cart 是空物件或價格為 0 時不可點清空或結帳（確保購物車為空時不可點擊）-->
          <button
            type="button"
            class="btn btn-secondary"
            @click="deleteAllProducts()"
            :disabled="Object.keys(cart).length == 0 || cart.total == 0"
          >
            清空購物車
          </button>
          <button
            type="submit"
            class="btn btn-primary ms-2"
            :disabled="Object.keys(cart).length == 0 || cart.total == 0"
          >
            結帳
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>
<script>
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
    };
  },
  created() {
    this.getCartInfo();
  },
  methods: {
    getCartInfo() {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data;
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    changeCartNum(qty, id) {
      const data = {
        data: {
          product_id: id,
          qty,
        },
      };
      this.$http
        .put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`, data)
        .then((res) => {
          if (res.data.success) {
            this.getCartInfo();
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    deleteProduct(id) {
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          if (res.data.success) {
            this.getCartInfo();
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    deleteAllProducts() {
      //   if (confirm('真的要全數清空嗎Ｑ口Ｑ')) {
      this.$http
        .delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          if (res.data.success) {
            this.getCartInfo();
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
      //   }
    },
    addOrder() {
      const data = {
        data: this.customerDetail,
      };
      console.log(data);
      this.$http
        .post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, data)
        .then((res) => {
          if (res.data.success) {
            console.log(`已建立訂單編號${res.data.orderId}`);
            this.getCartInfo();
          } else {
            console.log(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    isIdNum(value) {
      const idNum = /^[A-Z][0-9]{9}$/;
      return idNum.test(value) ? true : '請輸入正確的身分證字號';
    },
  },
};
</script>
