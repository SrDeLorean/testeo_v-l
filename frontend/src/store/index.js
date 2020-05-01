import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:'',
    permisos:'',
    email:'',
    pass:'', 
  },
  mutations: {
  },
  actions: {
    retrieveToken(context,credentials){
      axios.post('/home',{
        email: credentials.email,
        pass: credentials.pass,
      })
      .then(response =>{
        console.log(response)
      })
      .catch(error =>{
        console.log(error)
      })
    }
  },
  modules: {
  }
})
