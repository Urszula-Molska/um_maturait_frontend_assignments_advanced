import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'
import './index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// const queryClient = createVueQueryClient()

app.use(router)
app.use(VueQueryPlugin)

app.mount('#app')
