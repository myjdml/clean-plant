import { createStore } from 'vuex'
import { DLELTE_IMAGE, UPLOAD_IMAGE } from './type/actions'
import { DELETE_EDIT_IMAGES, END_IMAGE_UPLOADING, SET_EDIT_IMAGES, SET_IMAGE_UPLOADING } from './type/mutations'

export default createStore({
  state: {
    image: [],
    imageId: []
  },
  mutations: {
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
