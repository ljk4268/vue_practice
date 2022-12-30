import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // Hash모드 : 
  // https://google.com/#/search
  history: createWebHashHistory(),
  //pages
  // https://google.com/ 
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    // 일치시킬 수 있는 모든 경로를 NotFound컴포넌트로 연결
    {
      path: '/:notFound(.*)',
      component: NotFound
    },
  ]
})