class UserAccount {
  public username: string;
  private password: string;
  protected loginAttempts: number;

  constructor(username: string, password: string){
    this.username = username
    this.password = password
    this.loginAttempts = 0
  }

  public checkPassword(input: string): boolean {
    this.loginAttempts += 1
    return this.password === input 
  }
}

const account = new UserAccount("henrique", "password")
console.log(account.username)
console.log(account.checkPassword("wrong"))
console.log(account.checkPassword("password"))
console.log(account.password)
console.log(account.loginAttempts)