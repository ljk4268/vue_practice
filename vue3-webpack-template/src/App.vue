<template>
  <button @click="message = 'Good?'" >
    Click!
  </button>
  <h1>App: {{ message }}</h1>
  <Parent />
</template>

<script>
import Parent from './components/Parent.vue'
import { computed } from 'vue'

export default {
  components: {
    Parent
  },
  data(){
    return {
      message: 'Hello wolrd!'
    }
  },
  provide(){
    return {
      msg: computed(() => {
        return this.message
      })
    }
  }
}

</script>


