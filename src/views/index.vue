<!--eslint-disable no-tabs-->
<!--eslint-disable spaced-comment-->
<template>
  <div class="index" :style="`height:${index_height}`">
    <!-- 打卡任务 -->
    <div class="index-title">
      <p>勤俭节约,光盘ing</p>
      <div class="ware"></div>
    </div>
    <div class="index-block">
      <div class="index-block-inner">
        <div class="index-block-title">
          <p class="task">打卡任务</p>
          <p class="check-All" @click="checkAll">查看全部</p>
        </div>
        <div class="index-info">
          <p>
            希望同学们可以通过14天的打卡活动，养成珍惜粮食，勤俭节约的好习惯。
          </p>
        </div>
      </div>
    </div>
    <!-- 打卡记录 -->
    <div class="index-record">
      <div class="index-record-title">
        <p>打卡记录</p>
        <div class="index-today-block">
          <div class="today-clockin" @click="gotoPushCard"></div>
          <div class="today-detail" @click="calendar.state = true"></div>
        </div>
      </div>
    </div>
    <calendar
      v-if="calendar.state"
      @change-calendar-state="changeCalendarState"
    ></calendar>
    <!-- 打卡日历 -->
    <div class="clockin-calendar">
      <div class="clockin-title">
        <p>
          已打卡 <a>{{ num >= 14 ? 14 : num }}/14</a> 天
        </p>
      </div>
      <div class="calendarlist">
        <div v-for="day in daylist" :key="day.id" class="calendar-time">
          <div class="calendar-week">{{ day.week }}</div>
          <div
            :class="
              day.state == 'faild'
                ? `calendar-day calendar-day-opacity`
                : `calendar-day`
            "
          >
            {{ day.num }}
          </div>
        </div>
      </div>
    </div>
    <!-- 我的记录 -->
    <div class="my-record">
      <div class="myrecord-title">
        <div>
          <a @click="mycard(1)" :class="clickIndex==1?`red`:`orange`">我的记录</a>
          <a @click="othercard(2)" :class="clickIndex==2?`red myrecord-title-other`:`orange myrecord-title-other`">打卡展示</a>
        </div>
        <div class="medals-list">
          <!-- 积极榜单 -->
          <div class="activity-list" @click="showActivityPopup"></div>
          <!-- 获奖名单 -->
          <div class="medals" @click="showRollPopup"></div>
        </div>
      </div>
      <div class="myrecord-list">
        <div
          v-for="(item, index) in clockinList"
          :key="item.id"
          class="list-item"
        >
          <!-- 他人打卡 -->
          <div v-if="item.type == 'other'" class="list-item-inner">
            <div class="list-item-topic">
              <div class="list-item-title">
                {{ item.nickname }}<span>{{ item.time }}</span
                >已打卡<span>{{ item.countDay }}</span
                >天
              </div>
              <div class="todayTip">今日文字: {{ item.tip }}</div>
            </div>
            <div class="list-item-ctx">
              <img class="list-item-img-other" :src="item.img" />
              <div class="praise">
                <div
                  @click="praise(index, item.id)"
                  :class="item.ispraise ? `not-praise-icon` : `praise-icon`"
                ></div>
                <div class="praise-num">{{ item.praiseNum }}</div>
              </div>
            </div>
          </div>
          <!-- 自我打卡 -->
          <div v-if="item.type == 'self'" class="list-item-inner">
            <div class="list-item-title">{{ item.tip }}</div>
            <div class="list-item-imgbox">
              <!-- <img class="list-item-img" :src="require('../assets/image/mock/mock1.png')" /> -->
              <img class="list-item-img" :src="item.img" />
              <div v-if="item.status == 'waiting'" class="waiting">
                审核中...
              </div>
              <div v-if="item.status == 'failed'" class="failed">
                未审核通过!
              </div>
            </div>
            <div class="list-item-ctx">
              <div class="time">{{ item.time }}</div>
              <div class="praise">
                <div
                  @click="praise(index, item.id)"
                  :class="item.ispraise ? `not-praise-icon` : `praise-icon`"
                ></div>
                <div class="praise-num">{{ item.praiseNum }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="backTop">返回顶部</div> -->
  <indexPopup></indexPopup>
  <rollPopup></rollPopup>
  <!-- <index-alert-popup info="第一期活动已结束，将于12.16日12点公布本期获奖信息"/> -->
  <warm></warm>
  <info :info="info" type="succesd"></info>
  <overPopup info="今日打卡次数已满" type="succesd"></overPopup>
</template>
<script>
/* eslint-disable no-tabs */
/* eslint-disable indent */
// import Calendar from '../components/calendar/'
import indexPopup from '../components/popup/IndexPopup'
import overPopup from '../components/popup/OverPopup'
import rollPopup from '../components/popup/rollPopup'
// import IndexAlertPopup from '../components/popup/IndexAlertPopup'
import info from '../components/popup/infoPopup'
import warm from '../components/popup/warmPopup'
import { useRouter } from 'vue-router'
import { getPushCard, addCard, getOtherPushCard } from '../server/index'
// import calendar from '../components/calendar/calendar'
// import { useRouter } from 'vue-router'
import * as dayjs from 'dayjs'
import Calendar from '../components/popup/Calendar'
export default {
  components: {
    Calendar,
    indexPopup,
    info,
    rollPopup,
    warm,
    overPopup
  },
  setup () {
    const router = useRouter()
    function gotoPushCard () {
      router.push('/push-card')
    }
    return {
      gotoPushCard
    }
  },
  data () {
    return {
      info: '今日打卡成功',
      num: 1,
      clickIndex: 1,
      daylist: [
        { num: 0, state: 'faild', week: '周日' },
        { num: 0, state: 'faild', week: '周一' },
        { num: 0, state: 'faild', week: '周二' },
        { num: 0, state: 'faild', week: '周三' },
        { num: 0, state: 'faild', week: '周四' },
        { num: 0, state: 'faild', week: '周五' },
        { num: 0, state: 'faild', week: '周六' }
      ],
      clockinList: [
        // { tip: '可莉是最棒的!', img: '../assets/image/mock/mock1.png', time: '10月24日', praiseNum: 100, ispraise: false, id: 'kying-star', type: 'other', countDay: 3, status: 'waiting' },
        // { tip: '可莉是最棒的!', img: '../assets/image/mock/mock1.png', time: '10月24日', praiseNum: 100, ispraise: false, id: 'kying-star', type: 'other', countDay: 3, status: 'passed' },
        // { tip: '可莉是最棒的!', img: '../assets/image/mock/mock1.png', time: '10月24日', praiseNum: 100, ispraise: false, id: 'kying-star', type: 'other', countDay: 3, status: 'failed' },
        // { tip: '可莉是最棒的!', img: '../assets/image/mock/mock1.png', time: '10月24日', praiseNum: 100, ispraise: false, id: 'kying-star', type: 'other', countDay: 3, status: 'waiting' },
        // { tip: '可莉是最棒的!', img: '../assets/image/mock/mock1.png', time: '10月24日', praiseNum: 100, ispraise: false, id: 'kying-star', type: 'other', countDay: 3, status: 'waiting' },
        // { tip: '可莉是最棒的!', img: '../assets/image/mock/mock1.png', time: '10月24日', praiseNum: 100, ispraise: false, id: 'kying-star', type: 'other', countDay: 3, status: 'passed' },
        // { tip: '可莉是最棒的!', img: '../assets/image/mock/mock1.png', time: '10月24日', praiseNum: 100, ispraise: false, id: 'kying-star', type: 'other', countDay: 3, status: 'failed' },
        // { tip: '可莉是最棒的!', img: '../assets/image/mock/mock1.png', time: '10月24日', praiseNum: 100, ispraise: false, id: 'kying-star', type: 'other', countDay: 3, status: 'waiting' }
      ],
      myList: [],
      otherList: [],
      index_height: '100vh',
      calendar: {
        state: false
      }
    }
  },
  methods: {
    checkAll () {
      this.$store.commit('showIndexPopup', true)
    },
    praise (index, id) {
      addCard(id)
      this.clockinList[index].ispraise = !this.clockinList[index].ispraise
      if (this.clockinList[index].ispraise) {
        this.clockinList[index].praiseNum += 1
      } else {
        this.clockinList[index].praiseNum -= 1
      }
    },
    mycard () {
      this.clickIndex = 1
      this.clockinList = this.myList
    },
    othercard () {
      this.clickIndex = 2
      this.clockinList = this.otherList
    },
    changeCalendarState () {
      this.calendar.state = false
      // console.log(11)
    },
    showRollPopup () {
      console.log(1)
      // this.$store.commit('showRollPopup', true)
      this.$router.push('/award')
    },
    showActivityPopup () {
      this.$router.push('/activity')
    },
    update () {
      // console.log('看我刷新了')
      getPushCard().then((e) => {
        // console.log(e)
        // console.log(e.data.data.cards)
        if (e.data.data.card_count > 1) {
          this.index_height = ''
        }
        this.num = e.data.data.continue_days
        const list = []
        // console.log('这波列表长度为' + e.data.data.cards.length)
        e.data.data.cards.forEach((e, index) => {
          console.log(e)
          const clockin = {
            tip: e.content,
            img: e.photo_url,
            time: `${dayjs.unix(e.created_at).$M + 1}月${dayjs.unix(e.created_at).$D}日`,
            praiseNum: e.like_count,
            ispraise: Boolean(e.is_like),
            id: e.id,
            type: 'self',
            status: e.status
          }
          console.log(`${e.status}-${dayjs.unix(e.created_at).$D}-${dayjs.unix(dayjs().unix()).$D}`)
          if (e.status === 'failed' && dayjs.unix(e.created_at).$D === dayjs.unix(dayjs().unix()).$D) {
            const today = Date.parse(new Date())
            if (!localStorage.getItem('failedTime')) {
              localStorage.setItem('failedTime', today)
              this.$store.commit('showWarmPopup', true)
            }
            if (today - localStorage.getItem('faidedTime') > 43200) {
              localStorage.removeItem('failed')
            }
          }
          this.daylist.forEach((day, index) => {
            // console.log(dayjs.unix(e.created_at).$D)
            // console.log(dayjs.unix(e.created_at).$M)
            // console.log(dayjs.unix(dayjs().unix()).$M)
            if (dayjs.unix(e.created_at).$D === day.num && dayjs.unix(dayjs().unix()).$M === dayjs.unix(e.created_at).$M) {
              this.daylist[index].state = 'pass'
            }
          })
          list.push(clockin)
        })
        this.myList = list
        this.clockinList = this.myList
      })
      /**
       * @description: 渲染他人打卡数据
       * @author: 林其星
       */
      getOtherPushCard().then((e) => {
        console.log(e.data)
        if (e.data.data.lenght > 1) {
          this.index_height = ''
        }
        const list = []
        e.data.data.forEach((e, index) => {
          const clockin = {
            tip: e.content,
            img: e.photo_url,
            time: `${dayjs.unix(e.created_at).$M + 1}月${dayjs.unix(e.created_at).$D}日`,
            praiseNum: e.like_count,
            ispraise: Boolean(e.is_like),
            id: e.id,
            type: 'other',
            countDay: e.continuous_day,
            nickname: e.nickname
          }
          list.push(clockin)
          console.log('其他')
          console.log(this.otherList)
          if (e.status === 'failed') {
            this.$store.commit('showWarmPopup', true)
          }
        })
        this.otherList = list
      })
    }
  },
  /**
  * @description: 初始化日期数据
  * @author: 林其星
  */
  created () {
    if (!localStorage.getItem('firstLogin')) {
      localStorage.setItem('firstLogin', 1)
      this.checkAll()
    }
    console.log(this.$store.state.showInfoPopup)
    if (this.$store.state.showInfoPopup) {
      setTimeout(() => {
        this.$store.commit('showInfoPopup', false)
      }, 1500)
      this.update()
    }
    if (this.$store.state.showOverPopup) {
      setTimeout(() => {
        this.$store.commit('showOverPopup', false)
      }, 1500)
      this.update()
    }
    const week = dayjs.unix(dayjs().unix()).$W
    console.log('今天是星期' + week)
    this.daylist.forEach((e, index) => {
      this.daylist[index].num = dayjs().add(index - week, 'day').$D
      console.log('周' + index + '是' + this.daylist[index].num)
      console.log(dayjs().add(index - week, 'day'))
    })
    /**
     * @description: 请求打卡数据
     * @param {*}
     * @return {*}
     * @author: 林其星
     */
    this.update()
    // setInterval(() => {
    //   window.scrollBy({
    //     left: 0,
    //     top: -1000
    //   })
    // }, 500)
    // window.onscroll = function (e) {
    //   console.log(e.path[1].scrollY)
    // }
  },
  beforeCreate () {
    // 第一次进入的时候有领奖提示的弹窗
    const judgeIfAlert = localStorage.getItem('ifAlert')
    if (judgeIfAlert !== 'true') {
      localStorage.setItem('ifAlert', true)
    } else {
      console.log(this.$store.state.showIndexAlertPopup)
      this.$store.state.showIndexAlertPopup = false
    }
  }
}
</script>
<style lang='scss' scoped>
.index {
  width: 100vw;
  background-image: url('../assets/image/home/background.png');
  background-size: contain;
  font-family: 'coder';
  letter-spacing: 2px;
  p {
    margin: 0;
  }
  .index-title {
    font-family: 'coder';
    font-weight: 400;
    color: #ec4800;
    line-height: 28px;
    width: 100vw;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    p {
      position: relative;
      transform: translateX(46px);
      font-size: 46px;
      line-height: 50px;
      margin: 0;
    }
    .ware {
      position: relative;
      transform: translateX(46px) translateY(10px);
      width: 620px;
      height: 17px;
      background-image: url('../assets/image/index/ware.png');
      background-size: cover;
    }
  }
  .orange {
    color: #ff8700;
  }
  .red {
    color: #ff3200;
  }
  .index-block {
    width: 680px;
    height: 250px;
    margin-left: 16px;
    margin-right: 24px;
    background-image: url('../assets/image/index/block.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .index-block-inner {
      width: 620px;
      height: 167px;
      display: flex;
      flex-direction: column;
    }
    .index-block-title {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      p {
        font-family: 'coder';
      }
      .task {
        color: #ff6c00;
        font-size: 40px;
        margin-left: 40px;
      }
      .check-All {
        color: #5786fc;
        font-size: 30px;
        margin-right: 40px;
      }
    }
    .index-info {
      font-size: 30px;
      text-align: left;
      color: #ff940b;
      margin-left: 40px;
      margin-top: 20px;
      line-height: 40px;
      p {
        line-height: 50px;
      }
    }
  }
  .index-record {
    margin-top: 56px;
    width: 100vw;
    display: flex;
    justify-content: center;
    .index-record-title {
      width: 660px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        color: #ff5a00;
        font-size: 40px;
        margin-left: 40px;
      }
    }
    .index-today-block {
      display: flex;
      flex-direction: row;
      .today-clockin {
        width: #{158 * 1.2}px;
        height: #{53 * 1.2}px;
        margin-right: 40px;
        background-image: url('../assets/image/index/todayButton.png');
        background-size: cover;
      }
      .today-detail {
        width: #{53 * 1.2}px;
        height: #{43 * 1.2}px;
        background-image: url('../assets/image/index/more.png');
        background-size: cover;
      }
    }
  }
  .clockin-calendar {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .clockin-title {
      width: 660px;
      text-align: left;
      p,
      a {
        font-size: 28px;
      }
      p {
        margin-left: 40px;
        color: #ff940b;
      }
      a {
        color: #3272fe;
      }
    }
    .calendarlist {
      width: 640px;
      margin-top: 25px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      $span: 8;
      $ballsize: 50;
      .calendar-time {
        width: 70px;
        height: 120px;
        // margin-right: #{$span}px;
        margin-left: #{$span}px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .calendar-week {
          color: #ff940b;
          font-size: 24px;
        }
        .calendar-day {
          width: #{$ballsize}px;
          height: #{$ballsize}px;
          margin-top: 5px;
          text-align: center;
          line-height: #{$ballsize}px;
          border-radius: 50%;
          color: #ffffff;
          background-color: #ff7800;
          font-size: 19.22px;
        }
        .calendar-day-opacity {
          opacity: 0.2;
        }
      }
    }
  }
  .my-record {
    width: 660px;
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 14px;
    .myrecord-title {
      margin-left: 40px;
      text-align: left;
      color: #ff3200;
      font-size: 40px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .myrecord-title-other {
        margin-left: 20px;
      }
      .medals-list {
        display: flex;
        flex-direction: row;
        .activity-list {
          width: 141px;
          height: 47px;
          background-image: url('../assets/image/index/button.png');
          background-size: cover;
        }
        .medals {
          width: 43px;
          height: 46px;
          margin-left: 32px;
          background-image: url('../assets/image/index/parise.png');
          background-size: cover;
        }
      }
    }
    .myrecord-list {
      display: flex;
      flex-direction: column;
      .list-item {
        width: 657px;
        height: 299px;
        border-radius: 10px;
        margin-bottom: 30px;
        .list-item-topic {
          display: flex;
          align-items: center;
          flex-direction: column;
          align-items: flex-start;
          .todayTip {
            margin-left: 30px;
            margin-top: 20px;
            text-align: left;
            width: 600px;
            height: 40px;
            font-size: 18px;
            font-family: MF LingHei (Noncommercial);
            font-weight: 600;
            color: #437eff;
            opacity: 0.9;
          }
        }
        .list-item-inner {
          width: 657px;
          height: 299px;
          background-color: #ffffff;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }
        .list-item-title {
          text-align: left;
          margin-left: 34px;
          color: #ff8f00;
          font-size: 23px;
          margin-top: 20px;
          width: 637px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          span {
            color: #1d64ff;
          }
        }
        .list-item-imgbox {
          position: relative;
          width: 283px;
          height: 160px;
          margin-top: 20px;
          margin-left: 34px;
          .waiting {
            color: #fff9f6;
            width: 283px;
            height: 160px;
            position: absolute;
            transform: translateY(-164px);
            background-color: rgb(0, 0, 0, 0.45);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .failed {
            color: #fff9f6;
            width: 283px;
            height: 160px;
            position: absolute;
            transform: translateY(-164px);
            background-color: rgb(0, 0, 0, 0.45);
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .list-item-img {
          width: 283px;
          height: 160px;
          background-size: cover;
        }
        .list-item-img-other {
          width: 283px;
          height: 160px;
          margin-left: 34px;
          background-size: cover;
        }
        .list-item-ctx {
          width: 657px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          .time {
            color: #ffb659;
            font-size: 18px;
            margin-left: 34px;
            margin-top: 24px;
          }
          .praise {
            display: flex;
            flex-direction: row;
            align-items: center;
            .praise-icon {
              cursor: pointer;
              width: 40px;
              height: 39px;
              margin-right: 4px;
              background-image: url('../assets/image/index/add_down.png');
              background-size: cover;
            }
            .not-praise-icon {
              cursor: pointer;
              width: 40px;
              height: 39px;
              margin-right: 4px;
              background-image: url('../assets/image/index/add_on.png');
              background-size: cover;
            }
            .praise-num {
              width: 60px;
              color: #f4c2c2;
              font-size: 19.89px;
              margin-right: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
