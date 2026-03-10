import { createRouter, createWebHistory } from 'vue-router'
import { setTitle } from '@/router/guards/SetTitleGuard.mjs'
import { routes, handleHotUpdate  } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(),
  routes
})

if (import.meta.hot) { 
  handleHotUpdate(router) 
} 

router.beforeEach(setTitle)
