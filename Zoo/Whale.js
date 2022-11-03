const Animal = require("./Animal");

class Whale {
  constructor(mammal, seaCreatures) {
    Object.assign(this, mammal);
    Object.assign(this, seaCreatures);
  }

  toString() {
    return `name: ${this.name}\nspecies: ${this.species}\nfood type: ${this.foodType}\nfood amount: ${this.foodAmount}kg\nlowest depth: ${this.lowestDepth} m\npregnancy duration: ${this.pregnancyDuration} days\n`;
  }

  getFoodType() {
    return this.foodType;
  }

  getFoodAmount() {
    return this.foodAmount;
  }
}

module.exports = Whale;
