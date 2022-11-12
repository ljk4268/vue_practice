<template>
  <button @click="add">
    ADD
  </button>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
</template>

<script>

export default {
  data(){
    return{
      msg: 'hello computed!'
    }
  },
  // 계산된 데이터
  // 읽기전용
  computed: {
    // reversedMessage(){
    //   return this.msg.split('').reverse().join('');
    // }
    reversedMessage: {
      get(){
        return this.msg.split('').reverse().join('');
      },
      set(newValue){
        console.log(newValue)
      }
    }
  },
  methods: {
    add(){
      this.reversedMessage += '!?'
      
    }
  },
}
</script>

<style lang="scss">
  
</style>