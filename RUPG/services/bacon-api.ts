
 async function fetchBaconText(){
    try{
        const data = await $.get('https://baconipsum.com/api/?type=meat-and-filler');
           return data; 
    }catch(err){
        console.log(err)
    }
}