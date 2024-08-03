import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css';
import './assets/css/fonts.css';

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'boxicons'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';


import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

Vue.use(Vuesax)
Vue.use(BootstrapVue,{
  locale: 'es'
})
Vue.use(IconsPlugin)

Vue.use(VueApexCharts)

Vue.component('apexchart-all', VueApexCharts)

Vue.component('v-select', vSelect);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
