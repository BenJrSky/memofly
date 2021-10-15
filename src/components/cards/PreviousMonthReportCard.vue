<template>

    <div class="w-100 d-flex">
        <div class="w-100 card report-card">
            <div class="card-body">
                <div class="row d-flex h-100 justify-content-center">
                    <div class="col-12">
                        <h4 class="titolo-label mb-4 weight-700 size-16">Rapporto mese precedente</h4>
                    </div>
                    <div class="col-12">
                        <h3 class="m-0 text-right mb-0 size-33 weight-700">{{previousMonth}}%</h3>
                    </div>
                    <div class="col-4 align-self-end">
                        <div class="">
                          <svg width="39" height="50" viewBox="0 0 39 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M38.953 25.1261C38.953 32.0261 38.953 38.9261 38.953 45.826C38.953 48.1865 37.9418 49.4576 36.1953 49.5484C34.4487 49.5484 33.4375 48.2773 33.4375 45.9168C33.4375 32.1169 33.4375 18.3169 33.4375 4.51701C33.4375 2.15649 34.5406 0.794654 36.2872 0.976233C38.4015 1.06702 38.953 2.51965 38.953 4.42622C38.953 11.3262 38.953 18.2262 38.953 25.1261Z" fill="#3BD9B6"/>
                            <path d="M16.8916 33.2971C16.8916 29.2116 16.8916 25.0353 16.8916 20.9498C16.8916 18.4077 17.9028 17.0459 19.7413 17.1367C21.4879 17.1367 22.4071 18.4077 22.4071 20.859C22.4071 29.2116 22.4071 37.4734 22.4071 45.826C22.4071 48.2773 21.4879 49.4576 19.7413 49.5484C17.9028 49.5484 16.8916 48.2773 16.8916 45.7352C16.8916 41.5589 16.8916 37.3826 16.8916 33.2971Z" fill="#3BD9B6"/>
                            <path d="M5.86024 41.2863C5.86024 43.0112 5.86024 44.7362 5.86024 46.4612C5.86024 48.1862 4.94099 49.3665 3.10249 49.4573C1.26398 49.4573 0.344727 48.277 0.344727 46.552C0.344727 43.102 0.344727 39.6521 0.344727 36.2021C0.344727 34.4771 1.3559 33.2968 3.19441 33.3876C4.94099 33.3876 5.76832 34.4771 5.86024 36.1113C5.86024 37.8363 5.86024 39.5613 5.86024 41.2863Z" fill="#3BD9B6"/>
                          </svg>
                        </div>
                    </div>
                    <div class="col-8 align-items-baseline">
                        <p class="mb-0 text-truncate text-right right-0 bottom-0 mr-3 text-muted weight-400 size-14">messaggi inviati</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETPreviousMonthReport } from "../../memoFly-api/dashboard/GETPreviousMonthReport";


@Component({
  components: {

  },
})

export default class PreviousMonthReportCard extends Vue {

    public previousMonth :any = 0;
    public percentuale : any;

    data() {

        this.init();

        return{ 
            previousMonth: this.previousMonth,
        }

    }

    init(){

        this.previousMonth = 0;

        GETPreviousMonthReport()
            .then((dataPrevious:any) =>{
                if(dataPrevious.data){
                    if(dataPrevious.data.rapporto_mese_prec < 100){
                      this.percentuale = (+parseFloat(dataPrevious.data.rapporto_mese_prec).toFixed(0) * -1) + 100;
                      this.previousMonth = "-" + this.percentuale.toString();
                    }else{
                      this.percentuale = +parseFloat(dataPrevious.data.rapporto_mese_prec).toFixed(0) - 100;
                      this.previousMonth = "+" + this.percentuale.toString();
                    }
                }
            })

    }
  

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .report-title {
        height: 30px;
    }

</style>
