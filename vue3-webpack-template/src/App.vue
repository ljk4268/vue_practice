<template>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  
</template>

<script>
export default {
  data(){
    return {
      msg:'Hello Computed!'
    }
  },
  computed: {
    // 이미 계산이 된 데이터 : 캐싱이 됨.
    // 최적화에 많이 사용됨. 
    reversedMessage(){
      return this.msg.split('').reverse().join('')
    }
  },
  methods: {
    // 실행 될때마다 계산되는 코드
    reverseMessage(){
      return this.msg.split('').reverse().join('')
    }
  }

}
</script>