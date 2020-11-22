import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Education from '../views/Education.vue'
import Experience from '../views/Experience.vue'
//import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
]

const router = new VueRouter({
  routes
})

export default router
