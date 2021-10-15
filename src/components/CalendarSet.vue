<template>
  <div class="row">
    <div class="card col-12">
        <div class="card-body col-12 p-4">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                        <h4 class="mt-0 header-title font-roboto weight-700 size-17">Calendari</h4>
                        <small class="form-text text-muted font-poppins weight-400 size-14">Sei connesso al Google Account laurarossihair@gmail.com il tuo abbonamento prevede un massimo di {{ company.calendari}} </small>
                    </div>            
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-sm-12">
                    <div class="form-group">
                        <div class="row col-12">
                            <h4 class="mt-0 header-title font-roboto weight-700 size-17">Tutti i calendari</h4>
                            <h4 class="mt-0 header-title font-roboto weight-700 size-17 right-0">Seleziona al massimo {{ company.calendari}}</h4>
                        </div>
                          <div class="col-12 pl-0">
                            <div v-for="calendar in calendarList" :key="calendar" class="row m-0 pl-0 pr-0">
                                <div class="custom-control custom-checkbox border m-0 p-2 w-100">
                                    <input type="checkbox" v-bind:id="calendar.id" v-model="calendar.active" class="custom-control-input custom-calendar">
                                    <label class="custom-control-label font-poppins weight-400 size-14" v-bind:for="calendar.id">{{ calendar.id }}</label>
                                </div>
                            </div>
                         </div>
                
                    </div>            
                </div>
                 <div class="col-12 mb-3">
                    <button type="submit" class="btn btn-gradient-primary mr-2 float-right font-poppins weight-700 size-14" v-on:click="update()">Aggiorna</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { GETUser } from "../memoFly-api/GETUser.js";
    import { GETCalendars } from "../memoFly-api/GETCalendars.js";
    import { PUTCalendars } from "../memoFly-api/PUTCalendars.js";

    import { Toast } from "../services/Toast.js";

    @Component({
        components: {
        },
    })


    export default class CalendarSet extends Vue {

        public services :any;
        public dataServices :any;
        public service :any;
        public coworkers :any;
        public disabled :any = true;
        public company: any = [];
        public calendarList : any = [];
        public selectedCalendars : any = [];
        public calendarLimit: number = 0;

        data() {
            
            return {
                company: this.company,
                calendarList: this.calendarList,
                calendarLimit: this.calendarLimit,
                selectedCalendars: this.selectedCalendars,
            }
            
        }

        mounted() {

            this.disabled = true;

            GETUser()
            .then((response: any) => {

                if (response.status == 200) {
                    this.processUser(response.data);
                } else {
                    this.company = [];
                }

            }).finally(()=>{

                GETCalendars()
                    .then((response:any)=>{

                        this.calendarList = [];

                        for(let calendarName in response.data.idConNomi){
                            this.calendarList.push({id: calendarName, active:false})
                        }

                        this.selectedCalendars = response.data.calendari.map((item:any)=>{
                            return {
                                id: item.calendario
                            }
                        });

                    })
                    .finally(()=>{

                            for(let selected of this.selectedCalendars){
                                for(let calendar of this.calendarList){

                                    if(selected.id === calendar.id){
                                        calendar.active = true;
                                    }

                                }
                            }

                    });
                    

            });
            
        }

        processUser(company){

            let result = {};

            //FORMATTING 
            if(company){
            company.sottoscrizione = company.sottoscrizione.replace("Memofly","");
            }else{
            company = {};
            }

            let calendarString = "";

            this.calendarLimit = company.numCalendari;

            if(company.numCalendari <=1 ){
                calendarString = company.numCalendari + " calendario";
            }else{
                calendarString = company.numCalendari + " calendari";
            }

            result = { 
                ...company,  
                calendari: calendarString
            };

            this.company = result;

        }

        update(){

            let selectedCalendars = this.calendarList.filter(calendar => calendar.active === true);
            let selectedNumber = selectedCalendars.length;

            if(selectedNumber > this.calendarLimit){ 

                Toast({status: 400},{success:"Calendari aggiornati con successo",error:"Hai selezionato "+selectedNumber+" calendari invece che "+this.calendarLimit});

            }else{
                
                let promises: any = [];

                let calendars: any = {};

                let index = 1;

                for(let calendar of selectedCalendars){
                    calendars[index] = calendar.id;
                    index++;
                }

                PUTCalendars(calendars).then(result=>{

                    let data = result[0];

                    if(data && data.changedRows){
                        Toast({status: 200},{success:"Calendari aggiornati con successo"});
                    }else{
                        Toast({status: 400},{error:"Errore durante"});
                    }

                });


            }

        }
                
    



      

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
