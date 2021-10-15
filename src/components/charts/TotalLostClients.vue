<template>
      <div class="flexCol card report-card">
          <div class="card-body">

                <div class="row">
                  <div class="d-flex col-12">
                    <h4 class="titolo-label align-self-center mt-2 weight-700 size-16 font-poppins">Persi / Nuovi </h4>
                  </div>
                </div>

              <div v-if="series.length>0" class="w-100 justify-content-center">
                  <VueApexCharts class="hideBox" height="400" v-bind:options="chartOptions" v-bind:series="series"/>
              </div>
              <div v-if="series.length==0" class="row justify-content-center">
                <div class="col-sm-12 col-md-6 col-lg-4 mx-auto">
                  <Badge message="Nessun dato"></Badge>
                </div>
              </div>
          </div>
      </div>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';
import VueApexCharts from "vue-apexcharts";
import { GETLostClients } from './../../memoFly-api/dashboard/GETLostClients';
import Badge from './../common/Badge.vue';


@Component({
  components: {
    VueApexCharts,
    Badge,
  },
})


export default class TotalLostClients extends Vue {

    public series:any = [];
    public categories:any = [];

    public chartOptions:any = {};


    init() {

        this.series = [];

        this.chartOptions =  {
                      chart: {
                        type: 'area',
                        toolbar: {
                          show: false
                        }
                      },
                      zoom: {
                        enabled: false
                      },
                      stroke: {
                        width: 3,
                        curve: 'smooth',
                        dashArray: [8, 0,]
                      },
                      xaxis: {
                        categories: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
                      },
                      colors:['#ED4F5A', '#3BD9B6'],
                      markers: {
                        size: 2,
                        colors: ["#FFA41B"],
                        strokeColors: "#fff",
                        strokeWidth: 1,
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
                    };



        GETLostClients()
          .then((clients:any)=>{

            if(clients.persi && clients.nuovi){
                this.series = [{name:'Clienti persi', data: clients.persi.data},{name:'Nuovi clienti', data: clients.nuovi.data}];
            }else{
              this.series = [];
            }

          })


    }

    data() {

      this.init();

      return {
        series: this.series,
        chartOptions: this.chartOptions,
      }

    }





}
</script>

<style lang="scss">
    .hideBox .apexcharts-toolbar{
      display: none !important;
    }
    .hideBox .apexcharts-data-labels{
      display: none !important;
    }

</style>
