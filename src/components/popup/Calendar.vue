<template>
  <div id="calender">
    <div class="main">
      <p class="phrase">万事开头难，我们一起养成节约粮食好习惯，起步一定要加油鸭！</p>

      <div class="form">
        <div class="form__item">
          <span class="form__item__top">4天</span>
          <span class="form__item__bottom">已经开始</span>
        </div>

        <div class="form__item">
          <span class="form__item__top">3/7天</span>
          <span class="form__item__bottom">已打卡</span>
        </div>

        <div class="form__item">
          <span class="form__item__top">2天</span>
          <span class="form__item__bottom">最高连续打卡</span>
        </div>
      </div>

      <div class="calender">
        <header>
          <button></button>
          <p>2020年11月</p>
          <button></button>
        </header>

        <div class="calender-main" ref="calenderMain">
          <p>周日</p>
          <p>周一</p>
          <p>周二</p>
          <p>周三</p>
          <p>周四</p>
          <p>周五</p>
          <p>周六</p>
<!--          <div class="calender-main__item">-->
<!--            <div></div>-->
<!--          </div>-->
        </div>
      </div>

      <button class="confirm" @click="confirmInfo"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    // calender.state里面存放的二维数组里存放里日期的状态，颜色由浅到深分别为0，1，2
    return {
      calender: {
        state: [
          [2, 2, 1, 1, 2, 2, 2],
          [2, 2, 2, 2, 2, 2, 2],
          [2, 1, 2, 2, 2, 2, 2],
          [2, 2, 2, 2, 2, 2, 2],
          [2, 2, 0, 0, 0, 0, 0]
        ],
        data: [
          1, 2, 3, 4, 5, 6, 7,
          8, 9, 10, 11, 12, 13, 14,
          15, 16, 17, 18, 19, 20, 21,
          22, 23, 24, 25, 26, 27, 28,
          29, 30, 1, 2, 3, 4, 5
        ]
      }
    }
  },
  methods: {
    confirmInfo () {
    }
  },
  mounted () {
    /* eslint-disable quotes */
    // 初始化日历样式
    // console.log(this.$refs.calenderMain.appendChild())
    this.calender.state.forEach(item => {
      item.forEach(item => {
        const div = document.createElement('div')
        div.className = 'calender-main__item'
        div.style = `width: 12vw;height: 9vw;display: flex;justify-content: center;align-items: center;`
        if (item === 0) {
          div.innerHTML = `<div
            style="
            width: 6.8vw;
            height: 6.8vw;
            border-radius: 30px;
            background-color: #DEDEDE;
            color: white;
            font-size: 3.2vw;
            line-height: 6.8vw;"></div>`
          console.log(div)
        } else if (item === 1) {
          div.innerHTML = `<div
            style="
            width: 6.8vw;
            height: 6.8vw;
            border-radius: 30px;
            background-color: #FFD9A8;
            color: white;
            font-size: 3.2vw;
            line-height: 6.8vw;"></div>`
        } else if (item === 2) {
          div.innerHTML = `<div
            style="
            width: 6.8vw;
            height: 6.8vw;
            border-radius: 30px;
            background-color: #FF7800;
            color: white;
            font-size: 3.2vw;
            line-height: 6.8vw;"></div>`
        }
        this.$refs.calenderMain.appendChild(div)
      })
    })
    // 加载日期
    const dailyList = document.querySelectorAll('.calender-main__item')
    this.calender.data.forEach((item, index) => {
      console.log(dailyList)
      dailyList[index].querySelector('div').innerText = item
    })
  }
}
</script>

<style lang="scss" scoped>
  #calender {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .34);
  }
  .main {
    position: absolute;
    left: 50%;
    top: 5vh;
    transform: translateX(-340px);
    width: 680px;
    height: 90vh;
    background-color: white;
    border-radius: 20px;
    .phrase {
      position: absolute;
      left: 59px;
      top: 73px;
      width: 555px;
      font-size: 23px;
      font-weight: 400;
      color: #FF973B;
      line-height: 38px;
      letter-spacing: 2px;
    }
    .form {
      width: 535px;
      height: 150px;
      position: absolute;
      left: 59px;
      top: 180px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .form__item {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 120px;
        .form__item__top {
          font-size: 35px;
          font-weight: 400;
          color: #3272FE;
          line-height: 55px;
        }
        .form__item__bottom {
          font-size: 15px;
          font-weight: 400;
          color: #FFB68F;
          line-height: 29px;

        }
      }
    }
    .calender {
      width: 640px;
      position: absolute;
      left: 20px;
      top: 357px;
      letter-spacing: 2px;
      header {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          color: #FF6000;
          &::before {
            display: inline-block;
            content: '';
            position: relative;
            left: -40px;
            top: 5px;
            width: 23px;
            height: 34px;
            background-image: url("../../assets/image/calender/arrow-pev.png");
            background-size: 100%;
          }
          &::after {
            display: inline-block;
            content: '';
            position: relative;
            left: 40px;
            top: 5px;
            width: 23px;
            height: 34px;
            background-image: url("../../assets/image/calender/arrow-next.png");
            background-size: 100%;
          }
        }
      }
      .calender-main {
        width: 630px;
        margin-left: 50%;
        transform: translate(-315px, 30px);
        color: #FF940B;
        text-align: center;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        p {
          width: 90px;
          height: 40px;
        };
        .calender-main__item {
          width: 90px;
          height: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            width: 51px;
            height: 51px;
            border-radius: 30px;
            background-color: #EC4800;
          }
        }
      }
    }
    .confirm {
      width: 259px;
      height: 88px;
      background-image: url("../../assets/image/calender/confirm.png");
      background-size: 100%;
      position: absolute;
      bottom: 100px;
      left: 50%;
      transform: translateX(-129.5px);
    }
  }
</style>
