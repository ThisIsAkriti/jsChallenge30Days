//Activity 1:
//Task1:
let arr1 = [1,2,3,4,5];
console.log(arr1);
//Task2:
console.log("first element is : " + arr1[0] + " last element is " + arr1[arr1.length-1]);

//Activity 2:
//Task 3:
arr1.push(6);
console.log(arr1);

//Task 4:
arr1.pop();
console.log(arr1);

//Task 5:
arr1.shift();
console.log(arr1);

//Task 6:
arr1.unshift(11);
console.log(arr1);

//Activity 3 and feature request 2:
//Task 7:
let arr2 = [3,6,9,12,15,18,21];
newArr = arr2.map(a => a*a);
console.log("Initial array : "+arr2);
console.log("New array using map(doubleTheNumber) : " + newArr);

//Task 8:
newArr2 = arr2.filter(a => a%2===0);
console.log("New array using filter(onlyEvenNumbers) : " + newArr2)
 
//Task 9:
let sum = 0;
newArr3 = arr2.reduce((initialValue , currrentValue) => initialValue + currrentValue , 0);
console.log("New array using reduce(sumOfAllNumbers) " +newArr3 );

//Activity 4 and feature request 3:

//Task 10:
console.log("Iteration using for loop")
for(let i = 0; i<= arr1.length-1; i++){
    console.log(arr1[i]);
}

//Task 11:
console.log("Iteration using forEach")
arr1.forEach(a => {
    console.log(a)
}
);

//Activity 5:
//Task 12: and featureRequest 4:
let twoDimensionalarr = [
    [10,20],
    [30,40],
    [50,60]
] 
console.log("The two dimensional array is " + twoDimensionalarr);

//Task 13:
console.log("Specific element from the array : "+ twoDimensionalarr[1][0]);

//Feature request :
let r;
console.log("Feature Request 1:")
const functionAraay = (arrayInFunc , methodUsed) => {
    if(methodUsed === 'push'){
        r = (arrayInFunc.push(6));
        return arrayInFunc;
    }
    if(methodUsed === 'pop'){
        r = (arrayInFunc.pop(6));
        return arrayInFunc;
    }
    if(methodUsed === 'shift'){
        r = (arrayInFunc.shift());
        return arrayInFunc;
    }
    if(methodUsed === 'unshift'){
        r = (arrayInFunc.unshift(80));
        return arrayInFunc;
    }
}
let res = functionAraay([2,3,4,5,6] , 'push');
let res1 = functionAraay([2,3,4,5,6] , 'pop');
let res2 = functionAraay([2,3,4,5,6] , 'shift');
let res3 = functionAraay([2,3,4,5,6] , 'unshift');
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
