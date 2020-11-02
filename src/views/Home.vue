<!--eslint-disable no-tabs-->
<template>
  <div class="home">
    <div class="icons">
      <div class="icon-cqupt icon"></div>
      <div class="icon-tuanhui icon"></div>
      <div class="icon-redrock icon"></div>
    </div>
    <div class="home-title"></div>
    <div class="text">
      <p>21天拍照打卡活动</p>
      <div class="ware"></div>
    </div>
    <div class="xiangji">
      <div class="click-to-join icon" @click="goto"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable no-tabs */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
// import jump from '../utils/jump'
import { useRouter } from 'vue-router'


export default {
  setup () {
    const router = useRouter()

    function goto () {
      router.push('/index')
    }
    return {
      goto
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../assets/image/home/backgroundcolor.png');
  background-size: cover;
  .icons {
    position: absolute;
    display: flex;
    left: 10px;
    top: 10px;
    flex-direction: row;
  }
  .icon {
    width: 59px;
    height: 58px;
    margin-left: 30px;
    background-size: cover;
  }
  .icon-cqupt {
    background-image: url('../assets/image/home/xiaohui.png');
  }
  .icon-tuanhui {
    background-image: url('../assets/image/home/tuanhui.png');
  }
  .icon-redrock {
    background-image: url('../assets/image/home/logo.png');
  }
  .home-title {
    width: 750px;
    height: 306px;
    margin-top: 66px;
    background-image: url('../assets/image/home/text.png');
    background-size: cover;
  }
  .text {
    position: relative;
    font-family: 'clear';
    font-weight: 400;
    color: #ff9000;
    line-height: 28px;
    font-size: 40px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    transform: translateX(-87px) translateY(-10px);
    p {
      position: relative;
      transform: translateX(-26px);
      margin: 0;
    }
    .ware {
      width: 321px;
      height: 16px;
      background-image: url('../assets/image/home/ware.png');
      background-size: cover;
    }
  }
  .xiangji {
    width: 556px;
    height: 756px;
    background-image: url('../assets/image/home/xiangji.png');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .click-to-join {
      width: 213px;
      height: 73px;
      margin-bottom: 40px;
      cursor: pointer;
      background-image: url('../assets/image/home/clickjoin.png');
    }
  }
}
</style>
