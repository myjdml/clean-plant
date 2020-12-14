<!--eslint-disable no-tabs-->
<template>
  <div :class="$store.state.showIndexAlertPopup ? 'show default' : 'hidden default'" @click="hidden">
    <div class="popup">
      <p class="info">第一期活动已结束，将于12.16日12点公布本期获奖信息</p>
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
 * @author: myjdml
 */

export default {
  data () {
    return {
    }
  },
  methods: {
    hidden () {
      this.$store.commit('showIndexAlertPopup', false)
    }
  }
}
</script>
<style lang='scss' scoped>
.popup {
  width: 100vw;
  height: 20vh;
  position: fixed;
  top: 40vh;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .info {
    font-family: 'coder';
    width: 100%;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    font-size: 40px;
    line-height: 64px;
    text-align: center;
    color: #ff5d31;
  }
}
.default {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform:scale(0.8);
}
// .show,
// .hidden {
//   position: fixed;
// }
.show {
  // touch-action: none;
  opacity: 1;
  animation: show 1.5s ease-in-out;
}
.hidden {
  opacity: 0;
  animation: hidden 0.3s linear;
  visibility: hidden;
}
@keyframes show {
  0% {
    opacity: 0;
    transform: scale(0, 0);
  }
  100% {
    opacity: 1;
    transform:scale(0.8, 0.8);
  }
}
@keyframes hidden {
  0% {
    opacity: 1;
    transform:scale(0.8, 0.8);
  }
  100% {
    opacity: 0;
    transform: scale(0, 0);
    // overflow: hidden;
  }
}
</style>
