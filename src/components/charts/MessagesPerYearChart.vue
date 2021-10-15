<template>
      <div class="flexCol card report-card">
          <div class="card-body">
              <div class="row">
                  <div class="d-flex col-8">
                    <h4 class="titolo-label mt-3 align-self-center mt-2 weight-700 size-16 font-poppins">Messaggi</h4>
                  </div>
                  <div class="col-4">
                    <div class="float-right mt-0">
                      <ol class="breadcrumb">
                          <li class="breadcrumb-item" v-bind:class="{active: monthActive}" v-on:click="choice('month')">
                            <span>Mese</span>
                          </li>
                          <li class="breadcrumb-item" v-bind:class="{active: yearActive}" v-on:click="choice('year')">
                            <span>Anno</span>
                          </li>
                      </ol>
                  </div>   
                  </div>
                </div>                            
              <div class="w-100 justify-content-center bg-bg-soft-danger">
                  <VueApexCharts height="300" v-bind:options="chartOptions" v-bind:series="series"/>
              </div>
          </div>
      </div>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';
import VueApexCharts from "vue-apexcharts";
import { GETMessagesMonth } from './../../memoFly-api/dashboard/GETMessagesMonth.js'

@Component({
  components: {
    VueApexCharts,
  },
})

export default class MessagesPerYearChart extends Vue {
  

    public monthSeries:any = [];
    public yearSeries:any = [];

    public monthCategories:any = [];
    public yearCategories:any = [];

    public series:any = [];
    public categories:any = [];

    public monthActive:any;
    public yearActive:any;

    public chartOptions:any = {};

    choice(step:any){

      switch(step){
        case "month":
          this.series = [{name:this.monthCategories,data:this.monthSeries}]
          this.categories = this.monthCategories;
          this.monthActive = true;
          this.yearActive = false;
          this.chartOptions = {
            chart: {
              type: 'line',
            },
            stroke: {
              width: 3,
              curve: 'smooth'
            },
            xaxis: {
              categories: this.monthCategories,
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

        break;
        case "year":
          this.series = [{name:this.yearCategories,data:this.yearSeries}]
          this.categories = this.yearCategories;
          this.monthActive = false;
          this.yearActive = true;
          this.chartOptions = {
            chart: {
              type: 'line',
            },
            stroke: {
              width: 3,
              curve: 'smooth'
            },
            xaxis: {
              categories: this.yearCategories,
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
        break;
        default: 
          this.series = [{name:this.monthCategories,data:this.monthSeries}]
          this.categories = ["test", "test"];
          this.monthActive = true;
          this.yearActive = false;
          this.chartOptions = {
            chart: {
              type: 'line',
              toolbar: {
                show: false,
              }
            },
            stroke: {
              width: 3,
              curve: 'smooth'
            },
            xaxis: {
              categories: this.monthCategories,
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
      }

    }

    data() {

      this.init();

      return {
        monthActive: this.monthActive,
        yearActive: this.yearActive,
        series: this.series,
        categories: this.categories,
        chartOptions: this.chartOptions,
        monthSeries: this.monthSeries,
        monthCategories: this.monthCategories,
        yearSeries: this.yearSeries,
        yearCategories: this.yearCategories 
        
      }

    }

    init(){

      this.chartOptions = {
                  chart: {
                    type: 'line',
                  },
                  stroke: {
                    width: 3,
                    curve: 'smooth'
                  },
                  xaxis: {
                  categories: [],
                  },
                  markers: {
                    size: 1,
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

      GETMessagesMonth()
        .then((dataMessages:any)=>{
          if(dataMessages.mese && dataMessages.anno){

            this.monthSeries = dataMessages.mese.data;
            this.monthCategories = dataMessages.mese.nome;
            this.yearSeries = dataMessages.anno.data;
            this.yearCategories = dataMessages.anno.nome;

            this.series = [{name:this.monthCategories,data:this.monthSeries}]
            this.categories = this.monthCategories;

            this.chartOptions = {
              chart: {
                type: 'line',
                toolbar: {
                  show: false
                }
              },
              stroke: {
                width: 3,
                curve: 'smooth'
              },
              xaxis: {
                categories: (this.monthCategories).split(","),
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
             
          }
        })
               
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

</style>
