import axios from 'axios'

export const instanceImg = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://cyxbsmobile.redrock.team/wxapi/clean-plant-server' : '/api',
  timeout: 50000,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

export async function postPushCard (url, params) {
  return await instanceImg.post(url, params)
}
