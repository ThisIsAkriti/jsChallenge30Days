// Activity 1:
// Task1:
let num = 4;
if(num > 0){
    r='positive integer';
}
else if(num < 0){
    r = 'negative interger';
}
else{
    r = 'zero';
}
console.log("The number " + num + " is a " + r );

// Task 2:
let age = 20;
if(age >= 18){
    p = 'Eligible to vote';
}
else{
    p = 'Not Eligible to vote';
}
console.log("The person aged " + age + " is " + p );

// Activity 2:
// Task 3:
let a = 10;
let b = 20;
let c = 30 ;
if(a > b){
    if(a > c ){
        res = 'a is greatest';
    }else {
        res = 'c is greatest';
    }
}
else if(b>a){
    if(b>c){
        res = 'b is greatest';
    }else{
        res = 'c is greatest'
    }
}
else{
    res = 'c is greatest';
}
console.log('The greatest among a,b,c ('+ a +" "+ " " + b + " " + c +') is : ' + res);

// Activity 3L
// Task 4:
let day = 5;
switch (day) {
case 1:
    dayResult = 'Monday';
    break;
case 2:
    dayResult = 'Tuesday';
    break;
case 3:
    dayResult = 'Wednesday';
    break;
case 4:
    dayResult = 'Thursday';
    break;
case 5:
    dayResult = 'Friday';
    break;
case 6:
    dayResult = 'Saturday';
    break;
case 7:
    dayResult = 'Sunday';
    break;
        
default:
    dayResult = 'Not valid';
    break;
}
console.log("Day " + day + " is " + dayResult);

 //Task 5:
let score = 35;
switch (true) {
case (score >= 80):
    grade= 'A grade';
    break;
case (score >= 70 && score < 80):
    grade = 'B grade';
    break;
case (score >=60 && score < 70):
    grade = 'C grade';
    break;
case (score >=50 && score < 60):
    grade = 'D grade';
    break;
case (score >= 40 && score < 50):
    grade = 'E grade';
    break;
case (score < 40 && score < 40):
    grade = 'F fail';
    break;

default:
    grade = 'Not valid';
    break;
}
console.log("The grade for score "+ score + " is " + grade);

// activity 4:
// Task 6:
let numberis = 13;
const resultant = (numberis % 2 == 0 ? `The number ${numberis} is Even` : `The number ${numberis} is Odd`);
console.log(resultant);

// Task 7:
let year = 2024;
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    yearResult = 'Is Leap Year';
}else{
    yearResult = "Not Leap Year";
}
console.log("The year " + year + " is " + yearResult);

// Feature Request:

//1.
let num1;
const FeatureRequest1 = (num1) => {
    if(num1 > 0){
        r='positive integer';
    }
    else if(num1 < 0){
        r = 'negative interger';
    }
    else{
        r = 'zero';
    }
console.log("The number " + num1 + " is " + r);
}
featureResultants = FeatureRequest1(-50);
featureResultants = FeatureRequest1(10);

//2.
const FeatureRequest2 = (age) => {
    if(age >= 18){
        r='Eligible to vote';
    }
    else{
        r = 'Not eligible to vote';
    }   
    console.log("The person age " + age + " is " + r);
}
featureResultants = FeatureRequest2(20);
featureResultants = FeatureRequest2(17);

//3.
const FeatureRequest3 = (day) => {
    switch (day) {
    case 1:
        dayResult = 'Monday';
        break;
    case 2:
        dayResult = 'Tuesday';
        break;
    case 3:
        dayResult = 'Wednesday';
        break;
    case 4:
        dayResult = 'Thursday';
        break;
    case 5:
        dayResult = 'Friday';
        break;
    case 6:
        dayResult = 'Saturday';
        break;
    case 7:
        dayResult = 'Sunday';
        break;
            
    default:
        dayResult = 'Not valid';
        break;
    }
    
console.log("Day: " + day + " is " + dayResult);
}    
featureResultants = FeatureRequest3(2);
featureResultants = FeatureRequest3(7);

//4.
const FeatureRequest4 = (score) => {
switch (true) {
case (score >= 80):
    grade = 'A grade';
    break;
case (score >= 70 && score < 80):
    grade = 'B grade';
    break;
case (score >=60 && score < 70):
    grade = 'C grade';
    break;
case (score >=50 && score < 60):
    grade = 'D grade';
    break;
case (score >= 40 && score < 50):
    grade = 'E grade';
    break;
case (score < 40 && score < 40):
    grade = 'F fail';
    break;

default:
    grade = 'Not valid';
    break;
} 
console.log("Score: " + score + "||  Grade: " + grade);
}
featureResultants = FeatureRequest4(85);
featureResultants = FeatureRequest4(47);



//5.
const FeatureRequest5 = (year) => {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    yearResult = ' Is Leap Year';
    }else{
        yearResult = " Is Not Leap Year";
    }
    console.log("Year: " + year + yearResult);
}
featureResultants = FeatureRequest5(2000);
featureResultants = FeatureRequest5(1985);
