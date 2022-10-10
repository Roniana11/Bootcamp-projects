const renderer = new PlayersRenderer();
const players = new Players();
const dreamTeam = new DreamTeam();

$("#getBtn").on("click", async function () {
  players.cleanPlayers();

  //check if there is a better way
  const year = parseInt($("#yearInput").val()?.toString() || "") || 0;
  const team = $("#teamInput").val()?.toString() || "";

  try {
    await players.loadPlayers(team.trim().toLowerCase(), year);
    renderer.reRender(players.getPlayers());
    } catch (e: any) {
      // create constants error messages
      if (e.status === 400) {
       renderer.renderErrorMessage("There is no such Team");
      } else if (e.status === 404) {
       renderer.renderErrorMessage("Year must be between 2012 to 2022");
      } else {
       renderer.renderErrorMessage("oooops! we had a problem");
      }
    }
  
});
