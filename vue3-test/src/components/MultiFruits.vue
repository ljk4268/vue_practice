<template>
  <section v-if="hasFruit">
    <h1>Fruites</h1>
    <ul>
      <li
        v-for="fruit in fruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
  <section>
    <h1>reverse fruits</h1>
    <ul>
      <li
        v-for="fruit in reverseFruits"
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  data(){
    return{
      fruits: [
        'apple', 'banana', 'cherry'
      ]
    }
  },
  computed: {
    hasFruit(){
      return this.fruits.length > 0
    },
    reverseFruits(){
      return this.fruits.map(fruit =>{
        return fruit.split('').reverse().join('')
      })
    }
  }
}
</script>

<style scoped lang="scss">
  
</style> 