<template>
  <div class="row">
    <div class="card col-12">
      <div class="card-body row col-12">
        <div class="col-sm-12 col-md-6">
          <div class="form-group">
            <h4 class="mt-0 titolo-label size-14">Nome servizio</h4>
            <input type="text" class="form-control size-14" id="ServiceName" v-model="service.nome" aria-describedby="emailHelp"
                   placeholder="Nome del servizio">
            <small class="form-text text-muted size-12">Inserisci il nome servizio dell’appuntamento, es. taglio uomo, pulizia
              denti</small>
          </div>
          <div class="form-group">
            <h4 class="mt-0 titolo-label size-14">Tags</h4>
            <input type="text" class="form-control size-14" id="tags" v-model="service.tags" aria-describedby="emailHelp"
                   placeholder="Inserisci alcuni tag, ogni parola separata da spazio sarà un tag per il servizio">
            <small class="form-text text-muted size-12">Inserisci i tags relativi al servizio che stai offrendo, come
              “manicure”.
              Dovranno far parte del titolo dell’appuntamento che memorizzerai su Google Calendar.
            </small>
          </div>

          <div class="form-group">
            <h4 class="mt-0 titolo-label size-14">Prezzo</h4>
            <input type="text" class="form-control size-14" id="ServicePrice" v-model="service.prezzo"
                   aria-describedby="emailHelp" placeholder="€ 10.00">
            <small class="form-text text-muted size-12">Prezzo del servizio che appare nella prenotazione via web</small>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1" class="size-14 titolo-label">Durata</label>
            <select class="form-control size-14" id="durationService" v-model="service.durata">
              <option class="size-14" v-for=" n in 11" v-bind:key="n">{{ (n * 5) + " minuti" }}</option>
              <option class="size-14" v-for=" n in 11" v-bind:key="n">{{ "1 ora e " + (n * 5) + " minuti" }}</option>
              <option class="size-14" v-for=" n in 11" v-bind:key="n">{{ "2 ore e " + (n * 5) + " minuti" }}</option>
            </select>
            <small class="form-text text-muted size-12">La durata del servizio verrà impostata automaticamente su Google
              Calendar</small>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2" class="titolo-label size-14">Pausa</label>
            <select class="form-control" id="breakService" v-model="service.pausa">
              <option class="size-14" v-for=" n in 11" v-bind:key="n" >{{ (n * 5) + " minuti" }}</option>
              <option class="size-14" v-for=" n in 11" v-bind:key="n">{{ "1 ora e " + (n * 5) + " minuti" }}</option>
              <option class="size-14" v-for=" n in 11" v-bind:key="n">{{ "2 ore e " + (n * 5) + " minuti" }}</option>
            </select>
            <small class="form-text text-muted size-12">Definisce il tempo di pausa tra questo servizio e il sucessivo</small>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect3" class="titolo-label size-14">Servizio correlato</label>
            <select class="form-control" id="correlati" v-model="service.pausa">
              <option class="size-14" v-for=" n in services" v-bind:key="n">{{ n.nome }}</option>
            </select>
            <small class="form-text text-muted size-12">Tipologia di servizio da prenotare obbligatoriamente insieme all’attuale
            </small>
          </div>

        </div>
        <div class="col-sm-12 col-md-6">
          <div class="form-group">
            <h4 class="mt-0 titolo-label size-14">Collaboratori abilitati</h4>
            <div class="d-flex mb-2" v-for="coworker in coworkers" :key="coworker">
              <input class="collaboratoriCheckbox" type="checkbox" v-bind:id="coworker.id" v-bind:vualue="coworker.id"
                     v-model="coworker.checked">
              <label class="text-capitalize"
                     v-bind:for="coworker.id">{{ coworker.fullName }}</label>
            </div>
            <small class="form-text text-muted size-12">Seleziona i collaboratori abilitati per questo servizio</small>
          </div>
          <div class="form-group">
            <h4 class="mt-0 titolo-label size-14">Colore etichetta</h4>
            <div class="row col-12 m-0 pl-0 pr-0">
              <div class="col-3 pl-0">
                <div class="custom-control ">
                  <input type="radio" id="colorPomodoro" checked="" name="colorService" value="#d60000"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel customRadioLabel" for="colorPomodoro">Pomodoro</label>
                </div>
                <div class="custom-control ">
                  <input type="radio" id="colorBasilico" checked="" name="colorBasilico" value="#0B8043"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorBasilico">Basilico</label>
                </div>
                <div class="custom-control ">
                  <input type="radio" id="colorMirtillo" checked="" name="colorService" value="#3F51B5"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorMirtillo">Mirtillo</label>
                </div>

              </div>
              <div class="col-3 pl-0">
                <div class="custom-control ">
                  <input type="radio" id="colorSalvia" checked="" value="#33b679" name="colorService"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorSalvia">Salvia</label>
                </div>
                <div class="custom-control ">
                  <input type="radio" id="colorBanana" checked="" value="#F6C026" name="colorService"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorBanana">Banana</label>
                </div>
                <div class="custom-control ">
                  <input type="radio" id="colorGrafite" checked="" value="#616161, 100%" name="colorService"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorGrafite">Grafite</label>
                </div>
              </div>
              <div class="col-3 pl-0">
                <div class="custom-control ">
                  <input type="radio" id="colorLavanda" checked="" value="#7986cb" name="colorService"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorLavanda">Lavanda</label>
                </div>
                <div class="custom-control ">
                  <input type="radio" id="colorMandarino" checked="" value="#F5511D" name="colorService"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorMandarino">Mandarino</label>
                </div>
                <div class="custom-control ">
                  <input type="radio" id="colorUva" checked="" value="#8E24AA" name="colorService"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorUva">Uva</label>
                </div>
              </div>
              <div class="col-3 pl-0">
                <div class="custom-control ">
                  <input type="radio" id="colorFenicottero" checked="" value="#e67c73" name="colorService"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorFenicottero">Fenicottero</label>
                </div>
                <div class="custom-control ">
                  <input type="radio" id="colorPavone" checked="" value="#039be5" name="colorService"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorPavone">Pavone</label>
                </div>
                <div class="custom-control ">
                  <input type="radio" id="colorNessuno" checked="" value="#7387A1" name="colorService"
                         v-model="service.colore" class="">
                  <label class="custom-control-label customRadioLabel" for="colorNessuno">Nessuno</label>
                </div>
              </div>
            </div>

            <small class="form-text size-12 text-muted">Scegli il colore che verrà assegnato al servizio Sarà lo stesso del
              relativo appuntamento su Google Calendar</small>
          </div>

          <div class=" mt-4 mb-4 ">
            <label class=" titolo-label size-14" for="webBookingService">Prenotabile via
              web</label>
            <input class="prenotabileViaWebCheckbox" type="checkbox" id="webBookingService"
                   v-model="service.prenotabileViaWeb">
          </div>

          <div class="form-group">
            <h4 class="mt-0 titolo-label size-14">Descrizione</h4>
            <textarea class="form-control" rows="5" id="descriptionService" v-model="service.descrizione"
                      spellcheck="false"></textarea>
            <small class="form-text text-muted size-12">Descrizione del servizio che compare nel form di prenotazione via
              web</small>
          </div>
          <div class="float-right ">
            <button type="submit" v-bind:disabled="disabled" v-on:click="saveService()"
                    class="btn btn-gradient-primary mr-2 size-16">Salva
            </button>
            <button type="button" v-bind:disabled="disabled" v-on:click="cancelService()"
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
import {Check} from './../services/check'
import {Service} from './../schema/classes.js'
import {POSTService} from "../memoFly-api/POSTService.js";
import {PUTService} from "../memoFly-api/PUTService.js";
import {GETServices} from "../memoFly-api/GETServices.js";
import {GETService} from "../memoFly-api/GETService.js";
import {GETCoworkers} from "../memoFly-api/GETCoworkers.js";
import {Toast} from "../services/Toast.js";

@Component({
  components: {
    Pagination
  },
})


export default class ServiceWizard extends Vue {

  public services: any;
  public dataServices: any;
  public service: any;
  public coworkers: any;
  public disabled: any = true;

  data() {

    this.service = new Service;

    return {
      services: this.services,
      service: this.service,
      dataServices: this.dataServices,
      coworkers: this.coworkers,
      disabled: this.disabled
    }

  }

  mounted() {

    this.disabled = true;

    GETCoworkers()
        .then((response: any) => {
          if (response.status == 200) {
            return response.data.map((worker: any) => {
              return {
                id: worker.id,
                fullName: worker.nome + " " + worker.cognome,
                checked: false
              }
            });
          } else {
            return ""
          }

        })
        .then((coworkers: any) => {
          return this.coworkers = coworkers;
        })
        .then(() => {

          if (this.$route.params.id) {

            let serviceID = this.$route.params.id;

            GETService(serviceID)
                .then((response: any) => {
                  if (response.status == 200) {
                    return response.data;
                  } else {
                    return [];
                  }
                })
                .then((service: any) => {

                  this.coworkers.forEach((worker: any) => {

                    if (service.collaboratori.includes(worker.id)) {
                      worker.checked = true
                    }

                  });

                  service = this.arrangeForFronEnd(service);

                  return this.service = service;
                }).then(() => {
              GETServices()
                  .then((resp: any) => {
                    return this.services = resp.data;
                  })
            });

          }
        })
        .finally(() => {
          this.disabled = false;
        })
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

      this.coworkers.forEach((worker: any) => {
        if (worker.checked) {
          collaboratori.push(worker.id);
        }
      })

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

  saveService() {

    let schema = {
      nome: true,
      durata: true,
      colore: true,
      descrizione: true,
      prenotabileViaWeb: true,
      pausa: true,
      prezzo: true
    }

    this.service.tags = this.service.tags.split(' ');

    let response = Check(schema, this.service);

    if (response) {

      this.save(this.service);

    } else {
      Toast({error: "Dati incompleti"});
    }


  }

  cancelService() {

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
