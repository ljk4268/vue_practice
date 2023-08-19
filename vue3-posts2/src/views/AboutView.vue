<template>
  <div>
    <h2>AboutView</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">
      Home으로 이동
    </button>
    <h2>Store</h2>
    <!-- store의 state -->
    <p>counter: {{ counter }}</p>
    <!-- store의 getter -->
    <p>doubleCount: {{ doubleCount }}</p>
    <!-- store의 actions -->
    <button @click="increment">Click!!</button>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const route = useRoute();
// store는 reactive로 래핑된 객체다.
// 구조분해할당하면 반응성을 잃게 됨
const store = useCounterStore();
// 구조분해할당하고 싶다면?
const { counter, doubleCount } = storeToRefs(store);
const { increment } = store;
counter.value = 100;
</script>

<style lang="scss" scoped></style>
