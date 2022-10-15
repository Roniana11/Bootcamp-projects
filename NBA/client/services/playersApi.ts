async function fetchPlayers(team: string, year: number) {
    const data = await $.get(
      `http://localhost:8000/?year=${year}&team=${team}`,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    return data;
}

async function getPlayerStats(lname: string, fname:string) {
    const data = await $.get(`http://localhost:8000/stats/?last_name=${lname}&first_name=${fname}`);
    return data;
}

async function getDreamTeam() {
    const data = await $.get(`http://localhost:8000/dreamteam`);
    return data;
}

async function addToDreamTeam(playerData: Player | object) {
    const data = await $.post(`http://localhost:8000/dreamteam`,JSON.stringify(playerData));
    return data;
}

async function removeFromDreamTeam(playerID: string) {
   await $.ajax({
        url: `http://localhost:8000/dreamteam/${playerID}`,
        type: 'DELETE',
      });
}
