import axios from 'axios';


export async function fetchRandomPokemon(){
    try{
        const url = await generateRandomId() ||`https://pokeapi.co/api/v2/pokemon/1`;
        const {data} = await axios.get(url);
         return data;
    }catch(err){
        console.log(err)
    }
}


export async function generateRandomId(){
    try{
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1500`);
        const numberOfPokemons = data.results.length;
        const randomPokemon = (Math.random()*numberOfPokemons).toFixed(0);
        return data.results[randomPokemon].url;
    }catch(err){
        console.log(err)
    }
}
