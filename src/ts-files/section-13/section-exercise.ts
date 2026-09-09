// 1. Create an interface `PaymentGateway` with `charge(amount: number): boolean`.
interface PaymentGateway {
  charge(amount: number): boolean
}
// 2. Create `StripeGateway` and `FakePaymentGateway`.
class StripeGateway implements PaymentGateway{
  charge(amount: number): boolean {
    return true
  }
}

class FakePaymentGateway implements PaymentGateway{
  charge(amount: number): boolean {
    return false
  }
}

// 3. Create `CheckoutService` that receives `PaymentGateway` in its constructor.
class CheckoutService {
  constructor(private paymentGateway: PaymentGateway){}

  checkout(amount: number){
    return this.paymentGateway.charge(amount)
  }
}


// 4. Use `FakePaymentGateway` in a test-like example.
const fake = new CheckoutService(new FakePaymentGateway())
const stripe = new CheckoutService(new StripeGateway())
console.log(fake.checkout(100))
console.log(stripe.checkout(100))

// 5. Explain why this is easier to test than creating `StripeGateway` inside `CheckoutService`.
// because checkout service receieves a áymentgateway, not necessairly the stripe one... if you want to create antoehr from another type, you can


// Refactor bad code:
interface Logger {
  log(message: string): void  
}

class ConsoleLogger implements Logger{
  log(message: string): void {
    console.log(message)
  }
}

class ReportService {
  constructor(private logger: Logger){}
  generate(): void {
    this.logger.log("Generating report");
  }
}

const report = new ReportService(new ConsoleLogger())
report.generate()

// Refactor so the logger is injected.




// 1. What is a dependency?
  // its one element that is inserted in a class
// 2. What is dependency injection?
  // when this element is insetred in a class
// 3. What is constructor injection?
  // when this element is insetred in a class via constructor
// 4. Why does DI help testing?
  // because its easier to reutilize for similiar dependencies (different coffemakers)
// 5. What is wrong here?
// its creating its own sender. the correct path was to use DI so it just uses a sender created elsewhere
class EmailService {
  private sender = new SmtpSender();

  sendWelcomeEmail(to: string): void {
    this.sender.send(to, "Welcome");
  }
}
