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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
const user_api_1 = require("./services/user-api");
const bacon_api_1 = require("./services/bacon-api");
const kanye_api_1 = require("./services/kanye-api");
const pokemon_api_1 = require("./services/pokemon-api");
class UserProfile {
    constructor() {
        this.userData = {
            firstName: "",
            lastName: "",
            picture: "",
            city: "",
            state: "",
            friends: [],
            pokemon: { name: "", image: "" },
            about: "",
            qoute: "",
        };
    }
    generateUserData() {
        return __awaiter(this, void 0, void 0, function* () {
            const responses = yield Promise.all([
                (0, user_api_1.fetchUserData)(1),
                (0, user_api_1.fetchUserData)(7),
                (0, bacon_api_1.fetchBaconText)(),
                (0, kanye_api_1.fetchKanyeTweet)(),
                (0, pokemon_api_1.fetchRandomPokemon)(),
            ]);
            this.setPersonalDetails(responses[0]);
            this.setFriends(responses[1]);
            this.setAbout(responses[2]);
            this.setTweet(responses[3]);
            this.setPokemon(responses[4]);
            return this.userData;
        });
    }
    setTweet(tweet) {
        this.userData.qoute = tweet;
    }
    setAbout(about) {
        this.userData.about = about.data[0];
    }
    setPokemon(pokemon) {
        this.userData.pokemon = { name: pokemon.name, image: pokemon.sprites.front_default };
    }
    setFriends(people) {
        people.forEach((person) => {
            this.userData.friends.push(`${person.name.first} ${person.name.last}`);
        });
    }
    setPersonalDetails(people) {
        this.userData.firstName = people[0].name.first;
        this.userData.lastName = people[0].name.last;
        this.userData.picture = people[0].picture.thumbnail;
        this.userData.city = people[0].location.city;
        this.userData.state = people[0].location.state;
    }
}
exports.UserProfile = UserProfile;
