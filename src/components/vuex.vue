<template>
 <div>
   马 {{$store.state.count}}
    <button @click="increment">增加</button>
    <button @click="decrement">删减</button>
 </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
    }         
  },
  methods: mapActions([
    'increment',
    'decrement'
  ])
}

</script>
<style scoped>
</style>

