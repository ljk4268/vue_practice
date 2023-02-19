<template>
	<h2>게시글 목록</h2>
	<hr class="my-4" />
	<div class="row g-3">
		<div class="col-4" v-for="post in posts" :key="post.id">
			<PostItem
				:title="post.title"
				:contents="post.contents"
				:created-at="post.createdAt"
				@click="goPage(post.id)"
			></PostItem>
		</div>
	</div>
	<hr class="my-4" />
	<AppCard>
		<PostDetailView :id="1"></PostDetailView>
	</AppCard>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';

import getPosts from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
	posts.value = getPosts();
};
fetchPosts();

const goPage = id => {
	// router.push(`/posts/${id}`);
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};
</script>

<style lang="scss" scoped></style>
