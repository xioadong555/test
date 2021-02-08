import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$axios = axios 
new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
