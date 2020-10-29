/*
 * @Author: 毛神 yyds
 * @Date: 2020-10-26 09:39:44
 * @LastEditTime: 2020-10-29 21:28:24
 * @LastEditors: kyingstar
 * @FilePath: /clean-plant/src/main.js
 * @Description: The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ApiService from './service/api'
import 'normalize.css'
// ApiService.init()
createApp(App).use(store).use(router).mount('#app')
