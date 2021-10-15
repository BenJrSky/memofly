export let Check = (schema, object) => {

        if(schema){

            let properties = Object.getOwnPropertyNames(schema);

            let asProperty = (value)=>{

                if(object.hasOwnProperty(value)){
                    return true
                }else{
                    return false;
                }
            }

            let response = properties.every(asProperty);

                return response;


        }else{
            return false;
        }



}