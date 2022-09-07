"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const render_1 = require("./render");
const user_profile_1 = require("./user-profile");
const userProfile = new user_profile_1.UserProfile();
const render = new render_1.Renderer();
render.renderProfile(userProfile.getUserProfileData());
$('#generateBtn').on('click', () => render.renderProfile(userProfile.generateUserData));
userProfile.generateUserData();
