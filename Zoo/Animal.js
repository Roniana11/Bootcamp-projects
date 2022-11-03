class Animal{

    constructor(name, species, foodType,foodAmount){
        this.name =name
        this.species =species
        this.foodType= foodType
        this.foodAmount= foodAmount
    }

    toString(){
        return `name: ${this.name}\nspecies: ${this.species}\nfood type: ${this.foodType}\nfood amount: ${this.foodAmount}kg\n`
    }

    getFoodType(){
        return this.foodType
    }

    getFoodAmount(){
        return this.foodAmount
    }
}

module.exports= Animal