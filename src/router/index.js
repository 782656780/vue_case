import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/index.vue")
  },
  {
    path: "/",
    name: "home",
    redirect: {
      name: "vueDayOne"
    },
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
    children: [
      // vue => vue第一天
      {
        path: "vueDayOne",
        name: "vueDayOne",
        component: () =>
          import(
            /* webpackChunkName: "vueDayOne" */ "../views/vue/vueDayOne/index.vue"
          )
      },
      // vue => vue第二天
      {
        path: "vueDayTwo",
        name: "vueDayTwo",
        component: () =>
          import(
            /* webpackChunkName: "vueDayTwo" */ "../views/vue/vueDayTwo/index.vue"
          )
      },
      // vue => vue第三天
      {
        path: "vueDayThree",
        name: "vueDayThree",
        component: () =>
          import(
            /* webpackChunkName: "vueDayThree" */ "../views/vue/vueDayThree/index.vue"
          )
      },
      // vue => vue第四天
      {
        path: "vueDayFour",
        name: "vueDayFour",
        component: () =>
          import(
            /* webpackChunkName: "vueDayFour" */ "../views/vue/vueDayFour/index.vue"
          )
      },
      //vuex => todo案例
      {
        path: "vuexDemo",
        name: "vuexDemo",
        component: () =>
          import(
            /* webpackChunkName: "vuexDemo" */ "../views/vuexDemo/vuexDemo.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 添加导航守卫，避免未登录用户访问未授权页面。
router.beforeEach((to, from, next) => {
  next();
});
export default router;
