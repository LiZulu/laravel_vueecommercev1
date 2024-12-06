import { createApp } from 'vue'
import './assets/output.css'
import './index.css'
import store from './store'
import router from './router'

import App from './App.vue'

const app = createApp(App);


createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
