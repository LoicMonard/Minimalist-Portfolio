import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import Omega from '../components/Projects/Omega.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Omega',
      name: 'Omega',
      component: Omega
    }
  ]
})
