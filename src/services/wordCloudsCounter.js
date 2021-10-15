export let wordCloudsCounter = (words) => {

    if(words){

        let wordsArray = words.split(' ');
        let counter = [];
        let clouds = [];

        for(let word of wordsArray){

            if(word.length>=4){

                let cloud = counter.find(item => item.name == word);

                if(cloud){
                     cloud.counter = parseInt(cloud.counter + 1);
                }else{
                     counter.push({name: word, counter: 0});
                }

            }

        }


        counter = counter.sort(((a,b) => b.counter-a.counter)).splice(0,30);

        for(let word of counter){
            clouds.push([word.name, word.counter])            
        }


        return clouds;
                

    }else{
        return [];
    }



}