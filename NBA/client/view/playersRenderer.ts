
 class PlayersRenderer {

    reRender(players:any ) { //check the any
      const container = $('.players-container')
      container.empty();
      let newPlayersEl = this.createTemplateEl('players-template',{players: [...players]});
      container.append(newPlayersEl);
    }
  
    renderErrorMessage(message: string) {
      const container = $('.players-container')
      container.empty();
      container.append(`<div class="card">${message}</div>`);   
  }
  
    createTemplateEl(id:string,data:any){
      let source = $(`#${id}`).html();
      let template = Handlebars.compile(source);
      let newEl = template(data);
      return newEl;
    }
  }
  
  
  
  