class TodoItem {
  text: string;
  isDone: boolean;

  constructor(text: string,){
    this.text = text
    this.isDone = false
  }

  complete(): void{
    this.isDone = true
  }

  summary(): string {
    return `${this.isDone ? 'DONE' : 'TODO'}: ${this.text}`
  }
}

const task1 = new TodoItem("Buy milk");
console.log(task1.text)
console.log(task1.isDone)
task1.complete()
console.log(task1.summary())
console.log(task1.isDone)

// What is a property?
  // its a charcaterisitct of the object
// What is a method?
  // its a fucntion of the object
// What is a constructor?
  // it assign the values of the properties of the object when it is created
// What does this mean inside a class?
  // it means that that value belojngs to the instance of the class

class Counter {
  count: number;

  constructor() {
    this.count = 0;
  }

  increment(): void {
    this.count += 1;
  }
}

const c = new Counter();
c.increment();
c.increment();

console.log(c.count); // 2

class Player {
  name: string;
  score: number;

  constructor(name: string) {
    this.name = name;
    this.score = 0;
  }

  addPoint(): void {
    this.score += 1;
  }
}

const player1 = new Player("player 1")
console.log(player1.name)
console.log(player1.score)
player1.addPoint()
player1.addPoint()
console.log(player1.score)

// 1. What is a property?
// its a chracteristic of the class
// 2. What is a method?
// its a funciton of the class
// 3. When does a constructor run?
// when the class is called
// 4. What does `this.balance += amount` mean?
// it means that the object has the amount added to its orignal balance