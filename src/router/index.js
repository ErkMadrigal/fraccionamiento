import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    // component: HomeView
    beforeEnter() {
      window.location.href = '/pages/index.html'; // Ajusta la ruta al archivo HTML deseado
    }
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
  },  
  {
    path: '/Desarrollo',
    name: 'Desarrollo',
    component: () => import('../views/DesarrolloView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
