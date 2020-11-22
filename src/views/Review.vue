<!--
 * @Author: kying-star
 * @Date: 2020-11-22 14:39:16
 * @LastEditTime: 2020-11-22 14:46:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /clean-plant/src/views/Review.vue
-->
<template>
    <div></div>
</template>

<script>
// import {getReviewedRecords, reviewCardRecord } from '../server/index'
import { getReviewedRecords } from '../server/index'
export default {
  created () {
    getReviewedRecords().then((e) => {
      console.log(e)
    })
  }
}
</script>

<style>
</style>
