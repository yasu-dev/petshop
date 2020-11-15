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
      return axios.get('https://2dp9x1udf4.execute-api.ap-northeast-1.amazonaws.com/staging/books')
        .then(response => {
          commit('setPrice', {data: response.data})
        })
    }
  }
})
