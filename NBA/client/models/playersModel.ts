class Players {
  private players: Player[] = [];

  getPlayers() {
    return this.players;
  }

  cleanPlayers() {
    this.players.length = 0;
  }

  getPlayerStats() {}

  async loadPlayers(teamName: string, year: number) {
    const data = await fetchPlayers(teamName, year);
    this.players = data.map((player: any) => {
      //find a solution for any here
      return {
        id: player.id,
        name: player.firstName + " " + player.lastName,
        jersey: player.jersey,
        position: player.pos,
        image: `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`,
        isInDreamTeam: false,
      };
    });
  }
}
