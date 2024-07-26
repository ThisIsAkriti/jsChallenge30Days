//activity 1 :


//Task 1:
class Person {
    constructor(name , age){
        this.name = name,
        this.age = age;
    }
    greet(){
        return (`Name is ${this.name} amnd age is ${this.age}`);
    }
    //Task2:
    updateDetails(newage){
        this.age = newage;
        console.log(`My name is ${this.name} and age is ${this.age}. `)
    }
};
const personDetails = new Person('Alicia' , 18);
console.log(personDetails.greet());
personDetails.updateDetails(20)

//Activity 2:
//Task 3 and Task 4:
class student extends Person{
    constructor(name , age, studentId){
        super(name , age)
        this.studentId = studentId;
    }
    greet(){
        const originalGreet = super.greet();
        return `${originalGreet} Student id is: ${this.studentId}`;
    }
    
    //Activity 3:
    //task 5:
    //You can call this func without creating an instance of the class;
    static genericGreeting(){
        console.log("this is generic message!")
    }
}
const studentIdis = new student('Alicia' , 18 , 120034958);
console.log(studentIdis.greet());
student.genericGreeting()

//Task6:
class Person01{
    static totalNumOfStudents = 0;
    constructor(name , age, studentId){
        this.name = name, 
        this.age = age,
        this.studentId = studentId;
        Person01.totalNumOfStudents++;
    }
    static print() {
        console.log(`Total number of students are: ${this.totalNumOfStudents}`)
    }
    
}
const student1 = new Person01('alicia ' , 18 , 121200215);
const student2 = new Person01('Frenzi', 20 , 4578500258);
const student3 = new Person01('prithvi ' , 18 , 803200215);
const student4 = new Person01('tana', 20 , 4003500258);
Person01.print();

//Activity 4 :
//Task 7 and 8;
class Person02{
    constructor(firstName, secondName){
        this.firstName = firstName;
        this.secondName = secondName;
    }
    get fullname(){
        return `${this.firstName} ${this.secondName}`;
    }
    set fullname(newfullName){
        const [newFirstName , newLastName] = newfullName.split(' ');
        this.firstName = newFirstName;
        this.secondName = newLastName;

    }
}
const getPerson = new Person02('Alicia' , 'Roe');
//console.log(getPerson.fullname);
getPerson.fullname ='Jack smith';
console.log(getPerson.fullname);

//Activity 5:
//Task9:
/*class Account {
    
    #balance = 0;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log("Invalid deposit amount. Please provide a positive value.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log("Insufficient funds or invalid withdrawal amount.");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const myAccount = new Account(1000);
  myAccount.deposit(200); 
  myAccount.withdraw(300); 
  myAccount.withdraw(1000); 
  console.log("Current balance:", myAccount.getBalance());  
*/ 

//Task10:

class Account {
    #balance = 0;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log("Invalid deposit amount. Please provide a positive value.");
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.#balance}`);
      } else {
        console.log("Insufficient funds or invalid withdrawal amount.");
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const myAccount = new Account(1000);
  
  myAccount.deposit(200); 
  myAccount.withdraw(300); 
  myAccount.withdraw(1000); 
  
  console.log("Current balance:", myAccount.getBalance()); 
  