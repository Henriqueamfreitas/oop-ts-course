class Book {
  title: string;

  constructor(title: string) {
    this.title = title
  }
}

const book1 = new Book("Harry Potter");
const book2 = new Book("1984");
const book3 = new Book("Harry Potter");


console.log(book1.title)
console.log(book2.title)
console.log(book2 === book1) // false
console.log(book1 === book1) // true
console.log(book3 === book1) // false

// ok... all instances re objects, but not all objects are instances?

// class specifies what it should have/what it should do
// object is a class with value and its stored in memory
// instance is also a class with value


// 1. What is a class?
// class defines what an object should look like and properties it should have
// 2. What is an object?
// object is a class with values
// 3. What does `new Dog("Rex")` do?
// it creates a new instance/object of class Dog with the value rex and stores in memory 
// 4. Predict the output:
class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const a = new User("Ana");
const b = new User("Ana");

console.log(a.name); // Ana
console.log(a === b); // false