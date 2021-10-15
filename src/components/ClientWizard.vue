<template>
  <div class="row">
    <div class="card col-sm-12 offset-sm-0 col-md-10 offset-md-1 ">
      <div class="card-body w-100">

        <div class="col-12">
            <div class="row p-3 mt-3 mb-4">
              <img src="../../public/img/patient-pro.png" alt="" class="rounded-circle mt-n3">
            </div>
        </div>

         <div class="row p-3">
            <div class="form-group col-sm-12 col-md-6">
            <h4 class="mt-0 titolo-label size-14">Nome</h4>
            <input type="text" class="form-control size-14" v-model="client.nome" aria-describedby="emailHelp"
                   placeholder="Nome del cliente">
          </div>
          <div class="form-group col-sm-12 col-md-6">
            <h4 class="mt-0 titolo-label size-14">Cognome</h4>
            <input type="text" class="form-control size-14" v-model="client.cognome" aria-describedby="emailHelp"
                   placeholder="Cognome del cliente">
          </div>
        </div>

        <div class="row p-3">
            <div class="form-group col-sm-12 col-md-4">
            <h4 class="mt-0 titolo-label size-14">Numero telefonico</h4>
            <input type="text" class="form-control size-14" v-model="client.telefono" aria-describedby="emailHelp"
                   placeholder="Numero del cliente">
          </div>
          <div class="form-group col-sm-12 col-md-4">
            <h4 class="mt-0 titolo-label size-14">E-mail</h4>
            <input type="text" class="form-control size-14" v-model="client.email" aria-describedby="emailHelp"
                   placeholder="E-mail del cliente">
          </div>
          <div class="form-group col-sm-12 col-md-4">
            <h4 class="mt-0 titolo-label size-14">Data di nascita</h4>
            <input type="date" class="form-control size-14" v-model="client.dataNascita" aria-describedby="emailHelp">
          </div>
        </div>

         <div class="row p-3">
            <div class="form-group col-12">
            <h4 class="mt-0 titolo-label size-14">Indirizzo</h4>
            <input type="text" class="form-control size-14" v-model="client.indirizzo" aria-describedby="emailHelp"
                   placeholder="Indirizzo del cliente">
          </div>
        </div>

         <div class="row p-3">
            <div class="form-group col-12">
              <h4 class="mt-0 titolo-label size-14">Descrizione</h4>
              <textarea class="form-control size-14" rows="5" id="descriptionService" v-model="client.note"
                        spellcheck="false"></textarea>
            </div>
         </div>

         <div class="row p-3">
            <div class="form-group col-sm-12 col-md-6">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
                <!-- <input type="checkbox" v-bind:id="day.giorno" v-bind:name="day.giorno" v-model="day.active" class="custom-control-input"> -->
                <label class="custom-control-label font-poppins weight-400 size-14" v-bind:for="client.name">Consenso trattamento dei dati</label>
              </div>
            </div>
            <div class="form-group col-sm-12 col-md-6">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
                <label class="custom-control-label font-poppins weight-400 size-14" v-bind:for="client.name">Marketing e promozioni (follow up)</label>
              </div>
            </div>
            <div class="form-group col-12">
               <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
                <label class="custom-control-label font-poppins weight-400 size-14" v-bind:for="client.name">Comunicazioni di servizio (messaggi pre appuntamento)</label>
              </div>
            </div>
         </div>

        <div class="row p-3">
          <div class="float-right col-sm-12 offset-sm-0 col-md-3 offset-md-9">
            <button type="submit" v-on:click="saveClient()"
                    class="btn btn-gradient-primary mr-2 size-16">Salva
            </button>
            <button type="button" v-on:click="cancelClient()"
                    class="btn btn-gradient-danger size-16">Annulla
            </button>
          </div>
         </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Pagination from './common/Pagination.vue';
import moment from 'moment';
import { Client } from '../schema/classes.js'
import {POSTClient} from "../memoFly-api/POSTClient.js";
import {PUTClient} from "../memoFly-api/PUTClient.js";
import { GETClient } from "../memoFly-api/GETClient.js";
import {Toast} from "../services/Toast.js";

@Component({
  components: {
    Pagination
  },
})


export default class ClientWizard extends Vue {

  public client: any;
  public dataServices: any;
  public service: any;
  public coworkers: any;
  public disabled: any = true;

  data() {

    this.client = new Client;

    return {
      client: this.client,
      disabled: this.disabled
    }

  }

  mounted() {

    if (this.$route.params.id) {

      let clientID = this.$route.params.id;

      GETClient(clientID)
          .then((response: any) => {
            console.log("---->CLIENT")
            console.log(JSON.stringify(response))
            if (response.status == 200) {
              this.client = response.data;
            } else {
              this.client = new Client;
            }
          })
    }

  }

  saveClient() {
    
      if (this.$route.params.id) {

        POSTClient(this.client)
            .then((data: any) => {
              alert(JSON.stringify(data))
              //Toast(data, {success: "Cliente aggiornato con successo!", error: "Errore durante l'aggiornamento"});
            })
            .then(() => {
              this.$router.push({ name: 'Clients' });
            });

      } else {

        PUTClient(this.client)
            .then((data: any) => {
              alert(JSON.stringify(data))
              //Toast(data, {success: "Cliente salvato con successo!", error: "Errore durante il salvataggio"});
            })
            .then(() => {
              this.$router.push({ name: 'Clients' });
            });

      }


  }

  cancelClient() {

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#colorPomodoro + label {
  color: #d60000;
}

#colorBasilico + label {
  color: #0B8043;
}

#colorMirtillo + label {
  color: #3F51B5;
}

#colorSalvia + label {
  color: #33b679;
}

#colorBanana + label {
  color: #F6C026;
}

#colorGrafite + label {
  color: #616161;
}

#colorLavanda + label {
  color: #7986cb;
}

#colorMandarino + label {
  color: #F5511D;
}

#colorUva + label {
  color: #8E24AA;
}

#colorFenicottero + label {
  color: #e67c73;
}

#colorPavone + label {
  color: #039be5;
}

#colorNessuno + label {
  color: #7387A1;
}

.inner {
  position: absolute;
}
.collaboratoriCheckbox{
  appearance: none;
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #7d839a;
}
.collaboratoriCheckbox:after{
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f00c";
  font-size: 10px;
  color: #fff;
  display: none;
}
.collaboratoriCheckbox:hover{
  background-color: #439AF4;
  border: 0px solid #7d839a;
}
.collaboratoriCheckbox:checked{
  background-color: #439AF4;
  border: 0px solid #7d839a;
}
.collaboratoriCheckbox:checked:after{
  display: block;
}
.prenotabileViaWebCheckbox{
  appearance: none;
  -webkit-appearance: none;
  height: 15px;
  width: 30px;
  background-color: #d6d6d6;
  border-radius: 11px;
  cursor: pointer;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 3px;
  color: #666;
  border: 0px solid #7d839a;
}
.prenotabileViaWebCheckbox:after{
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f111";
  font-size: 10px;
  color: #fff;
}
.prenotabileViaWebCheckbox:hover{
  background-color: #666;
  border: 0px solid #7d839a;
}
.prenotabileViaWebCheckbox:checked{
  background-color: #439AF4;
  border: 0px solid #7d839a;
}
.prenotabileViaWebCheckbox:checked:after{
  display: flex;
  padding-left: 13px;
}

input[type="radio"]{
  display: none;
}
.customRadioLabel:before{
  appearance: none;
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  top: 4px;
  background-color: #fff;
  border-radius: 11px;
  cursor: pointer;
  display: flex;
  color: #666;
  content: "";
  border: 1px solid #7d839a;
}
input[type="radio"]:checked + .customRadioLabel:before{
  background-color: #0a6edb;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f111";
  font-size: 8px;
  color: #fff;
  align-items: center;
  justify-content: center;
}
.customRadioLabel{
  padding-left: 7px;
}

</style>
