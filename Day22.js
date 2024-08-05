//1
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
}

const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

const result = addTwoNumbers(list1, list2);

let output = '';
let current = result;
while (current) {
    output += current.val + ' -> ';
    current = current.next;
}
console.log(output.slice(0, -4)); 


//2

function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        while (charSet.has(currentChar)) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(currentChar);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); 
console.log(lengthOfLongestSubstring("bbbbb")); 
console.log(lengthOfLongestSubstring("pwwkew")); 
console.log(lengthOfLongestSubstring("")); 

//3
function maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxWater = 0;

    while (left < right) {
        const minHeight = Math.min(heights[left], heights[right]);
        const width = right - left;
        const currentWater = minHeight * width;
        maxWater = Math.max(maxWater, currentWater);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); 
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 1])); 
console.log(maxArea([1, 2, 1])); 

//4
function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); 

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let left = i + 1;
            let right = nums.length - 1;
            const target = -nums[i];

            while (left < right) {
                const sum = nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[left], nums[right]]);
                   
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

const testArray1 = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(testArray1));

const testArray2 = [0, 0, 0];
console.log(threeSum(testArray2)); 

const testArray3 = [1, 2, -2, -1];
console.log(threeSum(testArray3));


//5
function groupAnagrams(strings) {
    const anagramMap = new Map();

    for (const str of strings) {
        const sortedStr = str.split('').sort().join('');
        if (!anagramMap.has(sortedStr)) {
            anagramMap.set(sortedStr, []);
        }
        anagramMap.get(sortedStr).push(str);
    }

    return Array.from(anagramMap.values());
}

const testStrings1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(testStrings1));

const testStrings2 = ["listen", "silent", "hello", "world"];
console.log(groupAnagrams(testStrings2));
