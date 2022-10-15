const renderer = new PlayersRenderer();
const players = new Players();

async function renderPlayers(filter: string) {
  players.cleanPlayers();

  const year = parseInt($("#yearInput").val()?.toString() || "") || 0;
  const team = $("#teamInput").val()?.toString() || "";

  try {
    await players.loadPlayers(
      team.trim().toLowerCase().split(" ").join("_"),
      year,
      filter
    );
    renderer.reRender(players.getPlayers());
  } catch (e: any) {

    if (e.status === 400) {
      renderer.renderModal("error", "There is no such Team");
    } else if (e.status === 404) {
      renderer.renderModal("error", "Year must be between 2012 to 2022");
    } else {
      renderer.renderModal("error", "oooops! we had a problem");
    }
  }
}

async function renderDreamTeam() {
  try {
    const data = await getDreamTeam();
    const dreamteam = JSON.parse(data);
    renderer.reRender(dreamteam, true);
  } catch (e: any) {
    renderer.renderModal("error", "oooops! we had a problem");
  }
}

async function addToDreamTeamHandler(el: HTMLButtonElement) {
  const id = $(el).closest(".player-container").attr("id") || "";
  const player_data = players.getPlayerData(id);
  try {
    await addToDreamTeam(player_data);
    renderer.renderModal("Good!", "We added this player to your dream team!");
  } catch (e: any) {
    if (e.status === 400) {
      renderer.renderModal(
        "Don't worry!",
        "This player is already in your drem team"
      );
    } else {
      renderer.renderModal("error", "oooops! we had a problem");
    }
  }
}

async function removeFromDreamTeamHandler(el: HTMLButtonElement) {
  const id = $(el).closest(".player-container").attr("id") || "";
  try {
    await removeFromDreamTeam(id);
    renderer.renderModal("Yay!", "Deletion completed!");
    await renderDreamTeam();
  } catch (e: any) {
    renderer.renderModal("error", "oooops! we had a problem");
  }
}

async function showStatsHandler(el: HTMLButtonElement) {
  const id = $(el).closest(".player-container").attr("id") || "";
  const player_data = players.getPlayerData(id);
  const pName = player_data.name.split(" ");
  try {
    const playerStats = await getPlayerStats(pName[1], pName[0]); // add a ui something
    renderer.renderStatsModal(player_data.name, playerStats.stats);
  } catch (e: any) {
    if (e.status === 404) {
      renderer.renderModal(
        "Sorry!",
        "We don't have more info about that player..."
      );
    } else {
      renderer.renderModal("error", "oooops! we had a problem");
    }
  }
}

$("#getBtn").on("click", () => renderPlayers(''));

$("#players-container").on("click", ".add", ({ target }) =>
  addToDreamTeamHandler(target)
);

$("#players-container").on("click", ".remove", ({ target }) =>
  removeFromDreamTeamHandler(target)
);

$("#players-container").on("click", ".stats-btn", ({ target }) =>
  showStatsHandler(target)
);

$("#show-dreamteam-btn").on("click", renderDreamTeam);

$("#filter-btn").on("click", () => renderPlayers("dateOfBirthUTC"));

$("#demo-modal").on("click", ".close-btn", () => renderer.removeModal());
