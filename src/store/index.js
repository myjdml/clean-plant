import { createStore } from 'vuex'

export default createStore({
  state: {
    show1: false,
    num: 0
  },
  mutations: {
    addCount (state, num) {
      state.num += num
    },
    show (state, flag) {
      state.show1 = flag
    }
  },
  actions: {
  },
  modules: {

  }
})
