class Temperature {
  static celsiusToFahrenheit(celsius: number): number {
    return ((celsius * 9) / 5) + 32;
  }

  static fahrenheitToCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
  }
}

const temperatureF = Temperature.celsiusToFahrenheit(0)
const temperatureC = Temperature.fahrenheitToCelsius(32)

console.log(temperatureC)
console.log(temperatureF)

// 5. Explain why these methods are good candidates for `static`.
// They are good for static because its a math formula, hence, its fixed for all temperatuires


// 1. What does `static` mean?
  // it means that its a vvalue for the class not for the object of it
// 2. Do static members belong to an object or the class?
  // to the class
// 3. Do instance members belong to an object or the class?
  // to a class
// 4. Predict the output:

class Ticket {
  private static nextNumber = 1;
  number: number;

  constructor() {
    this.number = Ticket.nextNumber;
    Ticket.nextNumber += 1;
  }
}

const a = new Ticket();
const b = new Ticket();

console.log(a.number); // 1
console.log(b.number); // 2

// 5. Is this allowed?

class Tool {
  static label = "Hammer";
}

const tool = new Tool();
console.log(tool.label);
// no, it should be
console.log(Tool.label) 