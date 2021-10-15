<template>
   <div class="w-100">
      <SideNav/>
      <div class="d-flex page-content-tab">
          <Topbar/>
          <div class="container-fluid">
              <Header/>
              <div class="row flexRow">
                  <div class="w-100 row mx-auto p-0">
                    <ResumeNewClients/>
                    <ResumeLostClients/>
                    <ResumeWarningLost/>
                  </div>
              </div>
              <div class="row flexRow">
                  <div class="col-12">
                    <TotalClientsChart/>
                  </div>
              </div>
              <div class="row flexRow">
                  <div class="col-12">
                    <TotalLostClients/>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
   </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from './../components/common/Header.vue';
import Footer from './../components/common/Footer.vue';
import Topbar from './../components/common/Topbar.vue';
import SideNav from './../components/common/SideNav.vue';
import ResumeNewClients from './../components/cards/ResumeNewClients.vue';
import ResumeLostClients from './../components/cards/ResumeLostClients.vue';
import ResumeWarningLost from './../components/cards/ResumeWarningLost.vue';
import TotalClientsChart from './../components/charts/TotalClientsChart.vue'; 
import TotalLostClients from './../components/charts/TotalLostClients.vue';
import { GETDashboard } from "./../memoFly-api/GETDashboard.js";

@Component({
  components: {
    SideNav,
    Topbar,
    Header,
    TotalClientsChart,
    TotalLostClients,
    ResumeNewClients,
    ResumeLostClients,
    ResumeWarningLost,
    Footer
  },
})


export default class AppointmentsDashboard extends Vue {

    @Prop() private msg!: string

    public lastMessages :any = [];
    public appointmentsPerCalendar :any = [];
    public appointmentsTotal :any = {};
    public remainingMessages :any = {};
    public previousMonth :number = 0;
    public appointmentPrediction :number = 0;
    public appointmentsPerService :any = [];
    public todayAppointments :any = [];
    public messagesPerYear :any = [];
    

     data(){

        return { 
         lastMessages: this.lastMessages,
          appointmentsPerCalendar: this.appointmentsPerCalendar,
          appointmentsTotal: this.appointmentsTotal,
          remainingMessages: this.remainingMessages,
          previousMonth: this.previousMonth,
          appointmentPrediction: this.appointmentPrediction,
          appointmentsPerService: this.appointmentsPerService,
          todayAppointments: this.todayAppointments,
          messagesPerYear: this.messagesPerYear        }

    }

    mounted() {

        GETDashboard()
        .then((response:any)=>{

            // console.log("RESPONSE")
            // console.log(JSON.stringify(response));

            //DATA APPOINTMENTS CARD
            this.appointmentsTotal = {
                today: response.nAppuntamentiOggi,
                yesterday: 0
            }

            this.$root.$emit('appointmentsTotal',this.appointmentsTotal).$off('appointmentsTotal');

            //DATA REMAINING MESSAGE CARD
            this.remainingMessages = {
                remaining: response.smsResidui,
                total: 200
            }

            this.$root.$emit('remainingMessages',this.remainingMessages).$off('remainingMessages');

            //DATA PREVIOUS MONTH CARD
            this.previousMonth = response.rapportoMesePrecedente;
            this.$root.$emit('previousMonth',this.previousMonth).$off('previousMonth');

            //DATA PREDICTION APPOINTMENTS CARD
            this.appointmentPrediction = response.predizioneAppuntamenti;
            this.$root.$emit('appointmentPrediction',this.appointmentPrediction).$off('appointmentPrediction');

            //APPOINTMENTS PER SERVICE
            this.appointmentsPerService = response.appuntamentiPerServizio;
            this.$root.$emit('appointmentsPerService',this.appointmentsPerService).$off('appointmentsPerService');

            //LAST MESSAGES CARD
            this.lastMessages = response.ultimiMessaggi;
            this.$root.$emit('lastMessages',this.lastMessages).$off('lastMessages');

            //TOTAL APPOINTMENTS CARD
            this.appointmentsPerCalendar = response.appuntametiPerCalendario;
            this.$root.$emit('appointmentsPerCalendar',this.appointmentsPerCalendar).$off('appointmentsPerCalendar');

            //TODAY APPOINTMENTS
            this.todayAppointments = response.appuntementiOggi;
            this.$root.$emit('todayAppointments',this.todayAppointments).$off('todayAppointments');

            //MESSAGES PER YEAR
            this.messagesPerYear = response.messaggiAnno;
            this.$root.$emit('messagesPerYear',this.messagesPerYear).$off('messagesPerYear');


        })


    }

}




</script>
