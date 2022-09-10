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
        this.savedUsers = this.loadUsersFromStorage();
    }
    getUserData() {
        return this.userData;
    }
    getSavedUsers() {
        return this.savedUsers;
    }
    generateUserData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responses = yield Promise.all([
                    fetchUserData(1),
                    fetchUserData(6),
                    fetchBaconText(),
                    fetchKanyeTweet(),
                    fetchRandomPokemon(),
                ]);
                this.setPersonalDetails(responses[0]);
                this.setFriends(responses[1]);
                this.setAbout(responses[2]);
                this.setTweet(responses[3]);
                this.setPokemon(responses[4]);
                return this.userData;
            }
            catch (err) {
                throw new Error();
            }
        });
    }
    setTweet(tweet) {
        this.userData.qoute = tweet;
    }
    setAbout(about) {
        this.userData.about = about[0];
    }
    setPokemon(pokemon) {
        this.userData.pokemon = {
            name: pokemon.name,
            image: pokemon.sprites.front_default,
        };
    }
    setFriends(people) {
        this.userData.friends = people.map((person) => {
            return {
                name: { first: person.name.first, last: person.name.last },
                picture: person.picture.medium,
            };
        });
    }
    setPersonalDetails(people) {
        this.userData.firstName = people[0].name.first;
        this.userData.lastName = people[0].name.last;
        this.userData.picture = people[0].picture.large;
        this.userData.city = people[0].location.city;
        this.userData.state = people[0].location.state;
    }
    loadUsersFromStorage() {
        let savedUsersSting = localStorage.getItem("users");
        return savedUsersSting ? JSON.parse(savedUsersSting) : [];
    }
    saveUser() {
        const isExists = this.savedUsers.find((user) => user.picture === this.userData.picture);
        if (!isExists)
            this.savedUsers.push(this.userData);
        localStorage.setItem("users", JSON.stringify(this.savedUsers));
    }
    loadUser(id) {
        const userToLoad = this.savedUsers.find((user) => user.picture === id);
        if (userToLoad) {
            this.userData = userToLoad;
        }
    }
    clearData() {
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
}
