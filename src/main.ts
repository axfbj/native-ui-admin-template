import { createApp } from 'vue'
import App from './App.vue'
import nativeUI from './utils/native-ui'
console.log(222)

createApp(App).use(nativeUI).mount('#app')
