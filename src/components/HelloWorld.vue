<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      {{msg1}}
    </div>
    <!-- <div class="div" v-n="4"></div> -->
    <div>
      我借给你{{money}}元，你还我{{a}}元，你还欠我{{b}}元
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data (){
    return {
      msg1:'<span style="color:red;">HelloWorld</span>',
      money:100,
      a:1
    }
  },
  computed:{
    b:function(){
      return this.money-this.a;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
