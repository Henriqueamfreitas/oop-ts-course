interface EmailSender {
  sendEmail(to: string, body: string): void
}

class SmtpEmailSender implements EmailSender {
  sendEmail(to: string, body: string): void {
    console.log(`email sent to ${to}.message: ${body}`)
  }

  notifyUser(sender: EmailSender): void {
    console.log(sender)
  }
}
const smtp = new SmtpEmailSender()

const emailSenderObject = {
  to: 'henrique@mail.com',
  body: 'this is a test message'
}
smtp.sendEmail(emailSenderObject.to, emailSenderObject.body)
// smtp.notifyUser()

interface ConsoleLogger {
  log(text: string): void 
}

function saveReport(consoleLogger: ConsoleLogger): void {
  consoleLogger.log("Saving report");
}

// 1. What is an interface?
  // it defines what an object must have
// 2. Does an interface create an object?
  // no
// 3. Does an interface exist at runtime in JavaScript?
  // no
// 4. What is wrong here?
// you are implementing code on an interface... it should be like
interface PrinterInterface {
  print(): void
}

class Printer implements PrinterInterface {
  print(): void {
    
  }
}

// interface Printer {
//   print(): void {
//     console.log("printing");
//   }
// }

// 5. Will this work?
//  it will work, but its not good practice because you are telling that the object has name and age,
// but its sending only an object with name 
interface HasName {
  name: string;
}

const user = { name: "Jo", age: 30 };

function greet(value: HasName): void {
  console.log(value.name);
}

greet(user);


interface EmailSender2 {
 sendEmail(to: string, body: string): void 
}

class SmtpEmailSender2 implements EmailSender2{
  sendEmail(to: string, body: string): void {
    console.log(`email with body ${body} sent to ${to}`)
  }
}

const test = new SmtpEmailSender2()
test.sendEmail('hhh',' eeee')

const fakeSender: EmailSender2 = {
  sendEmail(to, body) {
    
  },
}

const notifyUser = (sender: EmailSender2) => {
  return sender.sendEmail('eeed', 'dd')
}

notifyUser(test)
notifyUser(fakeSender)