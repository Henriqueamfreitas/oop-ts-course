// 1. A `Serializable` type with `serialize(): string`.
  // Abstract Class, because it looks like it will be for shared behavior 
// 2. A `BaseApiClient` with shared `baseUrl`, `getHeaders()`, and abstract `request()`.
  // interface
// 3. A `Clickable` type with `click(): void`.
  // Abstract Class, because it looks like it will be for shared behavior 
// 4. A `BaseEntity` with shared `id`, `createdAt`, and `touch()`.
  // abstract class
// 5. A `Cache` capability with `get`, `set`, and `delete`.
  // interface


// Refactor exercise:

abstract class CanPrint {
  abstract print(): void;
}

class Receipt extends CanPrint {
  print(): void {
    console.log("Receipt");
  }
}

interface ICanPrint {
  print(): void;
}

class Receipt2 implements ICanPrint {
  print(): void {
    
  }

}

// If there is no shared code, refactor to an interface.


// 1. When should you prefer an interface?
  // when its jsut to specify what tha class should have
// 2. When should you prefer an abstract class?
  // shared code
// 3. Can a class extend multiple abstract classes?
  // no, just one
// 4. Can a class implement multiple interfaces?
  // yes
// 5. Choose one:

// Need type for anything that has validate(): boolean.
// No shared implementation needed.
// interface

// Interface or abstract class?

// 6. Choose one:

// Need base class with shared retry logic and abstract send().

// Interface or abstract class?
// abstract class



// review
// Test

// 1. Explain the difference between `extends` and `implements`.
  // basically, extends can inherit code and implements cant 
// 2. Explain the difference between interface and abstract class.
  // interfcae tells what the class must have; abstract class can have shared code
// 3. What is wrong?

abstract class BaseTask {
  abstract run(): void;
}

class WalkTheDogTask extends BaseTask{
  run(): void {
    console.log('walking the dog')
  }
}

const task = new WalkTheDogTask();
task.run()

// 4. What is wrong?
// it was aninterface, but the correct is an abstract class because it has code (console.log)
abstract class Runner {
  run(): void {
    console.log("run");
  }
}

// 5. Predict the output:

interface Speaker {
  speak(): void;
}

abstract class Animal implements Speaker {
  constructor(protected name: string) {}

  abstract speak(): void;

  sleep(): void {
    console.log(`${this.name} sleeps`);
  }
}

class Dog extends Animal {
  override speak(): void {
    console.log(`${this.name} woof`);
  }
}

const speaker: Speaker = new Dog("Rex");
speaker.speak();
// Rex woof
// Rex sleeps

// 6. Is this allowed?
speaker.sleep()
// typescript is complaining because we insntaiated a speaker 