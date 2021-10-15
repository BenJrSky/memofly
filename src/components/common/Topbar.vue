<template>
    <div class="topbar">           
      <nav class="navbar-custom">    
        <ul class="list-unstyled topbar-nav mb-0">    
            <li>
              <button class="button-menu-mobile nav-link" v-on:click="togleNav()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu align-self-center"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              </button>
            </li>
        </ul>
        <ul class="list-unstyled topbar-nav mb-0"> 
            <li class="dropdown show">
                <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="true">
                    <img src="./../../../public/metrica/assets/images/users/user-4.jpg" alt="profile-user" class="rounded-circle"> 
                    <span class="ml-3 nav-user-name hidden-sm font-poppins weight-500 size-14">{{ user.nomeVisualizzato }} <i class="mdi mdi-chevron-down"></i> </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right" x-placement="bottom-end" style="position: absolute; transform: translate3d(-27px, 70px, 0px); top: 0px; left: 0px; will-change: transform;">
                    <a class="dropdown-item" href="#"><i class="dripicons-user text-muted mr-2"></i> Profile</a>
                    <a class="dropdown-item" href="#"><i class="dripicons-wallet text-muted mr-2"></i> My Wallet</a>
                    <a class="dropdown-item" href="#"><i class="dripicons-gear text-muted mr-2"></i> Settings</a>
                    <a class="dropdown-item" href="#"><i class="dripicons-lock text-muted mr-2"></i> Lock screen</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="dripicons-exit text-muted mr-2"></i> Logout</a>
                </div>
            </li>
        </ul>
        <ul class="list-unstyled topbar-nav float-right mb-0"> 
            <li class="">
              <span class="nav-link waves-effect waves-light nav-user">
                 <span class="mr-1 nav-user-name hidden-sm text-primary">{{ user.sottoscrizione }}</span>
              </span>
            </li>
            <li>
              <span class="nav-link waves-effect waves-light nav-user">
                <button type="button" class="btn btn-lg btn-gradient-primary mr-3 radius-20 weigth-700 size-14">
                  <a class="text-white" target="_blank" href="https://www.memofly.it/prodotto/abbonamenti-memofly/?switch-subscription=6916&item=1824&_wcsnonce=40357e40ae&auto-switch=true" >
                    Migliora
                  </a>
                </button>
              </span>
            </li>
        </ul>


      </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GETUser } from './../../memoFly-api/GETUser.js';
import { User } from './../../schema/classes.js';
import Store from './../../store/store';


@Component
export default class Topbar extends Vue {

  public user:any;

  data(){

      this.user = new User;
      
      GETUser()
      .then((response:any)=>{

         if(response.status==200){
              this.user = response.data;
            }else{
              this.user = {};
            }

        return this.user;

      })


    return {
      user: this.user,
    }
  }

  mounted(){
    this.loadStorage();
  }

  togleNav(){

    this.loadStorage();

    let menuInner = document.getElementsByClassName('main-menu-inner')[0];
    let navbar = document.getElementsByClassName('navbar-custom')[0];
    let pageContent = document.getElementsByClassName('page-content-tab')[0];

    if(navbar){

        if(menuInner.classList.contains('hide-this')){
          menuInner.classList.remove('hide-this');
          navbar.classList.remove('menuInner-hidden');
          pageContent.classList.remove('page-content-wide');
        }else{
          menuInner.classList.add('hide-this');
          navbar.classList.add('menuInner-hidden');
          pageContent.classList.add('page-content-wide');
        }

        this.updateStorage();


    }



  }

  loadStorage(){

    let menuInner = document.getElementsByClassName('main-menu-inner')[0];
    let navbar = document.getElementsByClassName('navbar-custom')[0];
    let pageContent = document.getElementsByClassName('page-content-tab')[0];

    if(navbar){

      let storage = new Store;
      let topBarClas = storage.get('topBarClass');

      if(topBarClas){
        topBarClas = topBarClas;
        menuInner.setAttribute('class',topBarClas.menuInnerClass);
        navbar.setAttribute('class',topBarClas.navbarClass);
        pageContent.setAttribute('class',topBarClas.pageContentClass);
      }

    }


  }

  updateStorage(){
    
    let menuInner = document.getElementsByClassName('main-menu-inner')[0];
    let navbar = document.getElementsByClassName('navbar-custom')[0];
    let pageContent = document.getElementsByClassName('page-content-tab')[0];

    if(menuInner && navbar && pageContent){

          let storage = new Store;

          let menuInnerClass = menuInner.getAttribute('class');
          let navbarClass = navbar.getAttribute('class');
          let pageContentClass = pageContent.getAttribute('class');

          if(menuInnerClass && navbarClass && pageContentClass){
            let topBarClass = {
                menuInnerClass: menuInnerClass,
                navbarClass: navbarClass,
                pageContentClass: pageContentClass
            }

            storage.set('topBarClass',JSON.stringify(topBarClass));
          }


    }


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
