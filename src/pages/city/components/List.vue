<template>
  <div class="header" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrap">
            <div class="btn">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市
        </div>
        <div class="btn-list">
          <div class="btn-wrap" v-for="item of hotCitie" :key="item.id">
            <div class="btn">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
      v-for="(item,key) of cities"
      :key="key"
      :ref="key"
      >
        <div class="title border-topbottom">{{key}}
        </div>
        <div class="item-list">
          <div class="item border-bottom"
          v-for="inner of item"
          :key="inner.id">
              {{inner.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'HomeList',
  props: {
    cities: Object,
    hotCitie: Array,
    letter: String
  },
  mounted () {
    // 获取dom
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      // A B
      console.log(this.letter)
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        // scroll 滚动到那里
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// webpack.base.conf.js 中配置了'styles': resolve('src/assets/styles')
@import "~styles/variblse.scss";
.border-topbottom {
  &::before {
    border-color: #ccc;
  }
  &::after {
    border-color: #ccc;
  }
}
.border-bottom {
  &::before {
    border-color: #ccc;
  }
}
.header {
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area {
    .title {
      line-height: 0.54rem;
      background: #eee;
      padding-left: 0.2rem;
      color: #666;
      font-size: 0.26rem;
    }
    .btn-list {
      overflow: hidden;
      padding: 0.1rem 0.6rem 0.1rem 0.1rem;
      .btn-wrap {
        float: left;
        width: 33.33%;
        .btn {
          margin: 0.1rem;
          padding: 0.1rem 0;
          text-align: center;
          border: 0.02rem solid #ccc;
          border-radius: 0.06rem;
        }
      }
    }
    .item-list{
      .item{
        line-height: .7rem;
        color: #666;
        padding-left: .2rem;
      }
    }
  }
}
</style>
