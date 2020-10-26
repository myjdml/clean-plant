/*
 * @Author: Code_Master
 * @Date: 2020-10-26 09:39:44
 * @LastEditTime: 2020-10-26 13:44:34
 * @LastEditors: Code_Master
 * @FilePath: /clean-plant/src/main.js
 * @Description: The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'

createApp(App).use(store).use(router).mount('#app')
