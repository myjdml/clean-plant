<!--eslint-disable no-tabs-->
<template>
  <div :class="$store.state.showActivityPopup ? 'show default' : 'hidden default'">
    <div class="popup" @click="hidden">
        <!-- 积极榜单
        <button >退出</button> -->
    </div>
    <div class="mask" @click="hidden">
       <div class="info">
         <p>功能完善中...</p>
       </div>
    </div>
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

export default {
  data () {
    return {
    }
  },
  methods: {
    hidden () {
      console.log(1)
      this.$store.commit('showActivityPopup', false)
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
  background-image: url('../../assets/image/home/background.png');
  background-size: cover;
  font-family: 'Coder';
  .indexpop-p {
    color: #ff6c00;
  }
  .title {
    width: 90vw;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    transform: translateY(-5px);
    p {
      font-size: 46px;
      margin: 0;
      color: #ec4800;
    }
  }
  .line {
    position: relative;
    width: 620px;
    height: 17px;
    transform: translateY(10px);
    background-image: url('../../assets/image/index/ware.png');
    background-size: cover;
  }
  $img-width: 680, 680, 680;
  $img-height: 220, 242, 549;
  .main {
    width: 90vw;
    height: 1206px;
    display: flex;
    flex-direction: column;
    transform: translateY(-30px);
  }
  @for $i from 1 through 3 {
    .index:nth-child(#{$i}) {
      height: #{nth($img-height, $i)}px;
      width: #{nth($img-width, $i)}px;
      background-image: url('../../assets/image/components/popups/card#{$i}.png');
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      transform: translateX(-20px);
      p {
        font-size: 35px;
        margin: 0;
        margin-top: 40px;
        margin-left: 30px;
        margin-bottom: 20px;
        text-align: left;
      }
      li {
        text-align: left;
        list-style: none;
        color: #ff940b;
        font-size: 22px;
        margin-left: 30px;
        line-height: 38px;
        letter-spacing: 2px;
        margin-bottom: 5px;
      }
      a {
        color: #3d78fa;
      }
      .inner {
        height: #{nth($img-height, $i)-20}px;
        width: #{nth($img-width, $i)-40}px;
        position: relative;
        .buttonHidden {
          position: absolute;
          left: 50%;
          transform: translateX(-50%) translateY(30px);
          width: 218px;
          height: 74px;
          background-image: url('../../assets/image/components/popups/popupIndexButton.png');
          background-size: cover;
        }
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
    transform: translateY(-50%) translateX(-50%) scale(1);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%) translateX(-50%) scale(1);
  }
}
@keyframes hidden {
  0% {
    opacity: 1;
    transform: translateY(-50%) translateX(-50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-60%) translateX(-50%) scale(0.99);
    overflow: hidden;
  }
}
</style>
