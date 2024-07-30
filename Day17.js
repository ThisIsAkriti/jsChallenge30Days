//1
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        
    }
}
    const node1 = new Node(20);
    const node2 = new Node(10)
    node1.next = node2;
console.log(node1.value);
console.log(node1.next.value);

//2
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeLast() {
        if (!this.head) {
            console.log("List is empty.");
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let current = this.head;
        let prev = null;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const myList = new LinkedList();
myList.append(10);
myList.append(20);
myList.append(30);

console.log("Initial list:");
myList.display();

myList.removeLast();
console.log("List after removing the last node:");
myList.display();

//3
class Stack{
    constructor(){
        this.items = [];
    }
    isEmpty(){
       return this.items === 0;
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        if(this.isEmpty()){
            throw new Error("Stack is Empty");
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            throw new Error("Stack is Empty");
        }
        return this.items[this.items.length-1]
    }
   
}
const myStack = new Stack();
myStack.push(10);
myStack.push(20)
myStack.push(30)
myStack.push(40)
myStack.push(50);
console.log(myStack.pop());
console.log(myStack.peek());

//4
class Stack2 {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseString(input) {
    const stack = new Stack2();
    for (const char of input) {
      stack.push(char);
    }
  
    let reversedString = '';
    while (!stack.isEmpty()) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
const originalString = 'Hello, world!';
const reversedResult = reverseString(originalString);
console.log(reversedResult); 

//5 
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items[0];
    }

 
    isEmpty() {
        return this.items.length === 0;
    }

}

const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue.front());
console.log(myQueue.dequeue()); 

//6:
class Queue2 {
    constructor() {
      this.items = [];
    }
  
    enqueue(job) {
      this.items.push(job);
    }
  
    
    dequeue() {
      if (this.isEmpty()) {
        return null; 
      }
      return this.items.shift();
    }
  

    isEmpty() {
      return this.items.length === 0;
    }
  

    size() {
      return this.items.length;
    }
  
 
    front() {
      if (this.isEmpty()) {
        return null; 
      }
      return this.items[0];
    }
  }
  
  const printerQueue = new Queue2();
  printerQueue.enqueue("Document A");
  printerQueue.enqueue("Document B");
  printerQueue.enqueue("Document C");
  
  console.log("Next print job:", printerQueue.front());
  const processedJob = printerQueue.dequeue();
  console.log("Processed job:", processedJob); 
  console.log("Remaining jobs:", printerQueue.size()); 

//7:
class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null; 
      this.right = null; 
    }
  }
  
const rootNode = new TreeNode(10);
rootNode.left = new TreeNode(5);
rootNode.right = new TreeNode(15);

console.log("Root value:", rootNode.value);
console.log("Left child value:", rootNode.left.value);  
console.log("Right child value:", rootNode.right.value); 

//8

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertRecursively(this.root, newNode);
        }
    }

    _insertRecursively(currentNode, newNode) {
        if (newNode.value < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
            } else {
                this._insertRecursively(currentNode.left, newNode);
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
            } else {
                this._insertRecursively(currentNode.right, newNode);
            }
        }
    }

    inorderTraversal(node = this.root) {
        if (!node) return [];
        const result = [];
        this._inorderRecursively(node, result);
        return result;
    }

    _inorderRecursively(currentNode, result) {
        if (currentNode) {
            this._inorderRecursively(currentNode.left, result);
            result.push(currentNode.value);
            this._inorderRecursively(currentNode.right, result);
        }
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(2);
tree.insert(4);
tree.insert(7);
tree.insert(9);

const inorderNodes = tree.inorderTraversal();
console.log("Inorder traversal:", inorderNodes);

//9:
//(optional)
class Graph {
    constructor() {
        this.vertices = new Map(); 
    }

    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
            this.vertices.get(vertex1).push(vertex2);
            this.vertices.get(vertex2).push(vertex1); 
        }
    }

    bfs(startVertex) {
        const visited = new Set();
        const queue = [startVertex];
        const result = [];

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            if (!visited.has(currentVertex)) {
                result.push(currentVertex);
                visited.add(currentVertex);
                const neighbors = this.vertices.get(currentVertex);
                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor)) {
                        queue.push(neighbor);
                    }
                }
            }
        }

        return result;
    }
}

const myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');

myGraph.addEdge('A', 'B');
myGraph.addEdge('B', 'C');
myGraph.addEdge('C', 'D');

const bfsResult = myGraph.bfs('A');
console.log('BFS traversal:', bfsResult);
