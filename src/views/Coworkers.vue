<template>
  <div class="w-100">
    <SideNav/>
    <div class="d-flex page-content-tab">
      <Topbar/>
      <div class="container-fluid">
        <Header/>
        <CoworkersTable/>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '../components/common/Header.vue';
import CoworkersTable from '../components/CoworkersTable.vue';
import Footer from '../components/common/Footer.vue';
import Topbar from '../components/common/Topbar.vue';
import SideNav from '../components/common/SideNav.vue';

@Component({
  components: {
    SideNav,
    Topbar,
    Header,
    CoworkersTable,
    Footer
  },
})


export default class Coworker extends Vue {


}




</script>
