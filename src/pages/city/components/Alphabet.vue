<template>
  <ul class="list">
    <li class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @touchstart='handleTouchStart'
    @touchmove='handleTouchMove'
    @touchend='handleTouchEnd'
    @click='handleClick'
    >{{item}}</li>
  </ul>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      starrtY: 0,
      timer: null
    }
  },
  updated () {
    // A距离顶部的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {

    handleClick (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 函数节流
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 当前手指到顶部的高度 79 上面输入框的高度
          // 手指距离顶部的距离
          const touchY = e.touches[0].clientY - 79
          // 当前字母的下标
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
// webpack.base.conf.js 中配置了'styles': resolve('src/assets/styles')
  @import '~styles/variblse.scss';
.list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item{
    line-height: .44rem;
    text-align: center;
    color: $bgcolor;
  }
}
</style>
