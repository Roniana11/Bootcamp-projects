import { Renderer } from "./render";
import { UserProfile } from "./user-profile";

const userProfile = new UserProfile();
const render = new Renderer();


render.renderProfile(userProfile.getUserProfileData());
$('#generateBtn').on('click',() => render.renderProfile(userProfile.generateUserData));

userProfile.generateUserData()