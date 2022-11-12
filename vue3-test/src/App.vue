<template>
  <h1 :[attr]="'actiive'">
    {{ msg }}
  </h1>
</template>

<script>
export default {
  data(){
    return {
      msg: 'active',
      attr: 'class',
      event: 'click'
    }
  },
  methods: {
    add(){
      this.msg += '!'
    }
  }
}
</script>

<style lang="scss">
  .active{
    color: royalblue;
    font-size: 100px;
  }
</style>