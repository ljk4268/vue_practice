<template>
	<div>About view</div>
	<button class="btn btn-primary" @click="$router.push('/')">
		Home으로 이동
	</button>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" scoped></style>
