import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
        // Upgrade
        {
          name: 'Upgrade',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
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
      next({ name: 'Login' })
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
