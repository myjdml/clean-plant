
<template>
  <div>
    <button @click="login">点击参与</button>
    <popup :show="show"></popup>
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
      show: false
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
</style>
