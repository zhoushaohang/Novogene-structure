import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import axios from 'axios';

const app = createApp(App);
app.use(Antd)
app.use(router)
app.mount('#app')
app.config.globalProperties.$http = axios
