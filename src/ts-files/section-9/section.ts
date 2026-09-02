interface Payable {
  calculatePay(): number;
}

class Contractor implements Payable {
  constructor(private hourlyRate: number, private hoursWorked: number) {}

  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

class SalariedEmployee implements Payable {
  constructor(private monthlySalary: number) {}

  calculatePay(): number {
    return this.monthlySalary;
  }
}

const contractor = new Contractor(80, 20);
const employee = new SalariedEmployee(5000);

console.log(contractor.calculatePay()); // 1600
console.log(employee.calculatePay()); // 5000