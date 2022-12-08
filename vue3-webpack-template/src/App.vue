<template>
  <Mybtn>Banana</Mybtn>
  <Mybtn 
    :color="color" >
    <span style="color: red;">Banana</span>
  </Mybtn>
  <Mybtn 
    large 
    color="royalblue" >
    Cherry
  </Mybtn>

  <button>Banana</button>
</template>

<script>
import Mybtn from './components/Mybtn.vue'

export default {
  components: {
    Mybtn
  },
  data(){
    return{
      color: '#000'
    }
  }
}

</script>


