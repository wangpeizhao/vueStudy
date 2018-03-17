// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false

const router = new VueRouter(
	routes
)

router.beforeEach((to, from, next) => {
	// to.path
	// from.path
	next()
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render:h => h(App)
}).$mount('#app')
