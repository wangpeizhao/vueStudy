import Vue from 'vue'
import Vuex from 'vuex'
import {state,mutations,actions} from './role'

Vue.use(Vuex)

export default new Vuex.Store({
  state : state,
  mutations : mutations,
  actions : actions
})