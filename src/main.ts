/*
 * @Description:
 * @Author: xieyadong
 * @Date: 2024-01-17 09:54:41
 * @LastEditTime: 2024-01-18 14:13:47
 * @LastEditors: xieyadong
 */
import '@/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
