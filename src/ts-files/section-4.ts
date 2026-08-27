class MathHelper {
  static pi = 3.14159;

  static double(value: number): number {
    return value * 2;
  }
}

console.log(MathHelper.pi);
console.log(MathHelper.double(10));

class Employee {
  static companyName = "Acme Corp";

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(): string {
    return `${this.name} works at ${Employee.companyName}`;
  }
}

const employee = new Employee("Nina");
console.log(employee.describe());