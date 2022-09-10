
 async function fetchUserData(limit:number){
    try{
        const data = await $.get(`https://randomuser.me/api/?results=${limit}`);
        return data.results;
    }catch(err){
        console.log(err)
    }
}