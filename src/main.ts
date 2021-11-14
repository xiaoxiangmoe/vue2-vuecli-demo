import VueCompositionAPI, { createApp, h } from '@vue/composition-api';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

createApp({
  router,
  render: () => h(App),
}).mount('#app');
