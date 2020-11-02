<!--eslint-disable no-tabs-->
<template>
  <div :class="$store.state.showIndexPopup ? 'show default' : 'hidden default'">
    <div class="popup">
      <div class="title">
        <p>勤俭节约21天拍照打卡活动</p>
        <div class="line"></div>
      </div>
      <div class="main">
        <div class="index">
          <div class="inner">
            <p class="indexpop-p">打卡目标</p>
            <li>
              希望同学们可以通过21天的打卡活动，养成珍惜粮食，吃穿节俭的好习惯，更加理解勤俭节约的重要性。
            </li>
          </div>
        </div>
        <div class="index">
          <div class="inner">
            <p class="indexpop-p">打卡奖励</p>
            <li><a>(1)</a> 连续打卡满7天的同学可以获得xx</li>
            <li>
              <a>(2)</a>
              将根据“连续打卡总次数”“获赞次数”“单次获赞次数”排出排名靠前的同学送出xx
            </li>
          </div>
        </div>
        <div class="index">
          <div class="inner">
            <p class="indexpop-p">打卡规则</p>
            <li>
              <a>(1)</a>
              同学们需要每天将饭后空碗筷的照片进行上传，仅可饭后立刻拍照，不可从图库中选择。
            </li>
            <li><a>(2)</a> 打卡活动仅在x月x日到x月x日中进行。</li>
            <li><a>(3)</a> 同学一日仅需上传一次照片，每次可上传一张照片。</li>
            <li><a>(4)</a> 活动最多可打卡14天。</li>
            <li>
              <a>(5)</a>
              照片和文案会进行审核，不合格会在打卡记录中给与通知，审核做最晚三天内将告知，首次不符合不影响奖励
            </li>
            <div class="buttonHidden" @click="hidden"></div>
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
    return {
    }
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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../../assets/image/home/background.png');
  background-size: cover;
  font-family: 'Coder';
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

    p {
      font-size: 45px;
      margin: 0;
      color: #ec4800;
    }
  }
  .line {
    height: 31px;
    width: 582px;
    background-image: url('../../assets/image/components/popups/wline.png');
    background-size: cover;
  }
  $img-width: 680, 680, 680;
  $img-height: 220, 242, 549;
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
      background-image: url('../../assets/image/components/popups/card#{$i}.png');
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
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
        line-height: 38px;
        letter-spacing: 2px;
        margin-bottom: 5px;
      }
      a {
        color: #3d78fa;
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
          background-image: url('../../assets/image/components/popups/popupIndexButton.png');
          background-size: cover;
        }
      }
    }
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
