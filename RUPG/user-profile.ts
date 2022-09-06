import {fetchUserData} from './services/user-api';
import {fetchBaconText} from './services/bacon-api';
import {fetchKanyeTweet} from './services/kanye-api';
import {fetchPokemon} from './services/pokemon-api';

export class UserProfile {
  firstName: string;
  lastName: string;
  picture: string;
  city: string;
  state: string;
  friends: string[];

  getUserProfileData() {
    return {
      fname: this.firstName,
      lastName: this.lastName,
      picture: this.picture,
      city: this.city,
      state: this.state,
      friends: this.friends,
    };
  }

  async fetchUserData(){
    const responses: object[] = await Promise.all([fetchUserData(7),fetchBaconText,fetchKanyeTweet,fetchPokemon]);

  }
}
