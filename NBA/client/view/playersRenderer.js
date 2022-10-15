"use strict";
class PlayersRenderer {
    reRender(players, isDreamTeam = false) {

        const container = $(".players-container");
        container.empty();
        const formattedPlayers = players.map((p) => {
            return Object.assign(Object.assign({}, p), { isDreamTeam });
        });
        let newPlayersEl = this.createTemplateEl("players-template", {
            players: formattedPlayers,
        });
        container.append(newPlayersEl);
    }
    renderModal(title, content) {
        const container = $("#demo-modal");
        container.css("display", "flex");
        let newModalEl = this.createTemplateEl("modal-template", {
            title,
            content,
        });
        container.append(newModalEl);
    }
    renderStatsModal(name, playerStats) {
        let newStatsEl = this.createTemplateEl("stats-template", playerStats);
        this.renderModal(name, newStatsEl);
    }
    ;
    removeModal() {
        const container = $("#demo-modal");
        container.css("display", "none");
        container.empty();
    }
    createTemplateEl(id, data) {
        let source = $(`#${id}`).html();
        let template = Handlebars.compile(source);
        let newEl = template(data);
        return newEl;
    }
}
