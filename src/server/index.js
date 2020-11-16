/* eslint-disable quotes */
import axios from 'axios'

const TOKEN = 'Bearer ' + `${document.location.href.split('token=')[1].replace(/%20/g, '+')}`
console.log(document.location.href.split('token=')[1].replace(/%20/g, '+'))
const BACEURL = process.env.NODE_ENV === 'production' ? 'https://cyxbsmobile.redrock.team/wxapi/clean-plant-server' : '/api'
axios.defaults.headers.common.Authorization = TOKEN

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
 * @description: 点赞
 * @param {*} id
 * @return {*}
 * @author: 林其星
 */
export function addCard (id) {
  const data = new FormData()
  data.append('record_id', id)
  return instance.post('plant/like', data)
}
