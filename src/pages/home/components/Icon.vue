<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-text">{{item.dese}}</p>
        </div>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      swiperOption: {},
      iconList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dese: '热门景点'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          dese: '一日游'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          dese: '热门景点'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          dese: '必游榜单'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          dese: '动植物园'
        },
        {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          dese: '夏日玩水'
        },
        {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          dese: '必游榜单'
        },
        {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          dese: '动植物园'
        },
        {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
          dese: '上海欢乐谷'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variblse.scss";
@import "~styles/mixins.scss";
.icons >>> .swiper-container{
  height: 0;
  padding-bottom: 50%;
}
.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;
    .icon-img-content {
      display: block;
      height: 100%;
      margin: 0 auto;
    }
  }
  .icon-text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    color: $textcolor;
    text-align: center;
    // 引入文字超出隐藏
    @include textWrap;
  }
}
</style>
