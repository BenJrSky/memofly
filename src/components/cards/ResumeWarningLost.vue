<template>
    <div class="col-sm-12 col-md-4 d-flex h-75">
        <div class="flexCol card report-card w-100">
            <div class="card-body">
                <div class="row p-2">
                    <div class="col-6">
                        <div class="row">
                            <div class="pl-3 pt-4">
                                <h4 class="mt-0 weight-700 size-16 font-poppins titolo-label">Clienti a rischio perdita</h4>
                                <p class="text-muted weight-400 size-16">Ultimo mese {{rischio}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 overflow-hidden pt-3">
                        <VueApexCharts class="hideLabels" height="150" v-bind:options="chartOptions" v-bind:series="series" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import VueApexCharts from "vue-apexcharts";
import { GETClientsChart } from './../../memoFly-api/dashboard/GETClientsChart.js';

@Component({
  components: {
    VueApexCharts,
  },
})
export default class ResumeWarningLost extends Vue {

    public chartOptions :any = {};
    public rischio : any = 0;
    public series :any = [];

    data() {

        this.init();

           this.chartOptions =  { 
            chart: {
              type: 'donut'
            },
            labels: [],
            series:[],
            legend: {position: 'bottom'},
            responsive: [{
              breakpoint: 480,
            }]};

            return {
                series: this.series,
                chartOptions: this.chartOptions,
            }

    }

    init(){

         this.series = [100,0];
      
         this.chartOptions =  { 
                    chart: { type: 'donut'},
                    labels: [],
                    series:this.series,
                    legend: {position: 'bottom'},
                    responsive: [{
                      breakpoint: 480,
                    }]};

         GETClientsChart()
            .then((clients:any)=>{

                if(clients.nuoviClientiMese){
                    this.series = [100,clients.clietniArischio];
                    this.rischio = clients.clietniArischio;
                }

            });

    }
  

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .hideLabels .apexcharts-yaxis,
    .hideLabels .apexcharts-xaxis,
    .hideLabels .apexcharts-datalabel,
    .hideLabels .apexcharts-gridline,
    .hideLabels .apexcharts-toolbar,
    .hideLabels .apexcharts-legend,
    .hideLabels .apexcharts-datalabels
     {
        display: none !important;
    }
    

</style>
