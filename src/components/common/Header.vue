<template>
  <div class="row">
    <div class="col-sm-12">
        <div class="page-title-box">
            <div class="float-right">
                <ol class="breadcrumb">
                    <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb" class="breadcrumb-item" v-bind:class="{active: breadcrumb.active}">
                      <router-link v-if="breadcrumb.active==false" v-bind:to="breadcrumb.link">{{breadcrumb.name}}</router-link>
                      <span v-if="breadcrumb.active==true">{{breadcrumb.name}}</span>
                    </li>
                </ol>
            </div>
            <h4 class="page-title weigth-700 size-19">{{title}}</h4>
        </div><!--end page-title-box-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  public route!: string;
  public branch!: string;
  public breadcrumb: any;
  public breadcrumbs: any;
  public title!: string;

  data() {
    
      this.title = "";
      this.breadcrumbs = [];

      const match = (url)=>{
          const path = this.$route.path;
          const count = path.match(url);

          if(count && count.length>0){
            return true
          }else { 
            return false;
          }

      };

        if(match(/\//)){
            this.title = "Dashboard analisi appuntamenti";
            this.breadcrumbs = [];
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Dashboard', link:'/', active:false});
            this.breadcrumbs.push({ name:'Analisi appuntamenti', link:'', active:true});
        }

        if(match(/\/templates/)){
            this.title = "Modelli messaggi";
            this.breadcrumbs = [];
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Messaggi', link:'/messages', active:false});
            this.breadcrumbs.push({ name:'Modelli messaggi', link:'', active:true});
        }

         if(match(/\/message/)){
            this.breadcrumbs = [];
            this.title = "Messaggio";
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Messaggi', link:'/messages', active:false});
            this.breadcrumbs.push({ name:'Messaggio', link:'', active:true});        
        }

        if(match(/\/messages/)){
            this.breadcrumbs = [];
            this.title = "Tutti i messaggi";
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Messaggi', link:'/messages', active:false});
            this.breadcrumbs.push({ name:'Tutti i messaggi', link:'', active:true});        
        }

        if(match(/\/appointments/)){
            this.breadcrumbs = [];
            this.title = "Tutti gli appuntamenti";
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Appuntamenti', link:'/appointments', active:false});
            this.breadcrumbs.push({ name:'Tutti gli Appuntamenti', link:'', active:true});
        }

        if(match(/\/service/)){
            this.breadcrumbs = [];
            this.title = "Servizio";
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Servizi', link:'/services', active:false});
            this.breadcrumbs.push({ name:'Aggiungi', link:'', active:true});
        }

        if(match(/\/services/)){
            this.breadcrumbs = [];
            this.title = "Tutti i servizi";
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Servizi', link:'/services', active:false});
            this.breadcrumbs.push({ name:'Tutti', link:'', active:true});
        }

        if(match(/\/clients/)){
            this.breadcrumbs = [];
            this.title = "Dashboard analisi clienti";
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Dashboard', link:'/', active:false});
            this.breadcrumbs.push({ name:'Analisi clienti', link:'', active:true});
        }

        if(match(/\/settings\/client/)){
            this.title = "Profilo cliente";
            this.breadcrumbs = [];
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Impostazioni', link:'/settings', active:false});
            this.breadcrumbs.push({ name:'Cliente', link:'/settings/client', active:false});
            this.breadcrumbs.push({ name:'Tutti', link:'/settings/clients/all', active:true});
        }

        if(match(/\/settings\/profile/)){
            this.title = "Profilo utente";
            this.breadcrumbs = [];
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Impostazioni', link:'/settings', active:false});
            this.breadcrumbs.push({ name:'Clienti', link:'/settings/clients', active:false});
            this.breadcrumbs.push({ name:'Tutti', link:'/settings/clients/all', active:true});
        }

        if(match(/\/settings\/clients\/all/)){
            this.title = "Clienti";
            this.breadcrumbs = [];
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Impostazioni', link:'/settings', active:false});
            this.breadcrumbs.push({ name:'Clienti', link:'/settings/clients', active:false});
            this.breadcrumbs.push({ name:'Tutti', link:'/settings/clients/all', active:true});
        }

        if(match(/\/settings\/coworkers\/all/)){
            this.title = "Tutti i collabooratori";
            this.breadcrumbs = [];
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Impostazioni', link:'/settings', active:false});
            this.breadcrumbs.push({ name:'Collaboratori', link:'/settings/coworkers', active:false});
            this.breadcrumbs.push({ name:'Tutti', link:'/settings/coworkers/all', active:true});
        }

        if(match(/\/settings\/account\/license/)){
            this.title = "Licenza e piani";
            this.breadcrumbs = [];
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Impostazioni', link:'/settings', active:false});
            this.breadcrumbs.push({ name:'Account', link:'/settings/account', active:false});
            this.breadcrumbs.push({ name:'Licenza', link:'/settings/account/license', active:true});
        }

        if(match(/\/settings\/account\/calendar-settings/)){
            this.title = "Impostazioni calendari";
            this.breadcrumbs = [];
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Impostazioni', link:'/settings', active:false});
            this.breadcrumbs.push({ name:'Account', link:'/settings/account', active:false});
            this.breadcrumbs.push({ name:'Calendari', link:'/settings/account/calendar-settingss', active:true});
        }

        if(match(/\/settings\/account\/company-details/)){
            this.title = "Dettagli azienda";
            this.breadcrumbs = [];
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Impostazioni', link:'/settings', active:false});
            this.breadcrumbs.push({ name:'Account', link:'/settings/account', active:false});
            this.breadcrumbs.push({ name:'Dettagli azienda', link:'/settings/account/company-details', active:true});
        }

        if(match(/\/settings\/account\/setting/)){
            this.title = "Impostazioni account";
            this.breadcrumbs = [];
            this.breadcrumbs.push({ name:'Memofly', link:'/login', active:false});
            this.breadcrumbs.push({ name:'Impostazioni', link:'/settings', active:false});
            this.breadcrumbs.push({ name:'Account', link:'/settings/account', active:false});
            this.breadcrumbs.push({ name:'Impostazioni', link:'/settings/account/setting', active:true});
        }


    return { 
      title: this.title,
      breadcrumbs:this.breadcrumbs
    }



  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
