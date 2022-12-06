<template>
  <h1 
    :[attr]="'active'"
    @[event]="add">
    {{ msg }}
  </h1>
</template>

<script>
// import HelloWorld from '~/components/HelloWorld'

export default {
  // components: {
  //   HelloWorld
  // },
  data(){
    return{
      msg: 'active',
      attr: 'class',
      event: 'click'
    }
  },
  methods: {
    add() {
      this.msg += '!'
    }
  }
  
}
</script>

<style>
  .active {
    color: royalblue;
    font-size: 50px;
  }
</style>