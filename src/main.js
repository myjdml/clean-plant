/*
 * @Author: 毛神 yyds
 * @Date: 2020-10-26 09:39:44
 * @LastEditTime: 2020-12-03 19:03:00
 * @LastEditors: Please set LastEditors
 * @FilePath: /clean-plant/src/main.js
 * @Description: The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import ApiService from './service/api'
import 'normalize.css'
import './assets/style/reset.css'
import './assets/style/font.css'
// import * as Sentry from '@sentry/browser'
// import { Vue as VueIntegration } from '@sentry/integrations'
// import { Integrations } from '@sentry/tracing'
// import VConsole from 'vconsole'
/* eslint-disable no-unused-vars */
// Sentry.init({
//   dsn: 'https://1c17d27939854fb893ff990283a785e5@sentry.redrock.team/3',
//   integrations: [
//     new VueIntegration({
//       createApp,
//       tracing: true
//     }),
//     new Integrations.BrowserTracing()
//   ],
//   // We recommend adjusting this value in production, or using tracesSampler
//   // for finer control
//   tracesSampleRate: 1.0
// })
createApp(App).use(store).use(router).mount('#app')
// const vConsole = new VConsole() // 初始化
