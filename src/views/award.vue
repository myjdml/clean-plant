<!--eslint-disable no-tabs-->
<template>
  <div class="popup">
    <div class="back" @click="gotohome"></div>
    <div class="title">
      <div class="title__img"></div>
      <p>第一期获奖名单</p>
      <span @click="popupShow">领奖方式</span>
    </div>
    <div class="box">
      <div class="list-hidden">
        <div class="list">
          <div class="item" v-for="item in lists" :key="item.order">
            <div class="item-person">
              <div class="order">{{item.order}}</div>
              <div class="avatar">
                <img :src="item.avatar">
              </div>
              <div class="detail">
                <li>{{item.nickname}}</li>
                <!-- <li>总共打卡<span>{{item.day_count}}</span>次</li> -->
              </div>
            </div>
            <div class="count">
              获得食堂大礼包x1
            </div>
          </div>
        </div>
      </div>
      <!-- <p class="remind-words">请以上同学于<span>12.18日中午12点在红岩网校工作站b区</span>领取奖品</p> -->
      <div class="arrow"></div>
    </div>
    <!-- <div class="mask" @click="hidden">
       <div class="info">
         <p>功能完善中...</p>
       </div>
    </div> -->
  </div>
  <award-alert-popup info="请获奖同学于12.18（本周五）中午12点在红岩网校工作站b区领取奖品。希望同学们继续保持光盘节俭的好习惯！"/>
</template>

<script>
import AwardAlertPopup from '../components/popup/AwardAlertPopup.vue'
/* eslint-disable no-tabs */
/* eslint-disable indent */
/**
 * @description: 弹出框组件
 * @param {*}
 * @return {*}
 * @author: 林其星
 */
import { getAwardList } from '../server/index'
// import style (>= Swiper 6.x)
export default {
  components: { AwardAlertPopup },
  data () {
    return {
      lists: []
    }
  },
  methods: {
    hidden () {
      console.log(1)
      this.$store.commit('showActivityPopup', false)
    },
    gotohome () {
      this.$router.push('/index')
    },
    popupShow () {
      this.$store.commit('showAwardAlertPopup', true)
    }
  },
  created () {
    getAwardList().then((e) => {
      console.log(e.data.data)
      const items = []
      e.data.data.forEach((e, index) => {
        const item = {}
        item.order = `${index + 1}.`
        if (e.nickname.length > 10) {
          item.nickname = e.nickname.substring(0, 10) + '...'
        } else {
          item.nickname = e.nickname
        }
        item.avatar = e.avatar
        item.continue_day = e.continue_day
        item.card_count = e.card_count
        item.day_count = e.day_count
        items.push(item)
      })
      this.lists = items
    })
  },
  beforeCreate () {
    // 第一次进入的时候有领奖提示的弹窗
    const judgeIfAlert = localStorage.getItem('ifOpenAward')
    if (judgeIfAlert !== 'true') {
      localStorage.setItem('ifOpenAward', true)
    } else {
      console.log(this.$store.state.showAwardAlertPopup)
      this.$store.state.showAwardAlertPopup = false
    }
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
    width: 670px;
    height: 130px;
    font-size: 39px;
    font-family: Coder;
    font-weight: 400;
    color: #FF5A00;
    line-height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .title__img {
      margin-right: 20px;
      width: 43px;
      height: 46px;
      background-image: url('../assets/image/index/parise.png');
      background-size: cover;
    }
    span {
      width: 108px;
      font-size: 25px;
      margin-left: 140px;
      font-weight: 400;
      color: #3272FE;
      line-height: 40px;
    }
    p {
      width: 370px;
    }
  }
  .box{
    width: 682px;
    height: 876px;
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
      height: 780px;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      .list{
          padding: 11px 0px 0px 0px;
          margin-left: 20px;
          .item{
            width: 623px;
            height: 99px;
            margin: 11px;
            background-color: #FFFCEE;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 10px;
            .item-person{
              display: flex;
              flex-direction: row;
            }
            .order{
              display: flex;
              width: 28px;
              height: 99px;
              font-size: 28px;
              font-weight: 400;
              color: #FF5A00;
              line-height: 99px;
              margin-left: 40px;
            }
            .avatar{
              height: 99px;
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
                font-size: 23px;
                color: #FF7800;
                line-height: 99px;
              }
              li:nth-child(2){
                font-size: 17px;
                color: #FFAA68;
                line-height: 18px;
                span {
                  color: #5C59FF;
                }
              }
            }
            .count{
              color: #5C59FF;
              font-size: 22px;
              line-height: 99px;
              margin-right: 20px;
            }
          }
      }
    }
    .remind-words {
      margin-top: 40px;
      font-size: 22px;
      font-weight: 400;
      color: #3551FF;
      span {
        color: #FF5A00;
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
