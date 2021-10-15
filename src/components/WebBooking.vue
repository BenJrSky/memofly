<template>
  <div class="row">
    <div class="card col-12">
        <div class="card-body col-12 p-4">

            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="form-group">
                        <h4 class="mt-0 header-title font-roboto weight-700 size-17">Prenotazioni via web</h4>
                    </div>            
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <small class="form-text text-muted font-poppins weight-400 mb-3 size-14">Personalizza l'URL delle prenotazioni via web</small>
                        <div class="row col-12 pl-1">
                            <p class="form-control font-poppins weight-500 size-14 col-sm-12 col-md-3 border-0">{{ webBookingLink }}</p>
                            <input type="text" class="form-control weight-500 size-14 col-sm-12 col-md-6" v-model="slug" placeholder="slug">
                            <button type="submit" class="btn btn-gradient-primary font-poppins weight-700 size-14 mb-3" v-on:click="update()">Aggiorna</button>
                        </div>
                    </div>            
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <small class="form-text text-muted font-poppins weight-400 mb-3 size-14">Includi la prenotazione via web sul tuo sito</small>
                        <div class="row col-12">
                            <textarea class="form-control resize-no p-2 weight-500 size-14 col-sm-12 col-md-9" rows="6" id="defaultTitleMessage" v-model="iFrame"  spellcheck="false"></textarea>
                        </div>
                    </div>            
                </div>
            </div>





          
        </div>
    </div>
  </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { GETCalendars } from "../memoFly-api/GETCalendars.js";
    import { PUTSlug } from "../memoFly-api/PUTSlug.js";

    import { Toast } from "../services/Toast.js";

    @Component({
        components: {
        },
    })


    export default class WebBooking extends Vue {

        public slug: string = "";
        public iFrame: string = "";
        public webBookingLink: string = "https://calendar.memofly.it/";


        data() {
            
            return {
                slug: this.slug,
                iFrame: this.iFrame,
            }
            
        }

        mounted() {
            this.init();
        }

        init(){

             GETCalendars()
                .then((response:any)=>{

                    this.slug = response.data.slug;
                    this.iFrame = "<iframe src='https://calendar.memofly.it/"+ this.slug +"' style='width: 100%; height: 80vh; background: #fff'></iframe>";

                });

        }

        update(){

            if(this.slug && this.slug.length>1){ 

                const slug = {
                    slug: this.slug,
                }   

                PUTSlug(slug).then(result=>{

                    if(result && result.status == 200){
                        this.init();
                        Toast({status: 200},{success:"Slug aggiornato con successo!"});
                    }else{
                        Toast({status: 400},{error:"Errore durante"});
                    }

                });


            }else{
                Toast({status: 400},{error:"Slug non valido!"});
            }

        }


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
