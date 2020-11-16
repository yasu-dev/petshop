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
      return axios.get('https://89nbrsaxkb.execute-api.ap-northeast-1.amazonaws.com/Stage/hello')
        .then(response => {
          commit('setPrice', {data: response.data})
        })
    }
  }
})
