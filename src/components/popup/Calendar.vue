<template>
  <div id="calendar">
    <div class="main">
      <p class="phrase">{{titleInfo}}</p>

      <div class="form">
        <div class="form__item">
          <span class="form__item__top">{{begin_time}}天</span>
          <span class="form__item__bottom">已经开始</span>
        </div>

        <div class="form__item">
          <span class="form__item__top">{{userData.card_count}}/14天</span>
          <span class="form__item__bottom">已打卡</span>
        </div>

        <div class="form__item">
          <span class="form__item__top">{{userData.continue_days}}天</span>
          <span class="form__item__bottom">最高连续打卡</span>
        </div>
      </div>

      <div class="calendar">
        <header>
          <div class="arrow-before-no" ref="arrowPev" @click="toPev"></div>
          <p>2020年{{today.flag}}月</p>
          <div class="arrow-after-yes" ref="arrowNext" @click="toNext"></div>
        </header>

        <div class="calendar-main" ref="calendarMain">
          <p>周日</p>
          <p>周一</p>
          <p>周二</p>
          <p>周三</p>
          <p>周四</p>
          <p>周五</p>
          <p>周六</p>
<!--          <div class="calendar-main__item">-->
<!--            <div></div>-->
<!--          </div>-->
        </div>
      </div>

      <button class="confirm" @click="changeCalendarState" ></button>
    </div>
  </div>
</template>

<script>
import { getPushCard } from '../../server'
import * as dayjs from 'dayjs'
import { timeDifference, timer } from '../../utils/day'

export default {
  name: 'calendar',
  data () {
    // calendar.state里面存放的二维数组里存放里日期的状态，颜色由浅到深分别为0，1，2
    return {
      titleInfo: '万事开头难，养成粮食习惯，起步一定要加油鸭！',
      titleIdom: [
        '万事开头难，养成粮食习惯，起步一定要加油鸭！',
        '已经坚持一半了，继续加油~',
        '加油！，终点就在眼前。',
        '恭喜你以完成目标，你离大奖越来越近啦！'
      ],
      begin_time: 0,
      calendar: {
        info: {
          state: [
            [
              [1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1],
              [1, 1, 0, 0, 0, 0, 0]
            ],
            [
              [0, 0, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 0, 0]
            ],
            [
              [0, 0, 0, 0, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1],
              [1, 1, 1, 1, 1, 1, 1]
            ]
          ],
          data: [
            [
              1, 2, 3, 4, 5, 6, 7,
              8, 9, 10, 11, 12, 13, 14,
              15, 16, 17, 18, 19, 20, 21,
              22, 23, 24, 25, 26, 27, 28,
              29, 30, 1, 2, 3, 4, 5
            ],
            [
              29, 30, 1, 2, 3, 4, 5,
              6, 7, 8, 9, 10, 11, 12,
              13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26,
              27, 28, 29, 30, 31, 1, 2
            ],
            [
              27, 28, 29, 30, 31, 1, 2,
              3, 4, 5, 6, 7, 8, 9,
              10, 11, 12, 13, 14, 15, 16,
              17, 18, 19, 20, 21, 22, 23,
              24, 25, 26, 27, 28, 29, 30
            ]
          ],
          calendarHeaderImg: {
            pevNo: null,
            pevYes: null,
            nextNo: null,
            nextYes: null
          }
        },
        state: [
          [2, 2, 1, 1, 2, 2, 2],
          [2, 2, 2, 2, 2, 2, 2],
          [2, 1, 2, 2, 2, 2, 2],
          [2, 2, 2, 2, 2, 2, 2],
          [2, 2, 0, 0, 0, 0, 0]
        ],
        stateFlag: [1, 3, 5],
        data: [
          1, 2, 3, 4, 5, 6, 7,
          8, 9, 10, 11, 12, 13, 14,
          15, 16, 17, 18, 19, 20, 21,
          22, 23, 24, 25, 26, 27, 28,
          29, 30, 1, 2, 3, 4, 5
        ]
      },
      calendarControl: {
        left: 0,
        right: 1
      },
      userData: {
        begin_at: 1606143845,
        card_count: 2,
        cards: [
          {
            created_at: 1607097600,
            id: 11,
            content: '111',
            photo_url: 'http://cdn.redrock.team/clean-plant-sever_8BIabKERsUhPNmMmdf2eSJyYtqwcFiUI.LzXv2fcNIrWO7sToFgoilA0U1WxNeW1g',
            status: 'waiting',
            is_like: 1,
            like_count: 1
          },
          {
            created_at: 1612576000,
            id: 12,
            content: '啦啦啦啦啦啦',
            photo_url: 'http://cdn.redrock.team/clean-plant-sever_zjhD0tXRTmkYKQoN91FmWnQSK2wRC5UH.K2KqAtxjP2ZmD1jtt3zgr5MeUjoAjcO9',
            status: 'waiting',
            is_like: 1,
            like_count: 1
          }
        ],
        continue_days: 1,
        message: ''
      },
      today: {
        month: null,
        day: null,
        flag: 11
      }
    }
  },
  methods: {
    changeCalendarState () {
      // console.log('chufa')
      this.$emit('change-calendar-state')
    },
    renderTitle () {
      // 初始化鼓励名言
      if (this.userData.continue_days <= 3) {
        this.titleInfo = this.titleIdom[0]
      } else if (this.userData.continue_days >= 4 && this.userData.continue_days <= 5) {
        this.titleInfo = this.titleIdom[1]
      } else if (this.userData.continue_days >= 6) {
        this.titleInfo = this.titleIdom[2]
      }
      // 初始化打卡开始日期
      this.begin_time = timeDifference(this.userData.begin_at, dayjs().unix()).day
    },
    renderCalendar () {
      /* eslint-disable quotes */
      // 初始化日历样式
      // console.log(this.$refs.calendarmain.appendchild())
      this.calendar.state.forEach(item => {
        item.forEach(item => {
          const div = document.createElement('div')
          div.className = 'calendar-main__item'
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
            // console.log(div)
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
          this.$refs.calendarMain.appendChild(div)
        })
      })
    },
    // 初始化日期状态
    renderDataState () {
      const dateHandel = (e, day, index) => {
        // console.log(e, day)
        day = day - 2 + e
        const int = Math.floor(day / 7)
        const float = day % 7
        this.calendar.info.state[index][int][float] = 2
      }
      // console.log('日期标靶', this.calendar.stateFlag)
      // console.log(this.userData.cards)
      this.userData.cards.forEach(item => {
        // console.log(item.created_at)
        const day = timer(item.created_at).date
        const month = timer(item.created_at).month
        if (month === 11) {
          dateHandel(this.calendar.stateFlag[0], day, 0)
        } else if (month === 12) {
          dateHandel(this.calendar.stateFlag[1], day, 1)
        } else if (month === 1) {
          dateHandel(this.calendar.stateFlag[2], day, 2)
        }
      })
    },
    dateAdd (data) {
      if (data === 12) {
        return 1
      } else {
        return ++data
      }
    },
    dateLess (data) {
      if (data === 1) {
        return 12
      } else {
        return --data
      }
    },
    toPev () {
      if (this.calendarControl.left === 1) {
        // 改变箭头的样式
        this.$refs.arrowNext.className = 'arrow-after-yes'
        if (this.today.flag === 1) {
          this.calendar.state = this.calendar.info.state[1]
        } else if (this.today.flag === 12) {
          this.calendar.state = this.calendar.info.state[0]
        }
        // this.calendar.state = this.calendar.info.state[0]
        if (this.today.flag === 12) {
          // 改变箭头的样式
          this.$refs.arrowNext.className = 'arrow-after-yes'
          this.$refs.arrowPev.className = 'arrow-before-no'
          this.calendarControl.left = 0
          this.calendarControl.right = 1
        }
        this.$refs.calendarMain.innerHTML = `<p style="width: 12vw;height: 5.3vw;">周日</p>
          <p style="width: 12vw;height: 5.3vw;">周一</p>
          <p style="width: 12vw;height: 5.3vw;">周二</p>
          <p style="width: 12vw;height: 5.3vw;">周三</p>
          <p style="width: 12vw;height: 5.3vw;">周四</p>
          <p style="width: 12vw;height: 5.3vw;">周五</p>
          <p style="width: 12vw;height: 5.3vw;">周六</p>`
        this.renderCalendar()
        // 加载日期
        if (this.today.flag === 1) {
          this.calendar.data = this.calendar.info.data[1]
        } else if (this.today.flag === 12) {
          this.calendar.data = this.calendar.info.data[0]
        }
        const dailyList = document.querySelectorAll('.calendar-main__item')
        this.calendar.data.forEach((item, index) => {
          // console.log(dailyList)
          dailyList[index].querySelector('div').innerText = item
        })
        // 改变标题月份
        this.today.flag = this.dateLess(this.today.flag)
      }
    },
    toNext () {
      // 改变箭头的样式
      this.$refs.arrowPev.className = 'arrow-before-yes'
      if (this.calendarControl.right === 1) {
        if (this.today.flag === 11) {
          this.calendar.state = this.calendar.info.state[1]
        } else if (this.today.flag === 12) {
          this.calendar.state = this.calendar.info.state[2]
        }
        // this.calendar.state = this.calendar.info.state[1]
        if (this.today.flag === 12) {
          // 改变箭头的样式
          this.$refs.arrowPev.className = 'arrow-before-yes'
          this.$refs.arrowNext.className = 'arrow-after-no'
          this.calendarControl.left = 1
          this.calendarControl.right = 0
        }
        this.$refs.calendarMain.innerHTML = `<p style="width: 12vw;height: 5.3vw;">周日</p>
          <p style="width: 12vw;height: 5.3vw;">周一</p>
          <p style="width: 12vw;height: 5.3vw;">周二</p>
          <p style="width: 12vw;height: 5.3vw;">周三</p>
          <p style="width: 12vw;height: 5.3vw;">周四</p>
          <p style="width: 12vw;height: 5.3vw;">周五</p>
          <p style="width: 12vw;height: 5.3vw;">周六</p>`
        this.renderCalendar()
        // 加载日期
        if (this.today.flag === 11) {
          this.calendar.data = this.calendar.info.data[1]
        } else if (this.today.flag === 12) {
          this.calendar.data = this.calendar.info.data[2]
        }
        const dailyList = document.querySelectorAll('.calendar-main__item')
        this.calendar.data.forEach((item, index) => {
          // console.log(dailyList)
          dailyList[index].querySelector('div').innerText = item
        })
        // 改变标题月份
        this.today.flag = this.dateAdd(this.today.flag)
      }
    }
  },
  mounted () {
    this.userData = getPushCard()
      .then(response => {
        console.log(response)
      })
    // 刚刚进入组件时同步样式
    this.calendar.state = this.calendar.info.state[0]
    // 加载状态,通过后端接口返回的数据，更新日历的背景颜色
    this.renderDataState()
    // 刷新头部文字
    this.renderTitle()
    // 引入图片
    this.renderCalendar()
    // 加载日期
    const dailyList = document.querySelectorAll('.calendar-main__item')
    this.calendar.data.forEach((item, index) => {
      // console.log(dailyList)
      dailyList[index].querySelector('div').innerText = item
    })
    // console.log(dayjs('2021-01-5').unix())
    this.today.month = timer(dayjs().unix()).month
    this.today.day = timer(dayjs().unix()).date
  }
}
</script>

<style lang="scss" scoped>
  #calendar {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .34);
    touch-action: none;
    z-index: 5;
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
      top: 150px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .form__item {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 140px;
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
    .calendar {
      width: 640px;
      position: absolute;
      left: 20px;
      top: 307px;
      letter-spacing: 2px;
      header {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        .arrow-before-no {
          width: 23px;
          height: 34px;
          margin-right: 40px;
          background-image: url("../../assets/image/calendar/arrow-pev-no.png");
          background-size: 100%;
        }
        .arrow-before-yes {
          width: 23px;
          height: 34px;
          margin-right: 40px;
          background-image: url("../../assets/image/calendar/arrow-pev-yes.png");
          background-size: 100%;
        }
        .arrow-after-no {
          width: 23px;
          height: 34px;
          margin-left: 40px;
          background-image: url("../../assets/image/calendar/arrow-next-no.png");
          background-size: 100%;
        }
        .arrow-after-yes {
          width: 23px;
          height: 34px;
          margin-left: 40px;
          background-image: url("../../assets/image/calendar/arrow-next-yes.png");
          background-size: 100%;
        }
        p {
          color: #FF6000;
        }
      }
      .calendar-main {
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
        .calendar-main__item {
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
      background-image: url("../../assets/image/calendar/confirm.png");
      background-size: 100%;
      position: absolute;
      bottom: 100px;
      left: 50%;
      transform: translateX(-129.5px);
    }
  }
</style>
