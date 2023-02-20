<template>
	<h2>게시글 등록</h2>
	<hr class="my-4" />
	<PostForm
		v-model:title="form.title"
		v-model:contents="form.contents"
		@submit.prevent="save"
	>
		<template #actions>
			<button type="button" class="btn btn-outline-dark" @click="goListPage">
				목록
			</button>
			<button class="btn btn-primary">저장</button>
		</template>
	</PostForm>
</template>

<script setup>
import { createPost } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';

const router = useRouter();
const form = ref({
	title: null,
	contents: null,
});

const save = () => {
	try {
		createPost({
			...form.value,
			createdAt: Date.now(),
		});
		router.push({ name: 'PostList' });
	} catch (err) {
		console.log(err);
	}
};
const goListPage = () => {
	router.push({
		name: 'PostList',
	});
};
</script>

<style lang="scss" scoped></style>
