import { createApp } from 'vue'
// import  VueChatScroll from 'vue-chat-scroll '
import App from './App.vue'
import router from './router/index'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router);
app.use(VueChatScroll);
app.mount('#app');