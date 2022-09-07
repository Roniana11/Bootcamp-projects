import axios from 'axios';

export async function fetchBaconText(){
    try{
        const data = await axios.get('https://baconipsum.com/api/?type=meat-and-filler');
        return data; 
    }catch(err){
        console.log(err)
    }
}