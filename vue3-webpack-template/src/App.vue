<template>
  <button @click="handler">
    Click me!
  </button>
  <h1 v-show="isShow">
    Hello?!
  </h1>
  <!-- isShow:true이면 보이고 -->
  <!-- isShow:false면 안보인다 -->
  <!-- toggle내용 -->
  <!-- <h1 v-if="isShow">
    Hello?!
  </h1>
  <h1 v-else-if="count > 3">
    Count > 3
  </h1>
  <h1 v-else>
    Good!
  </h1> -->
  <!-- <template v-if="isShow">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template> -->
  
</template>

<script>
export default {
  data(){
    return {
      isShow: false,
      count: 0
    }
  },
  methods: {
    handler(){
      this.isShow = !this.isShow
      this.count += 1
    }
  }
}
</script>

