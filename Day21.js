//1
function findIndicesForSum(arr, target) {
    const numToIndexMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (numToIndexMap.has(complement)) return [numToIndexMap.get(complement), i];
        numToIndexMap.set(arr[i], i);
    }
    return [];
}
console.log(findIndicesForSum([2, 7, 11, 15], 9)); 
console.log(findIndicesForSum([3, 2, 4], 6)); 
console.log(findIndicesForSum([1, 2, 3, 4, 5], 8)); 

//2
function reverseInteger(num) {
    if (num === 0) return 0;

    const isNegative = num < 0;
    const absoluteNum = Math.abs(num);
    const reversedDigits = parseInt(absoluteNum.toString().split('').reverse().join(''));
    const result = isNegative ? -reversedDigits : reversedDigits;
    return result;
}

console.log(reverseInteger(123)); 
console.log(reverseInteger(-456)); 
console.log(reverseInteger(120)); 
console.log(reverseInteger(0)); 

//3
function isPalindrome(num) {
    if (num < 0) return false; 

    const originalNum = num;
    let reversed = 0;

    while (num > 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return originalNum === reversed;
}

console.log(isPalindrome(121)); 
console.log(isPalindrome(-121));
console.log(isPalindrome(12321)); 
console.log(isPalindrome(10))

//4
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeSortedLists(list1, list2) {
    const dummyHead = new ListNode(-1);
    let current = dummyHead;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;

    return dummyHead.next;
}

const list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

const list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

const mergedList = mergeSortedLists(list1, list2);

let result = '';
let current = mergedList;
while (current) {
    result += current.val + ' -> ';
    current = current.next;
}
console.log(result.slice(0, -4)); 


//5
function isValidBrackets(s) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    for (const char of s) {
        if (bracketPairs[char]) {
            
            stack.push(char);
        } else {
            
            const lastOpenBracket = stack.pop();
            if (!lastOpenBracket || bracketPairs[lastOpenBracket] !== char) {
                return false; 
            }
        }
    }

    return stack.length === 0;
}

console.log(isValidBrackets("()")); 
console.log(isValidBrackets("()[]{}")); 
console.log(isValidBrackets("(]")); 
console.log(isValidBrackets("([)]"));
console.log(isValidBrackets("{[]}"));

