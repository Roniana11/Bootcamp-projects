const Animal = require('./Animal');

class SeaCreature extends Animal {
    constructor(name, species, foodType, foodAmount, lowestDepth) {
      super(name, species, foodType, foodAmount);
      this.lowestDepth = lowestDepth;
    }

    toString(){
      return super.toString() + `lowest depth: ${this.lowestDepth}m\n`;
    }
  }
  
module.exports = SeaCreature
