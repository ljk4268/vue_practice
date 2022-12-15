import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

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
      path: '/movie',
      component: Movie
    },
    // https://google.com/about 
    {
      path: '/about',
      component: About
    }
  ]
})