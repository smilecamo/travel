<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
      </div>
    <router-link to="/city">
      <div class="header-right">
        城市
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
// webpack.base.conf.js 中配置了'styles': resolve('src/assets/styles')
  @import '~styles/variblse.scss';
  .header{
    display: flex;
    line-height: $headerHeight;
    background: $bgcolor;
    color: #fff;
  }
  .header-left{
    width: .64rem;
    float: left;
    .back-icon{
      text-align: center;
      font-size: .4rem;
    }
  }
  .header-input{
    flex: 1;
    height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
    line-height: .64rem;
  }
  .header-right{
    width: 1.24rem;
    float: right;
    text-align: center;
    color: #fff;
    .arrow-icon{
      font-size: .24rem;
    }
  }
</style>
