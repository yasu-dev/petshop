import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pets: []
  },

  mutations: {
    setPrice: function (state, {data}) {
      state.pets = data
    }
  },

  actions: {
    getPetsdata: function ({commit}) {
      return axios.get('https://virtserver.swaggerhub.com/yasu-dev/apiCoop/1.0.0/books')
        .then(response => {
          commit('setPrice', {data: response.data})
        })
    }
  }
})
