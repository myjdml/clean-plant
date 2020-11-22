<template>
  <div id="push-card" class="flex-col">
    <div class="back" @click="gotohome"></div>

    <header class="header">
      <div class="title">
        <p>今日打卡</p>
        <p>今天是坚持的第一天哦，加油！</p>
        <div class="title__line"></div>
      </div>
    </header>

    <div class="content">
      <textarea
        maxlength="200"
        placeholder="随着照片一起打卡.........(最多输入两百字）"
        ref="content"
      ></textarea>

      <question-edit-photo class="push-img"></question-edit-photo>

      <button class="confirm" @click="postInfo"></button>
    </div>
  </div>
  <div v-if="postShow" class="mask">
    <div class="wait">上传中</div>
  </div>
  <div v-if="failShow" class="mask">
    <div class="wait">请完善信息哦</div>
  </div>
</template>
<script>
import QuestionEditPhoto from '../components/EditImage'
import { postPushCard } from '../server'
// import { useRouter } from 'vue-router'
// import { watch } from 'vue'
export default {
  name: 'PushCard',
  components: {
    QuestionEditPhoto
  },
  data () {
    return {
      formValue: {
        content: null
      },
      formData: null,
      postShow: false,
      failShow: false
    }
  },
  methods: {
    postInfo () {
      this.formValue.content = this.$refs.content.value
      const Img = this.$store.state.image
      this.formData = this.handelImg(Img)
      this.formData.append('content', this.formValue.content)
      console.log(this.formData)
      // 判空
      if (this.formValue.content !== '' && this.$store.state.image !== []) {
        // 提交ajax
        this.postShow = true

        postPushCard('plant/addCard', this.formData)
          .then(() => {
            // 删除VueX中存储的图片信息
            this.$store.state.image = []
            this.$store.state.imageId = []

            this.$router.push({
              path: '/index',
              query: {
                state: 'pass'
              }
            })
          })
      } else {
        this.failShow = true
        setTimeout(() => {
          this.failShow = false
        }, 2000)
      }
    },
    handelImg (Img) {
      const formData = new FormData()
      Img.forEach(blob => {
        formData.append(
          'photo',
          blob,
          `${Math.random()
            .toString(36)
            .substr(2)}.jpg`
        )
      })
      return formData
    },
    gotohome () {
      this.$router.push('/index')
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.mask{
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgb(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  transform: translateY(-100vh);
  .wait{
    font-family: 'coder';
    width: 427px;
    height: 194px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px;
    font-size: 50px;
    line-height: 194px;
    text-align: center;
    color: #ff5d31;
    &::after{
      content: '';
      animation: wait 1.5s linear infinite;
    }
  }
  @keyframes wait {
      0%{
          content: ".";
      }
      33%{
          content: "..";
      }
      66%{
          content: "...";
      }
    }
}
#push-card {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/image/icon/background.png');
  background-size: 100%;
}
.flex-col {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
}
.back {
  position: absolute;
  left: 42px;
  top: 33px;
  width: 27px;
  height: 49px;
  background-image: url('../assets/image/push-card/arrow-back.png');
  background-size: 100%;
}
.header {
  width: 700px;
  height: 100px;
  margin-top: 120px;
  /*border: black solid 1px;*/
}
.title {
  height: 41px;
  font-size: 43px;
  /*font-family: Coder,serif;*/
  font-weight: 400;
  color: #ec4800;
  line-height: 42px;
  .title__line {
    width: 642px;
    height: 15px;
    background-image: url('../assets/image/push-card/wave-line.png');
    background-size: 100%;
    margin-left: 29px;
  }
  p {
    display: inline-block;
  }
  p:nth-child(1) {
    width: 183px;
    height: 41px;
    font-size: 43px;
    margin-left: 29px;
  }
  p:nth-child(2) {
    width: 300px;
    height: 41px;
    font-size: 20px;
    margin-left: 165px;
    margin-top: 16px;
  }
}
.content {
  position: relative;
  width: 700px;
  height: 70vh;
  background-color: white;
  border-radius: 30px;
  z-index: 4;
  textarea {
    width: 90%;
    height: 300px;
    font-size: 25px;
    margin-left: 5%;
    margin-top: 30px;
  }
  .push-img {
    margin-left: 40px;
  }
  .confirm {
    width: 259px;
    height: 88px;
    background-image: url('../assets/image/push-card/confirm.png');
    background-size: 100%;
    position: absolute;
    top: 900px;
    left: 50%;
    transform: translateX(-129.5px);
  }
}
/*修改placeholder颜色*/
::-webkit-input-placeholder {
  color: #ff940b;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: #ff940b;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: #ff940b;
}
:-ms-input-placeholder {
  color: #ff940b;
}
</style>
