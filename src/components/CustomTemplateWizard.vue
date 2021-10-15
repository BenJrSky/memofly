<template>
    <div class="w-100">

        <div class="card">
            <div class="card-body">
                <h4 class="header-title mt-0 mb-3 text-uppercase font-poppins weight-700 size-14">Modelli personalizzati</h4>
                <div class="table-responsive browser_users">
                    <table class="table mb-0 ">
                        <thead class="thead-light">
                            <tr class="col-12 font-poppins weight-700 size-14 text-uppercase">
                                <th class="col-11 border-top-0 weight-700">Promo donna 8 marzo</th>
                                <th class="col-1 border-top-0"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="font-poppins weight-400 size-14">   
                                <td class="form-group vertical-align-top">
                                    <p class="mb-0 weight-400 size-14">Esempio anteprima messaggio</p>
                                </td>
                            </tr>
                            <tr class="font-poppins weight-400 size-14">   

                                <td class="form-group p-0 vertical-align-top">
                                    <p class="p-2 textarea-message weight-400 size-14" id="defaultTitleMessage">Buona festa della donna! Prenota l'appuntamento il {giorno-evento} per avere uno sconto del 10% su tutti i servizi.
                                        Ti aspettiamo da {azienda}, ci trovi in {indirizzo} {link-azienda}
                                    </p>
                                </td>
                                 <td class="d-flex form-group p-0 vertical-align-baseline col-12">
                                    <div class="col-4 p-0">
                                        <button type="button" class="btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather text-primary feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        </button>
                                    </div>
                                    <div class="col-4 p-0">
                                        <button type="button" class="btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather text-primary feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                        </button>
                                    </div>
                                    <div class="col-4 p-0">
                                        <button type="button" class="btn">       
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather text-danger feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                        </button>
                                    </div>
                                </td> 

                            </tr>
                           
                            
                        </tbody>
                    </table>   

        

                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h4 class="header-title mt-0 mb-3 text-uppercase font-poppins weight-700 size-14">Modelli standard</h4>
                <div class="table-responsive browser_users">
                   
                    <table class="table mb-0 " v-for="template in templates" :key="template">
                        <thead class="thead-light">
                            <tr class="col-12 font-poppins weight-700 size-14 text-uppercase">
                                <th class="col-11 border-top-0 weight-700">{{ template.titolo }}</th>
                                <th class="col-1 border-top-0"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="font-poppins weight-400 size-14">   
                                <td class="form-group vertical-align-top">
                                    <p class="mb-0 weight-400 size-14">Esempio anteprima messaggio</p>
                                </td>
                            </tr>
                            <tr class="font-poppins weight-400 size-14">   
                                <td class="form-group p-0 vertical-align-top">
                                    <p class="p-2 textarea-message weight-400 size-14" id="defaultTitleMessage">{{ template.testo }}</p>
                                </td>
                                 <td class="d-flex form-group p-0 vertical-align-baseline col-12">
                                    <div class="col-4 p-0">
                                        <button type="button" class="btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather text-primary feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        </button>
                                    </div>
                                    <div class="col-4 p-0">
                                        <button type="button" class="btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather text-primary feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                        </button>
                                    </div>
                                    <div class="col-4 p-0">
                                        <button type="button" class="btn">       
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather text-danger feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                        </button>
                                    </div>
                                </td> 

                            </tr>

                        </tbody>
                    </table>  

                 
                </div>
                
            </div>
        </div>





    </div>
</template>

<script lang="ts">

    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { GETTemplates } from './../memoFly-api/GETTemplates';
    import { Toast } from "../services/Toast.js";


    @Component({
        components: {
           
        },
    })


    export default class CustomTemplateWizard extends Vue {

        public defaultMessage :any = {};
        public templates :any = [];

        init(){

            GETTemplates()
                .then((templates:any)=>{
                    Toast(templates,{success:"Templates caricati correttamente",error:"Errore durante il caricamento dei templates!"});
                    if(templates.status==200){
                        this.templates = templates.data;
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
                defaultMessage: this.defaultMessage,
            }
            
        }



    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
