<template>
  <div class="home">
    <v-container >
      <v-row>
        <v-col cols="4">
          <h2>Login</h2>
          <v-form @submit.prevent="login">
            <v-text-field v-model="email" label="Email" required> </v-text-field>
            <v-text-field v-model="pass"  label="Contrasena" required></v-text-field>
          </v-form>
          <v-btn color="success" class="mr-4" @click="login(email,pass)">acceder</v-btn>
        </v-col>
      </v-row>
      
    </v-container>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  components:{

  },
  data(){
    return{
      email:'',
      pass:'', 
    }
  },
  methods:{
    login(email,pass){
      console.log(email);
      let post ={
        "email": email,
        "password": pass,
      };
      axios.post('http://127.0.0.1:8000/api/v1/auth/login',post).then((result)=>{
        console.log(result)
      })
    } 
    
  },

}
</script>
