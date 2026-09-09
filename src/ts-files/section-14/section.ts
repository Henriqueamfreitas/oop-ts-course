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

class Checkout {
  constructor(private pricingStrategy: PricingStrategy) {} //DI

  total(basePrice: number): number {
    return this.pricingStrategy.calculate(basePrice); // COMPOSITION
  }
}

const regularCheckout = new Checkout(new RegularPricing()); //DI
const holidayCheckout = new Checkout(new HolidayPricing()); //DI

console.log(regularCheckout.total(100)); //100
console.log(holidayCheckout.total(100)); // 80