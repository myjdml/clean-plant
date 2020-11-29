<!--
 * @Author: kying-star
 * @Date: 2020-11-22 14:39:16
 * @LastEditTime: 2020-11-29 21:31:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /clean-plant/src/views/Review.vue
-->
<template>
  <div class="review">
    <div class="item" v-for="(item, index) in list" :key="item.id">
      <img :src="item.photo_url" />
      <p>{{ item.content }}</p>
      <div class="option">
        <div
          :class="item.passClick ? `pass click` : `pass`"
          @click="pass(item.id, index)"
        >
          通过
        </div>
        <div
          :class="item.faildClick ? `faild click` : `faild`"
          @click="faild(item.id, index)"
        >
          不通过
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reviewCardRecord, getReviewedRecords } from '../server/index'
export default {
  data () {
    return {
      passClick: false,
      faildClick: false,
      list: [
        {
          content: 'abababab',
          id: '111'
        },
        {
          content: 'abababab',
          id: '111'
        },
        {
          content: 'abababab',
          id: '111'
        },
        {
          content: 'abababab',
          id: '111'
        },
        {
          content: 'abababab',
          id: '111'
        },
        {
          content: 'abababab',
          id: '111'
        },
        {
          content: 'abababab',
          id: '111'
        },
        {
          content: 'abababab',
          id: '111'
        },
        {
          content: 'abababab',
          id: '111'
        }
      ]
    }
  },
  methods: {
    pass: function (id, index) {
      reviewCardRecord(id, 'passed')
      this.list[index].passClick = true
      this.list[index].faildClick = false
    },
    faild: function (id, index) {
      reviewCardRecord(id, 'failed')
      this.list[index].passClick = false
      this.list[index].faildClick = true
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
        items.passClick = false
        items.faildClick = false
      })
      this.list = items
    })
  }
}
</script>

<style lang="scss" scoped>
.review {
  width: 100vw;
  height: 100%;
  background-attachment: fixed;
  background-image: url('../assets/image/review/background.jpg');
  background-size: 100%;
  justify-content: flex-start;
  overflow: scroll;
  .item {
    position: relative;
    margin: 20px;
    width: 680px;
    height: 400px;
    border-radius: 10px;
    color: white;
    background-color: rgba($color: #000000, $alpha: 0.5);
    img {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 283px;
      height: 160px;
      background-size: cover;
    }
    p {
      position: absolute;
      left: 10px;
      top: 20px;
      border: wheat solid 1px;
      width: 350px;
      height: 360px;
    }
    .option {
      position: absolute;
      bottom: 20px;
      right: 20px;
      border: solid wheat 1px;
      width: 280px;
      height: 180px;
      text-align: center;
      .pass {
        margin: 20px 15px;
        width: 250px;
        height: 60px;
        border-radius: 15px;
        background-color: #2c4ee4;
        line-height: 60px;
      }
      .faild {
        margin: 20px 15px;
        width: 250px;
        height: 60px;
        border-radius: 15px;
        background-color: #ff5a00;
        line-height: 60px;
      }
    }
  }
}
.click {
  color: #66ccff;
};
</style>
