<template>
  <div class="home">
    <v-container >
      <v-row>
        <v-col cols="4">
          <h2>Login</h2>
          <v-form>
            <v-text-field v-model="email" label="Email" required> </v-text-field>
            <v-text-field v-model="pass"  label="Contrasena" required></v-text-field>
          </v-form>
          <v-btn color="success" class="mr-4" @click="validar(email,pass)">acceder</v-btn>
        </v-col>
      </v-row>
      
    </v-container>
    
  </div>
</template>

<script>
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
    validar(email,pass){
        console.log(email);
        console.log(pass);
        return true;
        
    }
  },

}
</script>
