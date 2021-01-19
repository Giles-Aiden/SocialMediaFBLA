import {createRouter, createWebHistory} from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile.vue')
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'messages',
        component: () => import('@/views/Messages.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
