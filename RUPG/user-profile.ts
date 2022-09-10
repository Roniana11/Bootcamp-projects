type person = {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
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
  friends: object[];
  pokemon: pokemon;
  about: string;
  qoute: string;
};

class UserProfile {

  private userData: userData;
  private savedUsers: userData[];

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

  async generateUserData() {
    try {
      const responses = await Promise.all([
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
    } catch (err) {
      throw new Error();
    }
  }

  setTweet(tweet: any) {
    this.userData.qoute = tweet;
  }

  setAbout(about: any) {
    this.userData.about = about[0];
  }
  setPokemon(pokemon: any) {
    this.userData.pokemon = {
      name: pokemon.name,
      image: pokemon.sprites.front_default,
    };
  }

  setFriends(people: any[]) {
    this.userData.friends = people.map((person) => {
      return {
        name: { first: person.name.first, last: person.name.last },
        picture: person.picture.medium,
      };
    });
  }

  setPersonalDetails(people: person[]) {
    this.userData.firstName = people[0].name.first;
    this.userData.lastName = people[0].name.last;
    this.userData.picture = people[0].picture.large;
    this.userData.city = people[0].location.city;
    this.userData.state = people[0].location.state;
  }

  loadUsersFromStorage() {
    let savedUsersSting: string | null = localStorage.getItem("users");
    return savedUsersSting ? JSON.parse(savedUsersSting) : [];
  }

  saveUser() {
    const isExists = this.savedUsers.find(
      (user: any) => user.picture === this.userData.picture
    );
    if (!isExists) this.savedUsers.push(this.userData);
    localStorage.setItem("users", JSON.stringify(this.savedUsers));
  }

  loadUser(id: any) {
    const userToLoad = this.savedUsers.find((user: any) => user.picture === id);
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
