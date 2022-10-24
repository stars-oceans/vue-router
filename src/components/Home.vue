<template>
  <div class="Home">
    <p>Home</p>
    <button @click="gotoLK">跳转到 Movie1</button>
    <button @click="gotoLKrep">跳转到 Movie2 不带记录</button>

    <router-link to="/Main">访问 Mian 后台主页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyHome',
  methods: {
    gotoLK () {
      // push() 跳转到 指定的 hash 地址 并保留地址
      this.$router.push('/Movie/1')
    },
    gotoLKrep () {
      // replace() 跳转到 指定地址 不保留 记录
      this.$router.replace('/Movie/2')
    }
  }
}
</script>

<style lang="less" scoped>
.Home {
  margin: 0;
  padding: 0;
  height: 200px;
  background-color: pink;
}
</style>
