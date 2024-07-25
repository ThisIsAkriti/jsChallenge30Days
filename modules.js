function add(a,b){
    return a + b;
}
export default add;
const personDetails = {
    name : 'Frenzi',
    age: 18,
    greet(){
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    },
    friend(){
        this.name = 'Alicia'
        console.log("My friend name is " + this.name);
    }
    
}
//module.exports = add ;
module.exports = personDetails;