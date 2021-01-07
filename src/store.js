import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

axios.defaults.baseURL = 'http://evoteapi.showroomrezamotor.com'
Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    isLogedIn (state) {
      return state.token !== null
    },
  },
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    token: localStorage.getItem('token') || null,
  },
  mutations: {
    retrieveToken (state, token) {
      state.token = token
    },
    destroyToken (state) {
      state.token = null
    },
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },
    SET_DRAWER (state, payload) {
      state.drawer = payload
    },
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', payload)
          .then((response) => {
            console.log('login success')
            localStorage.setItem('token', response.data.data.token)
            context.commit('retrieveToken', response)
            router.push({ name: 'Dashboard' })
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    async logout (context) {
      console.log(this.getters.isLogedIn)
      if (this.getters.isLogedIn) {
        localStorage.removeItem('token')
        await context.commit('destroyToken')
        console.log(this.state.token)
        console.log(this.getters.isLogedIn)
      }
    },
  },
})
