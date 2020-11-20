<!--eslint-disable no-tabs-->
<template>
  <div :class="$store.state.showRollPopup ? 'show default' : 'hidden default'">
    <div class="popup">
      <div class="awards">
        <div class="medals"></div>
        <p>第一期获奖名单</p>
      </div>
      <button @click="hidden">退出</button>
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
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    hidden () {
      console.log(1)
      this.$store.commit('showRollPopup', false)
    }
  }
}
</script>
<style lang='scss' scoped>
.popup {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../../assets/image/home/background.png');
  background-size: cover;
  font-family: 'Coder';
  .awards {
    width: 750px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    .medals {
      width: 43px;
      height: 46px;
      margin-left: 50px;
      margin-right: 10px;
      background-image: url('../../assets/image/index/parise.png');
      background-size: cover;
    }
    p {
      width: 296px;
      height: 38px;
      font-size: 39px;
      font-weight: 400;
      color: #ff5a00;
      line-height: 40px;
    }
  }
}
.default {
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.show,
.hidden {
  position: absolute;
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
