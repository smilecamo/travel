<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
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
