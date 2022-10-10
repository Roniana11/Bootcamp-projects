"use strict";
class PlayersRenderer {
    reRender(players) {
        const container = $('.players-container');
        container.empty();
        let newPlayersEl = this.createTemplateEl('players-template', players);
        //container.css('display', 'grid');
        container.append(newPlayersEl);
    }
    //   renderErrorMessage() {
    //     const container = $('#container')
    //     container.empty();
    //     container.css('display', 'block');
    //     container.append('<div class="card">Oops! something happend...</div>');
    // }
    createTemplateEl(id, data) {
        let source = $(`#${id}`).html();
        let template = Handlebars.compile(source);
        let newEl = template(data);
        return newEl;
    }
}