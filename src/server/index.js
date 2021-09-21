/*
 * @Author: Code_Master
 * @Date: 2020-11-18 21:01:12
 * @LastEditTime: 2020-11-22 15:21:41
 * @LastEditors: Please set LastEditors
 * @FilePath: /clean-plant/src/server/index.js
 * @Description: The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.
 */
/* eslint-disable quotes */
import axios from 'axios'

const TOKEN = 'Bearer ' +
  `${localStorage.getItem('id_token')}`
const BACEURL = process.env.NODE_ENV === 'production' ? 'https://be-prod.redrock.cqupt.edu.cn/clean-plant-server' : '/api'
axios.defaults.headers.common.Authorization = TOKEN
axios.interceptors.response.use((response) => {
  return response.data
}, () => {
  window.location.href =
    'https://be-prod.redrock.cqupt.edu.cn/magicloop-wx/auth/enter/yorozuya?origin=' +
    encodeURI('https://fe-prod.redrock.cqupt.edu.cn/clean-plant') +
    '&scope=student'
})
export const instanceImg = axios.create({
  baseURL: BACEURL,
  timeout: 50000,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export const instance = axios.create({
  baseURL: BACEURL,
  timeout: 50000,
  headers: {
    'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
  }
})

export async function postPushCard (url, params) {
  return await instanceImg.post(url, params)
}
/**
 * @description: 获取个人打卡数据
 * @author: 林其星
 */
export function getPushCard () {
  return instance.get('plant/getUserCardsInfo')
}
/**
 * @description: 获取他人打卡数据
 * @author: 林其星
 */
export function getOtherPushCard () {
  return instance.get('plant/cardsPresent')
}
/**
 * @description: 点赞 post
 * @param {*} id
 * @return {*}
 * @author: 林其星
 */
export function addCard (id) {
  const data = new FormData()
  data.append('record_id', id)
  return instance.post('plant/like', data)
}

/**
 * @description: 获取积极名单
 * @param {*}
 * @return {*}
 * @author: 林其星
 */

export function getActivityList () {
  return instance.get('/top?page=1')
}

/**
 * @description: 获取获奖名单
 * @param {*}
 * @return {*}
 * @author: myjdml
 */

export function getAwardList () {
  return instance.get('/prize?period=2')
}

/**
 * @description: 打卡审核
 * @param {*} record_id
 * @return {*}
 */

export function reviewCardRecord (id, operation) {
  const data = new FormData()
  data.append('record_id', id)
  data.append('operation', operation)
  return instance.post('/plant/reviewCardRecord', data)
}

/**
 * @description: 查看未核审的打卡记录
 * @param {*}
 * @return {*}
 */

export function getReviewedRecords () {
  return instance.get('/plant/getReviewedRecords')
}
