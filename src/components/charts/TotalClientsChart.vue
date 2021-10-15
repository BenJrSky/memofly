<template>
      <div class="flexCol card report-card posizioneGrafico">
          <div class="card-body position-relative">
                <div class="row">
                  <div class="d-flex col-12">
                    <h4 class="titolo-label align-self-center mt-2 weight-700 size-16 font-poppins">Totale clienti</h4>
                  </div>
                </div>

              <div v-if="series.length>0" class="w-100 justify-content-center">
                  <VueApexCharts height="400" v-bind:options="chartOptions" v-bind:series="series"/>
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
import { GETTotalClients } from './../../memoFly-api/dashboard/GETTotalClients';
import Badge from './../common/Badge.vue';


@Component({
  components: {
    VueApexCharts,
    Badge,
  },
})

export default class TotalClientsChart extends Vue {

    public series:any = [];
    public categories:any = [];
    public chartOptions:any = {};

    init() {

        this.series = [];

        this.chartOptions =  {
            chart: {
              type: 'line',
              toolbar: {
                show: false
              }
            },
            stroke: {
              width: 7,
              curve: 'smooth'
            },
            xaxis: {
              categories: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                gradientToColors: [ '#FDD835'],
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
        };

        GETTotalClients()
          .then((clients:any)=>{
            if(clients.data){
              this.series = [{data:clients.data}];
            }else{
              this.series = [];
            }
        });


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

<style scoped lang="scss">

  .hideBox .apexcharts-toolbar{
    display: none !important;
  }
  .hideBox .apexcharts-data-labels{
    display: none !important;
  }
  .posizioneGrafico{
    top: -2.5rem;
  }

</style>
