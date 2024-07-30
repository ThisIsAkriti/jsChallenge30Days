//1:
function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        
        if (!swapped) break;
    }

    return arr;
}


const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);

console.log("Sorted array:", sortedArray);


//2
function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

const unsortedArray01 = [64, 34, 25, 12, 22, 11, 90];
const sortedArray01 = selectionSort(unsortedArray);

console.log("Sorted array:", sortedArray);

//3
function quicksort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }

    const pivot = arr[0]; 
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]); 
        } else {
            right.push(arr[i]); 
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

const unsortedArray02 = [64, 34, 25, 12, 22, 11, 90];
const sortedArray02 = quicksort(unsortedArray);

console.log("Sorted array:", sortedArray);

//4
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const myArray = [10, 25, 8, 14, 30, 18];
const targetValue = 14;

const foundIndex = linearSearch(myArray, targetValue);

if (foundIndex !== -1) {
    console.log(`Target value ${targetValue} found at index ${foundIndex}.`);
} else {
    console.log(`Target value ${targetValue} not found in the array.`);
}

//5
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }

    return -1; 
}

const sortedArray03 = [10, 18, 22, 25, 30, 34, 64];
const targetValue03 = 25;

const foundIndex03 = binarySearch(sortedArray03, targetValue03);

if (foundIndex !== -1) {
    console.log(`Target value ${targetValue03} found at index ${foundIndex03}.`);
} else {
    console.log(`Target value ${targetValue03} not found in the array.`);
}

//06

function countCharacterOccurrences(inputString) {
    const charCount = new Map(); 

  
    for (const char of inputString) {
        if (charCount.has(char)) {
            
            charCount.set(char, charCount.get(char) + 1);
        } else {
            
            charCount.set(char, 1);
        }
    }

    for (const [char, count] of charCount) {
        console.log(`Character '${char}' occurs ${count} time(s).`);
    }
}

const myString = "hello, world!";
countCharacterOccurrences(myString);

//7:

function findLongestSubstring(s) {
    const charSet = new Set();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        while (charSet.has(char)) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(char);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

const inputString = "abcabcbb"; 
const longestLength = findLongestSubstring(inputString);

console.log(`The longest substring without repeating characters has a length of ${longestLength}.`);

//8:
function rotateArray1(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
    return nums;
}

const originalArray = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray1 = rotateArray1(originalArray, k);
console.log("Rotated array (brute force):", rotatedArray1);

//9:
function mergeAndSort(arr1, arr2) {
    const merged = arr1.concat(arr2);
    return merged.sort((a, b) => a - b);
}

const mergedArray2 = mergeAndSort(arr1, arr2);
console.log("Merged array (using sort):", mergedArray2);
