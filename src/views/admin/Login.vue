<template>
  <div class="py-8">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-4 position-relative">
          <div class="customer-modal-inner primary-customer-modal-inner">
            <h2 class="text-center mb-6">登入管理後台</h2>
            <Form v-slot="{ errors }" @submit="checkLogin">
              <div class="mb-3">
                <label for="loginInputEmail" class="form-label">帳號</label>
                <Field
                  type="email"
                  id="loginInputEmail"
                  name="帳號"
                  class="form-control"
                  :class="{ 'is-invalid': errors['帳號'] }"
                  rules="required"
                  placeholder="example@gmail.com"
                  v-model.trim="userName"
                ></Field>
                <ErrorMessage name="帳號" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="loginInputPassword" class="form-label">密碼</label>
                <Field
                  type="password"
                  id="loginInputPassword"
                  name="密碼"
                  class="form-control"
                  :class="{ 'is-invalid': errors['密碼'] }"
                  rules="required"
                  v-model.trim="password"
                ></Field>
                <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="mb-5 form-check d-flex align-items-center">
                <input
                  type="checkbox"
                  class="form-check-input mt-0"
                  id="loginCheck"
                  v-model="check"
                />
                <label class="form-check-label small ms-2" for="loginCheck">
                  我遵守
                  <a class="text-secondary">客戶條款</a>
                </label>
              </div>
              <div class="d-grid gap-2 mx-auto text-center">
                <button
                  type="submit"
                  class="btn btn-secondary mb-1 d-flex justify-content-center align-items-center"
                  ref="loginBtn"
                  :disabled="userName === '' || password === '' || check === false"
                >
                  <div class="spinner-border spinner-border-sm text-light d-none" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  <p class="ms-1">登入</p>
                </button>
                <a class="text-secondary">忘記密碼？</a>
                <p>
                  還沒有帳號？
                  <a class="text-secondary">註冊</a>
                </p>
              </div>
            </Form>
          </div>
          <div class="customer-modal-inner-shadow primary-customer-modal-inner-shadow"></div>
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
      userName: '',
      password: '',
      check: false,
      showAlert: false,
      alertMsg: '',
    };
  },
  components: {
    alert,
  },
  methods: {
    customAlert(msg) {
      this.alertMsg = msg;
      this.showAlert = true; // 秀出 alert
    },
    closeCustomAlert() {
      this.showAlert = false;
    },
    checkLogin() {
      const { loginBtn } = this.$refs;
      loginBtn.classList.add('disabled');
      loginBtn.children[0].classList.remove('d-none');
      this.$http
        .post(`${process.env.VUE_APP_API}/admin/signin`, {
          username: this.userName,
          password: this.password,
        })
        .then((res) => {
          if (res.data.success) {
            this.customAlert('登入成功，請稍候');
            window.setTimeout(this.closeCustomAlert, 5000);
            // token expired 放到 cookie，時效內不用一直登入
            const { token, expired } = res.data;
            // 把 token 開始及結束時間整理成好閱讀的格式
            const now = new Date();
            const expiredDate = new Date(expired);
            const weekdayNames = ['日', '一', '二', '三', '四', '五', '六'];
            const tokenStart = `${now.getFullYear()} 年 ${now.getMonth()
              + 1} 月 ${now.getDate()} 日 星期${
              weekdayNames[now.getDay()]
            } ${now.getHours()}:${`00${now.getMinutes()}`.slice(-2)}`;
            const tokenExpired = `${expiredDate.getFullYear()} 年 ${expiredDate.getMonth()
              + 1} 月 ${expiredDate.getDate()} 日 星期${
              weekdayNames[expiredDate.getDay()]
            } ${expiredDate.getHours()}:${`00${expiredDate.getMinutes()}`.slice(-2)}`;
            // token expired 、 login name 、 token 開始及結束時間放進 cookie
            document.cookie = `hexToken=${token};expires=${new Date(expired)};path=/`;
            document.cookie = `hexLoginName=${this.userName.split('@', 1)};expires=${new Date(
              expired,
            )};path=/`; // 登入名稱
            document.cookie = `hexTokenStart=${tokenStart};expires=${new Date(expired)};path=/`; // 登入時間
            document.cookie = `hexTokenExpired=${tokenExpired};expires=${new Date(expired)};path=/`; // 有效期限
            loginBtn.classList.remove('disabled');
            loginBtn.children[0].classList.add('d-none');
            this.$router.push('/admin/product');
            return;
          }
          this.customAlert('登入失敗，請確認帳密是否正確');
          loginBtn.classList.remove('disabled');
          loginBtn.children[0].classList.add('d-none');

          window.setTimeout(this.closeCustomAlert, 5000);
        })
        .catch((err) => {
          this.customAlert(err.response);
          window.setTimeout(this.closeCustomAlert, 5000);
          loginBtn.classList.remove('disabled');
          loginBtn.children[0].classList.add('d-none');
        });
    },
  },
};
</script>
