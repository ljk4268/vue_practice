<template>
	<AppCard>
		<h5 class="card-title">{{ title }}</h5>
		<p class="card-text">
			{{ contents }}
		</p>
		<p class="text-muted">{{ createdAt }}</p>
	</AppCard>
</template>

<script setup>
import AppCard from '../AppCard.vue';
defineProps({
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		required: true,
	},
	createdAt: {
		type: [String, Date, Number],
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>
