<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class='swiper-img' :src="item.imgUrl" alt="轮播图">
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
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/b4/a7bff39954e72002.jpg_750x200_9befc091.jpg'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/32/40b97c969cbad702.jpg_750x200_61fee14d.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" >
  .wrapper .swiper-pagination-bullet-active{
    background: #fff;
  }
  .wrapper{
    // 图片宽高比自适应
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.66%;
    background: #eee;
    //第二种
    // width: 100%;
    // height: 26.66vw;
    .swiper-img{
    width: 100%;
  }
  }

</style>
