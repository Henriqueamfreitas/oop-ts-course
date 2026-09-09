// 1. Decide inheritance or composition:
//    - `AdminUser` and `User` adminuseris a user  -> inheritance
//    - `Car` and `Engine` -> car has an engine -> composition
//    - `Invoice` and `PdfExporter` invoice is a pdf exporter -> inheritance
//    - `EmailNotification` and `Notification` emailnotification is a notification -> inheritance
//    - `Playlist` and `Song` -> playlist has a sonf -> composition

// 2. Refactor this bad inheritance into composition:

class EmailSenderOriginal {
  sendEmail(to: string, body: string): void {
    console.log(`Sending email to ${to}: ${body}`);
  }
}

class UserRegistrationOriginal extends EmailSenderOriginal {
  register(email: string): void {
    console.log("Creating user");
    this.sendEmail(email, "Welcome");
  }
}

// userRegistration users a email --> composition ... do not use extends

interface MessageSender {
  sendEmail(to: string, body: string): void;
}


class EmailSender implements MessageSender {
  constructor(public to: string, body: string) { }
  sendEmail(to: string, body: string): void {
    `sending email to ${to}. body: ${body}`
  }
}

class UserRegistration {
  constructor(private emailSender: EmailSender) { }

  register(email: string) {
    console.log('creating user with email' + email)
    this.emailSender.sendEmail(email, 'User created')
  }
}

const userRegistration = new UserRegistration(new EmailSenderOriginal())
userRegistration.register('test@mail.com')

// 3. Create an interface `MessageSender` and make `UserRegistration` depend on that instead of a concrete class.



// ### 7. Mini test

// Answer without looking above.

// 1. What relationship does inheritance model?
// classes that has the similiar goals... emailniotifcation is a notifiation
// 2. What relationship does composition model?
// when soemntihg has the other... car has an engine
// 3. Which is better: `Car extends Engine` or `Car has Engine`?
//  car has engine
// 4. Why is "reuse code" alone a weak reason for inheritance?
// becasue an interface can do this
// 5. Refactor mentally:

class FileLoggerOriginal {
  log(message: string): void {
    console.log(`file: ${message}`);
  }
}

class OrderServiceOriginal extends FileLoggerOriginal {
  placeOrder(): void {
    this.log("order placed");
  }
}

interface Logger {
  log(message: string): void
}

class FileLogger implements Logger {
  log(message: string): void {
    console.log(`file: ${message}`);
  }
}
// orderservice has a filelogger
class OrderService {
  constructor(private logger: FileLogger) { }

  placeOrder(): void {
    this.logger.log('order 1')
  }
}

const orderService = new OrderService(new FileLoggerOriginal())
orderService.placeOrder()


// Invoice and PdfExporter: inheritance or composition? Why? composition because invoice uses a pdf exporter
// Should UserRegistration implement MessageSender, or receive a MessageSender? immplementsit
// Should OrderService extends FileLogger? no... because it comopsotiion order has filellogger
// Why is constructor(private logger: Logger) better than constructor(private logger: FileLogger)? because its more generic?