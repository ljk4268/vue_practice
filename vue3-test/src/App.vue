<template>
  <h1 @click="changeMessage">
    {{ msg }}
  </h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>

export default {
  data(){
    return{
      msg: 'Hello?'
    }
  },
  computed: {
    reversedMessage() {
      return this.msg.split('').reverse().join('');
    }
  },
  // 특정한 데이터 감시 역할
  watch: {
    msg(newValue){
      console.log('msg:', newValue)
    },
    reversedMessage(value){
      console.log('reversedMessage:', value)
    }
  },
  methods: {
    changeMessage(){
      this.msg = 'Good!'
    }
  },
}
</script>

<style lang="scss">
  
</style>