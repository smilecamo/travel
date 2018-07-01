<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-recommend :list='swipweList'></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcon from './components/Icon'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  data () {
    return {
      city: '',
      swipweList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      this.axios.post('/api/movie/in_theaters')
        .then(result => {
          let res = result.data
          this.swipweList = res.subjects
          console.log(res.subjects)
        })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style scoped>

</style>
