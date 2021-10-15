<template>
   <div class="w-100">
      <SideNav/>
      <div class="d-flex page-content-tab">
          <Topbar/>
          <div class="container-fluid">
              <Header/>
              <MessageTemplateWizard/>
          </div>
          <Footer/>
      </div>
   </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '../components/common/Header.vue';
import MessageTemplateWizard from '../components/MessageTemplateWizard.vue';
import Footer from '../components/common/Footer.vue';
import Topbar from '../components/common/Topbar.vue';
import SideNav from '../components/common/SideNav.vue';


@Component({
  components: {
    SideNav,
    Topbar,
    Header,
    MessageTemplateWizard,
    Footer
  },
})


export default class Messages extends Vue {

   



}




</script>
