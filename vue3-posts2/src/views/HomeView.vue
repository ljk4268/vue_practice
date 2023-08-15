<template>
  <div>
    <h2>HomeView</h2>
    <p>{{ $route.path }}</p>
    <p>컴포넌트 이름은: {{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};
</script>

<style lang="scss" scoped></style>
