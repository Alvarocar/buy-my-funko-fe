import { createApp } from 'vue'
import App from '@/App.vue'
import Router from '@/router'
import Store from '@/store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


createApp(App)
  .use(Router)
  .use(Store)
  .use(ElementPlus)
  .mount('#app')
