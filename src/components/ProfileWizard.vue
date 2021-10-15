<template>
  <div class="row">
    <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                  <div class="card">
                      <div class="card-body  met-pro-bg">
                          <div class="met-profile">
                              <div class="row">
                                  <div class="col-lg-4 align-self-center mb-3 mb-lg-0">
                                      <div class="met-profile-main">
                                          <div class="met-profile-main-pic">
                                            <img src="./../../memofly/metrica/assets/images/users/user-4.jpg" alt="" class="rounded-circle">
                                            <span class="fro-profile_main-pic-change">
                                                <i class="fas fa-camera"></i>
                                            </span>
                                          </div>
                                          <div class="met-profile_user-detail">
                                              <h3 class="met-user-name">{{ profile.nome }} {{ profile.cognome }}</h3>
                                              <p class="mb-0 met-user-name-post">{{ profile.professione }}</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-lg-4 ml-auto">
                                      <ul class="list-unstyled personal-detail">
                                          <li class=""><i class="dripicons-phone mr-2 text-info font-18"></i> <b>
                                                  Telefono </b> : {{ profile.telefono }}</li>
                                          <li class="mt-2"><i class="dripicons-mail text-info font-18 mt-2 mr-2"></i>
                                              <b> Email </b> : {{ profile.email }}
                                          </li>
                                          <li class="mt-2"><i
                                                  class="dripicons-location text-info font-18 mt-2 mr-2"></i>
                                              <b>Indirizzo</b> : {{ profile.indirizzo }}
                                          </li>
                                      </ul>
                                      <div class="button-list btn-social-icon">
                                          <button type="button" class="btn btn-blue btn-circle">
                                              <i class="fab fa-facebook-f"><a v-bind:href="profile.facebook"></a></i>
                                          </button>

                                          <button type="button" class="btn btn-pink btn-circle ml-2">
                                              <i class="fab fa-instagram"><a v-bind:href="profile.instagram"></a></i>
                                          </button>

                                          <button type="button" class="btn btn-info btn-circle  ml-2">
                                              <i class="fab fa-linkedin"><a v-bind:href="profile.linkedin"></a></i>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="card-body">
                          <ul class="nav nav-pills mb-0 ml-0" id="pills-tab" role="tablist">
                              <li class="nav-item">
                                  <a class="nav-link active" id="general_detail_tab" data-toggle="pill"
                                      href="#general_detail">Scheda contatto</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="portfolio_detail_tab" data-toggle="pill"
                                      href="#portfolio_detail">Consensi e privacy</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="settings_detail_tab" data-toggle="pill"
                                      href="#settings_detail">Modifica</a>
                              </li>
                          </ul>
                      </div>
                  </div>                
                </div>
            </div> 

            <div class="row">
                <div class="col-12">
                    <div class="tab-content detail-list" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="general_detail">

                            <div class="row d-flex">
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                <div class="h-100 card dash-data-card text-center">
                                    <div class="card-body">
                                        <div class="w-100 h-90">
                                            <h6 class="w-100 mt-3 weight-500 size-16 font-poppins text-dark text-center">Affidabilità cliente</h6>
                                             <VueApexCharts height="190" v-bind:options="chartAffidabilitàCliente" v-bind:series="seriesAffidabilitàCliente"/>
                                        </div>
                                    </div>
                                </div>
                              </div>
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                  <div class="h-100 card dash-data-card text-center">
                                      <div class="card-body">
                                          <div class="h-70 w-100">
                                              <div class="icon-info mb-3 mt-4 mx-auto">
                                                  <i class="fas fa-shopping-cart bg-soft-purple"></i>
                                              </div>
                                          </div>
                                          <div class="h-20 w-100">
                                              <h3 class="w-100 weight-700 size-22 font-poppins text-dark mt-5">{{ profile.fatturato }}</h3>
                                              <h6 class="w-100 weight-500 size-16 font-poppins text-dark mt-5">Totale fatturato annuo</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                  <div class="h-100 card dash-data-card text-center">
                                      <div class="card-body">
                                          <div class="h-70 w-100">
                                              <div class="icon-info mb-3 mt-4 mx-auto">
                                              <i class="far fa-calendar-alt bg-soft-secondary"></i>
                                              </div>
                                          </div>
                                          <div class="h-20 w-100">
                                              <h3 class="w-100 weight-700 size-22 font-poppins text-dark mt-5">{{ profile.appuntamentiAnno }}</h3>
                                              <h6 class="w-100 weight-500 size-16 font-poppins text-dark mt-5">Appuntamenti ultimo anno</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                  <div class="h-100 card dash-data-card text-center">
                                      <div class="card-body">
                                          <div class="h-70 w-100">
                                              <div class="icon-info mb-3 mt-4 mx-auto">
                                                  <i class="fas fa-clipboard-check bg-soft-success"></i>
                                              </div>
                                          </div>
                                          <div class="h-20 w-100">
                                              <h3 class="w-100 weight-700 size-22 font-poppins text-dark mt-5">{{ profile.serviziRichiesti }}</h3>
                                              <h6 class="w-100 weight-500 size-16 font-poppins text-dark mt-5">Totale servizi richiesti</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                  <div class="h-100 card dash-data-card text-center">
                                      <div class="card-body">
                                          <div class="h-70 w-100">
                                              <div class="icon-info mb-3 mt-4 mx-auto">
                                                  <i class="fas fa-user-alt-slash bg-soft-pink"></i>
                                              </div>
                                          </div>
                                          <div class="h-20 w-100">
                                              <h3 class="w-100 weight-700 size-22 font-poppins text-dark mt-5">{{ profile.appuntamentiCancellati }}</h3>
                                              <h6 class="w-100 weight-500 size-16 font-poppins text-dark mt-5">Appuntamenti cancellati</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="flex-even col-md-12 col-lg-2 mb-3">
                                  <div class="h-100 card dash-data-card text-center">
                                      <div class="card-body">
                                          <div class="h-70 w-100">
                                              <div class="icon-info mb-3 mt-4 mx-auto">
                                                  <i class="fas fa-user-times bg-soft-warning"></i>
                                              </div>
                                          </div>
                                          <div class="h-20 w-100">
                                              <h3 class="w-100 weight-700 size-22 font-poppins text-dark mt-5">{{ profile.appuntamentiMancati }}</h3>
                                              <h6 class="w-100 weight-500 size-16 font-poppins text-dark mt-5">Appuntamenti mancati</h6>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 col-lg-4">
                                  <div class="card">
                                      <div class="card-body">
                                          <h4 class="titolo-label mt-3 weight-700 size-16 font-poppins">Trendings</h4>
                                                <!-- WORD CLOUDS -->
                                                <vue-word-cloud
                                                    style="height: 320px; width: 320px;"
                                                    v-bind:words="profile.trendings"
                                                    v-bind:color="([, weight]) => weight > 10 ? 'DeepPink' : weight > 5 ? 'RoyalBlue' : 'Indigo'"
                                                    font-family="Roboto"/>

                                      </div>
                                      <div class="col-12 mx-auto mb-5" id="chartdiv" style="height:200px !important;"></div>
                                  </div>                                    
                                  <div class="card">
                                      <div class="card-body">
                                          <h4 class="titolo-label mt-3 weight-700 size-16 font-poppins mb-3">Last Trend</h4>
                                          <div class="text-right mt-3">
                                              <span class="bg-light p-2 rounded small">Aggiornato ogni 12h</span>
                                          </div>
                                          <div class="skills mt-4">
                                              <div v-for="trend in lastTrends" v-bind:key="trend" class="skill-box">
                                                  <h6 class="skill-title">{{trend.name}}</h6>
                                                  <div class="progress-line">
                                                      <span v-bind:data-percent="trend.value" v-bind:style="{ width: trend.value + '%' }">
                                                          <span class="percent-tooltip">{{trend.value}}%</span>
                                                      </span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>                       
                                </div>
                                <div class="col-md-12 col-lg-8">
                                    <div class="h-100 row">
                                      <div class="col-12 mb-3">
                                          <div class="h-100 card">
                                              <div class="card-body">
                                               <h4 class="titolo-label mt-3 weight-700 size-16 font-poppins">Grafico Appuntamenti</h4>
                                               <div v-if="seriesAppuntamentiCalendario.length>0" class="w-100 justify-content-center">
                                                    <VueApexCharts height="400" v-bind:options="chartAppuntamentiCalendario" v-bind:series="seriesAppuntamentiCalendario"/>
                                                </div>
                                                <div v-if="seriesAppuntamentiCalendario.length==0" class="justify-content-center pt-3">
                                                    <Badge class="w-50" message="Non hai appuntamenti"></Badge>
                                                </div>
                                              </div>
                                          </div>
                                      </div>                                    
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                              <div class="col-12">
                                  <div class="card">
                                      <div class="card-body">
                                          <h4 class="titolo-label mt-3 weight-700 size-16 font-poppins">Ultimi Appuntamenti</h4>
                                          <div class="table-responsive dash-social">
                                              <div id="datatable_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer overflow-hidden mb-0">
                                                  <div class="row">
                                                      <div class="col-12">
                                                          <table id="datatable" class="table dataTable no-footer" role="grid"
                                                              aria-describedby="datatable_info">
                                                              <thead class="thead-light">
                                                                  <tr role="row">
                                                                      <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1"
                                                                          aria-label="Email: activate to sort column ascending" style="width: 192px;">
                                                                          Servizio</th>
                                                                      <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1"
                                                                          aria-label="Phone No: activate to sort column ascending" style="width: 148px;">
                                                                          Data</th>
                                                                      <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1"
                                                                          aria-label="Country: activate to sort column ascending" style="width: 223px;">
                                                                          Calendario</th>
                                                                      <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1"
                                                                          aria-label="Action: activate to sort column ascending" style="width: 112px;">
                                                                          Descrizione</th>
                                                                      <th class="sorting" tabindex="0" aria-controls="datatable" rowspan="1" colspan="1"
                                                                          aria-label="Action: activate to sort column ascending" style="width: 112px;">
                                                                          Azioni</th>
                                                                  </tr>
                                                              </thead>

                                                              <tbody>

                                                                <tr v-for="appuntamento in profile.ultimiAppuntamenti" v-bind:key="appuntamento" role="row" class="">
                                                                    <td>{{ appuntamento.service }}</td>
                                                                    <td>{{ appuntamento.date }}</td>
                                                                    <td>{{ appuntamento.calendar }}</td>
                                                                    <td>{{ appuntamento.description }}</td>
                                                                    <td>
                                                                        <a href="#" class="mr-2"><i class="fas fa-edit text-info font-16"></i></a>
                                                                    </td>
                                                                </tr>

                                                              </tbody>
                                                          </table>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>                            
                            </div>
                        </div>

                        <div class="tab-pane fade" id="portfolio_detail">
                            <div class="row">
                                <div class="col-12">
                                  <div id="mab-tab-privacy" class="row">
                                      <div class="col-lg-4">
                                          <div class="card">
                                              <div class="card-body">
                                                  <div class="row">
                                                      <div class="col-sm-10">
                                                          <div class="media">
                                                              <div class="icon-info mb-2">
                                                                  <i class="mdi mdi-shield-check bg-soft-danger"></i>
                                                              </div>
                                                              <div class="media-body align-self-center">
                                                                  <h4 class="mt-0 mb-2 font-16">Consenso trattamento dati:</h4>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="col-sm-2 align-self-center">

                                                          <!-- <if data="{{privacyConsent}}==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyConsent" checked>
                                                                  <label class="custom-control-label text-muted" for="privacyConsent"></label>
                                                              </div>
                                                          </if>
                                                          <if data="{{privacyConsent}}!==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyConsent">
                                                                  <label class="custom-control-label text-muted" for="privacyConsent"></label>
                                                              </div>
                                                          </if> -->

                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-lg-4">
                                          <div class="card">
                                              <div class="card-body">
                                                  <div class="row">
                                                      <div class="col-sm-10">
                                                          <div class="media">
                                                              <div class="icon-info mb-2">
                                                                  <i class="mdi mdi-chat-processing bg-soft-success"></i>
                                                              </div>
                                                              <div class="media-body align-self-center">
                                                                  <h4 class="mt-0 mb-2 font-16">Comunicazioni di servizio (messaggi pre appuntamento):</h4>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="col-sm-2 align-self-center">

                                                          <!-- <if data="{{privacyMail}}==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyMail" checked>
                                                                  <label class="custom-control-label text-muted" for="privacyMail"></label>
                                                              </div>
                                                          </if>
                                                          <if data="{{privacyMail}}!==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyMail">
                                                                  <label class="custom-control-label text-muted" for="privacyMail"></label>
                                                              </div>
                                                          </if> -->

                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-lg-4">
                                          <div class="card">
                                              <div class="card-body">
                                                  <div class="row">
                                                      <div class="col-sm-10">
                                                          <div class="media">
                                                              <div class="icon-info mb-2">
                                                                  <i class="mdi mdi-bullhorn bg-soft-warning"></i>
                                                              </div>
                                                              <div class="media-body align-self-center">
                                                                  <h4 class="mt-0 mb-2 font-16">Marketing e promozioni (follow-up):</h4>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="col-sm-2 align-self-center">

                                                          <!-- <if data="{{privacyMarketing}}==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyMarketing" checked>
                                                                  <label class="custom-control-label text-muted" for="privacyMarketing"></label>
                                                              </div>
                                                          </if>
                                                          <if data="{{privacyMarketing}}!==true">
                                                              <div class="custom-control custom-switch switch-primary">
                                                                  <input type="checkbox" class="custom-control-input" id="privacyMarketing">
                                                                  <label class="custom-control-label text-muted" for="privacyMarketing"></label>
                                                              </div>
                                                          </if> -->

                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <!-- <div class="col-12">
                                          <input type="hidden" name="nonce" id="nonce" value="{{postNonce}}">
                                          <input type="hidden" name="ajaxurl" id="ajaxurl" value="{{postAjaxurl}}">
                                          <input type="hidden" name="entryid" id="entryid" value="{{postEntryId}}">
                                          <button id="btn-save-privacy" class="btn btn-gradient-primary btn-lg px-4 mt-3 float-right mb-0">Aggiorna</button>
                                          <button id="btn-saving-privacy" class="btn btn-gradient-primary btn-lg px-4 mt-3 float-right mb-0 hidden">
                                          <i class="fa fa-spinner spinner"></i></button>
                                      </div> -->
                                  </div>                                
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="settings_detail">
                        </div>
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
import { Profilo } from '../schema/classes.js'
import { GETProfiloFatturato } from '../memoFly-api/profile/GETProfiloFatturato.js';
import { GETProfiloUltimiAppuntamenti } from '../memoFly-api/profile/GETProfiloUltimiAppuntamenti.js';
import { GETProfiloServiziRichiesti } from '../memoFly-api/profile/GETProfiloServiziRichiesti.js';
import { GETProfiloLastTrend } from '../memoFly-api/profile/GETProfiloLastTrend.js';
import { GETProfiloAppuntamentiMancati } from '../memoFly-api/profile/GETProfiloAppuntamentiMancati.js';
import { GETProfiloTrendings } from '../memoFly-api/profile/GETProfiloTrendings.js';
import { GETProfiloGraficoAppuntamenti } from '../memoFly-api/profile/GETProfiloGraficoAppuntamenti.js';
import { GETProfiloAppuntamentiCancellati } from '../memoFly-api/profile/GETProfiloAppuntamentiCancellati.js';
import { GETProfiloAppuntamentiAnno } from '../memoFly-api/profile/GETProfiloAppuntamentiAnno.js';
import { GETProfiloIntestazione } from '../memoFly-api/profile/GETProfiloIntestazione.js';
import VueApexCharts from "vue-apexcharts";
import Badge from './../components/common/Badge.vue';

import  { wordCloudsCounter }  from './../services/wordCloudsCounter.js'
 
import {Toast} from "../services/Toast.js";

@Component({
  components: {
    Pagination,
    VueApexCharts,
    Badge,
  },
})


export default class ClientWizard extends Vue {

  public profile: any;
  public dataServices: any;
  public service: any;
  public coworkers: any;
  public disabled: any = true;

  public series:any = [];
  public seriesAppuntamentiCalendario: any = [];
  public seriesAffidabilitàCliente: any = [];
  public lastTrends: any = [];
  public words: any = [];


  data() {

    this.profile = new Profilo;

    //TESTING
    this.seriesAffidabilitàCliente = [44, 55, 67, 83];

    return {
      profile: this.profile,
      disabled: this.disabled,
      lastTrends: this.lastTrends,
      words: this.words,
      seriesAppuntamentiCalendario: this.seriesAppuntamentiCalendario,
      seriesAffidabilitàCliente: this.seriesAffidabilitàCliente,
      chartAppuntamentiCalendario: {
        chart: {
          type: 'line',
          toolbar: {
            show: false
          }
        },
        stroke: {
          width: 3,
          curve: 'smooth',
          dashArray: [0, 0, 0]
        },
        xaxis: {
          categories: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: [ '#ED4F5A','#3BD9B6','#0000EE'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
          },
        },
        markers: {
          size: 4,
          colors: ["#FFA41B"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7,
          }
        },
        yaxis: {
          min: 0,
          title: {
            text: '',
          },
        }
      },
      chartAffidabilitàCliente: {
        chart: {
          type: 'radialBar',
          toolbar: {
            show: false
          }
        },
         plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: '22px',
                  },
                  value: {
                    fontSize: '16px',
                  },
                  total: {
                    show: true,
                    label: 'Total',
                    formatter: function (w) {
                      return 249
                    }
                  }
                }
              }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
          },

 
      

    }

  }

  async mounted() {

    if (this.$route.params.id && this.$route.params.phone) {

      const profileID = this.$route.params.id;
      const profilePhone = this.$route.params.phone;

      this.profile = new Profilo;

      await GETProfiloFatturato(profilePhone)
      .then(response => {
         if(response.status == 200 && response.data.fatturato){
          this.profile.fatturato = response.data.fatturato;
        }
      });

      await GETProfiloUltimiAppuntamenti(profilePhone)
      .then(response => {
         if(response.status == 200 && response.data.ultimiAppuntamenti){
          this.profile.ultimiAppuntamenti = response.data.ultimiAppuntamenti;
        }
      });

      await GETProfiloServiziRichiesti(profilePhone)
      .then(response => {
         if(response.status == 200){
          this.profile.serviziRichiesti = response.data.servizi;
        }
      });

      await GETProfiloLastTrend(profilePhone)
      .then(response => {
         if(response.status == 200){
          this.profile.lastTrend = JSON.parse(response.data.lastTrend);
        }
      });

      await GETProfiloAppuntamentiMancati(profilePhone)
      .then(response => {
         if(response.status == 200){
          this.profile.appuntamentiMancati = response.data.mancati;
        }
      });

      await GETProfiloTrendings(profilePhone)
      .then(response => {
         if(response.status == 200){
          this.profile.trendings = response.data.trendings;
        }
      });

      await GETProfiloGraficoAppuntamenti(profilePhone)
      .then(response => {
         if(response.status == 200 && response.data.graficoAppuntamenti){
            this.profile.graficoAppuntamenti = response.data.graficoAppuntamenti;
        }
      });

      await GETProfiloAppuntamentiCancellati(profilePhone)
      .then(response => {
         if(response.status == 200){
          this.profile.appuntamentiCancellati = response.data.cancellati;
        }
      });

      await GETProfiloAppuntamentiAnno(profilePhone)
      .then(response => {
         if(response.status == 200){
          this.profile.appuntamentiAnno = response.data.appuntamentiAnno;
        }
      });

      await GETProfiloIntestazione(profileID, profilePhone)
      .then(response => {
         if(response.status == 200 && response.data){
          this.profile = {...this.profile, ...response.data};
        }
      });


      console.log(JSON.stringify(this.profile));

      this.renderProcess();

    }


  }



    renderProcess(){

        ///GRAFICO APPUNTAMENTI
        this.seriesAppuntamentiCalendario = [];

        if('entry' in this.profile.graficoAppuntamenti){
            const data = this.profile.graficoAppuntamenti.entry.map((element:any)=> element.data);
            this.seriesAppuntamentiCalendario = [{data: data}];
        }

        if('series' in this.profile.lastTrend){
            
            const data = this.profile.lastTrend.series.data;
            const categories = this.profile.lastTrend.xassis.categories;

            this.lastTrends = [];

            for(let index = 0; index < data.length; index++){
                data[index] = data[index] as any;
                let value = (data[index] * 100).toFixed(0);
                this.lastTrends.push({name: categories[index], value: value});
            }

        }

        if('trendings' in this.profile){

            this.profile.trendings = wordCloudsCounter(this.profile.trendings);
        }




        
    }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
