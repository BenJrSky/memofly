<template>
   <div class="w-100">
      <SideNav/>
      <div class="d-flex page-content-tab">
          <Topbar/>
          <div class="container-fluid">
              <Header/>
              <ImproveMessages/>
              <div class="row">
                <div class="d-flex col-sm-12 col-md-8">
                  <PlanCard/>
                </div>
                <div class="d-flex col-sm-12 col-md-4">
                  <RemainingMessagesCard/>
                </div>
              </div>
          </div>
          <Footer/>
      </div>
   </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '../components/common/Header.vue';
import ImproveMessages from '../components/common/ImproveMessages.vue';
import RemainingMessagesCard from '../components/cards/RemainingMessagesCard.vue';
import PlanCard from '../components/cards/PlanCard.vue';
import Footer from '../components/common/Footer.vue';
import Topbar from '../components/common/Topbar.vue';
import SideNav from '../components/common/SideNav.vue';


@Component({
  components: {
    SideNav,
    Topbar,
    Header,
    ImproveMessages,
    PlanCard,
    RemainingMessagesCard,
    Footer
  },
})


export default class License extends Vue {

   



}




</script>
