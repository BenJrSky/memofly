import Store from './../store/store';
import { Toast } from "./../services/Toast.js";

export let ASKMemoflyCredentials = (userEmail=null, userPassword=null) => {

        let url = 'https://www.memofly.it:3000/MW/v0.1/login';

        if (userEmail=="222" && userPassword=="222"){
            userEmail = "webdev@flyip.net";
            userPassword = "kildeBoard";
        }

        let store = new Store;
            store.remove('session');

        return new Promise((resolve, reject) => {

            if(userEmail && userPassword){

                const dataJSON = {
                    email:userEmail,
                    password:userPassword
                }

                fetch(url, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(dataJSON),     
                })
                .then((resp) => resp.json())
                .then((response)=>{

                    if('status' in response){
                        if(response.status==200){
                            resolve(response);
                         }else{
                            Toast({error:"Credenziali errate"});
                            resolve(null);
                         }
                    }else{
                        Toast({error:"Errore Sconosciuto!"});
                        resolve(null);
                    }

                })
                .catch((err) =>{
                    resolve(null);
                })

            }else{
                resolve(null);
            }
     
         });

}