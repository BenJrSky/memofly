<template>
  <div class="row">
    <div class="card col-12">
      <div class="card-body row col-12">
        <div class="col-sm-12 col-md-6">
          <div class="form-group">
            <h4 class="mt-0 titolo-label size-14">Tipo promemoria</h4>
            <select class="form-control size-14" id="breakService" v-model="message.tipo">
                <option class="font-poppins weight-500 size-14" value="pre">Pre appuntamento</option>
                <option class="font-poppins weight-500 size-14" value="post">Post appuntamento</option>
             </select>
            <small class="form-text text-muted size-12">Inserisci che tipologia di messaggio vuoi creare</small>
          </div>
          <div class="form-group">
            <h4 class="mt-0 titolo-label size-14">Servizio</h4>
            <select class="form-control size-14" id="breakService" v-model="message.servizio">
                <option class="font-poppins weight-500 size-14" v-for="service in services" v-bind:key="service" v:bind:value="service.id">{{ service.nome }} </option>
             </select>            
             <small class="form-text text-muted size-12">Seleziona la tipologia del servizio per cui stai creando il messaggio</small>
          </div>
          <div class="form-group">
            <h4 class="mt-0 titolo-label size-14">Quando inviare</h4>
            <select class="form-control size-14" id="breakService" v-model="message.quando">
              <option class="size-14" v-for=" n in 24" v-bind:key="n" v-bind:value="'-'+n+'h'">{{ "n." + n + " ore prima dell'appuntamento" }}</option>
              <option class="size-14" v-for=" n in 24" v-bind:key="n" v-bind:value="'+'+n+'h'">{{ "n." + n + " ore dopo dell'appuntamento" }}</option>
            </select>            
             <small class="form-text text-muted size-12">Seleziona quando dovrà essere inviato il messaggio</small>
          </div>
          <div class="form-group">
            <div class="row col-12">
                <input class="prenotabileViaWebCheckbox mt-1" type="checkbox" id="webBookingService" v-model="message.fidelizzazione">
                <label class=" titolo-label size-14" for="webBookingService">Fidelizzazione intelligente</label>
            </div>
            <small class="form-text text-muted size-12">Testo fidelizzazione intelligente</small>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
            <div class="form-group">
                <h4 class="mt-0 mb-0 titolo-label size-14">Esempio anteprima messaggi</h4>
                <small class="form-text text-muted size-12 mt-0">Verrà creata un’anteprima del messaggio che riceverà il cliente</small>
                <div class="row col-12">
                    <textarea class="form-control resize-no p-2 weight-500 size-14 col-12" rows="3" id="defaultTitleMessage" v-model="messagePreview"  spellcheck="false"></textarea>
                </div>
            </div>    
             <div class="form-group">
                <h4 class="mt-0 titolo-label size-14">Descrizione</h4>
                <div class="row col-12">
                    <textarea class="form-control resize-no p-2 weight-500 size-14 col-12" rows="3" id="defaultTitleMessage" v-model="message.testo"  spellcheck="false"></textarea>
                </div>
                <small class="form-text text-muted size-12 mt-0 mb-0">Crea il testo del messaggio utilizzando i campi che visualizzi sotto il box</small>
            </div>       
        </div>
        <div class="col-12">
             <div class="float-right m-4">
                 <button type="submit" v-bind:disabled="disabled" v-on:click="sendMessage()"
                        class="btn btn-gradient-success mr-2 size-16">Invia SMS di prova
                </button>
                <button type="submit" v-bind:disabled="disabled" v-on:click="saveMessage()"
                        class="btn btn-gradient-primary mr-2 size-16">Salva
                </button>
                <button type="button" v-bind:disabled="disabled" v-on:click="cancelMessage()"
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
import { Message, Service } from './../schema/classes.js'
import {POSTService} from "../memoFly-api/POSTService.js";
import {PUTService} from "../memoFly-api/PUTService.js";
import {GETServices} from "../memoFly-api/GETServices.js";
import {GETMessage} from "../memoFly-api/GETMessage.js";
import {Toast} from "../services/Toast.js";

@Component({
  components: {
  },
})


export default class MessageTemplateWizard extends Vue {

  public message: any = new Message;
  public dataServices: any;
  public services: any;
  public messagePreview: any;
  public service: any = new Service();
  public disabled: any = true;

  data() {

    this.message = new Message;

    return {
      message: this.message,
      services: this.services,
      service: this.service,
      messagePreview: this.messagePreview,
      dataServices: this.dataServices,
      disabled: this.disabled
    }

  }

  mounted() {

    this.disabled = true;

    GETServices()
        .then((resp: any) => {
        return this.services = resp.data;
    })

       if (this.$route.params.id) {

            let messageID = this.$route.params.id;

            GETMessage(messageID)
                .then((response: any) => {
                  if (response.status == 200) {
                    return this.message = response.data;
                  } else {
                    return this.message = new Message();
                  }
            });


        }
    


  }

  save(service: any) {
    this.process(service)
        .then((serviceData: any) => {

          if (this.$route.params.id) {

            POSTService(serviceData)
                .then((data: any) => {
                  Toast(data, {success: "Servizio salvato con successo!", error: "Errore durante il salvataggio"});
                })
                .then(() => {
                  location.href = '/services';
                });

          } else {

            PUTService(serviceData)
                .then((data: any) => {
                  Toast(data, {success: "Servizio salvato con successo!", error: "Errore durante il salvataggio"});
                })
                .then(() => {
                  location.href = '/services';
                });

          }
        })
        .catch(err => {
          Toast(err);
        })


  }

  process(service: any) {

    return new Promise((resolve) => {

      service = this.arrangeForDB(service);

      let collaboratori: any;
      collaboratori = [];

      service.collaboratori = collaboratori.join("|");

      resolve(service);

    })


  }

  arrangeForDB(service: any) {
    if (service.prenotabileViaWeb == true) {
      service.prenotabileViaWeb = "on";
    }
    if (service.prenotabileViaWeb == false) {
      service.prenotabileViaWeb = "off";
    }

    return service;

  }

  saveMessage() {

    let schema = {
      nome: true,
      durata: true,
      colore: true,
      descrizione: true,
      prenotabileViaWeb: true,
      pausa: true,
      prezzo: true
    }

    // this.service.tags = this.service.tags.split(' ');

    // let response = Check(schema, this.service);

    // if (response) {

    //   this.save(this.service);

    // } else {
    //   Toast({error: "Dati incompleti"});
    // }


  }

  sendMessage() {

  }

  cancelMessage() {

  }

  arrangeForFronEnd(service: any) {

    if (service.prenotabileViaWeb == "on") {
      service.prenotabileViaWeb = true;
    } else {
      service.prenotabileViaWeb = false;
    }

    return service;

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

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


</style>
