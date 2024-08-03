import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardEstatusDatos: {}
  },
  getters: {
  },
  mutations: {
    setCardEstatusDatos(state, datos) {
      state.cardEstatusDatos = datos;
    }
  },
  actions: {
  },
  modules: {
  }
})
