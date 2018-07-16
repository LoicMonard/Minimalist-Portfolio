import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Projects from '../components/Projects.vue'
import Skills from '../components/Skills.vue'
import Omega from '../components/Projects/Omega.vue'
import Javascript from '../components/Technologies/Javascript.vue'
import Autonomie from '../components/Technologies/Autonomie.vue'

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
      path: '/Skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/Omega',
      name: 'Omega',
      component: Omega
    },
    {
      path: '/Javascript',
      name: 'Javascript',
      component: Javascript
    },
    {
      path: '/Autonomie',
      name: 'Autonomie',
      component: Autonomie
    }
  ]
})
