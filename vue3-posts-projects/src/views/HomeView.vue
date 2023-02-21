<template>
	<div>
		<div>Home view</div>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
		<hr class="my-4" />
		<AppGrid :items="items" v-slot="{ item }">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
		<hr class="my-4" />
		<h2>{{ $person.name }}</h2>
		<button class="btn btn-primary" @click="person.say">click person</button>
	</div>
</template>

<script>
export default {
	created() {
		// console.log('여기', this.$person.say());
	},
};
</script>

<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};
const items = ref(['사과', '딸기', '포도', '바나나']);

const person = inject('person');
</script>

<style lang="scss" scoped></style>
