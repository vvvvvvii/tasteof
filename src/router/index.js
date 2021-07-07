import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '首頁',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/Index.vue'),
      },
      {
        path: 'product_list',
        name: '前台產品頁',
        component: () => import('../views/ProductList.vue'),
      },
      {
        path: 'product/:id',
        name: '前台產品細節頁',
        component: () => import('../views/Product.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        path: 'article_list',
        name: '前台文章頁',
        component: () => import('../views/ArticleList.vue'),
      },
      {
        path: 'article/:id',
        name: '前台文章細節頁',
        component: () => import('../views/Article.vue'),
        props: (route) => ({
          id: route.params.id,
        }),
      },
      {
        path: 'cart',
        name: '前台購物車頁',
        component: () => import('../views/Cart.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: '登入頁',
    component: () => import('../views/admin/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'product',
        name: '後台產品頁',
        component: () => import('../views/admin/ProductAdmin.vue'),
      },
      {
        path: 'order',
        name: '後台訂單頁',
        component: () => import('../views/admin/OrderAdmin.vue'),
      },
      {
        path: 'coupon',
        name: '後台優惠券頁',
        component: () => import('../views/admin/CouponAdmin.vue'),
      },
      {
        path: 'article',
        name: '後台文章頁',
        component: () => import('../views/admin/ArticleAdmin.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404 頁',
    component: () => import('../views/NotFound404.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
