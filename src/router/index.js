// src/router.index.js 就是我们的模块了
// 1.导入包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入要展示的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

// 导入About 的子组件
import top1 from '@/components/Top/top1.vue'
import top2 from '@/components/Top/top2.vue'

// 导入Login 组件
import Login from '@/components/Login.vue'
// 导入 Main 组件
import Main from '@/components/Main.vue'
// 2.调用 Vue.use() 函数,把 VueRouter 安装 给Vue 的插件
// 安装插件 就是用 Vue.use() 函数
Vue.use(VueRouter)
console.log('a')
// 3.创建路由的实例对象
const router = new VueRouter({
  // router 是一个数组,作用：定义 "hash 地址" 与 "组件" 之间的对应关系
  routes: [
    // { path: '#/Home', component: 要展示的组件 }
    { path: '/', redirect: '/Home' },
    { path: '/Home', component: Home },
    // 需求: 在 Movie 组件中 跟据 id 的值 来展示对应的 电影详细信息
    //  开启 props 传参 props: true
    { path: '/Movie/:id', component: Movie, props: true },
    {
      path: '/About',
      component: About,
      redirect: '/About/top2',
      children: [
        { path: '/', redirect: 'top2' },
        { path: 'top1', component: top1 },
        { path: 'top2', component: top2 }
      ]
    },
    { path: '/Login', component: Login },
    { path: '/Main', component: Main }

  ]
})

// TODO: 导航守卫
// router 实例对象, 声明全局前置导航守卫
// 只要发生跳转,必然会触 beforEach 指定 的 函数回调
router.beforeEach(function (to, from, next) {
  // next() 函数表示放行的意思
  // 1.拿到用户将要访问的 hash 地址
  // 2. 判断 hash 地址是否等于 /main
  // 2.1 如果等于 /main,证明需要登录之后,才能访问成功
  // 2.2 如果不等于 /main, 则不需要登录,直接放行 next()
  // 3.如果访问的地址是 /main。则需要读取 localStorage 中的 token 值
  // 3.1 如果有 token 则放行
  // 3.2 如果没有 token, 则强制跳转到 /login 登录页
  if (to.path === '/Main') {
    // 要访问后台主页,需要判断是否有 token
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
// to 跳转到的位置  就是   末
// from 从哪里开始跳  就是 开始
// next 表示放行的位置

// 4.导出
export default router
