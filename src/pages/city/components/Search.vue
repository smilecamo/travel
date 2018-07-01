<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="scss" scoped>
  @import '~styles/variblse.scss';
  .search{
    height: 0.72rem;
    padding: 0 .1rem;
    background: $bgcolor;
    .search-input{
      box-sizing: border-box;
      width: 100%;
      line-height: .62rem;
      padding: 0 .1rem;
      text-align: center;
      border-radius: .1rem;
      color: #666;
    }
  }
</style>
