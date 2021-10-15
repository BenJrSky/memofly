<template>
  <div class="card-body">
    <div class="row">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active">{{ company.sottoscrizione }}</li>
            <li class="breadcrumb-item">{{ company.messaggiMese }} - {{ company.calendari }}</li>
            <li class="breadcrumb-item">{{ company.giorniRimanenti }}</li>
        </ol>
        <span class="right-0">
          <button  type="button" class="btn btn-lg btn-outline-primary mr-3 radius-20 weigth-700 size-14">
            <a class="text-white" target="_blank" href="https://www.memofly.it/prodotto/abbonamenti-memofly/?switch-subscription=6916&item=1824&_wcsnonce=40357e40ae&auto-switch=true" >
              Migliora
            </a>
          </button>
        </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETUser } from "../../memoFly-api/GETUser.js";
import moment from 'moment';

@Component({
  components: {

  },
})

export default class UserDetails extends Vue {

  public company: any = {};
  public test :any;

  data() {

    this.init();

    return {
      company: this.company,
      test: this.test,
    };
  }

  init() {
    this.company = [];

  GETUser()
    .then((response: any) => {

        if (response.status == 200) {
          this.process(response.data);
        } else {
          this.company = [];
        }

      });

  }

  process(company){

    console.log(JSON.stringify(company))

    let result = {};

    //FORMATTING 
    if(company){
      company.sottoscrizione = company.sottoscrizione.replace("Memofly","");
    }else{
      company = {};
    }

    //COUNT END IN DAYS
    let startDate = moment(company.inizioSottoscrizione, "DD-MM-YYYY");
    let endDate = moment(company.fineSottoscrizione, "DD-MM-YYYY");
    let endInDays = parseInt(moment(endDate.diff(startDate)).format("DD"));

    let dayString = "";
    let smsString = "";
    let calendarString = "";

    if (endInDays<=0){
      dayString = "abbonamento scaduto";
    }

    if (endInDays==1){
      dayString = "ultimo giorno rimanente";
    }

    if (endInDays>1){
      dayString = endInDays + " giorni rimanenti";
    }

    smsString = company.smsTotali + " sms al mese";

    if(company.numCalendari <=1 ){
        calendarString = company.numCalendari + " calendario";
    }else{
        calendarString = company.numCalendari + " calendari";
    }

    result = { 
        ...company,  
        giorniRimanenti: dayString,
        messaggiMese: smsString,
        calendari: calendarString
      };


    this.company = result;

  }
 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
