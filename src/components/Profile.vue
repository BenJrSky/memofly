<template>
  <div class="row">
      <div class="col-12">
        <UserInfoCard/>
        <div class="row">
            <div class="col-12">
                <div class="card">
                  <div class="card-body row">
                    <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                            <h4 class="mt-0 mb-4 header-title font-roboto weight-700 size-17">Dettagli azienda</h4>
                            <p class="font-poppins weight-500 size-14">Numero cellulare mittente</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.azienda.numeroMittene" placeholder="333 44 55 666">
                            <small class="form-text text-muted font-poppins weight-500 size-12">mittente usato per i messaggi inviati da Memofly</small>
                        </div>
                        <div class="form-group">
                            <p class="font-poppins weight-500 size-14">Nome azienda</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.azienda.nome" placeholder="Nome dell'azienda">
                            <small class="form-text text-muted font-poppins weight-500 size-12"></small>
                        </div>
                        <div class="form-group">
                            <p class="font-poppins weight-500 size-14">Numero di telefono</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.azienda.numeroTelefono" placeholder="333 44 55 666">
                            <small class="form-text text-muted font-poppins weight-500 size-12">Numero di telefono dell'azienda</small>
                        </div>
                        <div class="form-group">
                            <p class="font-poppins weight-500 size-14">Indirizzo</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.azienda.indirizzo" placeholder="Nome dell'azienda">
                            <small class="form-text text-muted font-poppins weight-500 size-12">Indica l'indirizzo della sede</small>
                        </div>
                        <div class="form-group">
                            <p class="font-poppins weight-500 size-14">Descrizione dell’azienda</p>
                            <textarea class="form-control resize-no p-2 weight-500 size-14" rows="6" id="defaultTitleMessage" v-model="company.azienda.descrizione"  spellcheck="false"></textarea>
                            <small class="form-text text-muted font-poppins weight-500 size-12"></small>
                        </div>
                        <div class="form-group">
                          <p class="font-poppins weight-500 size-14">Disabilita tasti CONFERMA, RIPROGRAMMA e ANNULLA nella pagina Azienda</p> 
                          <div class="custom-control custom-switch switch-primary">
                            <input type="checkbox" class="custom-control-input weight-500 size-14" id="webBookingService"  v-model="test">
                            <label class="custom-control-label font-poppins weight-500 size-14" for="webBookingService">Abilitati</label>
                          </div>   
                          <small class="form-text text-muted font-poppins weight-500 size-12"></small>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 mt-sm-0 mt-md-5">
                        <div class="form-group">
                          <p class="font-poppins weight-500 size-14">Personalizzazione orari di lavoro</p> 
                          <div class="row col-12 m-0 pl-0 pr-0">
                              <div class="w-100">
                                  <div class="custom-control custom-radio">
                                      <input type="radio" id="openHour2" checked="" name=apertura value="custom" v-model="company.azienda.orari.tipologia" v-on:change="cleanDays()" class="custom-control-input">
                                      <label class="custom-control-label font-poppins weight-500 size-14" for="openHour2">Personalizza giorno per giorno</label>
                                  </div>
                                  <div class="custom-control custom-radio">
                                      <input type="radio" id="openHour1" checked="" name=apertura value="generico" v-model="company.azienda.orari.tipologia" v-on:change="cleanDays()" class="custom-control-input">
                                      <label class="custom-control-label font-poppins weight-500 size-14" for="openHour1">Stessi orari di apertura e chiusura ogni giorno</label>
                                  </div>
                                  <div v-if="company.azienda.orari.tipologia=='generico'" class="w-100 row mt-3 mb-2">
                                    <div class="col-6">
                                      <div class="row">
                                        <div class="col-6">
                                          <p class="font-poppins weight-400 size-11">Apertura attività</p> 
                                          <div class="col-12 p-0">
                                            <input class="form-control weight-400 size-12" type="time" v-model="aperturaGenerica" id="workStart">                                    
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <p class="font-poppins weight-400 size-11">Chiusura attività</p> 
                                          <div class="col-12 p-0">
                                            <input class="form-control weight-400 size-12" type="time" v-model="chiusuraGenerica" id="workEnd">                                     
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-6">
                                      <div class="row">
                                        <div class="col-6">
                                          <p class="font-poppins weight-400 size-11">Inizio pausa pranzo</p> 
                                          <div class="col-12">
                                            <input class="form-control weight-400 size-12" type="time" v-model="inizioPranzoGenerico" id="lunchStart">                                    
                                          </div>
                                        </div>
                                        <div class="col-6">
                                          <p class="font-poppins weight-400 size-11">Fine pausa pranzo</p> 
                                          <div class="col-12 p-0">
                                            <input class="form-control weight-400 size-12" type="time" v-model="finePranzoGenerico" id="lunchEnd">                                     
                                          </div>
                                        </div>
                                          
                                      </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                         <div class="form-group">
                            <p class="font-poppins weight-500 size-14">Giorni di apertura</p> 

                            <div v-for="day in businessDays" :key="day" class="row m-0 pl-0 pr-0">
                              <div class="w-100 mt-3">
                                <div class="custom-control custom-checkbox">
                                  <input type="checkbox" v-bind:id="day.giorno" v-bind:name="day.giorno" v-model="day.active" v-on:change="cleanThisday(day)" class="custom-control-input">
                                  <label class="custom-control-label font-poppins weight-400 size-14" v-bind:for="day.giorno">{{ day.giorno }}</label>
                                </div>
                              </div>
                              <div v-if="day.active==true" class="w-100">
                                <div v-if="company.azienda.orari.tipologia=='custom'" class="w-100 row mb-4">
                                  <div class="col-6">
                                    <div class="row">
                                      <div class="col-6">
                                        <p class="font-poppins weight-400 size-11">Apertura attività</p> 
                                        <div class="col-12 p-0">
                                          <input class="form-control weight-400 size-12" type="time" v-model="day.apertura" id="workStart">                                    
                                        </div>
                                      </div>
                                      <div class="col-6">
                                        <p class="font-poppins weight-400 size-11">Chiusura attività</p> 
                                        <div class="col-12 p-0">
                                          <input class="form-control weight-400 size-12" type="time" v-model="day.chiusura" id="workEnd">                                     
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-6">
                                    <div class="row">
                                      <div class="col-6">
                                        <p class="font-poppins weight-400 size-11">Inizio pausa pranzo</p> 
                                        <div class="col-12">
                                          <input class="form-control weight-400 size-12" type="time" v-model="day.inizioPausaPranzo" id="lunchStart">                                    
                                        </div>
                                      </div>
                                      <div class="col-6">
                                        <p class="font-poppins weight-400 size-11">Fine pausa pranzo</p> 
                                        <div class="col-12 p-0">
                                          <input class="form-control weight-400 size-12" type="time" v-model="day.finePausaPranzo" id="lunchEnd">                                     
                                        </div>
                                      </div>
                                        
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                        </div>
     
                      <div class="form-group">
                          <div class="col-12 m-0 pl-0 pr-0">
                              <div class="row col-12 p-0">
                                <div class="col-6">
                                  <p class="font-poppins weight-500 size-14">Inizio ferie</p> 
                                  <div class="col-12 p-0">
                                    <input class="form-control weight-500 size-14" type="date" v-model="company.azienda.inizioFerie" id="holydayStart">        
                                  </div>
                                </div>
                                <div class="col-6 p-0">
                                  <p class="font-poppins weight-500 size-14">Fine ferie</p> 
                                  <div class="col-12 p-0">
                                    <input class="form-control weight-500 size-14" type="date" v-model="company.azienda.fineFerie" id="holydayEnd">        
                                  </div>                                     
                                </div>
                                  
                              </div>
                          </div>
                      </div>
                    </div>
                    <div class="col-12 mb-3">
                      <button type="submit" class="btn btn-gradient-primary mr-2 float-right font-poppins weight-700 size-14" v-on:click="serverProcess()">Aggiorna</button>
                    </div>
                  </div>
                </div>
            </div>
            
        </div>
         <div class="row">
            <div class="col-12">
                <div class="card">
                  <div class="card-body row">
                    <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                            <h4 class="mt-0 mb-4 header-title font-roboto weight-700 size-17">Dati fatturazione</h4>
                            <p class="font-poppins weight-500 size-14">Nome e cognome</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.nomeVisualizzato" placeholder="Nome e cognome">
                            <small class="form-text text-muted font-poppins weight-500 size-12"></small>
                        </div>
                        <div class="form-group">
                            <p class="font-poppins weight-500 size-14">Codice fiscale</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.azienda.codiceFiscale" placeholder="Codice fiscale">
                            <small class="form-text text-muted font-poppins weight-500 size-12"></small>
                        </div>
                        <div class="form-group">
                            <p class="font-poppins weight-500 size-14">Codice destinatario</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.azienda.codiceDestinatario" placeholder="Codice destinatario">
                            <small class="form-text text-muted font-poppins weight-500 size-12"></small>
                        </div>
                        <div class="form-group">
                            <p class="font-poppins weight-500 size-14">Pec</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.azienda.pec" placeholder="Indirizzo p.e.c">
                            <small class="form-text text-muted font-poppins weight-500 size-12"></small>
                        </div>

                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="form-group">
                             <h4 class="d-block mt-0 mb-4 header-title invisible">.</h4>
                            <p class="font-poppins weight-500 size-14">Nome della società</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.azienda.nome" placeholder="Nome dell'azienda">
                            <small class="form-text text-muted font-poppins weight-500 size-12"></small>
                        </div>
                        <div class="form-group">
                            <p class="font-poppins weight-500 size-14">Partita IVA</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.azienda.partitaIva" placeholder="Partita IVA">
                            <small class="form-text text-muted font-poppins weight-500 size-12"></small>
                        </div>
                        <div class="form-group">
                            <p class="font-poppins weight-500 size-14">Indirizzo email</p>
                            <input type="text" class="form-control weight-500 size-14" v-model="company.email" placeholder="Indirizzo email">
                            <small class="form-text text-muted font-poppins weight-500 size-12"></small>
                        </div>


                  
                    </div>
                    <div class="col-12 mb-3">
                      <button type="submit" class="btn btn-gradient-primary mr-2 float-right font-poppins weight-700 size-14" v-on:click="serverProcess()">Aggiorna</button>
                    </div>
                  </div>
                </div>
            </div>
            
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GETUser } from "../memoFly-api/GETUser.js";
import { PUTUser } from "../memoFly-api/PUTUser.js";
import Pagination from "./common/Pagination.vue";
import UserInfoCard from "./cards/UserInfoCard.vue";
import Dialog from "./common/Dialog.vue";
import moment from 'moment';
import { Toast } from "../services/Toast.js";

@Component({
  components: {
    Pagination,
    UserInfoCard,
    Dialog,
  },
})
export default class Profile extends Vue {

  public company: any = {};
  public businessDays: any = [];
  public activeDays: any = [];
  public aperturaGenerica: any;
  public chiusuraGenerica: any;
  public inizioPranzoGenerico: any;
  public finePranzoGenerico: any;
  public daysWeek = ['Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi','Sabato','Domenica'];

  data() {

    this.init();

    return {
      company: this.company,
    };
  }

  init() {
    this.company = [];

    GETUser()
      .then((response: any) => {

        Toast(response, {
          success: "Servizi caricati correttamente",
          error: "Errore durante il caricamento dei servizi!",
        });

        if (response.status == 200) {
          this.clientProcess(response.data);
        } else {
          this.company = [];
        }

      })

  }

  cleanThisday(data){
    for(let day of this.businessDays){
      if(day.giorno === data.giorno){
            day.apertura =	null;
            day.chiusura = null;
            day.inizioPausaPranzo =	null;
            day.finePausaPranzo =	null;
      }
    }

  }

  cleanDays(){

    this.aperturaGenerica = null;
    this.chiusuraGenerica = null;
    this.inizioPranzoGenerico = null;
    this.finePranzoGenerico = null

     this.businessDays = this.daysWeek.map((day:any)=>{
        return  { 
            giorno:	day,
            apertura:	null,
            chiusura:	null,
            inizioPausaPranzo:	null,
            finePausaPranzo:	null,
            active: false
          };
      });

  }

  clientProcess(company){

    let result = {};

    if(company){

      company.azienda.inizioFerie = moment(company.azienda.inizioFerie).format("YYYY-MM-DD");
      company.azienda.fineFerie = moment(company.azienda.fineFerie).format("YYYY-MM-DD");

      if(company.azienda.orari.giorniAttività){

      console.log("GETTING: ----->   ")
      console.log(JSON.stringify(company.azienda.orari.giorniAttività));

        const setted = company.azienda.orari.giorniAttività;

        const regexHour = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;

        if(company.azienda.orari.tipologia == 'custom'){

            this.businessDays = this.daysWeek.map((day:any)=>{
              return  { 
                  giorno:	day,
                  apertura:	null,
                  chiusura:	null,
                  inizioPausaPranzo:	null,
                  finePausaPranzo:	null,
                  active: false
                };
            });

            setted.forEach((data:any)=>{

                this.businessDays.forEach((day:any)=>{
                  
                let isValidHour = regexHour.test(data.apertura);

                  if(data.giorno.toLowerCase() === day.giorno.toLowerCase() && isValidHour){
                    day.apertura =	data.apertura;
                    day.chiusura = data.chiusura;
                    day.inizioPausaPranzo = data.inizioPausaPranzo;
                    day.finePausaPranzo = data.finePausaPranzo;
                    day.active = true;
                  }

                });

            });


        }else{

           this.businessDays = this.daysWeek.map((opening:any)=>{
              return  { 
                  giorno:	opening,
                  apertura:	null,
                  chiusura:	null,
                  inizioPausaPranzo:	null,
                  finePausaPranzo:	null,
                  active: false
                };
            });

          let genericDay = setted.find(day => regexHour.test(day.apertura));

          if(genericDay){
            this.aperturaGenerica = genericDay.apertura;
            this.chiusuraGenerica = genericDay.chiusura;
            this.inizioPranzoGenerico = genericDay.inizioPausaPranzo;
            this.finePranzoGenerico = genericDay.finePausaPranzo;
          }

          setted.forEach((data:any)=>{

              this.businessDays.forEach((day:any)=>{
                
              let isValidHour = regexHour.test(data.apertura);

                if(data.giorno.toLowerCase() === day.giorno.toLowerCase() && isValidHour){
                  day.apertura =	data.apertura;
                  day.chiusura = data.chiusura;
                  day.inizioPausaPranzo = data.inizioPausaPranzo;
                  day.finePausaPranzo = data.finePausaPranzo;
                  day.active = true;
                }

              });

          });

        }

      }


      result = {...company};

    }

    this.company = result;

  }

  serverProcess(){

    if(this.company){

      this.company.azienda.inizioFerie = moment(this.company.azienda.inizioFerie).format("YYYYMMDD");
      this.company.azienda.fineFerie = moment(this.company.azienda.fineFerie).format("YYYYMMDD");

      if(this.businessDays){

        this.company.azienda.orari.giorniAttività = this.businessDays.reduce((acc,index)=>{

            if(index.active === true){
              if(this.company.azienda.orari.tipologia == 'custom'){
                acc.push({
                  giorno:	index.giorno,
                  apertura:	index.apertura,
                  chiusura:	index.chiusura,
                  inizioPausaPranzo:	index.inizioPausaPranzo,
                  finePausaPranzo:	index.finePausaPranzo
                });
              }else{
                acc.push({
                  giorno:	index.giorno,
                  apertura:	this.aperturaGenerica,
                  chiusura:	this.chiusuraGenerica,
                  inizioPausaPranzo: this.inizioPranzoGenerico,
                  finePausaPranzo: this.finePranzoGenerico
                });
              }
            }else{
                // acc.push({
                //   giorno:	index.giorno,
                //   apertura:	null,
                //   chiusura:	null,
                //   inizioPausaPranzo:	null,
                //   finePausaPranzo:	null
                // })
            };



            return acc;

        },[]);
  
      }

      console.log("SENDING: ----->   ")
      console.log(JSON.stringify(this.company.azienda.orari.giorniAttività));


      PUTUser(this.company)
        .then(result =>{
          if(result.msg=="OK"){
            let data = { status: 200};
            Toast(data,{success:"Dettagli aggiornati!",error:"Errore durante l'aggiornamento"});
          }
        })

    }



    




  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
