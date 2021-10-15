<template>
      <div class="flexCol card report-card">
          <div class="card-body ">
              <h4 class="titolo-label mt-3 weight-700 size-16 font-poppins">Appuntamenti per servizio</h4>
              <div v-if="series.length>0" class="w-100 justify-content-center bg-bg-soft-danger">
                  <VueApexCharts class="pt-5 mt-5 hide-data-labels" height="300" v-bind:options="chartOptions" v-bind:series="series"/>
              </div>
              <div v-if="series.length==0" class="justify-content-center pt-3">
                <Badge class="w-50" message="Non hai appuntamenti"></Badge>
              </div>
          </div>
      </div>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';
import VueApexCharts from "vue-apexcharts";
import Badge from './../common/Badge.vue';
import { GETServices } from './../../memoFly-api/GETServices.js';
import { GETAppointmentsPerService } from './../../memoFly-api/dashboard/GETAppointmentsPerService';

@Component({
  components: {
    VueApexCharts,
    Badge,
  },
})

export default class AppuntamentiServizioChart extends Vue {
  
    public series:any = [];
    public labels:any = [];
    public chartOptions:any = {};

    data() {

      this.init();

      this.chartOptions =  { 
                      chart: { type: 'donut'},
                      labels: [],
                      series: [],
                      legend: {position: 'bottom'},
                      responsive: [{
                        breakpoint: 480,
                      }]};

      return {
          chartOptions: this.chartOptions,
          series: this.series,
          labels: this.labels
      }


    }

    init(){

          this.labels = [];
          this.series = [];

          GETAppointmentsPerService()
            .then((dataService :any)=>{
                if(dataService.data){
                   this.labels = dataService.data.labels;
                   this.series = dataService.data.services;

                   this.chartOptions =  { 
                      chart: { type: 'donut'},
                      labels: this.labels,
                      series:this.series,
                      legend: {position: 'bottom'},
                      responsive: [{
                        breakpoint: 480,
                      }]};
                }
            });
    }


}
</script>

<style lang="scss">

    .hide-data-labels .apexcharts-datalabels
     {
        display: none !important;
    }
    

</style>
