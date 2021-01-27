import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

axios.defaults.baseURL = 'http://localhost:3000'

const afterLogin = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Access-Control-Origin': '*' },
})

afterLogin.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

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
            localStorage.setItem('id_admin', response.data.data.id)
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
        localStorage.removeItem('id_admin')
        await context.commit('destroyToken')
        console.log(this.state.token)
        console.log(this.getters.isLogedIn)
      }
    },
    fetchPaslon (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get('/candidate/getAll')
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    submitCandidate (context, payload) {
      return new Promise((resolve, reject) => {
        afterLogin.post('/candidate/add', payload)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    submitCandidateData (context, payload) {
      return new Promise((resolve, reject) => {
        afterLogin.post(`/candidateData/add/${payload.id_candidate}`, payload)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    submitNews (context, payload) {
      return new Promise((resolve, reject) => {
        afterLogin.post('/announcement/add', payload)
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    fetchNews (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get('/announcement/getAll')
          .then((response) => {
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
})
