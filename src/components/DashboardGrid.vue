<template>

    <div class="row justify-content-center">

        <div class="d-flex row col-12 p-0">
            <div class="d-flex col-sm-12 col-md-3">
                <TotalAppointmentsCard/>
            </div>
            <div class="d-flex col-sm-12 col-md-3">
                <RemainingMessagesCard/>    
            </div>
            <div class="d-flex col-sm-12 col-md-3">
                <PreviousMonthReportCard/>
            </div>
            <div class="d-flex col-sm-12 col-md-3">
                <ScheduleNextMonthCard/>
            </div>
        </div>



   
        
    </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TotalAppointmentsCard from '../components/cards/TotalAppointmentsCard.vue';
import RemainingMessagesCard from '../components/cards/RemainingMessagesCard.vue';
import PreviousMonthReportCard from '../components/cards/PreviousMonthReportCard.vue';
import ScheduleNextMonthCard from '../components/cards/ScheduleNextMonthCard.vue';


@Component({
  components: {
      TotalAppointmentsCard,
      RemainingMessagesCard,
      PreviousMonthReportCard,
      ScheduleNextMonthCard,
  },
})

export default class DashboardGrid extends Vue {

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">



</style>
