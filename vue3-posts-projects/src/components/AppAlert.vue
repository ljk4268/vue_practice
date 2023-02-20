<template>
	<div class="app-alert">
		<TransitionGroup name="slide">
			<div
				v-for="({ type, message }, index) in items"
				:key="index"
				class="alert"
				:class="typeStyle(type)"
				role="alert"
			>
				{{ message }}
			</div>
		</TransitionGroup>
	</div>
</template>

<script setup>
defineProps({
	items: Array,
});

const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-success');
</script>

<style scoped>
.app-alert {
	position: fixed;
	top: 10px;
	right: 10px;
}
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}

.slide-enter-active,
.slide-leave-active {
	transition: all 0.5s ease;
}
.slide-leave-from,
.slide-enter-to {
	opacity: 1;
	transform: translateY(0px);
}
</style>
