class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eat(): void {
    console.log(`${this.name} eats`);
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  bark(): void {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Rex", "Labrador");
const animal = new Animal("Rex");

dog.eat(); // rex eats
dog.bark(); // rex barks
console.log(dog.breed); // Labrador
