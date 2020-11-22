<!--eslint-disable no-tabs-->
<template>
    <div class="popup">
        <div class="back" @click="gotohome"></div>
        <div class="title">
          积极榜单
        </div>
        <div class="box">
          <div class="list-hidden">
            <div class="list">
              <div class="item" v-for="item in lists" :key="item.id">
                <div class="item-person">
                  <div class="order">{{item.order}}</div>
                  <div class="avatar">
                    <img :src="item.avatar">
                  </div>
                  <div class="detail">
                    <li>{{item.nickname}}</li>
                    <li>总共打卡{{item.day_count}}次</li>
                  </div>
                </div>
                <div class="count">
                  已经连续打卡<a>{{item.card_count}}</a>天了
                </div>
              </div>
            </div>
          </div>
          <div class="arrow"></div>
    </div>
    <!-- <div class="mask" @click="hidden">
       <div class="info">
         <p>功能完善中...</p>
       </div>
    </div> -->
  </div>
</template>

<script>
/* eslint-disable no-tabs */
/* eslint-disable indent */
/**
 * @description: 弹出框组件
 * @param {*}
 * @return {*}
 * @author: 林其星
 */
import { getActivityList } from '../server/index'
export default {
  data () {
    return {
      lists: [
        {
          order: '1.',
          nickname: 'sarailQAQ',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 2,
          day_count: 2
        },
        {
          order: '2.',
          nickname: '派大星',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 0,
          day_count: 2
        },
        {
          order: '2.',
          nickname: '派大星',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 0,
          day_count: 2
        },
                {
          order: '1.',
          nickname: 'sarailQAQ',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 2,
          day_count: 2
        },
        {
          order: '2.',
          nickname: '派大星',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 0,
          day_count: 2
        },
        {
          order: '2.',
          nickname: '派大星',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 0,
          day_count: 2
        },
                {
          order: '1.',
          nickname: 'sarailQAQ',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 2,
          day_count: 2
        },
        {
          order: '2.',
          nickname: '派大星',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 0,
          day_count: 2
        },
        {
          order: '2.',
          nickname: '派大星',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 0,
          day_count: 2
        },
        {
          order: '1.',
          nickname: 'sarailQAQ',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 2,
          day_count: 2
        },
        {
          order: '2.',
          nickname: '派大星',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 0,
          day_count: 2
        },
        {
          order: '2.',
          nickname: '派大星',
          avatar: 'http://thirdwx.qlogo.cn/mmopen/EVGWGlX9SWWFzicQjwsfZNYPmbfq4lDwQ1QBL4Zz7TUpf9z8P3AvlGIUNJ3RZ4jf2gWl0EcRAUmdmoYbs4uy9LKibd0nv0KhuI/132',
          card_count: 0,
          day_count: 2
        }
      ]
    }
  },
  methods: {
    hidden () {
      console.log(1)
      this.$store.commit('showActivityPopup', false)
    },
    gotohome () {
      this.$router.push('/index')
    }
  },
  created () {
    getActivityList().then((e) => {
      console.log(e)
    })
  }
}
</script>
<style lang='scss' scoped>
.mask{
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background-color: rgb(0, 0, 0, 0.45);
  transform: translateY(-100vh);
  .info{
    position: relative;
    font-family: 'coder';
    width: 427px;
    height: 194px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
      font-size: 50px;
      text-align: center;
      color: #ff5d31;
    }
  }
}
.popup {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../assets/image/home/background.png');
  background-size: cover;
  font-family: 'Coder';
  .back {
    position: absolute;
    left: 42px;
    top: 33px;
    width: 27px;
    height: 49px;
    background-image: url('../assets/image/push-card/arrow-back.png');
    background-size: 100%;
  }
  .title{
    margin-top: 82px;
    width: 570px;
    height: 130px;
    font-size: 39px;
    font-family: Coder;
    font-weight: 400;
    color: #FF5A00;
    line-height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .box{
    width: 682px;
    height: 946px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .list-hidden::-webkit-scrollbar { width: 0 !important }
    .list-hidden { -ms-overflow-style: none; }
    .list-hidden { overflow: -moz-scrollbars-none; }
    .list-hidden{
      width: 682px;
      height: 840px;
      overflow-x:hidden;
      overflow-y:auto;
      display: flex;
      flex-direction: column;
      .list{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 11px 0px 0px 0px;
          .item{
            width: 623px;
            height: 66px;
            margin: 11px;
            background-color: #FFFCEE;
            display: flex;
            justify-content: space-between;
            .item-person{
              display: flex;
              flex-direction: row;
            }
            .order{
              width: 14px;
              height: 23px;
              font-size: 28px;
              font-weight: 400;
              color: #FF5A00;
              line-height: 66px;
              margin-left: 40px;
            }
            .avatar{
              height: 66px;
              width: 66px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 20px;
              img{
                width: 51px;
                height: 51px;
                border-radius: 50%;
                background-size: cover;
              }
            }
            .detail{
              display: flex;
              flex-direction: column;
              list-style: none;
              align-items: flex-start;
              li:nth-child(1){
                font-size: 19px;
                color: #FF7800;
                line-height: 38px;
              }
              li:nth-child(2){
                font-size: 14px;
                color: #5C59FF;
                line-height: 28px;
              }
            }
            .count{
              color: #FFAA68;
              font-size: 20px;
              line-height: 66px;
              a{
                color: #697EFF;
              }
            }
          }
      }
    }
    .arrow{
      margin-top: 20px;
      width: 47px;
      height: 46px;
      background-image: url("../assets/image/index/arrow_down.png");
      background-size: cover;
      animation: down 1.5s linear infinite;
    }
    @keyframes down {
      0%{
        transform: translateY(0px) scale(1);
        opacity: 1;
      }
      100%{
        transform: translateY(10px) scale(0.9);
        opacity: 0.5;
      }
    }
  }
}
.default {
  top: 0%;
  left: 0%;
}
.show,
.hidden {
  position: fixed;
}
.show {
  touch-action: none;
  opacity: 1;
  animation: show 0.5s ease-in-out;
}
.hidden {
  opacity: 0;
  animation: hidden 0.3s linear;
  visibility: hidden;
}
@keyframes show {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes hidden {
  0% {
    opacity: 1;
    transform:  scale(1);
  }
  100% {
    opacity: 0;
    transform:  scale(0.99);
    overflow: hidden;
  }
}
</style>
