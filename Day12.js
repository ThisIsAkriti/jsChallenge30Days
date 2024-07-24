//Activity 1:
//Task 1:
const intentionalError = () =>{
    throw new Error("An intentional error!")
}
try{
    intentionalError();
}
catch(error){
    console.error("Show error:" + error.message)
}

//Task 2:
const numbers = (a , b ) =>{
    if(b === 0){
        throw new Error("The denominator is 0!")
    }
    return a/b
}
try{
    
    const result = numbers(10,0);
    console.log(result)
}
catch(error){
    console.error("The error occured:" + error.message)
}
//Acitvity 2:
//Task 3:
finally{
    console.log("the code runs everytime!")
};

//Activity 3:
//Task 4:
class CustomError extends Error{
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}
function customErrorFunc (){
    throw new CustomError("This is custom error");
}
try{
    customErrorFunc();
} catch(error){
    if(error instanceof CustomError){
        console.error("Error:" + error.message);
    }else{
        console.log("Unexpected error Occured is:" + error.message)
    }
}finally{
    console.log("Runs everytime!")
}

//Task 5:
var s;
function validateInput( s){
    if(!s){
        throw new Error("The string is empty!")
    }
}
try{
  validateInput();
}catch(error){
    if(s){
        console.log(s);
    }else{
        console.error(error.message)
    }
}

//Activity 4:
//Task6:
function randomPromise() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve("Promise resolved successfully!");
      } else {
        reject(new Error("Promise rejected!"));
      }
    });
  }
  
  randomPromise()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("An error occurred: ", error.message);
    });
  
//Task7:

function randomPromise1() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve("Promise resolved successfully!");
      } else {
        reject(new Error("Promise rejected!"));
      }
    });
  }
  
  randomPromise1()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("An error occurred: ", error.message);
    });
  
//Activity 5:

//Task 8:

function randomPromise2() {
    return new Promise((resolve, reject) => {
      const randomNumber2 = Math.random();
      if (randomNumber2 > 0.5) {
        resolve("Promise resolved successfully!");
      } else {
        reject(new Error("Promise rejected!"));
      }
    });
  }
  
  async function handleRandomPromise() {
    try {
      const message = await randomPromise2();
      console.log(message);
    } catch (error) {
      console.error("An error occurred: ", error.message);
    }
  }
  
handleRandomPromise();
  
//Task 9:
async function fetchData() {
    const invalidUrl = "https://invalidurl.example.com/data";
  
    try {
      const response = await fetch(invalidUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Data:", data);
    } catch (error) {
      console.error("An error occurred while fetching data:", error.message);
    }
  }
  
  fetchData();
  
