<!--eslint-disable no-tabs-->
<template>
  <div :class="$store.state.showIndexPopup ? 'show default' : 'hidden default'">
    <div
      class="popup"
      @click="hidden"
    >
      <div class="title">
        <p>勤俭节约,光盘ing</p>
        <div class="line"></div>
      </div>
      <div class="main">
        <div class="index">
          <div class="inner">
            <p class="indexpop-p">打卡目标</p>
            <li>
              希望同学们可以通过14天的打卡活动，养成珍惜粮食，吃穿节俭的好习惯，更加理解勤俭节约的重要性。
            </li>
          </div>
        </div>
        <div class="index">
          <div class="inner">
            <p class="indexpop-p">打卡奖励</p>
            <li>
              每期将从打卡天数最多的同学中选取打卡次数最多的10人获得价值百元的食堂大礼包
            </li>
            <li>
              若“打卡次数”完全相同，则在次数相同的同学中进抽奖
            </li>
          </div>
        </div>
        <div class="index">
          <div class="inner">
            <p class="indexpop-p">打卡规则</p>
            <li>
              <a>(1)</a>
              同学们需要每天将饭后空碗筷拍照上传，仅可饭后立刻拍照，不可从图库中选择照片。
            </li>
            <li><a>(2)</a>活动每一期为14天，同学们每日上传一次即为今日打卡成功，一天最多打卡3次。</li>
            <li>
              <a>(3)</a>
              照片和文案会进行审核，不合格会有弹窗通知并在“我的记录”中给与通知与说明，审核最晚三天内将告知，首次不符合不影响奖励。
            </li>
            <li>
              <a>(4)</a>
              每期获奖消息将用弹窗通知，并可在“获奖名单”中确认。
            </li>
            <li>
              <a>(5)</a>
              每期获奖名单将在每期结束后的下周三公布。
            </li>
            <li>
              <a>(6)</a>
              获奖同学请在弹窗中的指定时间到红岩网校工作站b区领取奖品。
            </li>
            <div
              class='buttonHidden'
              @click='hidden'
            ></div>
          </div>
        </div>
      </div>
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
    return {}
  },
  methods: {
    hidden () {
      this.$store.commit('showIndexPopup', false)
    }
  }
}
</script>
<style lang='scss' scoped>
.popup {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../../assets/image/home/background.png");
  background-size: cover;
  font-family: "Coder";
  .indexpop-p {
    color: #ff6c00;
  }
  .title {
    width: 90vw;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    transform: translateY(-5px);
    p {
      font-size: 46px;
      margin: 0;
      color: #ec4800;
    }
  }
  .line {
    position: relative;
    width: 620px;
    height: 17px;
    transform: translateY(10px);
    background-image: url("../../assets/image/index/ware.png");
    background-size: cover;
  }
  $img-width: 680, 680, 680;
  $img-height: 200, 242, 550;
  .main {
    width: 90vw;
    height: 1206px;
    display: flex;
    flex-direction: column;
    transform: translateY(-30px);
  }
  @for $i from 1 through 3 {
    .index:nth-child(#{$i}) {
      height: #{nth($img-height, $i)}px;
      width: #{nth($img-width, $i)}px;
      background-image: url("../../assets/image/components/popups/card#{$i}.png");
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      transform: translateX(-20px);
      p {
        font-size: 35px;
        margin: 0;
        margin-top: 40px;
        margin-left: 30px;
        margin-bottom: 20px;
        text-align: left;
      }
      li {
        text-align: left;
        list-style: none;
        color: #ff940b;
        font-size: 22px;
        margin-left: 30px;
        line-height: 34px;
        letter-spacing: 2px;
        margin-bottom: 5px;
        display: flex;
      }
      a {
        margin-right: 10px;
        color: #3d78fa;
      }
      i {
        height: 1px;
        width: 6px;
      }
      .inner {
        height: #{nth($img-height, $i)-20}px;
        width: #{nth($img-width, $i)-40}px;
        position: relative;
        .buttonHidden {
          position: absolute;
          left: 50%;
          transform: translateX(-50%) translateY(30px);
          width: 218px;
          height: 74px;
          background-image: url("../../assets/image/components/popups/popupIndexButton.png");
          background-size: cover;
        }
      }
    }
  }
}
.default {
  top: 0%;
  left: 0%;
  transform: translateY(-50%) translateX(-50%);
}
.show,
.hidden {
  position: fixed;
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
