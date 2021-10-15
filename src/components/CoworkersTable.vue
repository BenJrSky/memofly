<template>
  <div class="row">
    <div v-for="coworker in coworkers" v-bind:key="coworker" class="col-lg-3">
        <div class="card">
          <div class="card-body text-center">
            <div class="text-right">
              <a href="" class="mr-2" data-animation="bounce">
                <i class="fas fa-edit text-info font-16"></i>
              </a>
              <a href="">
                <i class="fas fa-trash-alt text-danger font-16"></i>
              </a>
            </div>
            <img src="../../public/img/patient-pro.png" alt="" class="rounded-circle mt-n3">
            <h5 class="mb1 client-name">{{ coworker.nome + " " +coworker.cognome }}</h5>
            <p class="text-muted">specializzazione</p>
            <p class="text-center font-14">{{ coworkers.telefono }}</p>
            <p class="text-center font-14">{{ coworkers.email }}</p>
            <button class="btn btn-sm btn-outline-primary" onclick="location.href='#'">Vedi il profilo</button>
          </div>
        </div>
    </div>
  </div>

</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETCoworkers } from "../memoFly-api/GETCoworkers.js";
import Pagination from '../components/common/Pagination.vue';
import Dialog from '../components/common/Dialog.vue'
import { Toast } from "../services/Toast.js";

@Component({
  components: {
    Pagination,
    Dialog
  },
})

export default class CoworkersTable extends Vue  {

  public coworkers :any;

  data() {

    this.init();

    return {
      coworkers: this.coworkers,
    }

  }

  init(){

    this.$root.$on('dataOutput', (data:any) => {
      this.coworkers = data;
      this.updateData(data);
    });

    GETCoworkers().
        then((response:any)=>{
      Toast(response,{success:"Collaboratori caricati correttamente",error:"Errore durante il caricamento dei collaboratori!"});
      if(response.status==200){
        this.coworkers = response.data;
      }else{
        this.coworkers = [];
      }
    })
  }
  updateData(data:any){
    this.coworkers = data;
  }

}
</script>

<style scoped>

</style>