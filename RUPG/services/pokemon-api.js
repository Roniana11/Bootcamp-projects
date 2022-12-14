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
function fetchRandomPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = (yield generateRandomId()) || `https://pokeapi.co/api/v2/pokemon/1`;
            const data = yield $.get(url);
            return data;
        }
        catch (err) {
            console.log(err);
        }
    });
}
function generateRandomId() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield $.get(`https://pokeapi.co/api/v2/pokemon/?limit=1500`);
            const numberOfPokemons = data.results.length;
            const randomPokemon = (Math.random() * numberOfPokemons).toFixed(0);
            return data.results[randomPokemon].url;
        }
        catch (err) {
            console.log(err);
        }
    });
}
