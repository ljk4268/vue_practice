<template>

  <div 
    :class="`${filter} filter-item`" 
    :style="`background-image:url(${uploadImgUrl})`"
    @click="clickFilter"
  >
    <span class="filter-name">{{filter}}</span>
  </div>

</template>

<script>


export default {
  name: 'filterbox',
  props: {
    uploadImgUrl: String,
    filter: String
  },
  methods: {
    clickFilter(){
      this.emitter.emit('clickFilter' , this.filter)
    }
  }

}

</script>

<style>

.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
.filter-name {
  color: black;
}

</style>