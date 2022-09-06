import axios from 'axios';


export async function fetchPokemon(){
    try{
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/{id or name}/`);
        return JSON.stringify(data);
    }catch(err){
        console.log(err)
    }
}