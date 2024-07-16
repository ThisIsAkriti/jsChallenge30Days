// Activity1:
// Task 1:
let x;
let num = '';
console.log("Numbers from 1-10:")
for(x = 1;x<=10;x++){
    num += `${x} `;
}
console.log( num )

// Task 2 and feature 2:
console.log("Table of 5:")
for(let x = 1;x<=10;x++){
    console.log(`5 X ${x} = ${x*5}`);
}

//Activity 2:
//Task 3 and feature 4:
let sum = 0;
let number = 1;
while(number <= 10){
    sum += number;
    number++;
}
console.log(`The Sum Of number form 1-10 is ${sum}`);

//Task 4:
let number1 = 10;
let num1 = '';
while(number1 > 0){
    num1 += `${number1} `;
    number1--;
}
console.log(`Numbers form 10-1: ${num1}`);

//Activity 3:
//Task 5:
let number2 = 0;
num2 = '';
do{
    number2++;
    num2 += ` ${number2}`  // this statement will run for 6 and then check the condition 
}while(number2 <= 5);
console.log("numbers form 1-5 in do while loop" + num2);

// Task 6 and feature 2:
const actualNum = 6;
let number3 = actualNum;
let mult = 1;
do{
    mult = mult * number3;
    number3--;
}while(number3 > 0)
    console.log(`Factorial of number ${actualNum} is : ${mult}` );

//Activity 4:
// Task 7 and feature 3:
let star = '';
for(let a = 1; a<=5;a++){
    for(let j = 1; j <= a; j++){ 
        star += ` * `;
    }
    console.log(star);
    star = '';
}

//Activity 5:
//Task 8:

let num4 = '';
console.log("Numbers from 1-10 and skip 5:")
for(let x = 1;x<=10;x++){
    if(x === 5) continue;
    num4 += `${x} `;
}
console.log( num4 )

//Task 9:
let num5 = '';
console.log("Numbers from 1-10 and stop at 7:")
for(let x = 1;x<=10;x++){
    if(x === 7) break;
    num5 += `${x} `;
}
console.log( num5 )

//Feature Request:
const FeatureRequest1 = () => {
    let number = 1;
    let number2 = 1;
    let n1 = '';
    let n2 = '';
    for(number; number <= 10; number++ ){
        n1 += ` ${number} `;
    }
    
    while(number2 <= 10){
        n2 += ` ${number2} `;
        number2++;
    }
    console.log("for loop " + n1);
    console.log("while loop " + n2);
}
FeatureRequest1();
