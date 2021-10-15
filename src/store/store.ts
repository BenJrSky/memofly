import Vue from "vue";
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);

class Store {

    set(name: string, value: any){

        if(name && value){
            Vue.$cookies.config('7d');
            Vue.$cookies.set(name,value);
        }

    }

    get(name: string){

        if(Vue.$cookies.isKey(name)){
            return Vue.$cookies.get(name);
        }

        return null;

    }

    remove(name: string){

        if(Vue.$cookies.isKey(name)){
            return Vue.$cookies.remove(name);
        }

        return null;

    }



}


export default Store;


