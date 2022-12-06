<template>
  <button @click="add">ADD</button>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  <h1>{{ reversedMessage }}</h1>
  
</template>

<script>
export default {
  data(){
    return {
      // Getter, Setter
      msg:'Hello Computed!'
    }
  },
  computed: {
    // 이미 계산이 된 데이터 : 캐싱이 됨.
    // 최적화에 많이 사용됨. 
    // 값을 얻어내는 용도 : Getter
    // 계산된 부분에 Setter 적용
    // reversedMessage(){
    //   return this.msg.split('').reverse().join('')
    // }

    reversedMessage: {
      get(){
        return this.msg.split('').reverse().join('')
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
  }

}
</script>