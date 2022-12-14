import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './router/routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

createApp(App)
  .use(router)
  .mount('#app')
