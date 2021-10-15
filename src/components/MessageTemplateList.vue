<template>
    <div class="w-100 pb-4">

        <div class="card mb-0 px-3">
            <div class="card-body w-100 p-0 m-0 py-3">
                <div class="input-group">
                    <input type="text" name="example-input1-group2" v-model="search" v-on:change="research()" class="form-control weight-400 size-14 text-dark" placeholder="Ricerca">
                    <span class="input-group-prepend">
                        <button type="button" class="btn btn-lg btn-gradient-primary"><i class="fas fa-search"></i></button>
                    </span>
                </div>
                <div class="input-group">
                    <h6 class="text-primary">{{ searchResults }}</h6>
                </div>
            </div>
        </div>

        <div v-for="template in templates" v-bind:key="template" class="w-100">
            <div class="card mb-0 px-3">

                <div class="card-body m-0 p-0 border">
                    <b-button v-bind:id="template.buttonId" v-b-toggle="template.accordionId" v-on:click="togleCard(template)" class="w-100 btn-light m-0 p-0 bg-white border-0 text-left p-3">
                        <div class="row">
                            <div class="col-8">
                                <h4 class="header-title m-0 text-uppercase font-poppins weight-700 size-14 mt-2 ">{{ template.name }}</h4>
                            </div>
                            <div class="col-4">
                                <i v-if="template.closed==true" class="size-22 text-primary dripicons-chevron-down float-right weight-700"></i>
                                <i v-if="template.closed==false" class="size-22 text-primary dripicons-chevron-up float-right weight-700"></i>
                                <span class="badge badge-primary badge-pill noti-icon-badge mt-3 mr-3 float-right">{{ template.data.length }}</span>
                            </div>
                        </div>
                    </b-button>
                    <div class="table-responsive browser_users">
                        <div class="accordion" role="tablist">
                            <b-card no-body class="mb-1">
                                <b-collapse v-bind:id="template.accordionId" visible accordion="my-accordion" role="tabpanel">
                                    <div v-for="message of template.data" v-bind:key="message" class="w-100">
                                        <table class="table mb-0">
                                            <thead class="thead-memofly row w-100 p-0 m-0">
                                                <tr class="font-poppins weight-500 size-14 text-left row w-100 m-0 p-0">
                                                    <th class="col-4 border-top-0 text-white">Titolo</th>
                                                    <th class="col-4 border-top-0 text-white">Esempio anteprima messaggio</th>
                                                    <th class="col-2 border-top-0 text-white">Quando</th>
                                                    <th class="col-2 border-top-0 text-white">Tipo</th>
                                                </tr>
                                            </thead>
                                            <tbody class="row w-100 p-0 m-0">
                                            <tr class="font-poppins weight-500 size-14 text-left row w-100 m-0 p-0">   
                                                <td class=" col-4 form-group p-0 vertical-align-top">
                                                    <p class="p-2 weight-400 size-14 text-dark">{{ message.titolo }}</p>
                                                </td>
                                                <td class="col-4 form-group p-0 vertical-align-top">
                                                    <p class="p-2 weight-400 size-14 text-dark">{{ message.testo }}</p>
                                                </td>
                                                <td class="col-2 form-group p-0 vertical-align-top">
                                                    <p class="p-2 weight-400 size-14 text-dark">{{ message.quando }}</p>
                                                </td>
                                                <td class="col-2 form-group p-0 vertical-align-top">
                                                    <p class="p-2 weight-400 size-14 text-dark">{{ message.tipo }}</p>
                                                </td>
                                            </tr>
                                            <tr class="col-3 offset-9 w-100 font-poppins weight-400 size-14">
                                                <td class="col-1 form-group p-0 vertical-align-top d-flex col-12">
                                                    <div class="col-3 p-0">
                                                        <div class="custom-control custom-switch switch-primary m-2">
                                                        <input type="checkbox" class="custom-control-input" id="dafaultSettingMessage"  v-model="defaultMessage.setting">
                                                            <label class="custom-control-label" for="dafaultSettingMessage"></label>
                                                        </div> 
                                                    </div>
                                                    <div class="col-3 p-0">
                                                         <router-link :to="{ name: 'Message', params: { id: message.id } }">
                                                             <button type="button" class="btn">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather text-primary feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                            </button>
                                                        </router-link>
                                                    </div>
                                                    <div class="col-3 p-0">
                                                        <button type="button" class="btn">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather text-primary feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                                        </button>
                                                    </div>
                                                    <div class="col-3 p-0">
                                                        <button type="button" class="btn">       
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather text-danger feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                        </button>
                                                    </div>
                                                </td>  
                                            </tr>
                                            </tbody>
                                        </table> 
                                    </div>



                                    
                                </b-collapse>
                            </b-card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="card mb-0 px-4"></div>
    </div>
</template>

<script lang="ts">

    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { GETMessaggi } from './../memoFly-api/GETMessaggi';
    import { Message } from '../schema/classes.js'
    import { Toast } from "../services/Toast.js";


    @Component({
        components: {
           
        },
    })


    export default class MessageTemplateList extends Vue {

        public defaultMessage:any = {};
        public templates:any = [];
        public rowTemplates:any = [];
        public search:string = "";
        public searchResults: string = "";

        init(){

            this.templates = [];

            GETMessaggi()
                .then((result:any)=>{
                    Toast(result,{success:"Templates caricati correttamente",error:"Errore durante il caricamento dei templates!"});
                    if(result.status == 200){

                        let index = 1;

                        for(let collection in result.data){

                            let dataCollection = result.data[collection];
                                collection=="default"?collection="messaggi default per tutti":null;

                            let template = {
                                accordionId: "accordion-"+index,
                                buttonId: "button-"+index,
                                closed:index==1?false:true,
                                name: collection,
                                data: dataCollection,
                            };

                            index++;
                          
                            this.templates.push(template);

                        }

                        this.rowTemplates = this.templates;

                    }else{
                        this.templates = [];
                    }
                });
        }

        data() {

            this.init();

            this.defaultMessage = {
                title: "Messaggio di default per tutti",
                preview: "Ti ricordiamo l'appuntamento di: martedì 01 gennaio 2020 10:30 con Hair Spa",
                when: "4 giorni",
                type: "Post appuntamento",
                setting:true,
            };
            
            return {
                templates: this.templates,
                rowTemplates: this.rowTemplates,
                defaultMessage: this.defaultMessage,
                searchResults: this.searchResults,   
            }
            
        }

        research(){

            this.searchResults = "";
            let count = 0;
            
            if(this.rowTemplates && this.search !== "" && this.search.length > 3 && this.rowTemplates.length){

                this.templates = [];

                for(let template of this.rowTemplates){

                    let sentense = "";

                    let mockup = {
                                accordionId: template.accordionId,
                                buttonId: template.buttonId,
                                closed: template.closed,
                                name: template.name,
                                data: [],
                            };

                    let dataArray:any = [];

                    for(let data of template.data){

                        sentense = template.name+data.titolo+data.testo;

                        sentense = sentense.toLowerCase();
                        this.search = this.search.toLowerCase();

                        if(sentense.includes(this.search)){
                            dataArray.push(data);
                        }

                    }

                    if(dataArray.length){
                        count += dataArray.length;
                        mockup.data = dataArray;
                        this.templates.push(mockup);
                    }

                }

                if(this.templates.length){

                    let message = "";

                    if(count==1){
                        message = "Trovato un risultato";
                    }
                    
                    if(count>1){
                        message = "Trovati n. "+count+" risultati";
                    }

                    this.searchResults = message;
                }

            }else{
                this.search = "";
                this.templates = this.rowTemplates;
            }


            return this.templates;

        }

        togleCard(template) {
            this.templates.forEach(template=>{
                if(template.closed==false) {
                    let button = document.getElementById(template.buttonId) as HTMLButtonElement;
                        button.click();
                }
            });
            if(template.closed==false){
                template.closed=true;
            }else{
                template.closed=false;
            }
        }



    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.thead-memofly{
    background-color: #7387A1;
}

.btn-light{
    box-shadow: none !important;
}

</style>
