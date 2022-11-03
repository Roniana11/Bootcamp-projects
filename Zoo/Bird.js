const Animal = require('./Animal');

class Bird extends Animal {
    constructor(name, species, foodType, foodAmount, wingSpan) {
      super(name, species, foodType, foodAmount);
      this.wingSpan = wingSpan;
    }

    toString(){
        return super.toString() + `wing span: ${this.wingSpan}cm\n`;
      }
  }
  
  module.exports = Bird