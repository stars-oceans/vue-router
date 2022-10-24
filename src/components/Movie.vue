<template>
  <div class="Movie">
    <!-- this.$route 是路由的“参数对象” -->
    <!-- this.$router 是路由的“导航对象”  -->
    <p>Movie组件-------{{ this.$route.params.id }}</p>
    <p>porps 传参------{{ id }}</p>
    <hr>
    <button @click="showThis">打印 this</button>
    <button @click="goBack">后退</button>
    <hr>
    <!-- TODO: 当写在行内的时候 就不要加 this 不然会报错 -->
    <button @click="$router.back()">back 后退</button>
    <button @click="Forward">forward 前进</button>

  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  name: 'MyMovie',
  methods: {
    showThis () {
      console.log(this)
    },
    goBack () {
      // 后退到上一层路径
      this.$router.go(-1)
    },
    Back () {
      // 后退一格
      this.$router.back()
    },
    Forward () {
      // 前进地址
      this.$router.forward()
    }
  }
}
</script>

<style lang="less" scoped>
.Movie {
  p {
    padding: 0;
    margin: 0;
  }
  margin: 0;
  padding: 0;
  height: 200px;
  background-color: orange;
}
</style>
