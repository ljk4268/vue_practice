<template>
	<h2>게시글 목록</h2>
	<hr class="my-4" />
	<PostFilter v-model:title="params.title_like" v-model:limit="params._limit" />
	<hr class="my-4" />
	<AppGrid :items="posts">
		<template v-slot="{ item }">
			<PostItem
				:title="item.title"
				:contents="item.contents"
				:created-at="item.createdAt"
				@click="goPage(item.id)"
			></PostItem>
		</template>
	</AppGrid>
	<AppPagination
		:current-page="params._page"
		:page-count="pageCount"
		@page="page => (params._page = page)"
	/>

	<!-- Button trigger modal -->
	<button
		type="button"
		class="btn btn-primary"
		data-bs-toggle="modal"
		data-bs-target="#exampleModal"
	>
		Launch demo modal
	</button>

	<!-- Modal -->
	<div
		class="modal fade"
		id="exampleModal"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">...</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-bs-dismiss="modal"
					>
						Close
					</button>
					<button type="button" class="btn btn-primary">Save changes</button>
				</div>
			</div>
		</div>
	</div>

	<template v-if="posts && posts.length > 0">
		<hr class="my-5" />
		<AppCard>
			<PostDetailView :id="posts[0].id"></PostDetailView>
		</AppCard>
	</template>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppGrid from '@/components/AppGrid.vue';
import getPosts from '@/api/posts';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);
const params = ref({
	_sort: 'createdAt',
	_order: 'desc',
	_page: 1,
	_limit: 3,
	title_like: '',
});
// pagination
const totalCount = ref(0);
const pageCount = computed(() =>
	Math.ceil(totalCount.value / params.value._limit),
);

const fetchPosts = async () => {
	try {
		const { data, headers } = await getPosts(params.value);
		posts.value = data;
		totalCount.value = headers['x-total-count'];
	} catch (err) {
		console.log(err);
	}
};
// fetchPosts();
watchEffect(fetchPosts);

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
