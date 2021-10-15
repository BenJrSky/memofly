
import { Vue } from 'vue-property-decorator';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);

export let Toast = (data, options={})=>{

    let response = {
        message: null,
        type: null,
        position: 'top-right'
    }
    
    if(data.status){

        let status = {
            success: options.success || " - Esecuzione avvenuta con successo.",
            error: options.error || " - Errore durante l'esecuzione.",
            info: options.info || " - Messaggio generico.",
            warning: options.warning || data.status + " - Messaggio di allerta durante l'esecuzione."
        }
        
        if(data.status>=200){
            response.message = data.status + " - Ben fatto! " + status.success;
            response.type = "success";
        }

        if(data.status>=400){
            response.message = data.status + " - Errore lato user. " + status.error;
            response.type = "error";
        }

        if(data.status>=500){
            response.message = data.status + " - Errore lato server. " + status.error;
            response.type = "error";
        }
        

    }else{
        response.message = data.error || JSON.stringify(data);
        response.type = "error";
    }

    return Vue.$toast.open(response);

}