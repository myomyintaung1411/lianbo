import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './routes.js'
import store from './store'
import { createRouter, createWebHistory } from 'vue-router'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

//prompt use for 
import { message } from './utils/prompt'

const app = createApp(App)

/* Default title tag */
const defaultDocumentTitle = '联博娱乐'

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})

app.config.globalProperties.$message = message;
app.use(router)
app.use(store)
app.use(Vue3Marquee)
app.mount('#app')
