<template>
 <div>
    paga a {{$store.state.money.money}}
    
 </div>
 <button type="button" name="button" @click="add">增加</button>
 <button type="button" name="button" @click="reduce">删减</button>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: mapActions('money',['add','reduce'])
}

</script>
<style scoped>
</style>
