import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomeBranch.vue'
import Canvas from '@/views/BonsaiCanvas.vue'

const routes = [
    { path: '/', name: 'home_branch', component: Home },
    { path: '/about', name: 'about_branch', component: () => import(/* webpackChunkName: "dashboard" */ '../components/AboutBranch.vue'), },
    { path: '/canvas', name: 'canvas', component: Canvas },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
