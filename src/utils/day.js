/*
 * @Author: Code_Master
 * @Date: 2020-11-17 19:47:25
 * @LastEditTime: 2020-11-18 19:34:48
 * @LastEditors: Code_Master
 * @FilePath: /clean-plant/src/utils/day.js
 * @Description: The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.
 */

/**
 * @description: 获取时间戳的函数
 * @param {*}
 * @return {*} 精确到秒的时间戳
 */
function timeUnix () {
  let res = Date.parse(new Date())
  res = res.toString().slice(0, 10)
  return Number(res)
}

/**
 * @description: 将时间戳转换为一个时间对象的函数
 * @param {*} unix 时间戳
 * @return {*}
 */
function timer (date) {
  const time = new Date(date * 1000)
  const Y = time.getFullYear()
  var M = (time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1)
  var D = (time.getDate() < 10 ? '0' + (time.getDate()) : time.getDate())
  var h = (time.getHours() < 10 ? '0' + time.getHours() : time.getHours())
  var m = (time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes())
  var s = (time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds())
  return {
    year: Y,
    month: M,
    date: D,
    hours: h,
    minutes: m,
    seconds: s
  }
}

/**
 * @description: 获取时间差的函数（可做倒计时使用）
 * @param {Number} oldDate 较小的时间戳
 * @param {Number} newDate 较大的时间戳
 * @return {Object} 关于时间的对象
 */
function timeDifference (oldDate, newDate) {
  const Date = newDate - oldDate
  const D = Math.floor(Date / 60 / 60 / 24)
  const h = Math.floor((Date / 60 / 60) % 24)
  const m = Math.floor((Date / 60) % 60)
  const s = Math.floor((Date) % 60)
  return {
    day: D,
    hours: h,
    minutes: m,
    seconds: s
  }
}

// timeUnix()
// console.log(timer(timeUnix()))
// console.log(timeDifference(1605696600, 1605696626))
export {
  timeUnix,
  timer,
  timeDifference
}
