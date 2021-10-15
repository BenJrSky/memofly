<template>
    <div class="flexCol card report-card">
        <div class="card-body ">
              <div class="row">
                <div class="d-flex col-6">
                  <h4 class="titolo-label mt-3 weight-700 size-16 font-poppins">Messaggi per servizio</h4>
                </div>
                <div class="col-6">
                  <div class="float-right mt-0">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item" v-bind:class="{active: weekActive}" v-on:click="choice('week')">
                          <span>Settimana</span>
                        </li>
                        <li class="breadcrumb-item" v-bind:class="{active: yearActive}" v-on:click="choice('year')">
                          <span>Anno</span>
                        </li>
                    </ol>
                </div>   
                </div>
              </div>                              
            <div v-if="series.length>0" class="row justify-content-center">
                <div class="col-12">
                    <VueApexCharts height="300" v-bind:options="chartOptions" v-bind:series="series"/>
                </div>
            </div>
            <div v-if="series.length==0" class="justify-content-center pt-3">
              <Badge class="w-50" message="Non hai messaggi"></Badge>
            </div>
        </div>
    </div>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';
import VueApexCharts from "vue-apexcharts";
import { GETServiceSms } from './../../memoFly-api/dashboard/GETServiceSms.js';
import Badge from './../common/Badge.vue';

@Component({
  components: {
    VueApexCharts,
    Badge,
  },
})

export default class MessagesPerService extends Vue {
  
    public series:any = [];
    public labels:any = [];
    public chartOptions:any = {};

    public weekSeries:any = [];
    public yearSeries:any = [];

    public weekCategories:any = [];
    public yearCategories:any = [];
    public categories:any = [];

    public weekActive:any;
    public yearActive:any;


    data() {

      this.init();

      this.chartOptions =  {        
            chart: {
              type: 'bar',
              height: 350,
              toolbar: {
                show: false
              }
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'],
            },
            yaxis: {
              title: {
                text: ''
              }
            },
            fill: {
              opacity: 1
            },
      };

      return {
          series: this.series,
          weekSeries: this.weekSeries,
          yearSeries: this.yearSeries,
          weekCategories: this.weekCategories,
          yearCategories: this.yearCategories,
          chartOptions: this.chartOptions,
      }


    }

    init(){

      this.series = [];

      this.weekCategories = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
      this.yearCategories = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago','Set','Ott','Nov','Dic'];
      this.weekSeries = [];
      this.yearSeries = [];

      GETServiceSms()
        .then((dataSms:any)=>{
          if(dataSms.data){

            let week = dataSms.data.settimana.map((data:any)=>{ return { name: data.name, data: data.values, count: 0}});
            let year = dataSms.data.mese.map((data:any)=>{ return { name: data.name, data: data.values, count: 0}});

                week.forEach((value:any)=>{
                    value.data.forEach((data:any)=>{ 
                      value.count = parseInt(value.count + data);
                    })
                });

                year.forEach((value:any)=>{
                    value.data.forEach((data:any)=>{ 
                      value.count = parseInt(value.count + data);
                    })
                });


              let weekA = { name:'', data:'', count:0 };
              let weekB = { name:'', data:'', count:0 };
              let weekC = { name:'', data:'', count:0 };

              let yearA = { name:'', data:'', count:0 };
              let yearB = { name:'', data:'', count:0 };
              let yearC = { name:'', data:'', count:0 };

              let check = false;

               week.forEach((value:any)=>{
                  check=false;
                  if(value.count>weekA.count && check==false){
                    weekA=value;
                    check=true;
                  }
                  if(value.count>weekB.count && check==false){
                    weekB=value;
                    check=true;
                  }
                  if(value.count>weekC.count && check==false){
                    weekC=value;
                    check=true;
                  }
                });

                week = [weekA,weekB,weekC];

                year.forEach((value:any)=>{
                  check=false;
                  if(value.count>yearA.count && check==false){
                    yearA=value;
                    check=true;
                  }
                  if(value.count>yearB.count && check==false){
                    yearB=value;
                    check=true;
                  }
                  if(value.count>yearC.count && check==false){
                    yearC=value;
                    check=true;
                  }
                });

                year = [yearA,yearB,yearC];

            this.weekSeries = week;
            this.yearSeries = year;
            this.series = this.weekSeries;
            this.categories = this.weekCategories;
          }
      });

        
    }

       choice(step:any){

      switch(step){
        case "week":
          this.series = this.weekSeries;
          this.categories = this.weekCategories;
          this.weekActive = true;
          this.yearActive = false;
          this.chartOptions =  {        
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: this.weekCategories,
            },
            yaxis: {
              title: {
                text: ''
              }
            },
            fill: {
              opacity: 1
            },
          };
        break;
        case "year":
          this.series = this.yearSeries;
          this.categories = this.yearCategories;
          this.weekActive = false;
          this.yearActive = true;
          this.chartOptions =  {        
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: this.yearCategories,
            },
            yaxis: {
              title: {
                text: ''
              }
            },
            fill: {
              opacity: 1
            },
          };
        break;
        default: 
          this.series = this.weekSeries;
          this.categories = this.weekCategories;
          this.weekActive = true;
          this.yearActive = false;
          this.chartOptions =  {        
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '50%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: this.weekCategories,
            },
            yaxis: {
              title: {
                text: ''
              }
            },
            fill: {
              opacity: 1
            },
          };
      }

    }


}
</script>

<style scoped lang="scss">

</style>
