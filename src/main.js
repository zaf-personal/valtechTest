import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueAnimateNumber from "vue-animate-number";
import VueGoogleCharts from "vue-google-charts";

Vue.use(VueAnimateNumber);
Vue.use(VueGoogleCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
