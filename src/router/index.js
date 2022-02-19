import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import Tags from '../views/Tags.vue'
import Welcome from '../views/Welcome.vue'
import { auth } from '@/firebase/config'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) {
    return next({ name: 'Welcome' })
  }
  return next()
}

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser
  if (user) {
    return next({ name: 'Home' })
  }
  return next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/Create',
    name: 'Create',
    component: Create,
    beforeEnter: requireAuth
  },
  {
    path: '/tags/:id',
    name: 'Tags',
    component: Tags,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/Welcome',
    name: 'Welcome',
    component: Welcome,
    props: true,
    beforeEnter: requireNoAuth,
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
