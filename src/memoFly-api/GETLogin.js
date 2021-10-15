import router from './../router/index.ts';
import { ASKMemoflyCredentials } from './../memoFly-api/ASKMemoflyCredentials.js';
import { SIGNCredentials } from './../memoFly-api/SIGNCredentials.js';

export let GETLogin = (username=null, password=null) => {
    
           return ASKMemoflyCredentials(username,password)
                .then((response) =>{
                    if(response.status==200){
                        if('password' in response.data && 'email' in response.data){
                            const userEmail = response.data.email;
                            const userPassword = response.data.password;
                            SIGNCredentials(userEmail,userPassword);
                        }else{
                            Toast({error:"Mancano le credenziali"});
                            resolve(router.push('/login'));
                        }
                     }else{
                        Toast({error:"Credenziali errate"});
                        resolve(router.push('/login'));
                     }
                })
                .catch((error) =>{
                    router.push('/login');
                })

}