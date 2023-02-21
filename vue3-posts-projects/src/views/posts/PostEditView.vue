<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:contents="form.contents"
			@submit.prevent="edit"
		>
			<template #actions>
				<button
					type="button"
					class="btn btn-outline-danger"
					@click="goDetailPage"
				>
					취소
				</button>
				<button class="btn btn-primary">수정</button>
			</template>
		</PostForm>
		<AppAlert :items="alerts" />
	</div>
</template>

<script setup>
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
	title: null,
	contents: null,
});

const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		setForm(data);
	} catch (err) {
		console.log(err);
		vAlert('네트워크 오류');
	}
};
const setForm = ({ title, contents }) => {
	form.value.title = title;
	form.value.contents = contents;
};
fetchPost();

const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		// router.push({ name: 'PostDetail', params: { id } });
		vAlert('수정이 완료되었습니다.', 'success');
	} catch (err) {
		console.error(err);
	}
};

const goDetailPage = () => {
	router.push({
		name: 'PostDetail',
		params: { id },
	});
};

const alerts = ref([]);
const vAlert = (message, type = 'error') => {
	alerts.value.push({ message, type });
	setTimeout(() => {
		alerts.value.shift();
	}, 2000);
};
</script>

<style lang="scss" scoped></style>
