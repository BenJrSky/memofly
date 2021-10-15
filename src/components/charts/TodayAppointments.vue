<template>
    <div class="flexCol card">
            <div class="card-body dash-info-carousel">
                <h4 class="mt-0 titolo-label mb-4 mt-3 ml-3 weight-700 size-16 font-poppins">Appuntamenti di oggi</h4>

                <Carousel />
                                   
            </div>
    </div>
</template>

<script lang="ts">


import { Component, Prop, Vue } from 'vue-property-decorator';
import VueApexCharts from "vue-apexcharts";
import Carousel from './../common/Carousel.vue'

@Component({
  components: {
    VueApexCharts,
    Carousel
  },
})

export default class TodayAppointments extends Vue {}


</script>

<style lang="scss">

  .sticky-bottom{
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    margin:auto;
  }

</style>
