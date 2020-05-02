import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'

export default new Vuex.Store({
  state: {
    status:''

  },
  mutations: {
    login(state,lista){
      console.log(lista.email);
      console.log(lista.pass);
      let post ={
        "email": lista.email,
        "password": lista.pass,
      };
      axios.post('http://127.0.0.1:8000/api/v1/auth/login',post).then((result)=>{
        //console.log(result)
        console.log(result.statusText);
        state.status = result.statusText; 
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
