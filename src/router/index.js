import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'

// bam added
import News from '../views/NewsView.vue'
import Profile from '../views/ProfileView.vue'
import Edit from '../views/EditProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home'
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
  ]
})

export default router
