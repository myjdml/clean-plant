

<template>
  <div :class="show ? 'show default' : 'hidden default'">
    <div class="popup"></div>
  </div>
</template>

<script>
/**
 * @description: 弹出框组件
 * @param {*}
 * @return {*}
 * @author: 林其星
 */
export default {

  props: {
    show: Boolean
  },
  components: {},
  data () {
    return {

    }
  }
}
</script>
<style lang='scss' scoped>
.popup {
  width: 500px;
  height: 700px;
  background-color: burlywood;
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
  opacity: 1;
  animation: show 0.5s ease-in-out;
}
.hidden {
  opacity: 0;
  animation: hidden 0.3s linear;
}
@keyframes show {
  0% {
    opacity: 0;
    transform: translateY(-60%) translateX(-50%) scale(0.99);
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
  }
}
</style>
