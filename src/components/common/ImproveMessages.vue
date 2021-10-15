<template>
    <div class="card">
        <div class="card-body">
              <div class="row">
                <div class="d-flex col-12">
                  <h4 class="m-0 p-2 align-self-center text-primary font-poppins weight-700 size-17 text-uppercase">{{ remaining }} messaggi rimasti su {{ total }}</h4>  
                  <span class="right-0">
                    <button  type="button" class="btn btn-lg btn-outline-primary mr-3 radius-20 weigth-700 size-14">
                        <a class="text-white" target="_blank" href="https://www.memofly.it/prodotto/abbonamenti-memofly/?switch-subscription=6916&item=1824&_wcsnonce=40357e40ae&auto-switch=true" >
                            Migliora
                        </a>
                    </button>
                  </span>
                </div>
              </div>                              
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETRemainingMessages } from "../../memoFly-api/dashboard/GETRemainingMessages";


@Component
export default class ImproveMessages extends Vue {

    public remaining :number = 0;
    public total :number = 0;

    data() {

        this.init();

        return{ 
            remaining: this.remaining,
            total: this.total
        }

    }

    init(){

        this.remaining = 0;
        this.total = 0;

        GETRemainingMessages()
            .then((dataMessages:any)=>{
                if(dataMessages.smsResidui){
                    this.remaining = dataMessages.smsResidui;
                    this.total = dataMessages.smsTotali;
                }
            })

    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
