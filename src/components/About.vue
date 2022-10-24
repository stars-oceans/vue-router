<template>
  <div class="About">
    <p>About</p>
    <hr>
    <router-link to="/About/top1">top1</router-link>
    <router-link to="/About/top2">top2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyAbout'
}
</script>

<style lang="less" scoped>
.About {
  margin: 0;
  padding: 0;
  height: 200px;
  background-color: lightcyan;
}
</style>
