/*
 * @Author: your name
 * @Date: 2020-11-21 15:32:46
 * @LastEditTime: 2020-11-23 21:51:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /clean-plant/src/store/index.js
 */
import { createStore } from 'vuex'
import { DLELTE_IMAGE, UPLOAD_IMAGE } from './type/actions'
import { DELETE_EDIT_IMAGES, END_IMAGE_UPLOADING, SET_EDIT_IMAGES, SET_IMAGE_UPLOADING } from './type/mutations'

export default createStore({
  state: {
    showInfoPopup: false,
    showIndexPopup: false,
    showRollPopup: false,
    showActivityPopup: false,
    showWarmPopup: false,
    showOverPopup: false,
    num: 0,
    image: [],
    imageId: []
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
    },
    showRollPopup (state, flag) {
      state.showRollPopup = flag
    },
    showActivityPopup (state, flag) {
      state.showActivityPopup = flag
    },
    showWarmPopup (state, flag) {
      state.showWarmPopup = flag
    },
    showOverPopup (state, flag) {
      state.showOverPopup = flag
    },
    [SET_IMAGE_UPLOADING] (state) {
      state.isUploading = true
    },
    [END_IMAGE_UPLOADING] (state) {
      state.isUploading = false
    },
    [SET_EDIT_IMAGES] (state, { blob, imageId }) {
      state.image.push(blob)
      state.imageId.push(imageId)
    },
    [DELETE_EDIT_IMAGES] (state, index) {
      state.image.splice(index, 1)
      state.imageId.splice(index, 1)
    }
  },
  actions: {
    async [UPLOAD_IMAGE] ({ commit }, blob) {
      commit(SET_IMAGE_UPLOADING)
      try {
        // const { data } = await ImageService.post(blob)
        commit(END_IMAGE_UPLOADING)
        commit(SET_EDIT_IMAGES, { blob })
      } catch (error) {
        commit(END_IMAGE_UPLOADING)
      }
    },
    async [DLELTE_IMAGE] ({ commit, state }, index) {
      try {
        // await ImageService.delete([state.imageId[index]])
        commit(DELETE_EDIT_IMAGES, index)
      } catch (error) {
        commit(DELETE_EDIT_IMAGES, index)
      }
    }
  },
  modules: {
  }
})
