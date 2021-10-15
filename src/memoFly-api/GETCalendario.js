export let GETCalendario = (id) => {

    let url = "https://www.memofly.it:3000/MW/v0.1/calendario";

    return new Promise((resolve, reject) => {

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': 'Basic d2ViZGV2QGZseWlwLm5ldDI3MzAxOTpmbjcoQjczSGlPc3A='
            },
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