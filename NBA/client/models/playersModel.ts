class Players {
  private players: Player[] = [];

  getPlayers() {
    return this.players;
  }

  getPlayerData(id: string){
    const player_data = this.players.find(p => p.id === id) || {name:' '};
    return player_data;
  }

  cleanPlayers() {
    this.players.length = 0;
  }

  getPlayerStats() {}

  async loadPlayers(teamName: string, year: number) {
    const data = await fetchPlayers(teamName, year);
    this.cleanPlayers()
    this.players = data.map((player: any) => {
      //find a solution for any here
      return {
        id: player.personId,
        name: player.firstName.toUpperCase() + " " + player.lastName.toUpperCase(),
        jersey: player.jersey,
        position: player.pos,
        image: `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`,
      };
    });
  }
}
