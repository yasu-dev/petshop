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
    getPricedata: function ({commit}, {Xmldata}) {
      return axios.post('https://89nbrsaxkb.execute-api.ap-northeast-1.amazonaws.com/Stage/user', {
        headers: {'Content-Type': 'application/json'}, Xmldata})
    },
    postPetsdata: function ({commit}) {
      return axios.post('https://89nbrsaxkb.execute-api.ap-northeast-1.amazonaws.com/Prod/hello/')
        .then(response => {
          commit('setPrice', {data: response.data})
        })
    },
    getPetsdata: function ({commit}) {
      return axios.get('https://89nbrsaxkb.execute-api.ap-northeast-1.amazonaws.com/Stage/hello')
        .then(response => {
          commit('setPrice', {data: response.data})
        })
    },
    putPetsdata: function ({commit}) {
      return axios.put('https://89nbrsaxkb.execute-api.ap-northeast-1.amazonaws.com/Stage/hello')
        .then(response => {
          commit('setPrice', {data: response.data})
        })
    }
  }
})
