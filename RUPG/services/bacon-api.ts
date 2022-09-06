import axios from 'axios';

export async function fetchBaconText(){
    try{
        const data = await axios.get('https://baconipsum.com/api/?type=meat-and-filler');
        return data[0]; //check if the return value is really array
    }catch(err){
        console.log(err)
    }
}