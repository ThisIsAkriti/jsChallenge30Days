//Acivity 1:
//Task 1:
// const add = require("./modules");
// const res = add(10,20);
// console.log(`The result is:` + res);

//Task 2:
// const personDetails = require('./modules');
// personDetails.greet();
// personDetails.friend();
// personDetails.greet();

//Activity2:
//Task3:
// const { add , mult ,sub} = require("./module2");
// const result = add(10 , 20);
// const result2 = sub(30, 20);
// const result3 = mult(20,30);
// console.log(result)
// console.log(result2);
// console.log(result3);

//Task4:
// import add from "./modules";
// console.log(add(2,4));

//Activity3:
//Task5:
// import * as utility from "./module2";
// console.log(utility.add(2,3));
// console.log(utility.sub(4,2));
// console.log(utility.number)

//Activity 4:
//Task 6:

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const shuffledNumbers = _.shuffle(numbers);

console.log('Original numbers:', numbers);
console.log('Shuffled numbers:', shuffledNumbers);

//Task 7:

const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Data:', response.data);
  } catch (error) {
    console.error('An error occurred while fetching data:', error.message);
  }
}

fetchData();

//Task 8:
export function greet() {
    console.log("Hello from file1!");
  }
  
