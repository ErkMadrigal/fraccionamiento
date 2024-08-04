import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardEstatusDatos: {},
    datos: null
  },
  getters: {
    getDatos: state => state.datos
  },
  mutations: {
    setCardEstatusDatos(state, datos) {
      state.cardEstatusDatos = datos;
    },
    setDatos(state, payload) {
      state.datos = payload;
    }
  },
  actions: {
    updateDatos({ commit }, datos) {
      commit('setDatos', datos);
    }
  },
  modules: {
  }
})
