import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardEstatusDatos: {},
    cardCotizacionDatos: {},
    datos: null,
    fechas: []
  },
  getters: {
    getDatos: state => state.datos,
    getFechas: state => state.fechas

  },
  mutations: {
    setCardEstatusDatos(state, datos) {
      state.cardEstatusDatos = datos;
    },
    setCardCotizacionDatos(state, datos) {
      state.cardCotizacionDatos = datos;
    },
    setDatos(state, payload) {
      state.datos = payload;
    },
    setFechas(state, fechas) {
      state.fechas = fechas;
    },
    updateFechas({ commit }, fechas) {
      commit('setFechas', fechas);
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
