<template>
  <div class="home">
    <div class="top-img">
      <img src="../assets/image/icon/school-icon.png" alt="school-icon">
      <img src="../assets/image/icon/dang-icon.png" alt="dang-icon">
      <img src="../assets/image/icon/redrock-icon.png" alt="redrock-icon">
    </div>

    <Calendar></Calendar>
  </div>
</template>

<script>
// @ is an alias to /src

import Calendar from '../components/popup/Calendar'
export default {
  name: 'Home',
  components: {
    Calendar
  }
}
</script>

<style lang="scss" scoped>
  .top-img {
  img {
    position: absolute;
    top: 34px;
    width: 52px;
    z-index: 3;
  }
  img:nth-child(1) {
    left: 37px;
  }
  img:nth-child(2) {
    left: 111px;
  }
  img:nth-child(3) {
    left: 183px;
  }
  }
</style>
