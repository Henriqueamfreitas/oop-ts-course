class Notification {
  send(): string{
    return `you have a notification`
  }
}

class EmailNotification extends Notification {
  override send(){
    return 'you have a email notification'
  }
}

class SMSNotification extends Notification {
  override send(){
    return 'you have a sms notification'
  }
}

const notification = new Notification()
const emailNotification = new EmailNotification()
const smsNotification = new SMSNotification()

console.log(notification.send())
console.log(emailNotification.send())
console.log(smsNotification.send())


class Report {
  print(): void {
    console.log("Printing report");
  }
}

class PdfReport extends Report {
  // override pritn(): void {
  override print(): void {
    console.log("Printing PDF");
  }
}

// override helps here because you had mispelled print in the override

// 1. What is method overriding?
  // its when a subclass modify an existing class method (only for itself)
// 2. Does overriding modify the parent class?
  // no 
// 3. Why is the `override` keyword useful?
  // its kind like typescript... for example, if you misspell the method name, it returns an error  
// 4. Predict the output:
class Shape {
  draw(): void {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  override draw(): void {
    console.log("Drawing circle");
  }
}

const shape = new Shape();
const circle = new Circle();

shape.draw(); // Drawing shape
circle.draw(); // Drawing circle

// 5. Is this overriding?
class A {
  save(): void {}
}

class B extends A {
  load(): void {}
}
// no!


// cumulative review
// 1. Explain the difference between property and method.
  // property is a chracteristict of the class instance
  // method is a function
// 2. Explain public, private, and protected.
  // public: every item can access it
  // private:: just elements inside the class can access it
  // protected: just elements inside the class and the subclass can access it
// 3. Explain static vs instance member.
  // static is a chacrtteristic for the whole class (its the same for every instance); each instance has 
  // its own values forthe properties
// 4. Explain extends, super, and overriding.
  // extends means that one class gets the properties and methods of the others (public and protected)
  // super is uised for the subclass to tell the class to run its constructor
  // overriding: to assing a different value for a property or method in subclass 
// 5. Predict the output:

class Device {
  static count = 0;

  constructor(public name: string) {
    Device.count += 1;
  }

  turnOn(): void {
    console.log(`${this.name} on`);
  }
}

class Phone extends Device {
  constructor(name: string, public number: string) {
    super(name);
  }

  override turnOn(): void {
    console.log(`${this.name} phone on`);
  }
}

const a = new Device("Lamp");
const b = new Phone("Pixel", "123");

a.turnOn(); // Lamp on
b.turnOn(); // Pixel phone on
console.log(Device.count); //2



// 6. Fix the access problem:
class Account {
  private balance = 0;
  public addBalance(amount: number) {
    this.balance += amount
  }
}

const account = new Account();
// account.balance += 100;
account.addBalance(100)