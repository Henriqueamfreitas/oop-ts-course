class Animal {
  // i can do this or the part below
  // public name: string
  // constructor(name: string){
  //   this.name = name
  // }

  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  override speak(): void {
    console.log(`${this.name} says woof`);
  }
}

class Cat extends Animal {
  override speak(): void {
    console.log(`${this.name} says meow`);
  }
}

const animal = new Animal("Creature");
const dog = new Dog("Rex");
const cat = new Cat("Milo");

animal.speak(); // Creature makes a sound
dog.speak(); // Rex says woof
cat.speak(); // Milo says Meow

// - Changing the method signature in a way that breaks substitutability.
//  for example, in the parent class, it returns a number, but in the subclass, it returns a string?