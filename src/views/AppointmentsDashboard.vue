<template>
   <div class="w-100">
      <SideNav/>
      <div class="d-flex page-content-tab">
          <Topbar/>
          <div class="container-fluid">
              <Header/>

              <DashboardGrid/>

              <div class="row flexRow">
                  <div class="col-sm-12 col-md-4">
                    <TodayAppointments/>
                  </div>
                  <div class="col-sm-12 col-md-8">
                    <AppuntamentiCalendarioChart/>
                  </div>
              </div>

              <div class="row flexRow">
                  <div class="col-sm-12 col-md-6">
                    <MessagesPerService/>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <AppuntamentiServizioChart/>
                  </div>
              </div>

              <div class="row">
                  <div class="col-12">
                    <MessagesPerYearChart/>
                  </div>
              </div>

              <LastMessagesTable/>
          </div>
          <Footer/>
      </div>
   </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '../components/common/Header.vue';
import LastMessagesTable from './../components/LastMessagesTable.vue';
import Footer from './../components/common/Footer.vue';
import Topbar from './../components/common/Topbar.vue';
import SideNav from './../components/common/SideNav.vue';
import DashboardGrid from './../components/DashboardGrid.vue';
import TodayAppointments from './../components/charts/TodayAppointments.vue';
import AppuntamentiCalendarioChart from './../components/charts/AppuntamentiCalendarioChart.vue'; 
import AppuntamentiServizioChart from './../components/charts/AppuntamentiServizioChart.vue'; 
import MessagesPerYearChart from './../components/charts/MessagesPerYearChart.vue'; 
import MessagesPerService from './../components/charts/MessagesPerService.vue'; 

@Component({
  components: {
    SideNav,
    Topbar,
    Header,
    DashboardGrid,
    TodayAppointments,
    AppuntamentiCalendarioChart,
    AppuntamentiServizioChart,
    MessagesPerService,
    MessagesPerYearChart,
    LastMessagesTable,
    Footer
  },
})


export default class AppointmentsDashboard extends Vue {}




</script>
