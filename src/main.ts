import { createApp } from 'vue'
import App from './App.vue'
import nativeUI from './utils/native-ui'

createApp(App).use(nativeUI).mount('#app')
