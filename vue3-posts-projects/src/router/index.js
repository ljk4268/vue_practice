import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateViewVue from '@/views/posts/PostCreateView.vue';
import PostListViewVue from '@/views/posts/PostListView.vue';
import PostEditViewVue from '@/views/posts/PostEditView.vue';
import PostDetailViewVue from '@/views/posts/PostDetailView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHome from '@/views/nested/NestedHome.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListViewVue,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateViewVue,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailViewVue,
		props: true,
		// props: route => ({ id: parseInt(route.params.id) }),
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditViewVue,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/nested',
		name: 'NestedView',
		component: NestedView,
		children: [
			{
				path: '',
				name: 'NestedHome',
				component: NestedHome,
			},
			{
				path: 'one',
				name: 'NestedOneView',
				component: NestedOneView,
			},
			{
				path: 'two',
				name: 'NestedTwoView',
				component: NestedTwoView,
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
