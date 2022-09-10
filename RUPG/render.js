"use strict";
class Renderer {
    reRender(userData) {
        const container = $('#container');
        container.empty();
        let newProfile = this.createTemplateEl('user-info-template', userData);
        let newFriendsEl = this.createTemplateEl('friends-template', { friends: [...userData.friends] });
        let newPokemonEl = this.createTemplateEl('pokemon-template', userData.pokemon);
        let newQouteEl = this.createTemplateEl('qoute-template', { qoute: userData.qoute });
        container.css('display', 'grid');
        container.append(newProfile, newFriendsEl, newPokemonEl, newQouteEl);
    }
    renderSavedUserList(users) {
        $('.dropdown-content').empty();
        let newMenu = this.createTemplateEl('dropdown-template', { users: [...users] });
        $('.dropdown-content').append(newMenu);
    }
    renderErrorMessage() {
        const container = $('#container');
        container.empty();
        container.css('display', 'block');
        container.append('<div class="card">Oops! something happend...</div>');
    }
    createTemplateEl(id, data) {
        let source = $(`#${id}`).html();
        let template = Handlebars.compile(source);
        let newEl = template(data);
        return newEl;
    }
}
