import axios from 'axios';


export async function fetchUserData(limit){
    try{
        const data = await axios.get('https://randomuser.me/api/');
        return JSON.stringify(data);
    }catch(err){
        console.log(err)
    }
}