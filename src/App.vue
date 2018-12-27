<template>
  <div id="app">
    <router-view></router-view>
      <router-link to="/pagea">Go to Foo</router-link>
      <router-link to="/pageb">Go</router-link>
  </div>
</template>

<script>
import A from './pages/a';
import B from './pages/b'


export default {
  name: 'app',
  components: {
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
