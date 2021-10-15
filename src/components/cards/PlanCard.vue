<template>
    <div class="w-100 d-flex">
        <div class="w-100 card report-card">
            <div class="card-body">
                <div class="row d-flex justify-content-center">
                    <div class="col-12 row px-4 pb-4">
                        <div class="col-8">
                            <h4 class="titolo-label mb-4 weight-700 size-16">{{ plan.sottoscrizione }}</h4>
                            <p class="font-roboto weight-400 size-18 m-0">Attivato il {{plan.inizioSottoscrizione}}</p>
                            <p class="font-roboto weight-400 size-18 m-0">Scadenza il {{plan.fineSottoscrizione}}</p>
                            <p class="font-roboto weight-400 size-18 m-0">Numero calendari {{this.numeroCalendari}}</p>
                            <p class="font-roboto weight-400 size-18 m-0">Numero sms {{plan.smsTotali}}</p>
                        </div>
                        <div class="col-4">
                            <button type="button" class="btn btn-lg btn-gradient-primary mr-3 radius-20  bottom-0 right-0 font-poppins weight-700 size-14">Trasforma il piano</button>
                        </div>
                    </div>
                </div>
            </div>
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

export default class PlanCard extends Vue {

  public plan: any = {};
  public test :any;
  public numeroCalendari : any;

  data() {

    this.init();

    return {
      plan: this.plan,
      test: this.test,
    };
  }

  init() {

    this.plan = {};

    GETUser()
      .then((response: any) => {

        if (response.status == 200) {
          this.plan = response.data;
        } else {
          this.plan = {};
        }

        if(this.plan.smsTotali == 50){
          this.numeroCalendari = 1
        }

        if(this.plan.smsTotali == 100){
          this.numeroCalendari = 1
        }

        if(this.plan.smsTotali == 200){
          this.numeroCalendari = 3
        }

        if(this.plan.smsTotali == 500){
          this.numeroCalendari = 5
        }

      })

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


</style>
