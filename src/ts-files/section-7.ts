abstract class PaymentMethod {
  constructor(protected amount: number) {}

  printReceipt(): void {
    console.log(`Paid $${this.amount}`);
  }

  abstract pay(): void;
}

class CreditCardPayment extends PaymentMethod {
  constructor(amount: number, private cardLast4: string) {
    super(amount);
  }

  override pay(): void {
    console.log(`Charging card ending in ${this.cardLast4}`);
  }
}

const payment = new CreditCardPayment(50, "4242");

payment.pay(); // Charging card ending in 4242
payment.printReceipt(); //Paid $50

// Not allowed:
// const basePayment = new PaymentMethod(50);