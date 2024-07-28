function factorial(n){
    if(n === 0 || n===1){
        return 1;
    } else {
        return n * factorial(n-1)
    }
}
console.log(factorial(5));
console.log(factorial(6))
console.log(factorial(0))
console.log(factorial(1))

//Task2 :
function fabonacci(n){
    if(n<=1){
        return n ;
    }else{
        return fabonacci(n-1) + fabonacci(n-2);
    };
    
};
console.log(fabonacci(0))
console.log(fabonacci(2))
console.log(fabonacci(10))

//Task3:
function sum(arr){
    if(arr.length == 0){
        return 0;
    }
    else{
        return arr[0] + sum(arr.slice(1))
    }
}
const arrayis = [10,20,30,40]
console.log(sum(arrayis));

//Task 4:
function max(arr , start , end){
    if (start === end) {
        return arr[start]; 
    }

    const mid = Math.floor((start + end) / 2);
    const leftMax = max(arr, start, mid);
    const rightMax = max(arr, mid + 1, end);

    return Math.max(leftMax, rightMax);
}

function findMaxRecursive(arr) {
    return max(arr, 0, arr.length - 1);
}
const myarray = [10,20,30,40]
console.log("The max number in the array : " + myarray + " is " +  findMaxRecursive(myarray));

//Task 5:

function reverseStringRecursive(str) {
    if (str === '') {
        return ''; 
    } else {
        const firstChar = str[0];
        const restOfString = str.slice(1);
        return reverseStringRecursive(restOfString) + firstChar;
    }
}

const originalString = 'javascript challenge';
const reversedString = reverseStringRecursive(originalString);
console.log(`Original: ${originalString}`);
console.log(`Reversed: ${reversedString}`);

//Task 6:
function isPalindrome(str) {
   
    if (str.length <= 1) {
        return true;
    }

   
    const firstChar = str[0].toLowerCase();
    const lastChar = str[str.length - 1].toLowerCase();

    if (firstChar !== lastChar) {
        return false; 
    }

    const middleSubstring = str.slice(1, -1);
    return isPalindrome(middleSubstring);
}

const testString1 = "racecar";
const testString2 = "hello";

console.log(`"${testString1}" is a palindrome: ${isPalindrome(testString1)}`);
console.log(`"${testString2}" is a palindrome: ${isPalindrome(testString2)}`);

//Task 7: 

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);
    const midValue = arr[mid];

    if (midValue === target) {
        return mid; 
    } else if (midValue < target) {
        return binarySearch(arr, target, mid + 1, right);
    } else {
        return binarySearch(arr, target, left, mid - 1);
    }
}
const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56];
const targetValue = 23;

const resultIndex = binarySearch(sortedArray, targetValue);
if (resultIndex !== -1) {
    console.log(`Found ${targetValue} at index ${resultIndex}.`);
} else {
    console.log(`${targetValue} not found in the array.`);
}

// task 8:
function countOccurrences(arr, target, currentIndex = 0) {
    if (currentIndex >= arr.length) {
        return 0; 
    }

    const currentElement = arr[currentIndex];
    const restOccurrences = countOccurrences(arr, target, currentIndex + 1);

    return currentElement === target ? restOccurrences + 1 : restOccurrences;
}

const myArray = [2, 5, 2, 8, 2, 10, 2];
const targetValue1 = 2;

const occurrences = countOccurrences(myArray, targetValue1);
console.log(`The target value ${targetValue1} appears ${occurrences} times in the array.`);

//Task9:
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return; 
    }

    inOrderTraversal(node.left);

    console.log(node.value);

    inOrderTraversal(node.right);
}

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(4);

console.log("In-order traversal:");
inOrderTraversal(root);

//Task10:

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }

    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    return 1 + Math.max(leftDepth, rightDepth);
}

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(4);

const treeDepth = calculateDepth(root);
console.log(`The depth of the binary tree is: ${treeDepth}`);
