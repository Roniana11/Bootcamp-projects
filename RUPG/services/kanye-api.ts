
 async function fetchKanyeTweet(){
    try{
        const data = await $.get('https://api.kanye.rest/');
        return data.quote;
    }catch(err){
        console.log(err)
    }
}