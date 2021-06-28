import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import 'bootstrap';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';

import router from './router';
import App from './App.vue';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true, // 調整為輸入字元立即進行驗證
});
setLocale('zh_TW');
SwiperCore.use([Autoplay, Navigation]);

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .component('Form', Form)
  .component('Field', Field)
  .component('ErrorMessage', ErrorMessage)
  .component('Swiper', Swiper)
  .component('SwiperSlide', SwiperSlide)
  .mount('#app');
