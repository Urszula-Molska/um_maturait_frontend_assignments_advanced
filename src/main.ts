import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import { store, key } from './store'
import './index.css'

import App from './App.vue'
import router from './router'
// const pinia = createPinia()
const app = createApp(App)

// app.use(pinia)
app.use(router)
app.use(store, key)

app.mount('#app')
