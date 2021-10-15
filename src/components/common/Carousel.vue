<template>
  <div class="w-100">
    <div v-if="items.length==0" class="col-11 mx-auto">
      <Badge class="mx-auto" message="Non hai appuntamenti oggi"></Badge>
    </div>
    <div class="w-100 carousel-wrapper m-3">
      <div v-if="items.length>0">
        <div class="w-100 carousel">

          <div  v-bind:class="item.class" v-for="item in items" v-bind:key="item" >

              <div class="w-100">
                <div class="row">
                  <div class="col-5 offset-7">
                    <div class="row col-12">
                      <div class="mx-auto ">
                          <a class="carousel-control-prev mt-1  nextPrevDimension" role="button" v-on:click="prevItem(item)">
                            <span class="carousel-control-prev-icon float-right bold mr-n4" ></span>
                          </a>
                          <a class="carousel-control-next mt-1 nextPrevDimension" role="button" v-on:click="nextItem(item)">
                            <span class="carousel-control-next-icon mr-n3" ></span>
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-8">
                    <h4 class="text-primary font-roboto weight-700 size-18">{{ item.name }}</h4>
                  </div>
                </div>
                <div class="w-100">
                  <hr>
                  <div class="mt-5 ">
                    <h5 class="font-roboto weight-700 size-18 mb-5">{{ item.service }}</h5>
                    <p class="font-roboto weight-400 size-18 mb-5">Cliente {{ item.client }}</p>
                    <p class=" text-muted font-roboto weight-400 size-18 mb-5">Dalle {{ item.start }} alle {{ item.end }}</p>
                  </div>
                </div>
                
              </div>

          </div>

          <div class="carousel__button--next" v-on:click="moveNext()"></div>
          <div class="carousel__button--prev " v-on:click="movePrev()"></div>

        </div>
        <div class="w-100 bg-white sticky-bottom p-4">

          <div class="row bg-light p-2 m-2">
            <div class="d-flex col-3 offset-1">
              <h1 class="align-self-center text-align-center font-roboto weight-700 size-36">{{ totalToday}}</h1>
            </div>
            <div class="col-8">
                <h4 class="font-roboto weight-700 size-18 mb-0">APPUNTAMENTI</h4>
                <p class="text-muted font-roboto weight-400 size-18">Settimana scorsa: {{ totalLastWeek }}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

    import { Component, Prop, Vue } from 'vue-property-decorator';
    import Badge from '../common/Badge.vue';
    import { GETCountAppointments } from "../../memoFly-api/dashboard/GETCountAppointmnets";
    import moment from 'moment';

    @Component({
      components: {
        Badge,
      },
    })

    export default class Carousel extends Vue {

      @Prop() public items!: any [];

      public current:any = 0;
      public totalToday:any = 0;
      public totalLastWeek:any = 0;

      data(){

        this.items = [];

        this.init();  

        return {
          current: this.current,
          items: this.items,
          totalToday: this.totalToday,
          totalLastWeek: this.totalLastWeek
        }

      }

      init(){

         GETCountAppointments()
            .then((dataAppointments:any)=>{
                if(dataAppointments.data){

                    let todayList = dataAppointments.data.appuntamenti;
                    let counting = dataAppointments.data.conteggioAppuntamenti;

                    this.totalToday = counting.oggi;
                    this.totalLastWeek = counting.settimanaScorsa;

                    this.items = todayList.map((elm:any, index:number) =>{

                        elm.start?elm.start = moment(elm.start).format("HH:MM"):elm.start="";
                        elm.end?elm.end = moment(elm.end).format("HH:MM"):elm.end="";

                        let carouselClass = "carousel__item hideItem";

                            index==0?carouselClass="carousel__item showItem":null

                        return { 
                            id: elm.id,
                            index: index+1,
                            name:elm.nome,
                            service: elm.servizio,
                            client: elm.client,
                            start: elm.start,
                            end: elm.end,
                            class: carouselClass,
                        }

                    });               


                }
            })
      }


      prevItem(item:any){

        if(this.items.length){

            let currentIndex = this.items.indexOf(item);
            let prevIndex = 0;

            if(currentIndex == 0){
              prevIndex = this.items.length - 1;
            }else{
              prevIndex =  (currentIndex - 1) % this.items.length;
            }


            this.current = prevIndex;

            for(let index = 0; index < this.items.length; index++){

                if(index==prevIndex){
                  this.items[index].class = "showItem";
                }else{
                  this.items[index].class = "hideItem";
                }

            }

        }

      }

      nextItem(item:any){

        if(this.items.length){

            let currentIndex = this.items.indexOf(item);
            let nextIndex = (currentIndex + 1) % this.items.length;

            this.current = nextIndex;


            for(let index = 0; index < this.items.length; index++){

                if(index==nextIndex){
                  this.items[index].class = "showItem";
                }else{
                  this.items[index].class = "hideItem";
                }

            }

        }

      }




    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .carousel-wrapper {
    overflow: hidden;
    width: 90%;
    margin: 0px;
  }

  .showItem{
    display: block;
  }

  .hideItem{
    display: none;
  }

  .nextPrevDimension{
    height: 3.3rem;
    width:  3.3rem;
    font-weight: bolder;
    background-color: #F1F5FA;
  }



</style>
