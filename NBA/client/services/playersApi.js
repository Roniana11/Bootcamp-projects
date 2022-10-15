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
function fetchPlayers(team, year, filter) {
    return __awaiter(this, void 0, void 0, function* () {
        let URL = `http://localhost:8000/?year=${year}&team=${team}`;
        URL += filter ? `&filter=${filter}` : "";
        const data = yield $.get(URL, {
            headers: { "Access-Control-Allow-Origin": "*" },
        });
        return data;
    });
}
function getPlayerStats(lname, fname) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield $.get(`http://localhost:8000/stats/?last_name=${lname}&first_name=${fname}`);
        return data;
    });
}
function getDreamTeam() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield $.get(`http://localhost:8000/dreamteam`);
        return data;
    });
}
function addToDreamTeam(playerData) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield $.post(`http://localhost:8000/dreamteam`, JSON.stringify(playerData));
        return data;
    });
}
function removeFromDreamTeam(playerID) {
    return __awaiter(this, void 0, void 0, function* () {
        yield $.ajax({
            url: `http://localhost:8000/dreamteam/${playerID}`,
            type: "DELETE",
        });
    });
}
