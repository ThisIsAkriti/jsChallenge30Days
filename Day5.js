//Activity 1:
//Task1 and featureReq1:
function num(a){
    let r = a%2 === 0? "the number is even " : "the number is odd";
    console.log(r);
}
num(37);
num(12);

//Task 2 and featureReq2:
function sqroot(a){
    let r  ="The square root of " + a + " is "+ Math.sqrt(a);
    console.log(r)  
}
sqroot(34);
sqroot(16);

//Activity2:
//Task 3:
function maxNum(a , b){
    r = a>b? "a is larger" : "b is larger";
    console.log(r);
}
maxNum(230 , 402);
maxNum(25 , 13);

//Task4 and feature 3:
function concat(a,b){
    r = "concatenation is: " + a + b;
    console.log(r);
}
concat(4,5)
concat('stringOne' , 'stringtwo')

//Activity3:
//Task 5:
const sum = (a , b) => {
    return (a+b);
}
console.log("The sum is " + sum(120 , 20));
console.log("The sum is " + sum(377 , 456));

//Task 6:
const specificChar = (a , b) => {
    let r = a === b? true : false;
    console.log(r);
}
specificChar('4' , 4);
specificChar('#' , '*');
specificChar('t','t');


//Activity 4:
//Task 7:
const multiplicatiion = (a , b = 5) => {
    let r = a * b;
    console.log(`Product of ${a} and ${b} is ${r}`);
}
multiplicatiion(56 , 90)
multiplicatiion(78);

//Task 8:
const personDetails = (name , age = 18 ) => {
    console.log(`Namastey👏\nMy Name is:${name} and Age is: ${age}`);
}
personDetails ('Murladik' , 21  );
personDetails ('Lumnarnikant');

//Activity 5:
//Task9:
let i = 0;
const func1 = (fn , number ) => {
    return function(...args){
        while(i < number){
            fn(...args)
            i++;
        }
    }  
}
const greet = (name) => {
    console.log("hello world says " + name );
}
const repeatTimes = func1(greet , 4);
repeatTimes('Alice');

//Task 10:
function composeFunctions(fn1, fn2, value) {
    const intermediateResult = fn1(value);
    const finalResult = fn2(intermediateResult * value);
    return finalResult;
  }
  

  function double(x) {
    return x * 2;
  }
  
  function addTen(x) {
    return x + 10;
  }
  
  const value = 3;
  
  const combinedResult = composeFunctions(double, addTen, value);
  console.log(`Combined result: ${combinedResult}`);