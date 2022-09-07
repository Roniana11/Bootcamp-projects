"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const handlebars_1 = __importDefault(require("handlebars"));
const jquery_1 = __importDefault(require("jquery"));
class Renderer {
    renderProfile(userData) {
        (0, jquery_1.default)("body").empty();
        let source = (0, jquery_1.default)("#user-info-template").html();
        let template = handlebars_1.default.compile(source);
        let newProfile = template({ userDetails: userData });
    }
}
exports.Renderer = Renderer;
