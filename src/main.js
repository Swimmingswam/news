import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config.js'

Vue.use(VueRouter);



const router = new VueRouter({ 
	routes:routerConfig,
	mode:"history"
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
