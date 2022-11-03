class SupplyManager {
  constructor(feedingCycle) {
    this.supply = new Map();
    this.feedingCycle = feedingCycle;
  }

  reduce(foodType, reduceBy) {
    const reducedfoodAmount = this.supply.get(foodType) - reduceBy;
    if (reducedfoodAmount < 0) {
      throw Error( `We are out of ${foodType}, please refill!`);
    } else {
      this.supply.set(foodType, reducedfoodAmount);
    }
  }

  refill(foodType, amount) {
    this.supply.set(
      foodType,
      this.supply.get(foodType) + amount * this.feedingCycle
    );
  }

  addNewFoodType(foodType, amount) {
    const feedingCycleAmount = this.feedingCycle * amount;
    const updatesAmount = this.supply.has(foodType)
      ? this.supply.get(foodType) + feedingCycleAmount
      : feedingCycleAmount;
    this.supply.set(foodType, updatesAmount);
  }

  changeFeedingCycle(numOfDays) {
    this.feedingCycle = numOfDays;
  }
}


module.exports = SupplyManager;