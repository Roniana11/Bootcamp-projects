class PlayersRenderer {
  reRender(players: Player[], isDreamTeam: boolean = false) {

    const container = $(".players-container");
    container.empty();
    const formattedPlayers = players.map((p) => {
      return { ...p, isDreamTeam };
    });
    let newPlayersEl = this.createTemplateEl("players-template", {
      players: formattedPlayers,
    });
    container.append(newPlayersEl);
  }

  renderModal(title: string, content: string) {
    const container = $("#demo-modal");
    container.css("display", "flex");
    let newModalEl = this.createTemplateEl("modal-template", {
      title,
      content,
    });
    
    container.append(newModalEl);
  }

  renderStatsModal(name:string,playerStats: object){
    let newStatsEl = this.createTemplateEl("stats-template", playerStats);
    this.renderModal(name,newStatsEl);
  };
  
  removeModal() {
    const container = $("#demo-modal");
    container.css("display", "none");
    container.empty();
  }

  createTemplateEl(id: string, data: any) {
    let source = $(`#${id}`).html();
    let template = Handlebars.compile(source);
    let newEl = template(data);
    return newEl;
  }
}
