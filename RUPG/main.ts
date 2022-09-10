const userProfile = new UserProfile();
const render = new Renderer();

async function renderUser() {
  try {
    render.reRender(userProfile.getUserData());
    const userData = await userProfile.generateUserData();
    render.reRender(userData);
  } catch (err) {
    render.renderErrorMessage();
  }
}

$("#generateBtn").on("click", async function () {
    userProfile.clearData();
  await renderUser();
});

$("#saveBtn").on("click", () => {
  userProfile.saveUser();
  render.renderSavedUserList(userProfile.getSavedUsers());
});

$("#dropdown").on("click", ".menuItem", function () {
  const id = $(this).data().id;
  userProfile.loadUser(id);
  render.reRender(userProfile.getUserData());
});

render.renderSavedUserList(userProfile.getSavedUsers());
renderUser();
