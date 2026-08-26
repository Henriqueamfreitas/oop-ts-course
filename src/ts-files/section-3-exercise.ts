class Wallet {
  public owner: string;
  private balance: number;

  constructor(owner: string) {
    this.owner = owner
    this.balance = 0
  }

  public deposit(amount: number) {
    this.balance += amount
  }

  public spend(amount: number) {
    if (this.balance < amount) return 'Insuficient funds'
    this.balance -= amount
  }

  public getBalance(): string {
    return `Account balance is $${this.balance}`
  }
}

const wallet = new Wallet('Henrique')
console.log(1, wallet.getBalance())
wallet.deposit(1000)
console.log(2, wallet.getBalance())
wallet.spend(2000)
console.log(3, wallet.getBalance())
wallet.spend(250)
console.log(4, wallet.getBalance())



// 1. What does `public` mean?
// it means anuthyng outside the class can access it
// 2. What does `private` mean?
// it means the only whats inside the class can access it
// 3. What does `protected` mean?
// it means that only elements inside classes and subclasses can access it 
// 4. Which access modifier would you use for a password field?
// private
// 5. Why should a bank account balance usually be private?
// because you dont want to let elements from outside the class to set the balance directly
// 6. Predict which lines are allowed:


class Base {
  public a = 1;
  private b = 2;
  protected c = 3;
}

class Child extends Base {
  show(): void {
    console.log(this.a); // can be accessed because its public
    console.log(this.b); // cannot be accessed because its private
    console.log(this.c); // can be accessed because its inside a subclass
  }
}

const obj = new Child();
console.log(obj.a); // 1 can be accessed because its public
console.log(obj.b); // cannot be accessed because its private
console.log(obj.c); // cannot be accessed because its protected



// review sections 1, 2 and 3
// class defines what the element must have (guide)
// object is an elment that has values and occupy memory (it can be from a class, but it does not need to)
// instance is a class with actual values


class Timer {
  seconds: number; //property

  constructor() { // constructor
    this.seconds = 0;
  }

  tick(): void { //method
    this.seconds += 1;
  }
}

class Lamp {
  isOn: boolean;

  constructor() {
    this.isOn = false;
  }

  turnOn(): void {
    this.isOn = true;
  }
}

class Score {
  value: number = 0;
}
// it does not have a constructor (why is that important?)
//  you are setting a value to score directly
const score = new Score();
score.value = -100;


class Box {
  private label: string;

  constructor(label: string) {
    this.label = label;
  }

  readLabel(): string {
    return this.label;
  }
}

const box = new Box("tools");
console.log(box.readLabel()); //tools