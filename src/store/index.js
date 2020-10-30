import { createStore } from 'vuex'

export default createStore({
  state: {
    showInfoPopup: false,
    showIndexPopup: false,
    num: 0
  },
  mutations: {
    addCount (state, num) {
      state.num += num
    },
    showIndexPopup (state, flag) {
      state.showIndexPopup = flag
    },
    showInfoPopup (state, flag) {
      state.showInfoPopup = flag
    }
  },
  actions: {
  },
  modules: {

  }
})
