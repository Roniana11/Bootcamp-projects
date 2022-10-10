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
class Players {
    constructor() {
        this.players = [];
    }
    getPlayers() {
        return this.players;
    }
    cleanPlayers() {
        this.players.length = 0;
    }
    getPlayerStats() { }
    loadPlayers(teamName, year) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield fetchPlayers(teamName, year);
            this.players = data.map((player) => {
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
        });
    }
}
