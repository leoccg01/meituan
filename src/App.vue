<template>
  <div id="app">
    <router-view>
      <Vuexx />
    </router-view>
  </div>
</template>

<script>
import Vuexx from './components/vuex';
import B from './components/b'


export default {
  name: 'app',
  components: {
    Vuexx,
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
