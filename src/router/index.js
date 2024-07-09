import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import News from '../views/NewsView.vue'
import Profile from '../views/ProfileView.vue'
import Edit from '../views/EditProfile.vue'
import CharacterView from '@/views/CharacterView.vue'
import RegionsView from '@/views/RegionsView.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView
    },
    {
      path: '/region',
      name: 'region',
      component: RegionsView
    },
  ]
})

export default router
