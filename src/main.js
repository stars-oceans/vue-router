import Vue from 'vue'
import App from './App2.vue'
// 导入路由模块
// 在模块化 的时候, 如果给定的是文件夹,则默认导入这个文件夹下,名字叫做 index.js 的文件
import router from '@/router/index'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router:路由的实例对象
  // 挂载
  router
}).$mount('#app')
