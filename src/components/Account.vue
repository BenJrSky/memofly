<template>
  <div class="row">
    <div class="col-12">
        <div class="card">
          <div class="card-body row">
            <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <p class="font-poppins weight-500 size-14">Nome</p>
                    <input type="text" class="form-control font-poppins weight-400 size-14" v-model="user.nome" placeholder="Nome">
                    <small class="form-text text-muted font-poppins weight-300 size-12"></small>
                </div>
                <div class="form-group">
                    <p class="font-poppins weight-500 size-14">Cognome</p>
                    <input type="text" class="form-control font-poppins weight-400 size-14" v-model="user.cognome" placeholder="Cognome">
                    <small class="form-text text-muted font-poppins weight-300 size-12"></small>
                </div>
                <div class="form-group">
                    <p class="font-poppins weight-500 size-14">Nome visualizzato</p>
                    <input type="text" class="form-control font-poppins weight-400 size-14" v-model="user.nomeVisualizzato" placeholder="Nome visualizzato">
                    <small class="form-text text-muted font-poppins weight-300 size-12"></small>
                </div>
            </div>
             <div class="col-sm-12 col-md-6">
                <div class="form-group">
                    <p class="font-poppins weight-500 size-14">Password attuale (lascia in bianco per non modificare)</p>
                    <input type="password" class="form-control font-poppins weight-400 size-14" v-model="test" placeholder="">
                    <small class="form-text text-muted font-poppins weight-300 size-12"></small>
                </div>
                <div class="form-group">
                    <p class="font-poppins weight-500 size-14">Nuova password (lascia in bianco per non modificare)</p>
                    <input type="password" class="form-control font-poppins weight-400 size-14" v-model="test" placeholder="">
                    <small class="form-text text-muted font-poppins weight-300 size-12"></small>
                </div>
                <div class="form-group">
                    <p class="font-poppins weight-500 size-14">Conferma nuova password</p>
                    <input type="password" class="form-control font-poppins weight-400 size-14" v-model="test" placeholder="">
                    <small class="form-text text-muted font-poppins weight-300 size-12"></small>
                </div>
            </div>
            
            <div class="col-12 mb-3">
              <button class="btn btn-gradient-danger float-right mr-2 float-right font-poppins weight-700 size-14" type="button">Annulla</button>
              <button type="submit" class="btn btn-gradient-primary mr-2 float-right font-poppins weight-700 size-14">Aggiorna</button>
            </div>
          </div>
        </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GETUser } from "../memoFly-api/GETUser.js";
import Pagination from "./common/Pagination.vue";
import Dialog from "./common/Dialog.vue";
import { Toast } from "../services/Toast.js";

@Component({
  components: {
    Pagination,
    Dialog,
  },
})
export default class Account extends Vue {

  public user: any = {};
  public test :any;

  data() {

    this.init();

    return {
      user: this.user,
      test: this.test,
    };
  }

  init() {
    this.user = {};

    GETUser()
      .then((response: any) => {

        Toast(response, {
          success: "Servizi caricati correttamente",
          error: "Errore durante il caricamento dei servizi!",
        });

        if (response.status == 200) {
          this.user = response.data;
        } else {
          this.user = [];
        }

      })

  }



 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
