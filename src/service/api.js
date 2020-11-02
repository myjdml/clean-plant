import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from '../service/jwt'
import { API_URL } from '../config/config'

const ApiService = {
  init () {
    /* eslint-disable comma-spacing */
    Vue.use(VueAxios,axios)
    Vue.axios.defaults.baseURL = API_URL
    this.setHeader()
  },
  setHeader () {
    /* eslint-disable dot-notation */
    Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${JwtService.getToken()}`
  }
}

export default ApiService
