const Animal = require('./Animal');


class Mammal extends Animal {
  constructor(name, species, foodType, foodAmount, pregnancyDuration) {
    super(name, species, foodType, foodAmount);
    this.pregnancyDuration = pregnancyDuration;
  }

  toString(){
    return super.toString() + `pregnancy duration: ${this.pregnancyDuration} days\n`;
  }
}

module.exports = Mammal
