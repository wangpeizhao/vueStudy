// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './routes'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './vuex'

Vue.use(VueRouter)
Vue.use(ElementUI)
// Vue.use(Vuex)

Vue.config.productionTip = false

const router = new VueRouter(
	routes
)

router.beforeEach((to, from, next) => {
	// to.path
	// from.path
	next()
})

// const store = new Vuex.Store({
//   state: {
//     roleSelected: [],
//     roleParentId: [],
//     roleNode : []
//   },
//   mutations: {
//     roleSelectedAdd (state,id) {
//     	if(state.roleSelected.length==0 && typeof(id) == 'object'){
//     		state.roleSelected = id;
//     		return true;
//     	}
//       state.roleSelected.push(id);
//     },
//     roleSelectedDel (state,id) {
//   		let index = state.roleSelected.indexOf(id);
//   		if(index > -1){
//   			state.roleSelected.splice(index, 1);
//   		}
//     },
//     roleParentId (state,pIds){
//     	state.roleParentId = pIds;
//     },
//     roleNodeAdd (state,id) {
//       if(state.roleNode.length==0 && typeof(id) == 'object'){
//         state.roleNode = id;
//         return true;
//       }
//       state.roleNode.push(id);
//     },
//     roleNodeDel (state,id) {
//       let index = state.roleNode.indexOf(id);
//       if(index > -1){
//         state.roleNode.splice(index, 1);
//       }
//     },
//     roleNodeEmpty(state){
//       state.roleNode = [];
//     }
//   },
//   actions: {
//     roleSelectedAdd (context,id) {
//       context.commit('roleSelectedAdd',id)
//     },
//     roleSelectedDel (context,id) {
//       context.commit('roleSelectedDel',id)
//     },
//     roleParentId (context,id) {
//       context.commit('roleParentId',id)
//     },
//     roleNodeAdd (context,id) {
//       context.commit('roleNodeAdd',id)
//     },
//     roleNodeDel (context,id) {
//       context.commit('roleNodeDel',id)
//     },
//     roleNodeEmpty (context) {
//       context.commit('roleNodeEmpty')
//     },
//   }
// })

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render:h => h(App)
}).$mount('#app')
