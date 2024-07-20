//Activity 1:
//Task1:
let pName = "Frenzi";
let age = 18;
let info = `Person's name : ${pName} and Age : ${age}.`;
console.log(info);

//Task2:
let info1 = `
This is multiline String,
Person's name : ${pName},
Age : ${age}.`;
console.log(info1);

//Activity2:
//Task3:
const arr = [1 , 21, 18];
const [one , two , , ] = arr;
console.log(`Destructing : 
${one} , ${two}`);

//Task4:
const book = {
    title: "The one thing",
    author: "Garry keller"
}
const {title , author} = book;
console.log(`${title} , ${author}` );

//Activity 3: 
//Task 5:
const arr2 = [11,22,33];
const combined = [...arr ,  ...arr2];
console.log(combined);

//Task 6:
const func = (...rest) => {
    return(
        rest.reduce((initial , current) => initial + current + 0)  
    )
}
let res = func(10,20,30,40)
let res1 = func(1,2,3,4)
console.log(res);
console.log(res1);

//Activity 4:
//Task 7:
let a; 
let b;
const product = (a , b = 1) => {
    return a*b;
}
const prdtRes = product(15);
const prdtRes2 = product(15 , 20);
console.log(`${prdtRes} 
${prdtRes2}
`)

//Activity 5:
//Task 8:
const book1 = {
    title: "The one thing",
    author: "Garry keller",
    display(){
        return `This book "${this.title}" is an amzing book;`
    }
}
console.log(book1.display())

//Task 9:
const first = 'name';
const second = 'age';
const third = 'gender'
const personDetail = {
    name:'alice',
    age:18,
    gender:'male'
}
console.log(personDetail);