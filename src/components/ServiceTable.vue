<template>
  <div class="row ">
      <div class="col-12">
          <div class="card">
              <div class="card-body">
                  <h4 class="header-title mt-0 mb-3"></h4>
                  <div class=" browser_users">
                      <table class="table mb-0">
                          <thead class="thead-light">
                              <tr class="col-12 ">
                                  <th class=""></th>
                                  <th class="col-3 border-top-0 ">Servizio</th>
                                  <th class="col-1 border-top-0">Durata</th>
                                  <th class="col-1 border-top-0">Pausa</th>
                                  <th class="col-2 border-top-0 pl-4">Collaboratori</th>
                                  <th class="col-2 border-top-0">Prenotabile via web</th>
                                  <th class="col-2 border-top-0">Descrizione</th>
                                  <th class="col-1"></th>
                              </tr>
                          </thead>
                          <tbody>
                             <tr  v-for="service in dataServices" :key="service">   
                                  <td></td>  
                                  <td>
                                    <svg class = "" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                      <rect width="21" height="20" transform="matrix(-1 0 0 1 21 0)" fill="url(#pattern0)"/>
                                      <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                          <use xlink:href="#image0" transform="translate(0 -0.0166667) scale(0.00793651 0.00833333)"/>
                                        </pattern>
                                        <image id="image0" width="126" height="124" xlink:href="data:image/png;base64,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"/>
                                      </defs>
                                    </svg>
                                    {{ service.nome }}</td>
                                  <td>{{ service.durata }}</td>   
                                  <td>{{ service.pausa }}</td>   
                                  <td><span v-for="collaboratore in service.collaboratori" :key="collaboratore" class=" d-flex justify-content-start p-2 m-1 ">{{ collaboratore.fullName }}</span></td>
                                  <td v-if="service.prenotabileViaWeb=='on'" class=" d-flex justify-content-center pr-5"><i class="pr-5 mdi mdi-check-circle text-success font-22"></i></td>
                                  <td v-if="service.prenotabileViaWeb!=='on'" class=" d-flex justify-content-center pr-5"><i class="pr-5 mdi mdi-close-circle text-danger font-22"></i></td>
                                  <td>{{ service.descrizione }}</td>                                   
                                  <td name="buttons" class="p-0">
                                      <div class="col-12 m-0">
                                          <button id="bEdit" type="button" class="btn mr-2 btn-sm btn-soft-success btn-circle col-6 custom-hover">
                                                <router-link :to="{ name: 'Service', params: { id: service.id } }">
                                                    <i class="dripicons-pencil text-success font-12"></i>
                                                </router-link>
                                          </button>
                                          <button id="bElim" type="button" class="btn btn-sm btn-soft-danger btn-circle col-6 " v-on:click="deleteService(service);">
                                              <i class="dripicons-trash font-12" aria-hidden="true"></i>
                                          </button>
                                      </div>
                                </td>
                              </tr>
                              
                          </tbody>
                      </table>   

                    <Pagination/>

                    <Dialog/>

                  </div><!--end /div-->
              </div><!--end card-body-->
          </div><!--end card-->
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETCoworkers } from "../memoFly-api/GETCoworkers.js";
import { GETServices } from "../memoFly-api/GETServices.js";
import { DELETEService } from "../memoFly-api/DELETEService.js";
import Pagination from '../components/common/Pagination.vue';
import Dialog from '../components/common/Dialog.vue'
import { Toast } from "../services/Toast.js";

@Component({
  components: {
    Pagination,
    Dialog
  },
})

export default class ServiceTable extends Vue {
  
    public services :any;
    public coworkers :any;
    public dataServices :any;


    data() {
       
       this.init();

        return {
            services: this.services,
            coworkers: this.coworkers,
            dataServices:this.dataServices,
        }
        
    }

    init(){
        
        this.services = [];
        this.dataServices = [];
        this.$root.$on('dataOutput', (data:any) => {
            this.dataServices = data;
            this.updateData(data);
        });

         GETServices()
        .then((response:any)=>{
            Toast(response,{success:"Servizi caricati correttamente",error:"Errore durante il caricamento dei servizi!"});
            if(response.status==200){
                this.services = response.data;
            }else{
                this.services = [];
            }
         })
        .then(()=>{
            GETCoworkers()
                .then((response:any)=>{
                    if(response.status==200){
                        return response.data.map((worker:any)=>{
                            return { 
                                id:worker.id,
                                fullName: worker.nome + " "+worker.cognome,
                                checked:false
                            }
                        });
                    }else{ 
                        Toast({error:"Errore durante il caricamento dei collaboratori!"});
                        return ""
                    }

                })
                .then((dataCoworkers:any)=>{

                    if(dataCoworkers.length){

                        for(let service of this.services){

                            let coworkers = service.collaboratori.split("|");

                            service.collaboratori = [];

                            coworkers.forEach((workerId :any)=>{
                                dataCoworkers.filter((one:any)=>{ 

                                    if(one.id == workerId){
                                        service.collaboratori.push(one);
                                    }
                                    
                                });

                            })

                        }

                    }

                })

         })
         .finally(() => {
            this.$root.$emit('dataApi',this.services);
            return this.services
         })
         
    }

    updateData(data:any){
       this.dataServices = data;
    }

    deleteService(service:any){
       
        let message = "Confermi l'eliminazione del Servizio '"+service.nome+"' ?";

        let options = {
            status: "open", 
            title: "Cancella il Servizio",
            message: message,
            type:"warning",
        }

        this.$root
            .$emit('dataDialog',options)
            .$on('dialogResponse',(data:any) =>{
                if(data){
                    this.init();
                    DELETEService(service.id)
                    .then((data:any)=>{
                        Toast(data,{success:"Servizio Eliminato con Successo", error:"Errore durante l'eliminazione"});
                        this.init();
                    })
                }
            });

    }





}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .font-custom{
    font-size: .875rem !important;
  }
  .custom-hover:hover i{
    color: #fff!important;
  }

</style>
