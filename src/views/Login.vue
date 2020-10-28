
<template>
  <div>
    <button @click="login">点击参与</button>
    <div :class="show ? 'show' : 'hidden'">
      <popup></popup>
    </div>
  </div>
</template>

<script>
import popup from '../components/popup/popup'
export default {
  components: {
    popup
  },
  data () {
    return {
      num: 0,
      show: true
    }
  },
  methods: {
    login () {
      console.log(1)
      this.show = !this.show
    }
  }
}

</script>
<style lang='scss' scoped>
.show {
  opacity: 1;
  animation: show 0.4s linear;
}
.hidden {
  opacity: 0;
  animation: hidden 0.4s linear;
}
@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes hidden {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
