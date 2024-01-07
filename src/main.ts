import { createApp } from 'vue'
import { store, key } from './store'
import './index.css'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount('#app')
