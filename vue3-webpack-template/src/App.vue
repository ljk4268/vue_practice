<template>
  <!-- <button @click="handler('hi',$event)">
    Click 1
  </button>
  <button @click="handler('what', $event)">
    Click 2
  </button> -->
  <button @click="handlerA(),handlerB()">
    click
  </button>
</template>

<script>

export default {
  methods: {
    // handler(msg, event){
    //   console.log(msg)
    //   console.log(event)
    // }
    handlerA(){
      console.log('A')
    },
    handlerB(){
      console.log('B')
    }
  }
}
</script>

