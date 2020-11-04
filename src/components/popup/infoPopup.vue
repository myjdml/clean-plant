<!--eslint-disable no-tabs-->
<template>
  <div :class="$store.state.showInfoPopup ? 'show default' : 'hidden default'">
    <div class="popup" @click="hidden">
      <div :class="type == `succesd` ? `info` : `warm`">{{ info }}</div>
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
  props: {
    info: String,
    type: String
  },
  data () {
    return {
    }
  },
  methods: {
    hidden () {
      this.$store.commit('showInfoPopup', false)
    }
  }
}
</script>
<style lang='scss' scoped>
.popup {
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  .warm {
    font-family: 'Coder';
    width: 427px;
    height: 194px;
    background-color: #ffffff;
    color: #2768f8;
    border-radius: 20px;
    padding: 20px;
    font-size: 50px;
    text-align: left;
  }
  .info {
    font-family: 'coder';
    width: 427px;
    height: 194px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    font-size: 50px;
    line-height: 194px;
    text-align: center;
    color: #ff5d31;
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
