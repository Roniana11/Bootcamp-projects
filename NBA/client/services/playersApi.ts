async function fetchPlayers(team: string, year: number) {
    const data = await $.get(
      `http://localhost:8000/?year=${year}&team=${team}`,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    return data;

}

async function getPlayerStats(playerID: string) {
  /// fix this method
  try {
    const data = await $.get(`http://localhost:8000/images`);
    return data;
  } catch (e) {
    console.log(e);
  }
}
