import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import { useCarStore } from './stores/car'
app.config.globalProperties.$carStore = useCarStore()

app.mount('#app')

