<template>
  <div class="question-edit-photo">
    <ul>
      <li class="list" v-for="(item, index) of image" :key="index">
        <img :src="item" />
        <div class="delete" @click="handelDeleteClick(index)">
          <div class="icon"></div>
        </div>
      </li>
      <li class="list" v-if="imageUploading">
        <div class="loading">
          <ImageLoadingSvg />
        </div>
      </li>
      <div>
        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          capture="camera"
          multiple
          @change="previewFiles($event)"
        />
        <label for="fileUpload" class="add" v-if="image.length < 1">
          <img src="../assets/image/edit-img/camera.png" alt="" />
          <div class="limit">只能添加一张照片哦</div>
        </label>
      </div>
    </ul>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import EXIF from 'exif-js'

import ImageLoadingSvg from '../assets/svg/ImageLoading.svg'
import { UPLOAD_IMAGE, DLELTE_IMAGE } from '../store/type/actions'

export default {
  name: 'QuestionEditPhoto',
  components: {
    ImageLoadingSvg
  },
  methods: {
    previewFiles (e) {
      const files = e.target.files || e.dataTransfer.files
      const filesLength = files.length
      const reader = new FileReader()
      const img = new Image()
      for (let i = 0; i < filesLength; i++) {
        reader.readAsDataURL(files[i])
        reader.onload = e => {
          img.src = e.target.result
        }
        img.onload = e => {
          let orientation
          EXIF.getData(img, function () {
            orientation = EXIF.getTag(this, 'Orientation')
          })
          // 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')

          // 图片原始尺寸
          const originWidth = img.width
          const originHeight = img.height

          // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
          const maxWidth = 1000
          const maxHeight = 1000
          // 目标尺寸
          let targetWidth = originWidth
          let targetHeight = originHeight
          // 图片尺寸超过300x300的限制
          if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
              // 更宽，按照宽度限定尺寸
              targetWidth = maxWidth
              targetHeight = Math.round(maxWidth * (originHeight / originWidth))
            } else {
              targetHeight = maxHeight
              targetWidth = Math.round(maxHeight * (originWidth / originHeight))
            }
          }
          canvas.width = targetWidth
          canvas.height = targetHeight
          // 清除画布
          context.clearRect(0, 0, targetWidth, targetHeight)
          if (orientation && orientation !== 1) {
            switch (orientation) {
              case 6:// 旋转90度
                context.rotate(Math.PI / 2)
                // (0,-targetHeight) 从旋转原理图那里获得的起始点
                context.drawImage(img, 0, -targetHeight, targetWidth, targetHeight)
                break
              case 3:// 旋转180度
                context.rotate(Math.PI)
                context.drawImage(img, -targetWidth, -targetHeight, targetWidth, targetHeight)
                break
              case 8:// 旋转-90度
                context.rotate(3 * Math.PI / 2)
                context.drawImage(img, -targetWidth, 0, targetWidth, targetHeight)
                break
            }
          } else {
            // canvas对图片进行缩放
            context.drawImage(img, 0, 0, targetWidth, targetHeight)
          }
          // 压缩后的图片转blob
          /* canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/png';
           * qualityArgument表示导出的图片质量，只有导出为jpeg和webp格式的时候此参数才有效，默认值是0.92 */
          canvas.toBlob(blob => { this.$store.dispatch(UPLOAD_IMAGE, blob) }, 'image/jpeg', 0.92)
        }
      }
      // 允许多次选择同样的照片
      e.target.value = ''
      console.log(this.$store.state)
    },
    handelDeleteClick (index) {
      this.$store.dispatch(DLELTE_IMAGE, index)
    }
  },
  computed: {
    editImage () {
      return this.$store.state.image
    },
    imageUploading () {
      return this.$store.state.isUploading
    },
    image () {
      return this.editImage.map(item => URL.createObjectURL(item))
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    /*margin: 41px 24px 10px;*/
    /*margin-top: 200px;*/
    padding: 0;
    display: flex;
    overflow: hidden;
    li {
      position: relative;
      margin-right: 9px;
      &:nth-child(3) {
        margin-right: 0;
      }
      img {
        width: 224px;
        height: 224px;
        border-radius: 5px;
        object-fit: cover;
        vertical-align: top;
      }
      .loading {
        width: 224px;
        height: 224px;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .delete {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        display: flex;
        justify-content: flex-end;
        .icon {
          position: relative;
          width: 39px;
          height: 38px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: 5px;
          background-image: url('../assets/image/edit-img/delete.png');
          background-repeat: no-repeat;
          background-size: contain;
          // &::before {
          //     position: absolute;
          //     content: '\d7';
          //     color: #fff;
          //     left: 50%;
          //     transform: translateX(-50%);
          // }
        }
        svg {
          margin: 5px;
          width: 50px;
          height: 50px;
          path:nth-of-type(1) {
            fill: rgba(0, 0, 0, 0.7);
          }
          path:nth-of-type(2) {
            fill: rgba(255, 255, 255, 0.9);
          }
        }
      }
    }
  }

  #fileUpload {
    display: none;
  }
  .add {
    display: block;
    box-sizing: border-box;
    color: #dfe2e4;
    position: relative;
    background-color: #FFFAD0;
    border-radius: 5px;
    opacity: 0.98;
    width: 224px;
    height: 224px;
    img {
      width: 63px;
      height: 63px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-31.5px, -31.5px);
    }
    .limit {
      position: absolute;
      left: 50%;
      bottom: 40px;
      width: 180px;
      color: #FF940B;
      font-size: 20px;
      transform: translateX(-50%);
    }
  }

  // &:before {
  //   content: "";
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   width: 80px;
  //   margin-left: -40px;
  //   margin-top: -5px;
  //   border-top: 5px solid;
  // }
  // &:after {
  //   content: "";
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   height: 80px;
  //   margin-left: -5px;
  //   margin-top: -40px;
  //   border-left: 5px solid;
  // }
</style>
