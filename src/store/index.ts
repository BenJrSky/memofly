import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user:null,
    password:null,
    status:false
  },
  mutations: {
    changeUser(state,user){
        state.user = user
    },
    changePassword(state,password){
      state.password = password
    },
    changeStatus(state,status){
      state.status = status
    }
  },
  actions: {
  },
  modules: {
    
  }
})
