import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";

import "./style/element-variables.scss";
import "./style/reset.css"; // css初始化
import "./style/common.scss";

// 引入css todo案例css
import "./style/base.css";
import "./style/index.css";

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: "mini" });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
