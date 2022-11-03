const SupplyManager = require('./SupplyManager');

class Zoo{
    constructor(feedingCycle){
        this.animals =[];
        this.supplyManager = new SupplyManager(feedingCycle)
    }

    addAnimal(animal){
        this.animals.push(animal);
        this.supplyManager.addNewFoodType(animal.getFoodType(),animal.getFoodAmount())
    }

    printAnimals(){
        this.animals.forEach(animal => console.log(animal.toString()))
    }

    feedAllAnimals(){
        this.animals.forEach(animal => {
            const foodType = animal.getFoodType();
            const foodAmount = animal.getFoodAmount();
            try{
                this.supplyManager.reduce(foodType,foodAmount)
            }catch(e){
                print(e);
                this.supplyManager.refill(foodType,foodAmount)
                this.supplyManager.reduce(foodType,foodAmount)
            }
            })
    }

}

module.exports = Zoo