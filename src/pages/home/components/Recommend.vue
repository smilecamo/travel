<template>
  <div>
    <div class="recommend-title">
      <img class="recomment-hot" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
      <span>猜你喜欢</span>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recomendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-detail">
          <p class="item-title">{{item.title}}</p>
          <p class="item-comment">{{item.comment}}</p>
          <div class="item-price-div">
            <span class="item-price">¥
              <em>{{item.price}}</em>
            </span>
            <span>起</span>
            <span class="item-text">{{item.adress}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recomendList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg',
          title: '上海玛雅海滩水公园',
          comment: '5058条评论',
          price: '69',
          adress: '佘山国家'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
          title: '上海迪士尼乐园',
          comment: '5058条评论',
          price: '960',
          adress: '浦东新区'
        },
        {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_200x200_a32b9a92.jpg',
          title: '上海野生动物园',
          comment: '33214条评论',
          price: '679',
          adress: '浦东新区'
        },
        {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/9f/fbff2a5302c0ce906ef9b64159730f89.water.jpg_200x200_87806940.jpg',
          title: '上海海洋水族馆',
          comment: '5058条评论',
          price: '609',
          adress: '浦东新区'
        },
        {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/1a/1aac2b1dd96b36ba3.water.jpg_200x200_8148509f.jpg',
          title: '上海欢乐谷',
          comment: '27583条评论',
          price: '79',
          adress: '浦东新区'
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
  overflow: hidden;
  display: flex;
  height: 2.4rem;
  .item-img{
    width: 2rem;
    height: 2rem;
  }
  .item-detail{
    flex: 1;
    min-width: 0;
    display: block;
    overflow: hidden;
    padding-left: .22rem;
    .item-title{
      margin-top: .26rem;
      color: #000;
      height: 0.44rem;
      line-height: .44rem;
      font-size: .32rem;
      @include textWrap;
    }
    .item-comment{
      margin-top: .14rem;
      color: #616161;
      font-size: .24rem;
      line-height: .34rem;
    }
    .item-price-div{
      position: relative;
      margin-top: .22rem;
      color: #616161;
      font-size: .24rem;
      line-height: .4rem;
      .item-price{
        color: #ff8300;
        em{
        font-size: .4rem;
      }
      }
      .item-text{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        @include textWrap;
        width: 1.5rem;
      }
    }
  }
}
</style>
