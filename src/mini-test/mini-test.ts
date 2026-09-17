// 1. Define class, object, and instance.
/*  
  class is a blkueoprint for creating objetcs
  object is a element with its own prperties and occupies space
  instance is a object based on a class
*/

// 2. Explain property vs method.
// property is a variable that belongs to an objkect
// method is a function that belgons to aan object 

// 3. Explain constructor and this.
// construcotr intiializes the values of the properties in the instance of the class
// thisis a reference toa property or method of the instance of the class

// 4. Explain public, private, and protected.
// public can be accessed from anywhere
// private can be accessed only from inside the class
// protected can bea accessed only inside the class or subclasses from it

// 5. Explain static and give one use case.
// usecase is a property that has common vcalue for all instances of the class. example is an id

// 6. Explain inheritance, extends, and super.
// inheritance allows a class to inherit properties and methods from anotther class and also require for it to implement somethings and can inhiert code
// extends is used whne a class is a tpye of other class and it inherits its properties and methods
// super is used to call methods and properties from thje parent class 

// 7. Explain method overriding.
// its used for a class toi provide a speciifc logic for a fucntion specified in the parent class in its own way

// 8. Explain abstract class.
// an abstract class is a class that is used by anothers for inheirtance. it can inheritis code (the main difference with interface), obly other classes to iimplement some types

// 9. Explain interface.
// interface is used by typescrit to specify what an element should have... its not carried onto productiona dn does not inherit code

// 10. Explain implements.
// its used for a class to implement an interface an specify what it should have

// 11. Explain interface vs abstract class.
// both of them can obly the class toi implement some types, but only abstacrt class can inheirt code

// 12. Explain polymorphism.
// its when a class can implemtn the same method from different classes without knowing exatcly how each one hanlde the logic of it itslef

// 13. Explain composition vs inheritance.
// composition: is when the relationship between classes is has a car has an engine
// inheritance: is when the relationship between classes is is a dog is an animal

// 14. Explain dependency injection.
// its when a class receives its dependencies without creating them inside the class

// 15. In your final project, where did you use polymorphism?
  // printReport() {
  //   this.repository.all().forEach(task => {
  //     console.log(task.summary())
  //   })
  // }

// 16. In your final project, where did you use composition?
// class TaskService {
//   constructor(private repository: TaskRepository, private notifier: Notifier) { }

// 17. In your final project, where did you use dependency injection?
// const taskService = new TaskService(new InMemoryTaskRepository(), new ConsoleNotifier())

// 18. Predict the output:
interface Writer {
  write(): void;
}

abstract class BaseWriter implements Writer {
  private static nextId = 1;
  protected id: number;

  constructor(public name: string) {
    this.id = BaseWriter.nextId;
    BaseWriter.nextId += 1;
  }

  abstract write(): void;

  describe(): void {
    console.log(`${this.id}: ${this.name}`);
  }
}

class FileWriter extends BaseWriter {
  override write(): void {
    console.log(`file ${this.id}`);
  }
}

class ConsoleWriter extends BaseWriter {
  override write(): void {
    console.log(`console ${this.id}`);
  }
}

const writers: BaseWriter[] = [
  new FileWriter("A"),
  new ConsoleWriter("B"),
];

for (const writer of writers) {
  writer.describe();
  // 1: A
  // 2: B
  writer.write();
  // file 1
  // console 2
}

// 19. Refactor this bad code using interface + composition + dependency injection:
interface Sender {
  send(message: string): void;
}
class EmailSender implements Sender{
  send(message: string): void {
    console.log(`Email: ${message}`);
  }
}

class BillingService {
  constructor(private sender: Sender) {}

  charge(): void {
    console.log("Charging customer");
    this.sender.send("Customer charged");
  }
}

// 20. Choose interface or abstract class:
// Anything that can be exported has export(): string. interface
// All API clients share baseUrl, headers, and retry behavior. abstract class because it can sahre value
// Anything that can be clicked has click(): void. interface
// All game characters share health and movement code, but attack differently. abstract class