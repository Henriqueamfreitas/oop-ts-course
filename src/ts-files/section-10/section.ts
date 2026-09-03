interface Notifier {
  send(message: string): void;
}

abstract class BaseNotifier implements Notifier {
  constructor(protected recipient: string) {}

  protected format(message: string): string {
    return `[To ${this.recipient}] ${message}`;
  }

  abstract send(message: string): void;
}

class EmailNotifier extends BaseNotifier {
  override send(message: string): void {
    console.log(`EMAIL ${this.format(message)}`);
  }
}

class SmsNotifier extends BaseNotifier {
  override send(message: string): void {
    console.log(`SMS ${this.format(message)}`);
  }
}

function alertUser(notifier: Notifier): void {
  notifier.send("Your build finished");
}

alertUser(new EmailNotifier("maya@example.com"));
// EMAIL [To maya@example.com] Your build finished

alertUser(new SmsNotifier("+123"));
// SMS [To maya@example.com] Your build finished
