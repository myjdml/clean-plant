<!--
 * @Author: kying-star
 * @Date: 2020-11-22 14:39:16
 * @LastEditTime: 2020-11-22 16:16:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /clean-plant/src/views/Review.vue
-->
<template>
    <div class="review">
        <div class="item" v-for="item in list" :key="item.id">
            <img :src="item.photo_url">
            <p>{{item.content}}</p>
            <div class="option">
                <div class="pass" @click="pass(item.id)">通过</div>
                <div class="faild" @click="faild(item.id)">不通过</div>
            </div>
        </div>
    </div>
</template>

<script>
import { getReviewedRecords, reviewCardRecord } from '../server/index'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    pass: function (id) {
      reviewCardRecord(id, 'passed')
    },
    faild: function (id) {
      reviewCardRecord(id, 'failed')
    }
  },
  created () {
    getReviewedRecords().then((e) => {
      const items = []
      console.log(e.data.data)
      e.data.data.forEach((e) => {
        const item = {}
        item.id = e.id
        item.content = e.content
        item.photo_url = e.photo_url
        items.push(item)
      })
      this.list = items
    })
  }
}
</script>

<style lang="scss" scoped>
.review{
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    justify-content: flex-start;
    .item{
        margin: 30px;
        width: 660px;
        height: 200px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          width: 283px;
          height: 160px;
          background-size: cover;
        }
        .option{
            .pass{
                width: 140px;
                height: 60px;
                background-color: #437EFF;
                line-height: 60px;
            }
            .faild{
                width: 140px;
                height: 60px;
                background-color: #FF5A00;
                line-height: 60px;
            }
        }
    }
}
</style>
