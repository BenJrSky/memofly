<template>
  <div class="card-body met-pro-bg">
    <div class="met-profile">
        <div class="row">
            <div class="col-8 align-self-center mb-3 mb-lg-0">
                <div class="met-profile-main w-100">
                    <div class="col-4 met-profile-main-pic">
                        <img src="./../../../memofly/metrica/assets/images/users/user-4.jpg" alt="" class="rounded-circle">
                        <span class="fro-profile_main-pic-change">
                            <i class="fas fa-camera"></i>
                        </span>
                    </div>
                    <div class="col-8 met-profile_user-detail">
                        <h5 class="met-user-name">{{ company.azienda.nome }}</h5>                                                        
                        <p class="mb-0 met-user-name-post">di {{ company.nomeVisualizzato }}</p>
                    </div>
                </div>                                                
            </div>
            <div class="col-4">
                <ul class="list-unstyled personal-detail">
                  <li class="mt-2 row"><p class="col-4 weight-700 size-16 m-0 p-0"><i class="dripicons-phone mr-2 mt-1 text-info font-18"></i><b>Telefono </b> :</p> <p class="col-8 size-16 weight-400 m-0 p-0">{{ company.azienda.numeroTelefono }}</p></li>
                  <li class="mt-2 row"><p class="col-4 weight-700 size-16 m-0 p-0"><i class="dripicons-mail text-info font-18 mt-2 mr-2"></i><b>Email </b> :</p> <p class="col-8 size-16 weight-400 m-0 p-0">{{ company.email }}</p></li>
                  <li class="mt-2 row"><p class="col-4 weight-700 size-16 m-0 p-0"><i class="dripicons-location text-info font-18 mt-2 mr-2"></i><b>Indirizzo </b> :</p> <p class="col-8 size-16 weight-400 m-0 p-0">{{ company.azienda.indirizzo }}</p></li>
                </ul>
                <div class="button-list btn-social-icon">                                                
                    
                </div>
            </div>
        </div>
    </div>                                                                            
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETUser } from "../../memoFly-api/GETUser.js";

@Component({
  components: {

  },
})

export default class UserDetails extends Vue {

  public company: any = {};
  public test :any;

  data() {

    this.init();

    return {
      company: this.company,
      test: this.test,
    };
  }

  init() {
    this.company = [];

    GETUser()
      .then((response: any) => {

        if (response.status == 200) {
          this.company = response.data;
          console.log(JSON.stringify(this.company))
        } else {
          this.company = [];
        }

      })

  }
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
