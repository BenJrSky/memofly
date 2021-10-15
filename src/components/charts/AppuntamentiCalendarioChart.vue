<template>
      <div class="flexCol card report-card">
          <div class="card-body">
              <h4 class="titolo-label mt-3 weight-700 size-16 font-poppins">Appuntamenti per calendario</h4>
              <div v-if="series.length>0" class="w-100 justify-content-center">
                  <VueApexCharts height="400" v-bind:options="chartOptions" v-bind:series="series"/>
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

import { GETAppointmentsPerCalendar } from './../../memoFly-api/dashboard/GETAppointmentsPerCalendar'

@Component({
  components: {
    VueApexCharts,
    Badge,
  },
})


export default class AppuntamentiCalendarioChart extends Vue {
  
    public series:any = [];


    data() {


      this.series = [];

      this.init();  

    return {
      series: this.series,
      chartOptions: {
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
      }
      
    }

    }

    init(){

        GETAppointmentsPerCalendar()
            .then((dataAppointments:any)=>{
               if(dataAppointments.data){
                  return this.series = dataAppointments.data.map((calendar:any) =>{
                      return {
                        name:calendar.nome,
                        data:calendar.data,
                      }
                  });
               }
            });
    }

}




</script>

<style lang="scss">

.fc .fc-toolbar-title{
  font-size: 1.5rem;
}

</style>
