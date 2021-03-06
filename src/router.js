import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Landing',
      path: '/Landing',
      component: () => import('@/views/dashboard/pages/Landing'),
      meta: {
        rule: 'guest',
        requiresAuth: true,
      },
    },
    {
      name: 'News',
      path: '/News',
      component: () => import('@/views/dashboard/pages/News'),
      meta: {
        rule: 'guest',
        requiresAuth: true,
      },
    },
    {
      name: 'NewsContent',
      path: '/NewsContent',
      component: () => import('@/views/dashboard/pages/NewsContent'),
      meta: {
        rule: 'guest',
        requiresAuth: true,
      },
    },
    {
      name: 'Login',
      path: '/Login',
      component: () => import('@/views/dashboard/pages/Login'),
      meta: {
        rule: 'guest',
        requiresAuth: true,
      },
    },
    {
      name: 'News',
      path: '/News',
      component: () => import('@/views/dashboard/pages/News'),
      meta: {
        rule: 'guest',
      },
    },
    {
      name: 'NewsContent',
      path: '/NewsContent',
      component: () => import('@/views/dashboard/pages/NewsContent'),
      meta: {
        rule: 'guest',
      },
    },
    {
      path: '',
      component: () => import('@/views/dashboard/Index'),
      children: [
        {
          path: '/',
          redirect: '/Dashboard',
        },
        // Dashboard
        {
          name: 'Dashboard',
          path: '/Dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
          meta: {
            rule: 'admin',
            requiresAdmin: true,
          },
        },
        // Pages
        {
          name: 'Kandidat',
          path: 'pages/kandidat',
          component: () => import('@/views/dashboard/pages/Kandidat'),
          meta: {
            rule: 'admin',
            requiresAdmin: true,
          },
        },
        {
          name: 'Pengumuman',
          path: 'components/pengumuman',
          component: () => import('@/views/dashboard/component/Pengumuman'),
        },
        {
          name: 'Votes',
          path: 'components/votes',
          component: () => import('@/views/dashboard/component/Votes'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAdmin) {
    if (store.getters.isLogedIn) {
      next()
    } else {
      localStorage.removeItem('token')
      next({ name: 'Landing' })
    }
  } else if (to.meta.requiresAuth) {
    if (store.getters.isLogedIn) {
      console.log('loged in already')
      next({
        name: 'Dashboard',
      })
    } else {
      next({})
    }
  } else {
    next()
  }
})

export default router
