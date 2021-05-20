import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
  ,
  {
    path: '/masterLK',
    name: 'MasterLK',
    redirect: { name: 'MyProfile' },
    component: () => import(/* webpackChunkName: "masterLK" */ '../views/MasterLK.vue'),
    children: [
      {
        name: 'MyProfile',
        path: 'my-profile',
        component: () => import(/* webpackChunkName: "masterLK_my-profile" */ '../views/MyProfile.vue'),
        meta: { scrollToTop: true }
      },
      {
        path: 'messages',
        component: () => import(/* webpackChunkName: "masterLK_my-profile" */ '../views/Messages.vue')
      },
      {
        // name: 'MyProfile',
        path: 'rating',
        redirect: { name: 'MyRating' },
        component: () => import(/* webpackChunkName: "masterLK_rating" */ '../views/Rating.vue'),
        children: [
          {
            name: 'MyRating',
            path: 'my-rating',
            component: () => import(/* webpackChunkName: "masterLK_my_rating" */ '../views/My-Rating/MyRating.vue'),
          },
          {
            name: 'MyCharts',
            path: 'my-charts',
            component: () => import(/* webpackChunkName: "masterLK_my_charts" */ '../views/My-Rating/MyCharts.vue'),
          },
          {
            name: 'MyReposts',
            path: 'my-reposts',
            component: () => import(/* webpackChunkName: "masterLK_my_reposts" */ '../views/My-Rating/MyReposts.vue'),
          },
        ]

      },
      {
        path: 'favorites',
        redirect: { name: 'FavPhoto' },
        component: () => import(/* webpackChunkName: "Favorites" */ '../views/Favorites.vue'),
        children: [
          {
            name: 'FavPhoto',
            path: 'photo',
            component: () => import(/* webpackChunkName: "fav-photo" */ '../views/Favorites/Photo.vue'),
          },
          {
            name: 'FavSketches',
            path: 'sketches',
            component: () => import(/* webpackChunkName: "fav-sketches" */ '../views/Favorites/Sketches.vue'),
          },
          {
            name: 'FavAds',
            path: 'ads',
            component: () => import(/* webpackChunkName: "fav-ads" */ '../views/Favorites/Ads.vue'),
          },
          {
            name: 'FavArticles',
            path: 'articles',
            component: () => import(/* webpackChunkName: "fav-articles" */ '../views/Favorites/Articles.vue'),
          },
          {
            name: 'FavMasters',
            path: 'masters',
            component: () => import(/* webpackChunkName: "fav-masters" */ '../views/Favorites/Masters.vue'),
          },
        ]
      },
      {
        path: 'balance-sub',
        redirect: { name: 'MyBalance' },
        component: () => import(/* webpackChunkName: "balance" */ '../views/Balance.vue'),
        children: [
          {
            name: 'MyBalance',
            path: 'my-balance',
            component: () => import(/* webpackChunkName: "my-balance" */ '../views/Balance/MyBalance.vue'),
          },
          {
            name: 'MySubscribe',
            path: 'my-subscribe',
            component: () => import(/* webpackChunkName: "my-subscribe" */ '../views/Balance/MySubscribe.vue'),
          },
        ]
      },
      {
        path: 'feedbacks',
        redirect: { name: 'AllFeedbacks' },
        component: () => import(/* webpackChunkName: "feedbacks" */ '../views/Feedbacks.vue'),
        children: [
          {
            name: 'AllFeedbacks',
            path: 'all-feedbacks',
            component: () => import(/* webpackChunkName: "all-feedbacks" */ '../views/Feedbacks/AllFeedbacks.vue'),
          }
        ]
      },
    ]
  },
  {
    path: '/master-01/feedbacks/create-feedback',
    name: 'Create-Feedback',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Create-Feedback" */ '../views/Create-Feedback.vue'),
  },
  {
    path: '/create-feedback/success',
    name: 'Feedback-Success',
    component: () => import(/* webpackChunkName: "Success" */ '../views/Create-Feedback/Success.vue'),
  },
  {
    path: '/create-feedback/fail',
    name: 'Feedback-Fail',
    component: () => import(/* webpackChunkName: "Fail" */ '../views/Create-Feedback/Fail.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return { x: 0, y: 0 };
    }
    
  }
})

export default router
