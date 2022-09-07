import axios from 'axios';


export async function fetchUserData(limit:number){
    try{
        const {data} = await axios.get(`https://randomuser.me/api/?results=${limit}`);
        return data.results;
    }catch(err){
        console.log(err)
    }
}