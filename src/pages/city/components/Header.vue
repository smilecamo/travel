<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
@import "~styles/variblse.scss";
.header{
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background: $bgcolor;
  font-size: $headerfz;
  .header-back{
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: .4rem;
    color: #fff;
  }
}
</style>
