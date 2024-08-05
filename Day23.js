//1 (Median of two sorted array)
function findMedianSortedArrays(nums1, nums2) {
    
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);

    const totalElements = merged.length;
    const midIndex = Math.floor(totalElements / 2);

    if (totalElements % 2 === 1) {
        return merged[midIndex];
    } else {
        const midValue1 = merged[midIndex - 1];
        const midValue2 = merged[midIndex];
        return (midValue1 + midValue2) / 2;
    }
}

const nums1 = [1, 3];
const nums2 = [2, 4];
console.log("Median:", findMedianSortedArrays(nums1, nums2));

const nums3 = [1, 2, 3];
const nums4 = [4, 5, 6];
console.log("Median:", findMedianSortedArrays(nums3, nums4)); 

const nums5 = [1, 2, 3];
const nums6 = [];
console.log("Median:", findMedianSortedArrays(nums5, nums6));

// 2 (Merge K sorted lists)
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeTwoLists(l1, l2) {
    const dummyHead = new ListNode(-1);
    let current = dummyHead;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 || l2;

    return dummyHead.next;
}

function mergeKLists(lists) {
    if (!lists || lists.length === 0) {
        return null;
    }
    while (lists.length > 1) {
        const mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = lists[i + 1];
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        lists = mergedLists;
    }

    return lists[0];
}

const list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(5);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

const list3 = new ListNode(2);
list3.next = new ListNode(6);

const mergedList = mergeKLists([list1, list2, list3]);

let current = mergedList;
const mergedResult = [];
while (current) {
    mergedResult.push(current.val);
    current = current.next;
}
console.log("Merged List:", mergedResult);

//3 (Trapping Rain water)
function trap(height) {
    const n = height.length;
    let left = 0;
    let right = n - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
           
            maxLeft = Math.max(maxLeft, height[left]);
            waterTrapped += maxLeft - height[left];
            left++;
        } else {
            
            maxRight = Math.max(maxRight, height[right]);
            waterTrapped += maxRight - height[right];
            right--;
        }
    }

    return waterTrapped;
}

const elevationMap1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("Trapped water:", trap(elevationMap1)); 

const elevationMap2 = [4, 2, 0, 3, 2, 5];
console.log("Trapped water:", trap(elevationMap2));

const elevationMap3 = [3, 0, 0, 2, 0, 4];
console.log("Trapped water:", trap(elevationMap3));

//4
function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isSafe(row, col) {
        
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false; 
            }
            const leftDiagonal = col - (row - i);
            const rightDiagonal = col + (row - i);
            if (board[i][leftDiagonal] === 'Q' || board[i][rightDiagonal] === 'Q') {
                return false; 
            }
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
         
            solutions.push([...board.map(row => row.join(''))]);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.'; 
            }
        }
    }

    backtrack(0);
    return solutions;
}

const n1 = 4;
const solutions1 = solveNQueens(n1);
console.log("Solutions for N =", n1);
solutions1.forEach((solution, idx) => {
    console.log(`Solution ${idx + 1}:`);
    solution.forEach(row => console.log(row));
    console.log();
});

const n2 = 8;
const solutions2 = solveNQueens(n2);
console.log("Solutions for N =", n2);
solutions2.forEach((solution, idx) => {
    console.log(`Solution ${idx + 1}:`);
    solution.forEach(row => console.log(row));
    console.log();
});


//5
function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) {
        return 0; 
    }

    const queue = [];
    queue.push(beginWord);
    let level = 1;

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const currentWord = queue.shift();

            
            for (let j = 0; j < currentWord.length; j++) {
                for (let k = 0; k < 26; k++) {
                    const nextChar = String.fromCharCode(97 + k);
                    const nextWord = currentWord.slice(0, j) + nextChar + currentWord.slice(j + 1);

                    if (nextWord === endWord) {
                        return level + 1; 
                    }

                    if (wordSet.has(nextWord)) {
                        queue.push(nextWord);
                        wordSet.delete(nextWord); 
                    }
                }
            }
        }

        level++; 
    }

    return 0; 
}

const beginWord1 = "hit";
const endWord1 = "cog";
const wordList1 = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log("Shortest transformation length:", ladderLength(beginWord1, endWord1, wordList1));

const beginWord2 = "hit";
const endWord2 = "cog";
const wordList2 = ["hot", "dot", "dog", "lot", "log"];
console.log("Shortest transformation length:", ladderLength(beginWord2, endWord2, wordList2));

const beginWord3 = "a";
const endWord3 = "c";
const wordList3 = ["a", "b", "c"];
console.log("Shortest transformation length:", ladderLength(beginWord3, endWord3, wordList3)); 

