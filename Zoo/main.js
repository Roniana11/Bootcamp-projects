const Zoo = require("./Zoo");
const Bird = require("./Bird");
const Mammal = require("./Mammal");
const SeaCreature = require("./SeaCreature");
const Whale = require("./Whale");
const {LION,WHALE,GOOSE,CLOWNFISH,OWL} = require("./species")

const zoo = new Zoo(14);

const simba = new Mammal("Simba", "lion",LION.foodType,LION.amount, "110");
const nala = new Mammal("Nala", "lion",LION.foodType,LION.amount, "110");
const willyMammal = new Mammal("Willy", "Whale",WHALE.foodType,WHALE.amount, "365");
const akka = new Bird("Akka", "goose",GOOSE.foodType,GOOSE.amount, "168");
const hedwig = new Bird("Hedwig", "owl",OWL.foodType,OWL.amount, "45");
const nemo = new SeaCreature("Nemo", "clownfish",CLOWNFISH.foodType,CLOWNFISH.amount, "12");
const marlin = new SeaCreature("Marlin", "clownfish",CLOWNFISH.foodType,CLOWNFISH.amount, "12");
const willySea = new SeaCreature("Willy", "Whale",WHALE.foodType,WHALE.amount, "200");

const willy = new Whale(willyMammal,willySea)


zoo.addAnimal(simba);
zoo.addAnimal(nala);
zoo.addAnimal(willy);
zoo.addAnimal(akka);
zoo.addAnimal(hedwig);
zoo.addAnimal(nemo);
zoo.addAnimal(marlin);

zoo.printAnimals();
zoo.feedAllAnimals();
