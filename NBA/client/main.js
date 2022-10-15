"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const renderer = new PlayersRenderer();
const players = new Players();
function renderPlayers() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        players.cleanPlayers();
        //check if there is a better way
        const year = parseInt(((_a = $("#yearInput").val()) === null || _a === void 0 ? void 0 : _a.toString()) || "") || 0;
        const team = ((_b = $("#teamInput").val()) === null || _b === void 0 ? void 0 : _b.toString()) || "";
        try {
            yield players.loadPlayers(team.trim().toLowerCase().split(" ").join("_"), year);
            renderer.reRender(players.getPlayers());
        }
        catch (e) {
            // create constants error messages
            if (e.status === 400) {
                renderer.renderModal("error", "There is no such Team");
            }
            else if (e.status === 404) {
                renderer.renderModal("error", "Year must be between 2012 to 2022");
            }
            else {
                renderer.renderModal("error", "oooops! we had a problem");
            }
        }
    });
}
function renderDreamTeam() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield getDreamTeam();
            const dreamteam = JSON.parse(data);
            renderer.reRender(dreamteam, true);
        }
        catch (e) {
            renderer.renderModal("error", "oooops! we had a problem");
        }
    });
}
function addToDreamTeamHandler(el) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = $(el).closest(".player-container").attr("id") || "";
        const player_data = players.getPlayerData(id);
        try {
            yield addToDreamTeam(player_data);
            renderer.renderModal("Good!", "We added this player to your dream team!");
        }
        catch (e) {
            if (e.status === 400) {
                renderer.renderModal("Don't worry!", "This player is already in your drem team");
            }
            else {
                renderer.renderModal("error", "oooops! we had a problem");
            }
        }
    });
}
function removeFromDreamTeamHandler(el) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = $(el).closest(".player-container").attr("id") || "";
        try {
            yield removeFromDreamTeam(id);
            renderer.renderModal("Yay!", "Deletion completed!");
            yield renderDreamTeam();
        }
        catch (e) {
            renderer.renderModal("error", "oooops! we had a problem");
        }
    });
}
function showStatsHandler(el) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = $(el).closest(".player-container").attr("id") || "";
        const player_data = players.getPlayerData(id);
        const pName = player_data.name.split(" ");
        try {
            const playerStats = yield getPlayerStats(pName[1], pName[0]); // add a ui something
            renderer.renderStatsModal(player_data.name, playerStats.stats);
        }
        catch (e) {
            if (e.status === 404) {
                renderer.renderModal("Sorry!", "We don't have more info about that player...");
            }
            else {
                renderer.renderModal("error", "oooops! we had a problem");
            }
        }
    });
}
$("#getBtn").on("click", renderPlayers);
$("#players-container").on("click", ".add", ({ target }) => addToDreamTeamHandler(target));
$("#players-container").on("click", ".remove", ({ target }) => removeFromDreamTeamHandler(target));
$("#players-container").on("click", ".stats-btn", ({ target }) => showStatsHandler(target));
$("#show-dreamteam-btn").on("click", renderDreamTeam);
$("#demo-modal").on("click", ".close-btn", () => renderer.removeModal());
