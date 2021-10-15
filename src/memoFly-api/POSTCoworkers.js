export let POSTCoworker = (dataJSON) => {

    let url = 'https://www.memofly.it:3000/MW/v0.1/collaboratori';

    return new Promise((resolve, reject) => {

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'authorization': 'Basic d2ViZGV2QGZseWlwLm5ldDI3MzAxOTpmbjcoQjczSGlPc3A='

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