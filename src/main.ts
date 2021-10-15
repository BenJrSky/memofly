import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { BootstrapVue } from 'bootstrap-vue'

import VueWordCloud from 'vuewordcloud';

Vue.component(VueWordCloud.name, VueWordCloud);

Vue.use(BootstrapVue)
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
