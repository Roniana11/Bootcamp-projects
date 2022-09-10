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
const userProfile = new UserProfile();
const render = new Renderer();
function renderUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            render.reRender(userProfile.getUserData());
            const userData = yield userProfile.generateUserData();
            render.reRender(userData);
        }
        catch (err) {
            render.renderErrorMessage();
        }
    });
}
$("#generateBtn").on("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        userProfile.clearData();
        yield renderUser();
    });
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
