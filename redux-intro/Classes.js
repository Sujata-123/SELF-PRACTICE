class Animal {
  constructor(animalType, totalLegs) {
    (this.animalType = animalType), (this.totalLegs = totalLegs);
  }

  getType() {
    return this.animalType;
  }

  omni() {
    return false;
  }
}

const cat = new Animal("Cat", 4);
const dog = new Animal("dog", 4);
console.log(cat);
console.log(dog);
console.log(Animal);
console.log(cat instanceof Animal);
console.log(cat.omni());
console.log(cat.getType());

class List {
  constructor() {}
  push() {}
  map() {}
  pop() {}
  filter() {}
}

const x=new List();
x.push(1);