import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './router/routes'
import { createPinia } from 'pinia'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
