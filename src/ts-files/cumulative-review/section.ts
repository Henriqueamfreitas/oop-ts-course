// 1. Define each term in one sentence:
//    - Class: defines a blueprint for creating objects
//    - Object: a instance of a class (it does not need to be fro a class)
//    - Property: a feature of the object
//    - Method: a function the a class has and an object can use
//    - Constructor: initializes the object when its created
//    - `this`: indicates data that belgons to the object created from that class
//    - Static: its a property common for all objects created fro that class
//    - Interface: specifies what an element must have, but does not implement it
//    - Abstract class: specifies what an element must have and implement it
//    - Polymorphism: when a method is called indirectly method b from class b is called bevaiuse class b is called in class a
//    - Composition: indicates a relationship: car has an egine... engine starts and then car drives
//    - Dependency injection: when a class receives another class as as parameter
// 2. Is each relationship inheritance or composition?
//    - `Dog` and `Animal` dog is an animal -> inheritance
//    - `InvoiceService` and `Logger` incvoice service has a logger -> composition
//    - `Car` and `Engine` car has an engine -> composition
//    - `CsvExporter` and `Exporter` csvexporter is an exporter -> inheritance


// 3. Refactor using interface + DI:

interface Sender {
  send(phone: string, message: string): void
}
class SmsSender implements Sender {
  send(phone: string, message: string): void {
    console.log(`${phone}: ${message}`);
  }
}

class AlertService {

  constructor(private sender: Sender) { }
  alert(phone: string): void {
    this.sender.send(phone, "Warning");
  }
}

const alertService = new AlertService(new SmsSender());
alertService.alert("123-456-7890");


// 4. Predict the output:

abstract class BaseCommand {
  private static nextId = 1;
  protected id: number;

  constructor() {
    this.id = BaseCommand.nextId;
    BaseCommand.nextId += 1;
  }

  describe(): void {
    console.log(`Command ${this.id}`);
  }

  abstract execute(): void;
}

class SaveCommand extends BaseCommand {
  override execute(): void {
    console.log(`Save ${this.id}`);
  }
}

class DeleteCommand extends BaseCommand {
  override execute(): void {
    console.log(`Delete ${this.id}`);
  }
}

const commands: BaseCommand[] = [
  new SaveCommand(),
  new DeleteCommand(),
];

for (const command of commands) {
  command.describe();
  command.execute();
  // save
    // describe command 1
    // execute save 1

  // delete
    // describe command 2
    // execute delete 2
}

// 5. Why is the loop in question 4 polymorphic?
// because an instance from savecommand calls execute (its own method) and descreibe, that called indirectly