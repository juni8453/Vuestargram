import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from './router/Router.js'
import Store from './json/store.js'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

app.use(Router).use(Store).mount('#app')
