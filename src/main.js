import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'src/assets/styles/normalize.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

async function setApp() {
  const app = createApp(App);
  // 注册 store
  app.use(store);
  // 注册 router
  app.use(router);

  app.use(ElementPlus);

  app.mount('#app', true);
}

setApp();
