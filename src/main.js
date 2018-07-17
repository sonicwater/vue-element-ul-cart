import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import routers from './router/router'
import store from './store/'
import App from './App'

Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})