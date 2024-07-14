// Activity 1:
//Task 1-5 and feature Request 1:
const sumOfTwoValues = (a,b,operator) => {
    if(operator == 'add') return( console.log("Addition = " + (a + b)));
    else if(operator == 'subtract') return (
        (a>b)?console.log("Subtration = " + (a-b)) : console.log("Subtration = " + (b-a)));
    else if(operator == 'multiply') return ( console.log("Multiplication  = " + a*b));
    else if(operator == 'divide') return (
        (a>b)?console.log("Division = " + a/b) : console.log("Division =" + a/b) );
    else if(operator == 'remainder') return ( console.log("Modules = " + a%b));
    else console.log("Something went wrong!");
}

let result1 = sumOfTwoValues(40,10,'add');
let result2 = sumOfTwoValues(40,10,'subtract');
let result3 = sumOfTwoValues(40,10,'multiply');
let result4 = sumOfTwoValues(40,10,'divide');
let result5 = sumOfTwoValues(40,10,'remainder');

// Activity 2:
// Task 6:
let totalAmt = 5;
totalAmt += 5;
console.log("Resultant of Use of += operator is " + totalAmt);

//Task 7:
let totalAmt2 = 10;
totalAmt2 -= 5;
console.log("Resultant of Use of -= operator is " + totalAmt2);

// Activity 3:
// Task 8:
let a = 10;
let b = 20;
let c = '20';
if(a<b){
    console.log("<");
}
if(a>b){
    console.log(">");
}
if(a>=b){
    console.log(">=")
}
if(a<=b){
    console.log("<=")
}
if(c==b){
    console.log("b==c");  //b = c
}
if(b===c){
    console.log("b===c"); // b != c
}

// Activity 4 and Feautre Request 2,3:
// Task 11-13:

const logicalOperators = (a ,b ,c ,l) => {
    let r;
    if(l == 'AND'){
        if(a>b && b>c){
            r = "Condition is True for && operator";
        }else r = "Conditionis False for && operator";

    }
    else if(l == 'OR'){
        if(a>b || b>a){
            r ="|| operator";
        }
    }
    else if(l == 'NOT'){
        if(a != 10){
            r = "condition true for ! operator";
        }else r = "condition false for ! operator";
    }
    console.log(r);
}
logicalOperators(15,25,35,"AND");
logicalOperators(15,25,35,"OR");
logicalOperators(10,25,35,"NOT");

// Activity 5:
// Task 14:
const ternaryResult = ((a>b)? console.log("Condition True(Ternary Operator)") : console.log("Condition false(Ternary Operator)"));

