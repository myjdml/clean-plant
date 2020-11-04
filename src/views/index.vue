<!--eslint-disable no-tabs-->
<!--eslint-disable spaced-comment-->
<template>
  <div class="index">
    <!-- 打卡任务 -->
    <div class="index-title">
      <p>勤俭节约21天拍照打卡活动</p>
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
            希望同学们可以通过7天的打卡活动，养成珍惜粮食，勤俭节约的好习惯。
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
          <div class="today-detail"></div>
        </div>
      </div>
    </div>
    <!-- 打卡日历 -->
    <div class="clockin-calendar">
      <div class="clockin-title">
        <p>
          已打卡 <a>{{ num }}/7</a> 天
        </p>
      </div>
      <div class="calendarlist">
        <div v-for="day in daylist" :key="day.id" class="calender-time">
          <div class="calender-week">{{ day.week }}</div>
          <div
            :class="
              day.state == 'N'
                ? `calender-day calender-day-opacity`
                : `calender-day`
            "
          >
            {{ day.num }}
          </div>
        </div>
      </div>
    </div>
    <!-- 我的记录 -->
    <div class="my-record">
      <div class="myrecord-title">我的记录 打卡展示</div>
      <div class="myrecord-list">
        <div
          v-for="(itme, index) in clockinList"
          :key="itme.id"
          class="list-itme"
        >
          <div class="list-itme-inner">
            <div class="list-itme-title">{{ itme.tip }}</div>
            <img
              class="list-itme-img"
              :src="require('../assets/image/mock/mock1.png')"
            />
            <div class="list-itme-ctx">
              <div class="time">{{ itme.time }}</div>
              <div class="praise">
                <div
                  @click="praise(index)"
                  :class="itme.ispraise ? `not-praise-icon` : `praise-icon`"
                ></div>
                <div class="praise-num">{{ itme.praiseNum }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <indexPopup></indexPopup>
  <!-- <calendar></calendar> -->
</template>

<script>
/* eslint-disable no-tabs */
/* eslint-disable indent */
// import Calendar from '../components/calendar/'
import indexPopup from '../components/popup/IndexPopup'
import { useRouter } from 'vue-router'
import { getPushCard } from '../server/index'
// import calendar from '../components/calendar/calendar'
// import { useRouter } from 'vue-router'
import * as dayjs from 'dayjs'
export default {
  components: {
    indexPopup
    // calendar
  },
  setup () {
    const router = useRouter()

    function gotoPushCard () {
      console.log(1)
      router.push('/push-card')
    }
    return {
      gotoPushCard
    }
  },
  data () {
    return {
      num: 1,
      daylist: [
        { num: 0, state: 'Y', week: '周一' },
        { num: 0, state: 'N', week: '周二' },
        { num: 0, state: 'N', week: '周三' },
        { num: 0, state: 'N', week: '周四' },
        { num: 0, state: 'Y', week: '周五' },
        { num: 0, state: 'Y', week: '周六' },
        { num: 0, state: 'Y', week: '周日' }
      ],
      clockinList: [
        { tip: '', img: '', time: '', praiseNum: 0, ispraise: false, state: '' },
        { tip: '', img: '', time: '', praiseNum: 0, ispraise: false, state: '' },
        { tip: '', img: '', time: '', praiseNum: 0, ispraise: false, state: '' },
        { tip: '', img: '', time: '', praiseNum: 0, ispraise: false, state: '' }
      ]
    }
  },
  methods: {
    checkAll () {
      this.$store.commit('showIndexPopup', true)
    },
    praise (index) {
      this.clockinList[index].ispraise = !this.clockinList[index].ispraise
      if (this.clockinList[index].ispraise) {
        this.clockinList[index].praiseNum += 1
      } else {
        this.clockinList[index].praiseNum -= 1
      }
    }
  },
  /**
  * @description: 初始化日期数据
  * @author: 林其星
  */
  created () {
    /**
     * @description: 请求打卡数据
     * @param {*}
     * @return {*}
     * @author: 林其星
     */
    getPushCard().then((e) => {
      console.log(e.data.cards)
      e.data.cards.forEach((e) => {
        this.clockinList.tip = e.content
        this.clockinList.img = e.photo_url
        this.clockinList.time = `${dayjs.unix(e.created_at).$M + 1}月${dayjs.unix(e.created_at).$D}日`
        this.clockinList.state = e.status
        this.clockinList.praiseNum = e.is_like
        this.clockinList.ispraise = Boolean(e.is_like)
      })
    })
    // let mouth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const today = dayjs.unix(dayjs().unix()).$D
    const week = dayjs.unix(dayjs().unix()).$W
    this.daylist.forEach((e, index) => {
      this.daylist[index].num = (today - (week - index) + 1)
    })
  }
}
</script>
<style lang='scss' scoped>
.index {
  width: 100vw;
  height: 100%;
  background-image: url('../assets/image/home/background.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  .index-block {
    width: 680px;
    height: 250px;
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
      .calender-time {
        width: 70px;
        height: 120px;
        // margin-right: #{$span}px;
        margin-left: #{$span}px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .calender-week {
          color: #ff940b;
          font-size: 24px;
        }
        .calender-day {
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
        .calender-day-opacity {
          opacity: 0.2;
        }
      }
    }
  }
  .my-record {
    width: 660px;
    display: flex;
    flex-direction: column;
    margin-top: 14px;
    .myrecord-title {
      margin-left: 40px;
      text-align: left;
      color: #ff5a00;
      font-size: 40px;
      margin-bottom: 20px;
    }
    .myrecord-list {
      display: flex;
      flex-direction: column;
      .list-itme {
        width: 657px;
        height: 299px;
        border-radius: 10px;
        margin-bottom: 30px;
        .list-itme-inner {
          width: 657px;
          height: 299px;
          background-color: #ffffff;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .list-itme-title {
          text-align: left;
          margin-left: 34px;
          color: #ff8f00;
          font-size: 23px;
          margin-top: 20px;
        }
        .list-itme-img {
          width: 283px;
          height: 160px;
          margin-top: 20px;
          margin-left: 34px;
          background-size: cover;
        }
        .list-itme-ctx {
          width: 657px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
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
