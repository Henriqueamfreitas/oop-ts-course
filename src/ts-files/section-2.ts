class BankAccount {
  owner: string;
  balance: number;

  constructor(owner: string, startingBalance: number) {
    this.owner = owner
    this.balance = startingBalance;
  }

  deposit(amount: number): void {
    this.balance += amount
  }

  describe(): string {
    return `this ${this.owner} has a balance of $${this.balance}`
  }
}

const account1 = new BankAccount("Alice", 1000);
console.log(account1.balance)

account1.deposit(500);

console.log(account1.owner)
console.log(account1.describe())
console.log(account1.balance)
