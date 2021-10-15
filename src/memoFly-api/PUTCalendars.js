import Store from './../store/store';

export let PUTCalendars = (dataJSON) => {

    console.log(JSON.stringify(dataJSON));

    let url = "https://www.memofly.it:3000/api/v0.1/calendari";

    let store = new Store;

    return new Promise((resolve, reject) => {

        let username = store.get('session').username;
        let password = store.get('session').password;

        let auth = 'Basic ' + Buffer.from(username + ":" + password).toString('base64');

         fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'authorization': auth
            },
            body: JSON.stringify(dataJSON),          
        })
        .then((resp) => resp.json())
        .then((data)=>{
            console.log(data)
            resolve(data);
        })
        .catch((err) =>{
            reject(err)
        })


    });
    
    





}