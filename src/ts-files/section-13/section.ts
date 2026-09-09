// Without dependency injection:
class ConsoleLogger1 {
  log(message: string): void {
    console.log(message);
  }
}

class OrderService1 {
  private logger = new ConsoleLogger1();

  placeOrder(): void {
    this.logger.log("Order placed");
  }
}



// With dependency injection:
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}

class OrderService {
  constructor(private logger: Logger) {}

  placeOrder(): void {
    this.logger.log("Order placed");
  }
}

const logger = new ConsoleLogger();
const service = new OrderService(logger);
const service1 = new OrderService1();

service.placeOrder();
service1.placeOrder()