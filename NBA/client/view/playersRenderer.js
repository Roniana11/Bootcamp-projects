"use strict";
class PlayersRenderer {
    reRender(players) {
        const container = $('.players-container');
        container.empty();
        let newPlayersEl = this.createTemplateEl('players-template', { players: [...players] });
        container.append(newPlayersEl);
    }
    renderErrorMessage(message) {
        const container = $('.players-container');
        container.empty();
        container.append(`<div class="card">${message}</div>`);
    }
    createTemplateEl(id, data) {
        let source = $(`#${id}`).html();
        let template = Handlebars.compile(source);
        let newEl = template(data);
        return newEl;
    }
}
