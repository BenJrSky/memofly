<template>
    <div class="w-100 account-body accountbg">
        <div class="container">
            <div class="row vh-100 ">
                <div class="col-12 align-self-center">
                    <div class="auth-page mt-5">
                        <div class="card auth-card shadow-lg">
                            <div class="card-body p-5">
 
                                    <div class="text-center auth-logo-text">
                                      <img src="./../../public/metrica/assets/images/logo-memofly.png" height="55" alt="logo" class="auth-logo">
                                        <h4 class="mt-0 mb-3 mt-3">Benvenuto!</h4>
                                        <p class="text-muted mb-0">Inserisci le credenziali per contimuare</p>  
                                    </div> <!--end auth-logo-text-->  
    
                                    
                                    <form class="form-horizontal auth-form my-4" action="index.html">
            
                                        <div class="form-group">
                                            <label for="username">Username</label>
                                            <div class="input-group mb-3">
                                                <span class="auth-form-icon">
                                                    <i class="dripicons-user"></i> 
                                                </span>                                                                                                              
                                                <input type="text" class="form-control" placeholder="Inserisci la tua email" v-model="username">
                                            </div>                                    
                                        </div><!--end form-group--> 
            
                                        <div class="form-group">
                                            <label for="userpassword">Password</label>                                            
                                            <div class="input-group mb-3"> 
                                                <span class="auth-form-icon">
                                                    <i class="dripicons-lock"></i> 
                                                </span>                                                       
                                                <input type="password" class="form-control" placeholder="Inserisci la tua password" v-model="password">
                                            </div>                               
                                        </div><!--end form-group--> 
            
                                        <div class="form-group row mt-4">
                                            <div class="col-sm-6">
                                                <div class="custom-control custom-switch switch-success">
                                                    <input type="checkbox" class="custom-control-input" id="customSwitchSuccess">
                                                    <label class="custom-control-label text-muted" for="customSwitchSuccess">Ricordami</label>
                                                </div>
                                            </div><!--end col--> 
                                            <div class="col-sm-6 text-right">
                                                <a href="auth-recover-pw.html" class="text-muted font-13"><i class="dripicons-lock"></i> Password dimenticata?</a>                                    
                                            </div><!--end col--> 
                                        </div><!--end form-group--> 
            
                                        <div class="form-group mb-0 row">
                                            <div class="col-12 mt-2">
                                                <button class="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" type="button" v-on:click="login()">Log In <i class="fas fa-sign-in-alt ml-1"></i></button>
                                            </div><!--end col--> 
                                        </div> <!--end form-group-->                           
                                    </form><!--end form-->
                                </div><!--end /div-->
                                
                                <div class="m-3 text-center text-muted">
                                    <p class="">Non hai un account?  <a href="../authentication/auth-register.html" class="text-primary ml-2">Registrati</a></p>
                                </div>
                            </div><!--end card-body-->
                        </div><!--end card-->

                    </div><!--end auth-page-->
                </div><!--end col-->           
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETLogin } from './../memoFly-api/GETLogin';

@Component({
  components: {

  },
})


export default class Login extends Vue {


    public username :any;
    public password :any;


    data(){
      return { 
        username: this.username,
        password: this.password,
        
      }
    }

    login(){
        GETLogin(this.username, this.password)
            .then(()=>{
                this.username = "";
                this.password = "";
            });
    }


}







</script>
