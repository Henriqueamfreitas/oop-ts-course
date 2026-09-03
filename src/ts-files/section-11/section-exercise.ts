interface DiscountPolicy {
  calculate(total: number): number
}

class NoDiscount implements DiscountPolicy {
  calculate(total: number): number {
    return total
  }
}

class PercentageDiscount implements DiscountPolicy {
  constructor(private discount: number) { }

  calculate(total: number): number {
    if (this.discount > 100 || this.discount <= 0) return total
    return total - total * this.discount / 100
  }
}

class FixedDiscount implements DiscountPolicy {
  constructor(private discount: number) { }

  calculate(total: number): number {
    if (total < this.discount) return total
    return total - this.discount
  }
}

function checkout(total: number, discount: DiscountPolicy): number {
  return discount.calculate(total)
}

console.log(checkout(100, new NoDiscount()))
console.log(checkout(100, new FixedDiscount(10)))
console.log(checkout(100, new PercentageDiscount(20)))


interface Shape {
  returnArea(): number
}

class RectangleArea implements Shape {
  constructor(private width: number, private height: number){}
  returnArea(): number {
    return this.width * this.height
  }
}

class CircleArea implements Shape {
  constructor(private radius: number){}

  returnArea(): number {
    return this.radius * this.radius * Math.PI
  }
}


function calculateArea(shape: Shape): number {
  return shape.returnArea()
}

console.log(calculateArea(new RectangleArea(30, 10)))
console.log(calculateArea(new CircleArea(10)))


// 1. What is polymorphism?
  // when other class must implement somthing of the interface but each one implements on its own way
// 2. Does polymorphism require inheritance?
  // no
// 3. Why is this function polymorphic?
  // beacuase all notiufers has methdo send, but each one can do things differently
function sendAll(notifiers: Notifier[]): void {
  for (const notifier of notifiers) {
    notifier.send("Hello");
  }
}

// 4. Predict the output:

interface Greeter {
  greet(): void;
}

class FriendlyGreeter implements Greeter {
  greet(): void {
    console.log("Hi!");
  }
}

class FormalGreeter implements Greeter {
  greet(): void {
    console.log("Good morning.");
  }
}

const greeters: Greeter[] = [
  new FriendlyGreeter(),
  new FormalGreeter(),
];

for (const greeter of greeters) {
  greeter.greet();
}

// Hi!
// Good morning