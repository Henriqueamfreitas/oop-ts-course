// bad inheritance
class EngineInheritance {
  start(): void {
    console.log("Engine starts");
  }
}

class CarInheritance extends EngineInheritance {
  drive(): void {
    this.start();
    console.log("Car drives");
  }
}

// better composition
class Engine {
  start(): void {
    console.log("Engine starts");
  }
}

class Car {
  constructor(private engine: Engine) {}

  drive(): void {
    this.engine.start();
    console.log("Car drives");
  }
}

const carInheritance = new CarInheritance();

const engine = new Engine();
const car = new Car(engine);

car.drive()
carInheritance.start()
carInheritance.drive()

// ok, so basically, its goof because car do not start; it just drives; the engine that starts. is that it?