<template>
    <div class="w-100 d-flex">
        <div class="w-100 card report-card">
            <div class="card-body">
                <div class="row d-flex h-100 justify-content-center">
                    <div class="col-12">
                        <h4 class="titolo-label mb-4 weight-700 size-16">Messaggi rimanenti</h4>
                    </div>
                    <div class="col-12">
                        <h3 class="m-0 text-right mb-0 size-33 weight-700">{{remaining}}</h3>
                    </div>
                    <div class="col-4 align-self-end">
                        <div class="">
                          <svg width="58" height="49" viewBox="0 0 61 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.5494 50.7212C23.5324 50.7212 16.5154 50.7212 9.49845 50.7212C4.1218 50.7212 0.75 47.2823 0.75 41.7986C0.75 31.1101 0.75 20.3287 0.75 9.5473C0.75 4.43542 4.21293 0.90358 9.31619 0.90358C23.5324 0.90358 37.8398 0.90358 52.056 0.90358C56.977 0.90358 60.44 4.43542 60.5311 9.45436C60.5311 20.3287 60.5311 31.1101 60.5311 41.9845C60.5311 47.2823 57.0682 50.7212 51.8738 50.7212C44.7656 50.7212 37.6575 50.7212 30.5494 50.7212Z" fill="#FDA253"/>
                            <path d="M54.8811 15.0308C55.3367 15.4955 55.1544 16.0531 55.1544 16.6108C55.1544 24.7898 55.1544 33.0617 55.1544 41.2408C55.1544 44.3079 54.2431 45.2373 51.2359 45.2373C37.4753 45.2373 23.8058 45.2373 10.0452 45.2373C7.2202 45.2373 6.21777 44.3079 6.21777 41.4266C6.21777 32.69 6.21777 23.9533 6.21777 14.7519C8.76941 16.5178 11.0476 18.0979 13.3259 19.6779C18.2469 23.2098 23.259 26.6487 28.0889 30.2734C30.0026 31.6676 31.4607 31.5747 33.3744 30.1805C39.7535 25.5333 46.1326 20.9791 52.6028 16.4249C53.2407 15.8672 53.8786 15.1237 54.8811 15.0308Z" fill="#FEFEFE"/>
                            <path d="M30.8228 6.47987C37.3841 6.47987 43.9454 6.47987 50.5068 6.47987C51.1447 6.47987 51.6915 6.47987 52.3294 6.47987C53.1496 6.57282 54.152 6.7587 54.4254 7.68814C54.6988 8.61757 53.6052 8.80346 53.0584 9.26817C46.0414 14.1942 39.0244 19.1202 32.0986 24.1391C31.005 24.9756 30.276 24.9756 29.0913 24.1391C22.1655 19.1202 15.2396 14.1942 8.2226 9.17523C7.67582 8.80345 6.58227 8.52463 6.85566 7.59519C7.12905 6.7587 8.2226 6.47987 9.1339 6.47987C12.3234 6.47987 15.513 6.47987 18.6114 6.47987C22.7122 6.47987 26.8131 6.47987 30.8228 6.47987Z" fill="#FEFEFE"/>
                          </svg>
                        </div>
                    </div>
                    <div class="col-8 align-items-baseline">
                        <p class="mb-0 text-truncate text-right right-0 bottom-0 mr-3 text-muted weight-400 size-14">di {{total}} messaggi</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETRemainingMessages } from "../../memoFly-api/dashboard/GETRemainingMessages";


@Component({
  components: {

  },
})

export default class RemainingMessagesCard extends Vue {

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
                    console.log("TOTALI")
                    console.log("dataMessages")
                    console.log(dataMessages)
                    this.remaining = dataMessages.smsResidui;
                    this.total = dataMessages.smsTotali;
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
