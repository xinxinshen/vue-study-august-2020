<template>
  <div id="app">
    <!-- <formTest></formTest> -->
    <router-link to="/home" >home</router-link>| <router-link to="/about" >About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import formTest from './components/recursive/index.vue'

export default {
  name: 'app',
  components: {
    // formTest,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
