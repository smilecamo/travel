<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-detail">
          <p class="item-title">{{item.title}}</p>
          <p class="item-comment">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '上海必游TOP10',
          desc: '中西合璧，现代和传统各有各的精彩'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
          title: '亲子时光TOP10',
          desc: '走进自然或玩转乐园，感知大千世界'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
          title: '上海城市观光',
          desc: '来这里寻找你所认识的上海'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variblse.scss";
@import "~styles/mixins.scss";
.recommend-title{
  margin-top: .2rem;
  padding-left: .2rem;
  line-height: .8rem;
  background: $textbg;
  .recomment-hot{
    width: 0.3rem;
    height: 0.3rem;
  }
}
.item{
  position: relative;
  margin-bottom: .1rem;
  .item-img{
    width: 7.5rem;
    height: 2.8rem;
  }
  .item-detail{
    position: relative;
    padding: .14rem .2rem .2rem .2rem;
    .item-title{
      color: $fz21;
      font-size: .28rem;
      line-height: .48rem;
      @include textWrap;
    }
    .item-comment{
      color: $fz61;
      font-size: .24rem;
      line-height: .42rem;
      @include textWrap;
    }
  }
}
</style>
