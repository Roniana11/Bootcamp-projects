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
const dreamTeam = new DreamTeam();
$("#getBtn").on("click", function () {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        players.cleanPlayers();
        //check if there is a better way
        const year = parseInt(((_a = $("#yearInput").val()) === null || _a === void 0 ? void 0 : _a.toString()) || "") || 0;
        const team = ((_b = $("#teamInput").val()) === null || _b === void 0 ? void 0 : _b.toString()) || "";
        try {
            yield players.loadPlayers(team.trim().toLowerCase(), year);
            renderer.reRender(players.getPlayers());
        }
        catch (e) {
            // create constants error messages
            if (e.status === 400) {
                renderer.renderErrorMessage("There is no such Team");
            }
            else if (e.status === 404) {
                renderer.renderErrorMessage("Year must be between 2012 to 2022");
            }
            else {
                renderer.renderErrorMessage("oooops! we had a problem");
            }
        }
    });
});
