import Store from '../../store/store';

export let GETAppointmentsPerCalendar = () => {

    let url = 'https://www.memofly.it:3000/api/v0.1/dashAppuntamentiPerCalendario';

    let store = new Store;

    return new Promise((resolve, reject) => {

        let username = store.get('session').username;
        let password = store.get('session').password;

        let auth = 'Basic ' + Buffer.from(username + ":" + password).toString('base64');

         fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': auth
            }          
        })
        .then((resp) => resp.json())
        .then((data)=>{
            resolve(data);
        })
        .catch((err) =>{
            reject(err)
        })


    });
    
    





}