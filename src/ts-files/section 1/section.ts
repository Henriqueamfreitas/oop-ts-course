class Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  bark(): void {
    console.log(`${this.name} says woof`);
  }
}

const dog1 = new Dog("Rex");
const dog2 = new Dog("Luna");

dog1.bark();
// it will print "Rex says woof" to the console
dog2.bark();
// it will print "Luna says woof" to the console

console.log(dog1);
console.log(dog1 === dog2);
// it will print false
console.log(dog1 instanceof Dog);
// it will print true

