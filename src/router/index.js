import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/masters',
    name: 'Masters',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "masters" */ '../views/Masters.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/sketches',
    name: 'Sketches',
    component: () => import(/* webpackChunkName: "sketches" */ '../views/Sketches.vue')
  }
  ,
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue')
  }
  ,
  {
    path: '/articles',
    name: 'Articles',
    component: () => import(/* webpackChunkName: "articles" */ '../views/Articles.vue')
  }
  ,
  {
    path: '/styles',
    name: 'Styles',
    component: () => import(/* webpackChunkName: "styles" */ '../views/Styles.vue')
  }
  ,
  {
    path: '/meanings',
    name: 'Meanings',
    component: () => import(/* webpackChunkName: "meanings" */ '../views/Meanings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
