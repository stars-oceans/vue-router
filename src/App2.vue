<template>
  <div class="App2">
    <h1>App2</h1>
    <hr>
    <!-- <a href="#/Home">首页</a> -->
    <router-link to="/Home">首页</router-link>
    <!-- <a href="#/Movie">电影</a> -->
    <!-- TODO:注意1：在 hash 地址中, / 后面的参数项叫做“路径参数”  -->
    <!-- 在路由“参数对象”中,需要 使用 this.$route.params 来访问路径参数-->
    <!-- TODO:注意2：在 hash 地址中, ? 后面的参数项,叫做 “查询参数” -->
    <!-- 在路由 “参数对象” 中, 需要使用 this.$route.query 来访问查询参数 -->
    <!-- TODO:注意3：在this.$route 中, path 只是路径部分; fullPath 是完整的地址 -->
    <!-- 例如： -->
    <!-- /Movie/2?name=zs&age=18 是 fullPath 的值-->
    <!-- /Movie/2 是 path 的值-->
    <router-link to="/Movie/1">电影1</router-link>
    <router-link to="/Movie/2?name=zs&age=18">电影2</router-link>
    <router-link to="/Movie/3">电影3</router-link>

    <!-- <a href="#/About">关于</a> -->
    <router-link to="/About">关于</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'app2'
}
</script>

<style lang="less" scoped>
.App2 {
  background-color: #ccc;
}
a {
  margin: 10px 10px;
}
</style>
