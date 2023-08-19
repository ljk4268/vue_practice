import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import PostCreateView from '@/views/posts/PostCreateView.vue'
import PostDetailView from '@/views/posts/PostDetailView.vue'
import PostListView from '@/views/posts/PostListView.vue'
import PostEditView from '@/views/posts/PostEditView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NestedView from '@/views/nested/NestedView.vue'
import NestedOne from '@/views/nested/NestedOne.vue'
import NestedTwo from '@/views/nested/NestedTwo.vue'
import NestedHome from '@/views/nested/NestedHome.vue'
import MyPage from '@/views/MyPage.vue'

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
    path: '/my',
    name: 'MyPage',
    component: MyPage,
    beforeEnter: (to, from) => {
      console.log(to.query)
    },
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView,
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
  // 여러개의 Url을 하나의 페이지에 맵핑하고 싶을 때 사용하는 표현 방식
  // :뒤의 명칭은 params가 됨
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView,
    // >> :id 값이 해당 컴포넌트의 props로 전달된다.
    props: true,
    // props: route => ({
    //   id: parseInt(route.params.id),
    // }),
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHome,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOne,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwo,
      },
    ],
  },
]

// 라우트 정보를 담고 있는 라우터객체
const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

// router.beforeEach((to, from) => {
//   // to: 이동할 페이지
//   // from: 이동하기 전 페이지
//   console.log('to: ', to)
//   console.log('from: ', from)

//   // 이동할 페이지가 MyPage라면 Home페이지로 이동해라!
//   if (to.name === 'MyPage') {
//     return { name: 'Home' }
//   }
// })
export default router
