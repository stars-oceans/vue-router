<template>
  <div class="Movie">
    <!-- this.$route 是路由的“参数对象” -->
    <!-- this.$router 是路由的“导航对象”  -->
    <p>Movie组件-------{{ this.$route.params.id }}</p>
    <p>porps 传参------{{ id }}</p>
    <hr>
    <button @click="showThis">打印 this</button>
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
