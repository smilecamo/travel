// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决click300ms问题  npm install fastclick --save
import fastclick from 'fastclick'
// 初始化css
import './assets/styles/reset.css'
// 解决1border问题
import './assets/styles/border.css'

Vue.config.productionTip = false
// 把fastclick绑定到body上
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
