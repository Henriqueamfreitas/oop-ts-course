// 1. In the Strategy example, identify:
//    - Interface: PrincingStrategy
//    - Implementing classes: when regular and hoçliday implements the interface
//    - Composition constructor(private princingStrategy: PirnicingStrategy)
//    - Polymorphism
//    - Dependency injection
interface PricingStrategy { // interface
  calculate(basePrice: number): number;
}

class RegularPricing implements PricingStrategy { //implements
  calculate(basePrice: number): number {
    return basePrice;
  }
}

class HolidayPricing implements PricingStrategy { //implements
  calculate(basePrice: number): number {
    return basePrice * 0.8;
  }
}

class StandardPricing implements PricingStrategy { //implements
  calculate(basePrice: number): number {
    return basePrice * 5;
  }
}

class ExpressPricing implements PricingStrategy { //implements
  calculate(basePrice: number): number {
    return basePrice * 10;
  }
}

class Checkout {
  constructor(private pricingStrategy: PricingStrategy) {} //DI

  total(basePrice: number): number {
    return this.pricingStrategy.calculate(basePrice); // COMPOSITION
  }
}

const regularCheckout = new Checkout(new RegularPricing()); //DI
const holidayCheckout = new Checkout(new HolidayPricing()); //DI

const standardCheckout = new Checkout(new StandardPricing()); //DI
const expressCheckout = new Checkout(new ExpressPricing()); //DI

console.log(regularCheckout.total(100)); //100
console.log(holidayCheckout.total(100)); // 80
console.log(standardCheckout.total(100)); // 500
console.log(expressCheckout.total(100)); // 1000

// 2. Refactor this conditional code using Strategy:

function shippingCost(type: string, weight: number): number {
  if (type === "standard") {
    return weight * 5;
  }

  if (type === "express") {
    return weight * 10;
  }

  return weight * 20;
}

// 3. Explain in your own words why Strategy is not "just an interface."
// dont know



// 1. What are design patterns built from? interfaces
// 2. Which OOP ideas appear in Strategy? composition, DI, interfaces, implementation
// 3. Why should you avoid forcing patterns into simple code? complexity
// 4. Predict the output:

interface Formatter {
  format(text: string): string;
}

class UpperFormatter implements Formatter {
  format(text: string): string {
    return text.toUpperCase();
  }
}

class PrefixFormatter implements Formatter {
  format(text: string): string {
    return `LOG: ${text}`;
  }
}

class MessagePrinter {
  constructor(private formatter: Formatter) {} //COMPOSITION

  print(text: string): void {
    console.log(this.formatter.format(text));
  }
}

new MessagePrinter(new UpperFormatter()).print("hello"); // HELLO
new MessagePrinter(new PrefixFormatter()).print("hello"); // LOG: hello

// 5. In the code above, where is composition? 
  // constructor(private formatter: Formatter) {} //COMPOSITION
