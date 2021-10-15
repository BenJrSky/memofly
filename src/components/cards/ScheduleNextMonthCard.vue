<template>
    <div class="w-100 d-flex">
        <div class="w-100 card report-card">
            <div class="card-body">
                <div class="row d-flex h-100 justify-content-center">
                    <div class="col-12">
                        <h4 class="titolo-label mb-4 weight-700 size-16">Predizione prossimo mese</h4>
                    </div>
                    <div class="col-12">
                        <h3 class="m-0 text-right mb-0 size-33 weight-700">{{prediction}}</h3>
                    </div>
                    <div class="col-4 align-self-end">
                        <div style="position: relative; bottom: 0.125rem">
                          <svg width="48" height="48" viewBox="0 0 51 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.358 55.7026C19.7577 55.7026 14.1574 55.7026 8.55711 55.7026C3.45833 55.7026 0.449219 52.6118 0.449219 47.5161C0.449219 36.3224 0.449219 25.1286 0.449219 13.9348C0.449219 9.00624 3.54192 5.91542 8.47353 5.91542C8.89146 5.91542 9.30939 5.91542 9.72733 5.91542C11.7334 6.0825 13.4051 6.16603 13.0708 3.24229C12.82 1.82218 13.9902 0.90329 15.4948 0.986825C16.9994 1.07036 18.0024 2.07279 17.8352 3.57643C17.5845 5.66482 18.5039 6.0825 20.4264 5.99896C23.7699 5.83189 27.1969 5.83189 30.624 5.99896C32.2957 6.0825 33.2152 5.74835 32.9644 3.82703C32.7972 2.65754 33.3823 1.65511 34.5525 1.23743C35.472 0.819754 36.3078 1.07036 37.0601 1.73865C37.8124 2.40693 38.0632 3.24229 37.896 4.16118C37.6452 5.83189 38.3975 6.16603 39.9021 6.0825C40.9887 5.99896 42.0753 5.99896 43.2455 6.0825C47.1741 6.24957 50.3504 9.34038 50.3504 13.2666C50.434 25.0451 50.434 36.7401 50.3504 48.5186C50.3504 52.6954 47.0905 55.7862 42.9112 55.8697C36.9765 55.7026 31.2091 55.7026 25.358 55.7026Z" fill="#6F84F2"/>
                            <path d="M25.3584 50.6906C19.9253 50.6906 14.4086 50.6906 8.97548 50.6906C6.30071 50.6906 5.46484 49.9387 5.46484 47.2656C5.46484 40.6663 5.46484 34.1505 5.46484 27.5512C5.46484 26.1311 5.79919 25.7134 7.30375 25.7134C19.4238 25.797 31.4603 25.797 43.5803 25.7134C45.0849 25.7134 45.4192 26.2146 45.3356 27.6347C45.252 34.2341 45.3356 40.7498 45.3356 47.3491C45.3356 49.8552 44.4998 50.6906 41.9922 50.6906C36.3919 50.6906 30.8752 50.6906 25.3584 50.6906Z" fill="#FEFEFE"/>
                            <path d="M25.275 20.7848C19.3404 20.7848 13.4057 20.7012 7.47108 20.8683C5.79934 20.8683 5.29783 20.3671 5.465 18.7799C5.63217 17.0257 5.465 15.3549 5.465 13.6007C5.465 11.8465 6.46804 10.9276 8.22335 10.844C8.89205 10.844 9.64433 10.9276 10.313 10.844C12.1519 10.677 13.4057 10.844 13.0714 13.2666C12.9042 14.7702 13.9072 15.7726 15.4954 15.7726C17.1671 15.7726 18.1702 14.6867 18.003 13.0995C17.7522 11.0111 18.6717 10.7605 20.427 10.844C24.0212 10.9276 27.6154 10.9276 31.2096 10.844C32.4634 10.844 33.0486 11.0946 33.0486 12.5147C32.965 14.7702 33.968 15.9397 35.5561 15.7726C37.6458 15.6056 38.1473 14.1854 37.9802 12.3477C37.813 11.0111 38.4817 10.7605 39.6519 10.7605C45.3358 10.677 45.5029 10.844 45.5029 16.4409C45.5029 20.7848 45.5029 20.7848 41.24 20.7848C35.7233 20.7848 30.541 20.7848 25.275 20.7848Z" fill="#FEFEFE"/>
                          </svg>
                        </div>
                    </div>
                    <div class="col-8 align-items-baseline">
                        <p class="mb-0 text-truncate text-right right-0 bottom-0 mr-3 text-muted weight-400 size-14">appuntamenti previsti</p>
                    </div>
                </div>
            </div>
        </div>
    </div>  

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETMonthPredicition } from "../../memoFly-api/dashboard/GETMonthPredicition";


@Component({
  components: {

  },
})

export default class ScheduleNextMonthCard extends Vue {

    public prediction :any = 0;

    data() {

        this.init();

        return{ 
            prediction: this.prediction,
        }

    }

    init(){

        this.prediction = 0;

        GETMonthPredicition()
            .then((dataPrediction:any)=>{
                if(dataPrediction.data){
                    this.prediction = parseFloat(dataPrediction.data).toFixed(0);
                }else{ 
                    this.prediction = 0;
                } 
            });
    }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .report-title {
        height: 30px;
    }

    .custom-icon{
      width: 2.6875rem;
    }

</style>
