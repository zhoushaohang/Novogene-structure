import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
import router from './router';
import axios from 'axios';
import * as echarts from "echarts";

const app = createApp(App);
app.use(Antd)
app.use(router)
app.use(echarts)
app.mount('#app')
app.config.globalProperties.$http = axios
