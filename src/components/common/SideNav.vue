
<template>
    <div class="leftbar-tab-menu in mm-show mm-active active">
        <div class="main-icon-menu active in mm-show">
            <a href="/metrica/analytics/analytics-index.html" class="logo logo-metrica d-block text-center active">
                <span>
                    <img src="/metrica/assets/images/logo-sm.png" alt="logo-small" class="logo-sm">
                </span>
            </a>
            <nav id="navParent" class="nav">

                <a id="navDashboard" target="paneDashboard" targetId="boxDashboard" class="nav-link active" v-on:click.prevent="togle($event)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2 align-self-center menu-icon icon-dual"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </a>

                <a id="navAppuntamenti" target="paneAppuntamenti" targetId="boxAppuntamenti" class="nav-link" v-on:click.prevent="togle($event)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar align-self-center menu-icon icon-dual"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </a>

                <a id="navServizi" target="paneServizi" targetId="boxServizi" class="nav-link" v-on:click.prevent="togle($event)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star align-self-center menu-icon icon-dual"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </a>

                <a id="navMessaggi" target="paneMessaggi" targetId="boxMessaggi" class="nav-link" v-on:click.prevent="togle($event)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send align-self-center menu-icon icon-dual"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </a>

                <a id="navImpostazioni" target="paneImpostazioni" targetId="boxImpostazioni" class="nav-link" v-on:click.prevent="togle($event)"  data-toggle="tooltip-custom" data-placement="right" title="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings align-self-center menu-icon icon-dual"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </a> 

            </nav><!--end nav-->
            <div class="pro-metrica-end active">
                <a href="" class="help active" data-toggle="tooltip-custom" data-placement="right" title="" data-original-title="Chat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle align-self-center menu-icon icon-md icon-dual mb-4"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 
                </a>
                <a href="" class="profile active">
                    <img src="/metrica/assets/images/users/user-4.jpg" alt="profile-user" class="rounded-circle thumb-sm"> 
                </a>
            </div>
        </div><!--end main-icon-menu-->

        <div class="main-menu-inner in mm-show">
            <!-- LOGO -->
            <div class="topbar-left active">
                <a href="/metrica/analytics/analytics-index.html" class="logo active">
                    <span>
                        <img src="/metrica/assets/images/logo-memofly.png" alt="logo-large" class="">
                    </span>                
                </a>
            </div>
            <!--end logo-->
            <div class="slimScrollDiv mm-active active" style="position: relative; overflow: hidden; width: auto; height: 1142px;">
                <div  id="paneParent" class="parentMenu menu-body slimscroll mm-show" style="overflow: hidden; width: auto; height: 1142px;">   
      
                    <div id="paneDashboard" class="slot">
                        <div id="boxDashboard" class="title-box" target="paneDashboard" v-on:click.prevent="menu($event)" linkArray="/, /clients" toLink="/">
                            <h6 class="menu-title font-poppins weight-600 size-14">Dashboard</h6>       
                        </div>
                        <ul class="nav nav-first-level nav-menu">
                            <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/">Appuntamenti</li>
                            <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/clients">Clienti</li>
                        </ul>
                    </div>

                    <div id="paneAppuntamenti" class="slot">
                        <div id="boxAppuntamenti" class="title-box" target="paneAppuntamenti" v-on:click.prevent="menu($event)" linkArray="/appointments," toLink="/appointments">
                            <h6 class="menu-title font-poppins weight-600 size-14">Appuntamenti</h6>       
                        </div>
                        <ul class="nav nav-first-level nav-menu">
                            <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/appointments">Tutti</li>
                            <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/">Per calendario</li>
                        </ul>
                    </div>

                    <div id="paneServizi" class="slot">
                        <div id="boxServizi" class="title-box" target="paneServizi" v-on:click.prevent="menu($event)" linkArray="/services, /service" toLink="/services">
                            <h6 class="menu-title font-poppins weight-600 size-14">Servizi</h6>       
                        </div>
                        <ul class="nav nav-first-level nav-menu">
                            <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/services">Tutti</li>
                            <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/service">Aggiungi</li>
                        </ul>
                    </div>

                    <div id="paneMessaggi" class="slot">
                        <div id="boxMessaggi" class="title-box" target="paneMessaggi" v-on:click.prevent="menu($event)" linkArray="/messages, /message, /templates" toLink="/messages">
                            <h6 class="menu-title font-poppins weight-600 size-14">Messaggi</h6>       
                        </div>
                        <ul class="nav nav-first-level nav-menu">
                            <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/messages">Tutti</li>
                            <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/message">Aggiungi</li>
                            <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/templates">Modelli messaggi</li>
                        </ul>
                    </div>

                     <div id="paneImpostazioni" class="slot">
                        <div id="boxImpostazioni" class="title-box" target="paneImpostazioni" v-on:click.prevent="menu($event)" linkArray="/settings/account/setting, /settings/account/license,/settings/account/company-details,/settings/account/calendar-settings,/settings/coworkers/all,/settings/clients/all" toLink="/settings/account/setting">
                            <h6 class="menu-title font-poppins weight-600 size-14">Impostazioni</h6>       
                        </div>
                        <ul class="nav nav-first-level nav-menu">
                            <li class="nav-link font-poppins weight-500 size-14">
                                <a class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="menu($event)" toLink="/settings/account/setting" target="settingMenu">
                                    <span class="w-100">Account</span><span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span></a>
                                <ul id="settingMenu" class="nav-second-level nav-menu">
                                    <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/settings/account/setting">Impostazioni</li>
                                    <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/settings/account/calendar-settings">Calendario</li>
                                    <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/settings/account/license">Licenza</li>
                                    <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/settings/account/company-details">Dettagli Azienda</li>
                                    <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/">Avanzate</li>      
                                </ul>            
                            </li>
                            <li class="nav-link font-poppins weight-500 size-14">
                                <a class="nav-link" toLink="/settings/coworkers/all" linkArray="/settings/coworkers/all" v-on:click.prevent="menu($event)" target="coworkerMenu"><span class="w-100">Collaboratori</span><span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span></a>
                                <ul id="coworkerMenu" class="nav-second-level nav-menu">
                                    <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/settings/coworkers/all">Tutti</li>      
                                    <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/">Aggiungi</li>      
                                </ul>            
                            </li>  
                             <li class="nav-link font-poppins weight-500 size-14">
                                <a class="nav-link" toLink="/" linkArray="" v-on:click.prevent="menu($event)" target="targetMenu"><span class="w-100">Clienti</span><span class="menu-arrow"><i class="mdi mdi-chevron-right"></i></span></a>
                                <ul id="targetMenu" class="nav-second-level nav-menu">
                                    <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/settings/clients/all">Tutti</li>   
                                    <li class="nav-link font-poppins weight-500 size-14" v-on:click.prevent="goToLink($event)" toLink="/settings/client">Aggiungi</li>      
                                </ul>            
                            </li>  
                        </ul>
                    </div>

                </div>
            </div><!--end menu-body-->
        
    
        </div><!-- end main-menu-inner-->
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Store from './../../store/store';


@Component
export default class SideNav extends Vue {
  @Prop() private title!: string;

    data(){
        return { 
        }
    }

    check(){

        let titles = document.getElementsByClassName("title-box");

        if(titles){

            for(let title of titles){
                let stringArray = title.getAttribute("linkArray");
                if(stringArray){
                    let linkArray = stringArray.split(",").map(link=>{
                        return link.trim();
                    })

                    if(linkArray.includes(this.$route.path)){
                        this.closeTabs();

                        let container = title.parentNode as any;
                        let parent = container.parentNode;
                        let menus = container.getElementsByTagName("ul");
                        
                        if(menus){
                            let menu = menus[0];
                                menu.classList.add("show-true");
                                menu.classList.remove('show-false');

                                let menuLinks = menu.getElementsByTagName('li');

                                menuLinks.forEach((menu :any)=>{
                                    let toLink = menu.getAttribute("toLink");
                                    if(toLink==this.$route.path){
                                        menu.classList.add("active");
                                    }
                                })

                            if(parent.nodeName == "ul" || parent.nodeName == "UL"){
                                parent.classList.add("show-true");
                                parent.classList.remove('show-false');             
                            }


                        }

                        let target = title.getAttribute("target") as any;
                        let slot = document.getElementById(target) as any;
                        let navParent = document.getElementById("navParent") as any;
                        let anchors = navParent.getElementsByClassName("nav-link") as any;

                        let navmenu = slot.getElementsByClassName("nav-menu")[0] as any;
                        let listmenu = navmenu.getElementsByTagName("li");
                        let marginBottom = 35*1 + 20*listmenu.length; 

                        anchors.forEach((anchor:any)=>{
                            anchor.style.marginBottom = "0px";
                            anchor.classList.remove("active");
                        });

                        anchors.forEach((anchor:any)=>{
                            if(anchor.target==target){
                                anchor.classList.add("active");
                                anchor.style.marginBottom = marginBottom+"px";
                            }
                        });

                        navmenu.classList.add("show-true");
                        navmenu.classList.remove('show-false');
                                    }
                }
            }

        }

    }

    mounted() {
        this.init();

    }

    init(){
        this.closeTabs();
        this.check();

    }

    goToLink(element:any){

        let selected = element.currentTarget;
        let link = selected.getAttribute("toLink");

        if(link){
            this.$router.push({ path: link })
        }


    }

    closeTabs(){

        let navmenu = document.getElementsByClassName("nav-menu") as any;

        navmenu.forEach((element:any)=>{
            element.classList.remove('show-true');
            element.classList.add('show-false');
        });
        
    }

    closemenu(){

        let navmenu = document.getElementsByClassName("nav-second-level") as any;

        navmenu.forEach((element:any)=>{
            element.classList.remove('show-true');
            element.classList.add('show-false');
        });
        
    }

    menu(element:any){

        this.closeTabs();

        let selected = element.currentTarget;
        let container = selected.parentNode;
        let parent = container.parentNode;
        let menus = container.getElementsByTagName("ul");
        
        if(menus){
            let menu = menus[0];
                menu.classList.add("show-true");
                menu.classList.remove('show-false');

            if(parent.nodeName == "ul" || parent.nodeName == "UL"){
                parent.classList.add("show-true");
                parent.classList.remove('show-false');             
            }

        }

        let target = selected.getAttribute("target");
        let slot = document.getElementById(target) as any;
        let navParent = document.getElementById("navParent") as any;
        let anchors = navParent.getElementsByClassName("nav-link") as any;

        let navmenu = slot.getElementsByClassName("nav-menu")[0] as any;
        let listmenu = navmenu.getElementsByTagName("li");
        let marginBottom = 35*1 + 20*listmenu.length; 

        anchors.forEach((anchor:any)=>{
            anchor.style.marginBottom = "0px";
            anchor.classList.remove("active");
        });

        anchors.forEach((anchor:any)=>{
            if(anchor.target==target){
                anchor.classList.add("active");
                anchor.style.marginBottom = marginBottom+"px";
            }
        });

        navmenu.classList.add("show-true");
        navmenu.classList.remove('show-false');

        let toLink = selected.getAttribute("toLink");

        anchors.forEach((anchor:any)=>{
            anchor.style.marginBottom = "0px";
            anchor.classList.remove("active");
        });

        if(toLink){
            this.$router.push({ path: toLink })
        }


    }

    togle(element:any){

        this.closeTabs();

        let current = element.currentTarget;

        let navParent = document.getElementById("navParent") as any;
        let anchors = navParent.getElementsByClassName("nav-link") as any;

        let targetId = current.getAttribute("targetId");
        let targetElement = document.getElementById(targetId) as any;
        let links = targetElement.getAttribute("linkArray");

        anchors.forEach((anchor:any)=>{
            anchor.style.marginBottom = "0px";
            anchor.classList.remove("active");
        });

        current.classList.add("active");

        if(links){
            let toLink = links.split(",")[0];
            this.$router.push({ path: toLink })
        }

       
    }

}


</script>

<style scoped lang="scss">

    .title-box{
        cursor: pointer;
    }

    .parentMenu{
        padding-top: 0px;
    }

    .leftbar-tab-menu .main-icon-menu .nav{
        margin-top: 30px !important;
    }

    .slot{
        min-height:60px;
    }

    .slot .menu-title{
        height:60px;
        line-height: 60px;
    }

</style>
