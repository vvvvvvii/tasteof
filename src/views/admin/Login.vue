<template>
  <div class="py-4">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <img
            src="img/3d-flame-146.png"
            alt="login-img"
            class="customer-modal-img primary-customer-modal-img"
          />
        </div>
        <div class="col-4 position-relative">
          <div class="customer-modal-inner primary-customer-modal-inner">
            <form>
              <div class="mb-3">
                <label for="loginInputEmail" class="form-label">帳號</label>
                <input
                  type="email"
                  class="form-control"
                  id="loginInputEmail"
                  v-model.trim="userName"
                  aria-describedby="emailHelp"
                  placeholder="example@gmail.com"
                />
              </div>
              <div class="mb-3">
                <label for="loginInputPassword" class="form-label">密碼</label>
                <input
                  type="password"
                  class="form-control"
                  id="loginInputPassword"
                  v-model.trim="password"
                />
              </div>
              <div class="mb-5 form-check">
                <input type="checkbox" class="form-check-input" id="loginCheck" v-model="check" />
                <label class="form-check-label small" for="loginCheck">
                  我遵守
                  <a href="#">客戶條款</a>
                </label>
              </div>
              <div class="d-grid gap-2 mx-auto text-center">
                <button type="button" class="btn btn-dark mb-1" @click="checkLogin">
                  登入
                </button>
                <a href="#">忘記密碼？</a>
                <p>
                  還沒有帳號？
                  <a href="#">註冊</a>
                </p>
              </div>
            </form>
          </div>
          <div class="customer-modal-inner-shadow primary-customer-modal-inner-shadow"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
      check: false,
    };
  },
  methods: {
    checkLogin() {
      if (this.userName !== '' && this.password !== '' && this.check) {
        // 帳密不為空且有勾選同意條款
        this.$http
          .post(`${process.env.VUE_APP_API}/admin/signin`, {
            username: this.userName,
            password: this.password,
          })
          .then((res) => {
            if (res.data.success) {
              alert('登入成功，請稍候'); // 印出登入成功或失敗、晚點再來調整警告視窗樣式
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
              document.cookie = `hexTokenExpired=${tokenExpired};expires=${new Date(
                expired,
              )};path=/`; // 有效期限
              this.$router.push('/admin/product');
              return;
            }
            alert('登入失敗，請確認帳密是否正確');
          })
          .catch((err) => console.log(err.response));
      } else {
        alert('請輸入帳密並同意相關條款'); // 晚點再來調整警告視窗樣式
      }
    },
  },
};
</script>
