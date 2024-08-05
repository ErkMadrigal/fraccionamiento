import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css';
import './assets/css/fonts.css';

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'boxicons'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';


import VueApexCharts from 'vue-apexcharts'

import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);

Vue.config.productionTip = false

Vue.use(Vuesax)
Vue.use(BootstrapVue,{
  locale: 'es'
})

Vue.use(VueApexCharts)

Vue.component('apexchart-all', VueApexCharts)

Vue.component('v-select', vSelect);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
