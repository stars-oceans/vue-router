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
    }

  ]
})
// 4.导出
export default router
