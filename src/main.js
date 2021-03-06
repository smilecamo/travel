// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决click300ms问题  npm install fastclick --save
import fastclick from 'fastclick'
// 使用swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueAxios from 'vue-axios'
// 初始化css
// webpack.base.conf.js 中配置了'styles': resolve('src/assets/styles')
import 'styles/reset.css'
// 解决1border问题
import 'styles/border.css'
// 使用iconfont
import 'styles/iconfont.css'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
// 把fastclick绑定到body上
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueAxios, axios)
Vue.prototype.HOST = '/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
