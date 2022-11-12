<template>
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
  methods: {
    reverseMessage(){
      return this.msg.split('').reverse().join('');
    }
  },
  // 계산된 데이터
  computed: {
    reversedMessage(){
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>

<style lang="scss">
  
</style>