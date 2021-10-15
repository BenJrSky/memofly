<template>
  <div class="row">
      <div class="col-12">
          <div class="card">
              <div class="card-body">
                  <h4 class="header-title mt-0 mb-3"></h4>
                  <div class="table-responsive browser_users">
                      <table class="table mb-0">
                          <thead class="thead-light">
                              <tr>
                                  <th class="border-top-0">Servizio</th>
                                  <th class="border-top-0">Ora</th>
                                  <th class="border-top-0">Collaboratore</th>
                                  <th class="border-top-0">Cliente</th>
                                  <th class="border-top-0">Numero di telefono</th>
                                  <th class="border-top-0">Tipo messaggio</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                    
                             <tr v-for="message in dataMessages" :key="message">                                                        
                                 <td><i class="mdi mdi-circle-slice-8 mr-2 text-warning font-16"></i>{{ service.nome }}</td>
                                  <td>{{ service.durata }}</td>   
                                  <td>{{ service.pausa }}</td>   
                                  <td>{{ service.collaboratori }}</td>                                   
                                  <td>{{ service.correlato }}</td>                                   
                                  <td v-if="service.prenotabileViaWeb=='on'" class="text-center" v-on:click="counter += 1"><i class="mdi mdi-check-circle text-success font-22"></i></td>   
                                  <td v-if="service.prenotabileViaWeb!=='on'" class="text-center" ><i class="mdi mdi-close-circle text-danger font-22"></i></td>                                   
                                  <td>{{ service.descrizione }}</td>                                   
                                  <td name="buttons" class="p-0"><div class="col-12 m-0"><button id="bEdit" type="button" class="btn btn-sm btn-soft-success btn-circle col-6" onclick="rowEdit(this);"><i class="dripicons-pencil"></i></button><button id="bElim" type="button" class="btn btn-sm btn-soft-danger btn-circle col-6" onclick="rowElim(this);"><i class="dripicons-trash" aria-hidden="true"></i></button><button id="bAcep" type="button" class="btn btn-sm btn-soft-purple mr-2 btn-circle" style="display:none;" onclick="rowAcep(this);"><i class="dripicons-checkmark"></i></button><button id="bCanc" type="button" class="btn btn-sm btn-soft-info btn-circle" style="display:none;" onclick="rowCancel(this);"><i class="dripicons-cross" aria-hidden="true"></i></button></div></td>
                              </tr>
                              
                          </tbody>
                      </table>   

                    <Pagination/>

                  </div><!--end /div-->
              </div><!--end card-body-->
          </div><!--end card-->
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETServices } from "../memoFly-api/GETServices.js";
import Pagination from './common/Pagination.vue';


@Component({
  components: {
    Pagination
  },
})


export default class ServiceTable extends Vue {
  
    public services :any;
    public dataServices :any;

    data() {
        this.services = [];
        this.dataServices = [];

        this.$root.$on('dataOutput', (data:any) => {
            this.dataServices = data;
        });

        GETServices()
        .then((data:any)=>{
            this.services = data;
            this.$root.$emit('dataApi',data);
            return this.services
         })
         
        return {
            services: this.services,
            dataServices:this.dataServices,
        }
        
    }
    




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



</style>


