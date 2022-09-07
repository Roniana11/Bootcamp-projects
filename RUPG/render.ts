import handleBars from "handlebars";
import jQuery from "jquery";
export class Renderer {
  renderProfile(userData: object) {
    jQuery("body").empty();

    let source = jQuery("#user-info-template").html();
    let template = handleBars.compile(source);
    let newProfile = template({ userDetails: userData });
  }
}
