<template>
  <div class="App">
    <h1>App 根组件</h1>
    <!-- 用 hash 地址 -->
    <a href="#/Home">首页</a>
    <a href="#/Movie">电影</a>
    <a href="#/About">关于</a>
    <div class="content">
      <component :is="comname"></component>
    </div>
  </div>
</template>

<script>
import MyHome from '@/components/Home.vue'
import MyMovie from '@/components/Movie.vue'
import MyAbout from '@/components/About.vue'
export default {
  name: 'App',
  data () {
    return {
      comname: 'MyHome'
    }
  },
  components: {
    MyHome,
    MyMovie,
    MyAbout
  },
  created () {
    // 当 App 组件一被创建,就立即监听 window 对象的字符串
    window.onhashchange = () => {
      console.log('hash 被监听到了' + location.hash)
      switch (location.hash) {
        case '#/Home':
          this.comname = 'MyHome'
          break
        case '#/Movie':
          this.comname = 'MyMovie'
          break
        case '#/About':
          this.comname = 'MyAbout'
          break
        default:
          console.log('没有选中对象')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.App {
  background-color: #ccc;
  margin: 0;
  padding: 0;
}
.content {
  width: 600px;
  min-height: 500px;
}
a {
  margin: 0 20px;
}
</style>
