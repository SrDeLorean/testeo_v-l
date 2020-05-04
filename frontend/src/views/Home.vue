<template>
  <div class="home">
    <v-container >
      <v-row>
        <v-col cols="4">
          <h2>Login</h2>
          <v-form >
            <v-text-field v-model="lista.email" label="Email" required> </v-text-field>
            <v-text-field v-model="lista.pass"  label="Contrasena" required></v-text-field>
          </v-form>
          <v-btn color="success" class="mr-4" @click="login(lista)">acceder</v-btn>
        </v-col>
      </v-row>
      
    </v-container>
    
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
  name: 'Home',
  components:{

  },
  data(){
    return{
      lista: [{email:''},{pass:''}]
    }
  },
  methods:{
    ...mapMutations(['login']),
  },

}
</script>
