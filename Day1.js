// Task 1 
var number = 11;
console.log("The number is " + number);

// Task 2 
let stringIs = 'String';
console.log("The string is " + stringIs);

// Task 3
const x = true;
console.log(x);

// Task 4
let num = 11;
let stringName = "hello World";
let booleanBe = true;
let theObject = {
    name: 'Alice',
    age:25,
    isStudent:true
};
let arrayIs = ['hello' , 1 , 11, true];

console.log(typeof(num));
console.log(typeof(stringName))
console.log(typeof(booleanBe))
console.log(typeof(theObject))
console.log(typeof arrayIs)

// Task 5
let initialValue = 11;
console.log(initialValue);
initialValue = 'reassigned new value';
console.log(initialValue);

//Task 6
const value = 1;
console.log(value);
value = 2;
console.log(value); // "Error"

//Feature Request
let num1 = 11;
let str = "hello World";
let boolean = true;
let object = {
    name: 'Alice',
    age:25,
    isStudent:true
};

console.log("Type of " + num1 + " is: " + typeof num1);
console.log("Type of " + str + " is: " + typeof str)
console.log("Type of " + boolean + " is: " + typeof boolean)
console.log("Type of " + object + " is: " + typeof object)

//Reassignment Demo: (const vs let)

//let
let initialname = 'Frienze';
initialname = "alice";
console.log(initialname)

//const 
const initialname2 = 'Frienze';
const initialname3 = "alice";
console.log(initialname2)
initialname2 = initialname3;
console.log(initialname2);

