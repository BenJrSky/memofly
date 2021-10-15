import Store from './../store/store';
import router from './../router/index.ts';
import { Toast } from "./../services/Toast.js";

export let SIGNCredentials = (userEmail=null, userPassword=null) => {

        let auth = 'Basic ' + Buffer.from(userEmail + ":" + userPassword).toString('base64');
        let url = 'https://www.memofly.it:3000/MW/v0.1/user';

        return new Promise((resolve, reject) => {

            if(userEmail && userPassword){

                fetch(url, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8',
                      'authorization': auth
                    }          
                })
                .then((resp) => resp.json())
                .then((data)=>{
                
                    if('status' in data){
                        if(data.status==200){
                            let store = new Store;
                                store.set('session',{username:userEmail,password:userPassword,logged:true});
                                Toast({status:200},{success:"Utente Loggato"});
                                resolve(router.push('/'));
                         }else{
                            let store = new Store;
                                store.remove('session');
                                Toast({error:"Utente Sconosciuto!"});
                                resolve(router.push('/login'));
                         }
                    }else{
                        let store = new Store;
                            store.remove('session');
                            Toast({error:"ERRORE ---> "+JSON.stringify(data)});
                            resolve(router.push('/login'));
                    }

                })
                .catch((err) =>{
                    let store = new Store;
                        store.remove('session');
                        Toast({error:"ERRORE ---> "+JSON.stringify(err)});
                        resolve(router.push('/login'));
                })

            }else{
                let store = new Store;
                    store.remove('session');
                    Toast({error:"DEVI INSERIRE EMAIL E PASSWORD"});
                    resolve(router.push('/login'));
            }
     
     
         });



}