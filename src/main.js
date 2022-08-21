import { createApp } from 'vue'
import App from './App.vue'
import { usePlugins } from '@/plugins'
// import router from './router'
// import store from './store'
import 'ant-design-vue/dist/antd.css'
const app = createApp(App)
usePlugins(app)
app.mount('#app')

// createApp(App).use(store).use(router).mount('#app')
