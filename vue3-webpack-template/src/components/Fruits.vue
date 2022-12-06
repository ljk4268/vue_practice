<template>
  <section v-if="hasFruit">
    <h1>Fruits</h1>
    <ul>
      <li 
        v-for="fruit in fruits" 
        :key="fruit">
        {{ fruit }}
      </li>
    </ul>
  </section>
  <section>
    <h1>Reverse Fruits</h1>
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
    return {
      fruits: ['Apple','Banana','Cherry']
    }
  },
  // computed라는 옵션을 통해 기존의 데이터를 원하는 방향으로 수정을 해서 사용할 수 있다. 
  computed: {
    hasFruit(){
      return this.fruits.length > 0
    },
    reverseFruits(){
      return this.fruits.map(fruit => {
        //'Apple' => ['A','p','p','l','e']
        // => ['e','l','p','p','A'] = > 'elppA'
        // 위과정을 반복하고 리턴해줌.
        return fruit.split('').reverse().join('')
      })
    }
  }
}
</script>