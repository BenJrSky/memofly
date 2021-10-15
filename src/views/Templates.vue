<template>
   <div class="w-100">
      <SideNav/>
      <div class="d-flex page-content-tab">
          <Topbar/>
          <div class="container-fluid">
              <Header/>
              <ImproveMessages/>
              <CustomTemplateWizard/>
          </div>
          <Footer/>
      </div>
   </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '../components/common/Header.vue';
import LastMessagesTable from '../components/LastMessagesTable.vue';
import ImproveMessages from '../components/common/ImproveMessages.vue';
import CustomTemplateWizard from '../components/CustomTemplateWizard.vue';
import Footer from '../components/common/Footer.vue';
import Topbar from '../components/common/Topbar.vue';
import SideNav from '../components/common/SideNav.vue';


@Component({
  components: {
    SideNav,
    Topbar,
    Header,
    ImproveMessages,
    CustomTemplateWizard,
    LastMessagesTable,
    Footer
  },
})


export default class Templates extends Vue {

   



}




</script>
