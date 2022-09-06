import axios from 'axios';


export async function fetchKanyeTweet(){
    try{
        const data = await axios.get('https://api.kanye.rest/');
        return JSON.stringify(data);
    }catch(err){
        console.log(err)
    }
}