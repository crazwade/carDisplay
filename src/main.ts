import { createApp } from 'vue';
import './tailwindCSS.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus).use(router).mount('#app');
