import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SeedBuild from './components/SeedBuild.vue'

const app = createApp(App)

app.component('seed-build', SeedBuild)

app.use(router)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
