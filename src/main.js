import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './assets/style/reset.css'
import './assets/style/font.css'
// import VConsole from 'vconsole'
/* eslint-disable no-unused-vars */
createApp(App).use(store).use(router).mount('#app')
// const vConsole = new VConsole() // 初始化
