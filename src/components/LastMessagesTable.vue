<template>
  <div class="row">
      <div class="col-12">
          <div class="card">
              <div class="card-body">
                  <h4 class="header-title mt-0 mb-4  mt-3 font-poppins size-16 weight-700">Ultimi messaggi</h4>
                  <div class=" browser_users">
                      <table class="table mb-0">
                          <thead class="thead-light">
                              <tr class="col-12 font-poppins weight-700 size-14">
                                  <th class="col-3 border-top-0">Servizio</th>
                                  <th class="col-1 border-top-0">Ora</th>
                                  <th class="col-2 border-top-0">Telefono</th>
                                  <th class="col-2 border-top-0">Tipo Messaggio</th>
                                  <th class="col-1"></th>
                              </tr>
                          </thead>
                          <tbody>
                            <tr  v-for="message in dataMessages" :key="message" class="font-poppins weight-500 size-14">   
                                <td><i class="mdi mdi-circle-slice-8 mr-2 text-warning font-16"></i>{{ message.servizio }}</td>
                                <td>{{ message.ora }}</td>   
                                <td>{{ message.numeroTelefono }}</td>   
                                <td>{{ message.tipoMessaggio }}</td>      
                                <td name="buttons" class="p-0">
                                    <div class="col-12 m-0">
                                        <button id="bElim" type="button" class="btn btn-sm btn-soft-danger btn-circle  float-right" v-on:click="deleteMessage(message);">
                                            <i class="dripicons-trash" aria-hidden="true"></i>
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
import Pagination from './common/Pagination.vue';
import Dialog from './common/Dialog.vue';
import moment from 'moment';
import { GETLastMessages } from './../memoFly-api/dashboard/GETLastMessages.js'
import { Toast } from "../services/Toast.js";

@Component({
  components: {
    Pagination,
    Dialog
  },
})

export default class LastMessagesTable extends Vue {
  
    public dataMessages :any;
    public messages :any = [];

    data() {
       
       this.init();

        return {
            messages: this.messages,
            dataMessages:this.dataMessages,
        }
        
    }

    init(){
        
        this.messages = [];
        this.dataMessages = [];

        GETLastMessages()
            .then((dataMessages:any)=>{

                if(dataMessages.data){

                    this.messages = dataMessages.data.map((data:any) =>{

                        return { 
                            id: data.id,
                            servizio: data.servizio,
                            ora: moment(data.ora).format("hh:mm"),
                            numeroTelefono: data.numeroTelefono,
                            tipoMessaggio: data.tipoMessaggio
                        }

                    })

                }else{
                    this.messages = [];
                }

                this.$root.$emit('dataApi',this.messages);

            })

            this.$root.$on('dataOutput', (data:any) => {
                this.dataMessages = data;
            });

    }

    deleteMessage(message:any){

    }






}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
