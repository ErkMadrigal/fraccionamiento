import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/Mapa',
    name: 'Mapa',
    component: () => import('../views/MapaView.vue')
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
