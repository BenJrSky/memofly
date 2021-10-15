<template>
  <div class="d-flex row">
    <div v-for="client in clients" v-bind:key="client" class="col-lg-3 p-3">
        <div class="card h-100">
          <div class="card-body text-center">
            <div v-if="client.id" class="text-right">
              <a class="mr-2" data-animation="bounce">
                <router-link :to="{ name: 'Client', params: { id: client.id } }">
                  <i class="fas fa-edit text-info font-16"></i>
               </router-link>
              </a>
              
              <a href="">
                <i class="fas fa-trash-alt text-danger font-16"></i>
              </a>
            </div>
            <img v-if="!client.id" src="../../public/img/patient-pro.png" alt="" class="rounded-circle mt-5">
            <img v-if="client.id" src="../../public/img/patient-pro.png" alt="" class="rounded-circle mt-3">
            <h5 class="mb1 client-name font-roboto weight-600 size-16">{{ client.nome + " " +client.cognome }}</h5>
            <p class="text-center font-roboto weight-400 size-14">{{ client.telefono || "---" }}</p>
            <p class="text-center font-roboto weight-400 size-14">{{ client.email || "---" }}</p>
            <button v-if="client.id" class="btn btn-sm btn-outline-primary size-12 mt-3">
               <router-link :to="{ name: 'Profile', params: { id: client.id, phone: client.telefono } }">
                  Vedi il profilo
               </router-link>
            </button>
          </div>
        </div>
    </div>
  </div>

</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { Client } from '../schema/classes.js'
import { GETClients } from "../memoFly-api/GETClients.js";
import Pagination from './common/Pagination.vue';
import Dialog from './common/Dialog.vue'
import { Toast } from "../services/Toast.js";

@Component({
  components: {
    Pagination,
    Dialog
  },
})

export default class ClientsTable extends Vue  {

  public coworkers :any;
  public clients :any;


  data() {

    this.init();

    return {
      coworkers: this.coworkers,
      clients: this.clients,
    }

  }

  init(){

    GETClients()
      .then((response: any)=>{
          this.clients = response.data;

          if(response.status == 200){

              response.data.senzaNome = response.data.senzaNome.map((person: any)=>{

                      let client = new Client;

                      if('phone' in person){
                        client.nome = person.phone;
                        client.cognome = "";
                      }

                      return client;

              });

              this.clients = [...response.data.registrati, ...response.data.senzaNome].map((person:any)=>{

                  let client = new Client;

                      for(let key in person){
                          if(key in client){
                            client[key] = person[key];
                          }
                      }

                      return client;
              });


          }
          

          Toast(response,{success:"Clienti caricati correttamente",error:"Errore durante il caricamento dei clienti!"});
      })

  }


}
</script>

<style scoped>

</style>