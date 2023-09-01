import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: { title: 'Main' },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: { title: 'Home' },
        component: () => import('./views/Home.vue')
      },
      {
        path: '/casino',
        name: 'Casino',
        meta: { title: 'Casino' },
        component: () => import('./views/Casino.vue')
      },
      {
        path: '/deliver',
        name: 'Deliver',
        meta: { title: 'Deliver' },
        component: () => import('./views/Deliver.vue')
      },
      // {
      //   path: '/deposit',
      //   name: 'Deposit',
      //   meta: { title: 'Deposit' },
      //   component: () => import('./views/Deposit.vue')
      // },
      // {
      //   path: '/withdraw',
      //   name: 'Withdraw',
      //   meta: { title: 'Withdraw' },
      //   component: () => import('./views/Withdraw.vue')
      // },
      {
        path: '/register',
        name: 'Register',
        meta: { title: 'Register' },
        component: () => import('./views/Register.vue')
      },
      {
        path: '/menu',
        meta: { title: 'Menu' },
        name: 'Menu',
        component: () => import('./views/Menu.vue'),
        redirect: '/deposit',
        children: [
          {
            path: '/menu/deposit',
            name: 'Deposit',
            meta: { title: 'Deposit' },
            component: () => import('./views/Deposit.vue')
          },
          {
            path: '/menu/withdraw',
            name: 'Withdraw',
            meta: { title: 'Withdraw' },
            component: () => import('./views/Withdraw.vue')
          },
          {
            path: '/menu/member',
            meta: { title: 'Member' },
            name: 'Member',
            component: () => import('./views/Member.vue')
          },
          {
            path: '/menu/about',
            meta: { title: 'About' },
            name: 'About',
            component: () => import('./views/About.vue')
          },
        ]
      },
      // {
      //   path: '/member',
      //   meta: { title: 'Member' },
      //   name:'Member',
      //   component: () => import('./views/Member.vue')
      // },
    ]

  },
  {
    path: '/m',
    name: 'Mobile',
    meta: { title: 'Mobile' },
    component: () => import('./views/Mobile/Mobile.vue'),
    redirect: '/m/home',
    children:[
      {
        path: '/m/home',
        name: 'MobileHome',
        meta: { title: 'MobileHome' },
        component: () => import('./views/Mobile/mHome.vue'),
      }
    ]
  },
  {
    path: '/m/login',
    name: 'Mobile Login',
    meta: { title: 'Mobile Login' },
    component: () => import('./views/Mobile/mLogin.vue')
  },
  {
    path: '/m/register',
    name: 'Mobile Register',
    meta: { title: 'Mobile Register' },
    component: () => import('./views/Mobile/mRegister.vue')
  },

  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router