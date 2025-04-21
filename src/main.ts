import './assets/main.css'
import 'virtual:uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from './components'

createApp(App)
  .use(globalComponents)
  .mount('#app')
