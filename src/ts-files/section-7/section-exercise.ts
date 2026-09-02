abstract class Exporter {
  public logStart(): string {
    return `Starting export`
  }

  abstract export(data: string): string
}

class JsonExporter extends Exporter {
  override export(data: string): string {
    return 'exporting json file' + data
  }
}

class CsvExporter extends Exporter {
  override export(data: string): string {
    return 'exporting CSV file' + data
  }
}

const csvExporter = new CsvExporter()
const jsonExporter = new JsonExporter()

console.log(csvExporter.export('csv data'))
console.log(jsonExporter.export('json data'))

abstract class Formatter {
  constructor(protected text: string) {}

  abstract format(): string;

  preview(): void {
    console.log(this.format());
  }
}

class UpperCaseFormatter extends Formatter {
  override format(): string {
    return this.text.toLocaleUpperCase()
  }
}

const upperCaseFormatter = new UpperCaseFormatter("hi, my name is henrique")
upperCaseFormatter.format()
upperCaseFormatter.preview()



// 1. Can you create an object directly from an abstract class?
  // no, you cannot
// 2. What must a subclass do with abstract methods?
  // it needs to implement their own logic
// 3. What can an abstract class contain that an interface cannot contain in the same way?
  // code and values
// 4. Predict the output:
abstract class Worker {
  constructor(protected name: string) {}

  start(): void {
    console.log(`${this.name} starts`);
  }

  abstract work(): void;
}

class Designer extends Worker {
  override work(): void {
    console.log(`${this.name} designs`);
  }
}

const worker = new Designer("Ari");
worker.start(); // Ari starts
worker.work(); // Ari designs