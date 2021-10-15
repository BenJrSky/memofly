<template>
    <div class="col-sm-12 col-md-4 d-flex h-75">
        <div class="flexCol card report-card w-100">
            <div class="card-body">
                <div class="row p-2">
                    <div class="col-6">
                        <div class="row">
                            <div class="pl-3 pt-4">
                                <h4 class="mt-0 weight-700 size-16 font-poppins titolo-label">Nuovi clienti</h4>
                                <div v-if="differenzaMesi > 0">
                                  <div class="row pl-3">
                                    <p class="text-muted weight-400 size-16">Ultimo mese: {{ Math.abs(differenzaMesi) }}</p>
                                    <i class="pl-2 pt-1 fas fa-caret-up text-success font-16"></i>
                                  </div>
                                </div>
                                <div v-else>
                                  <div class="row pl-3">
                                    <p class="text-muted weight-400 size-16">Ultimo mese: {{ differenzaMesi }}</p>
                                    <i class="pl-2 pt-1 fas fa-caret-down text-danger font-16"></i>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 overflow-hidden">
                        <VueApexCharts class="hideLabels" height="150" v-bind:options="chartOptions" v-bind:series="series"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import VueApexCharts from "vue-apexcharts";
import { GETClientsChart } from '../../memoFly-api/dashboard/GETClientsChart.js';
import { GETLostClients } from './../../memoFly-api/dashboard/GETLostClients.js';

@Component({
  components: {
    VueApexCharts,
  },
})
export default class ResumeNewClients extends Vue {

    public lastMonth :number = 0;
    public differenzaMesi :number = 0;
    public series :any = [];
    public questoMese: any;

    data() {

        this.init();

            return {
                series: this.series,
                lastMonth: this.lastMonth,
                chartOptions: {
                    chart: {
                      type: 'area',
                    },
                  fill:{
                    type: "gradient",
                    colors:['#3BD9B6'],
                    },
                  stroke: {
                    width: 5,
                    curve: 'smooth',
                    colors:['#3BD9B6'],
                  }
                }

            }

    }

    init(){

        this.lastMonth = 0;
        this.differenzaMesi = 0;


        GETLostClients()
            .then((clients:any)=>{

                if(clients.nuovi.data){
                    this.series = [{name:'',data: clients.nuovi.data}];
                    this.questoMese = new Date().getMonth()
                    this.differenzaMesi = clients.nuovi.data[this.questoMese] - clients.nuovi.data[this.questoMese -1];

                }else{
                    this.series = [];
                }

             });


        GETClientsChart()
            .then((clients:any)=>{

                if(clients.nuoviClientiMese){
                    this.lastMonth = clients.nuoviClientiMese;
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
    .hideLabels .apexcharts-toolbar
     {
        display: none !important;
    }
    

</style>
