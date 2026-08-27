class Vehicle {
  public brand: string

  constructor(brand: string) {
    this.brand = brand
  }

  public move(): string {
    return `car of brand ${this.brand} is moving`
  }
}

class Car extends Vehicle {
  doors: number

  constructor(brand: string, doors: number) {
    super(brand)
    this.doors = doors
  }

  describe(): string {
    return `car with brand ${this.brand} has ${this.doors} doors`
  }
}

const car = new Car('wolkswagen', 4)
console.log(car.brand)
console.log(car.describe())
console.log(car.doors)
console.log(car.move())

class Engine {
  start(): void {
    console.log("Engine starts");
  }
}

class Car2 extends Engine {
  drive(): void {
    this.start();
    console.log("Car drives");
  }
}

const car2 = new Car2()
car2.start()
car2.drive()
// Explain why this relationship is suspicious. You will refactor it later with composition.
//A car has an engine. So this should not be inheritance. It should eventually become composition:

// 1. What does `extends` mean?
  // it means that one class is inheritancing methods and properties from another
// 2. What does `super(...)` do?
  // its a way for the subclass to say to the class to start its constructor
// 3. In `class Dog extends Animal`, which class is the parent?
  // Animal 
// 4. Which phrase usually suggests inheritance: "is a" or "has a"?
  // is a  dog is a subclass of animal
// 5. Predict the output:

class Person {
  constructor(public name: string) {}

  introduce(): void {
    console.log(`I am ${this.name}`);
  }
}

class Student extends Person {
  constructor(name: string, public course: string) {
    super(name);
  }
}

const student = new Student("Ivy", "TypeScript");
student.introduce(); // i am Ivy
console.log(student.course); //Typescript or error