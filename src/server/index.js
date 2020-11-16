/* eslint-disable quotes */
import axios from 'axios'

const TOKEN = 'Bearer ' + `eyJjbGFzcyI6IjAxMTQxOTExIiwiY29sbGVnZSI6IumAmuS/oeS4juS/oeaBr+W3peeoi+WtpumZoiAiLCJleHAiOiIxNjA0MDgzMDY0IiwiaGVhZEltZ1VybCI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvUTBqNFR3R1RmVEpWWE5FUllGbnlXa250aWM3NG1lZDZ3Y3Q1ZWxBT2xpYkdZQkFsbHpzVjVpYVBHaWF4QmtoNlZOa2ZUdWViMzh1NzhvU1RISGM2Q05kcnJBLzEzMiIsImlhdCI6IjE2MDQwNzIyNjQiLCJtYWpvciI6IumAmuS/oeS4juS/oeaBr+exu++8iOWQq+mAmuS/oeW3peeoi+OAgeeUteWtkOS/oeaBr+W3peeoi+OAgeS/oeaBr+W3peeoizPkuKrkuJPkuJrvvIkiLCJuaWNrbmFtZSI6Iua0vuWkp+aYnyIsInJlYWxOYW1lIjoi5p6X5YW25pifIiwicmVkSWQiOiI3YzgyY2E4OGQyYzBlYzEyNjZkYzMyYTQ2Mzg3OGFkZTNmZTI4YjMzIiwic3R1TnVtIjoiMjAxOTIxMDQzNSIsInN1YiI6InhicyJ9.z2qf5tasmIm+1Rsib0TfwAF7dx8rI4MyK51ktIpAqHDDaGeRiiQCkfHyARhbzYnpUK29jpl6hnOH1I1rAYixUbe/CKEWrjgGaNHyDB4BtOsQ4bRB5B33LVtInhYBX6uiSUuRbOjvwUBkh9gbTSOrSj/Pt9SuysVxXSgPFgg+4mgveQcYhqppm8LuLNrTd+641RY9BRDQUXdhBvtatmiyRdeUVZysRtILaMStrUPwADpQycknUTT1MXF5z6B4WCPrhrZcziFUA9LDfMjgVbe7nZzSooNVrMQJClqHhPFEiIJmVy6fuRLA3QE9fr8/I/PFWdca6PlfEX79Dx1skmdFDg==`
console.log(TOKEN)
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
