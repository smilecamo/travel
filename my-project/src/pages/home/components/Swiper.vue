<template>
  <div class=".wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img class='swiper-img' src="http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg" alt="轮播图">
        </swiper-slide>
        <swiper-slide>
          <img class='swiper-img' src="http://img1.qunarzz.com/piao/fusion/1806/b4/a7bff39954e72002.jpg_750x200_9befc091.jpg" alt="轮播图">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    // 宽高比
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background: #eee;
  }
  .swiper-img{
    width: 100%;
  }
</style>
