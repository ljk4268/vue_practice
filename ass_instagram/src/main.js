import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App);


app.config.globalProperties.emitter = emitter;

app.use(router).mount('#app')
