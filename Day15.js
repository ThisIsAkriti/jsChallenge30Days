//Activity1:
//Task 1:
function func(){
    const a = `hello world! this is closure`;
    function innerFunc(){
        console.log(a);
    }
    return innerFunc();
}
const callFunc = func();
callFunc;

//Task2:
function counter(){
    let count = 0 ;
    function increment(){
        count++;
    }
    function currentValue(){
        return count;   
    }
    return{
        increment, currentValue
    }
}
const myCounter = counter();
myCounter.increment()
myCounter.increment()
myCounter.increment()
const currentCountIs = myCounter.currentValue();
console.log( "The count is :"+currentCountIs)

//Activity2:

//Task3:
function uniqueId(){
    let idIs = 0;
    function getUniqueId(){
        return `Id_${idIs++}`;
    }
    return getUniqueId;
}
const currentId = uniqueId();
console.log(currentId());
console.log(currentId());
console.log(currentId());
console.log(currentId());

//Task 4:

function user(){
    let name = 'alicia';
    function greet(){
        return `Hello there! ${name}`;
    }; 
    return greet;
}
const greetUser = user();
console.log(greetUser())

//Activity3:

//Task 5:
function arrayOfFunc(counter) {
    let arr = [];
    for (let i = 0; i < counter; i++) {
        function funcArray() {
            console.log(`index is ${i}`);
        }
        arr.push(funcArray);
    }
    return arr;
}

const newArr = arrayOfFunc(5);

console.log(newArr[0]); 
console.log(newArr[1]); 
console.log(newArr[2]); 
console.log(newArr[3]); 
console.log(newArr[4]); 


//Activity4:

//Task6:
function createItemManager() {
    const items = []; 

    function addItem(item) {
        items.push(item);
    }

    function removeItem(item) {
        const index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }

    function listItems() {
        return items.slice();
    }

    return {
        addItem,
        removeItem,
        listItems,
    };
}
const itemManager = createItemManager();

itemManager.addItem("Apple");
itemManager.addItem("Grapes");
itemManager.addItem("mango");

console.log(itemManager.listItems()); 

itemManager.removeItem("Grapes");

console.log(itemManager.listItems());

//Activity5:

//Task7:
function createMemoizedFunction(originalFunction) {
    const cache = new Map(); 

    function memoizedFunction(input) {
        if (cache.has(input)) {
          
            return cache.get(input);
        } else {
            
            const result = originalFunction(input);
            cache.set(input, result); 
            return result;
        }
    }

    return memoizedFunction;
}

function expensiveComputation(n) {
    console.log(`Computing for ${n}...`);
    
    return n * 2;
}

const memoizedExpensiveComputation = createMemoizedFunction(expensiveComputation);

console.log(memoizedExpensiveComputation(5)); 
console.log(memoizedExpensiveComputation(10)); 

//Task8:
function createMemoizedFactorial() {
    const cache = new Map(); 

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1; 
        }

        if (cache.has(n)) {
            return cache.get(n);
        } else {
            const result = n * factorial(n - 1);
            cache.set(n, result);
            return result;
        }
    }

    return factorial;
}

const memoizedFactorial = createMemoizedFactorial();

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(10)); 
console.log(memoizedFactorial(10)); 

