<template>
  <div id="app">
    <!-- <router-view>
      <Vuexx />
    </router-view> -->
    <A />
    <B />
  </div>
</template>

<script>
// import Vuexx from './components/vuex'
import A from './components/a'
import B from './components/b'

export default {
  name: 'app',
  components: {
    // Vuexx,
    A,
    B
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
