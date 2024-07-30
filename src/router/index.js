import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AreaUno',
    name: 'AreaUno',
    component: () => import('../views/AreaUnoView.vue')
  },

  {
    path: '/AreaDos',
    name: 'AreaDos',
    component: () => import('../views/AreaDosView.vue')
  },

  {
    path: '/Cotizador',
    name: 'Cotizador',
    component: () => import('../views/CotizadorView.vue')
  },

  {
    path: '/Clientes',
    name: 'Clientes',
    component: () => import('../views/ClientesView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
