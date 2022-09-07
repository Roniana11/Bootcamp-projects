import { fetchUserData } from "./services/user-api";
import { fetchBaconText } from "./services/bacon-api";
import { fetchKanyeTweet } from "./services/kanye-api";
import { fetchRandomPokemon } from "./services/pokemon-api";

type person = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    thumbnail: string;
  };
  location: {
    city: string;
    state: string;
  };
};

type pokemon = {
  name: string;
  image: string;
};

type userData = {
  firstName: string;
  lastName: string;
  picture: string;
  city: string;
  state: string;
  friends: string[];
  pokemon: pokemon;
  about: string;
  qoute: string;
};
export class UserProfile {
  private userData: userData;

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

  async generateUserData() {
    const responses = await Promise.all([
      fetchUserData(1),
      fetchUserData(7),
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

  setTweet(tweet: any) {
    this.userData.qoute = tweet;
  }

  setAbout(about: any) {
    this.userData.about = about.data[0];
  }
  setPokemon(pokemon: any) {
    this.userData.pokemon = { name: pokemon.name, image: pokemon.sprites.front_default };
  }

  setFriends(people: any[]) {
    people.forEach((person) => {
      this.userData.friends.push(`${person.name.first} ${person.name.last}`);
    });
  }

  setPersonalDetails(people: person[]) {
    this.userData.firstName = people[0].name.first;
    this.userData.lastName = people[0].name.last;
    this.userData.picture = people[0].picture.thumbnail;
    this.userData.city = people[0].location.city;
    this.userData.state = people[0].location.state;
  }
}
