<template>
	<div class="row g-3">
		<div :class="colClass" v-for="(item, index) in items" :key="index">
			<slot :item="item" :index="index"></slot>
		</div>
	</div>
</template>

<script setup>
defineProps({
	items: {
		type: Array,
		required: true,
	},
	colClass: {
		type: String,
		default: 'col-4',
	},
});
</script>

<style lang="scss" scoped></style>
