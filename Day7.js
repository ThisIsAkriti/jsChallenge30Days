//Acitvity 1:
//Task 1:
const book = {
    title:'The One Thing',
    author:'Gary Keller'
}
console.log(book);

//Task 2:
console.log(book.title +" by "+ book.author);

//Activity2:
//Task 3:
const book1 = {
    title:'The One Thing',
    author:'Gary Keller',
    addingMethod: () => {
       return book1.title +" by " + book1.author
    }
}
console.log(book1.addingMethod());

//Task 4: and feature request 1:

const book2 = {
    title:'The One Thing',
    author:'Gary Keller',
    addingMethod: (yr) => {
        return book2.title +" by " + book2.author +", year : " +yr
     }
}
console.log(book2.addingMethod(4));

//Activity3:
//Task5: and feature Req 2
const library = {
    name:'Library For Book readers',
    books:[{
        title: "The God of Small Things"},{
        title: "A Fine Balance",},{
        title: "The White Tiger" },{
        title: "Midnight's Children" },{
        title: "Interpreter of Maladies" }
    ]
}
console.log(library);

//Task 6:
console.log(library.name +":")
let res = library.books.forEach(element => {
    console.log(element.title);
});

//Activity 4:
//Task 7:
const lib = {
    yr:2002,
    book3 : {
        title:'The One Thing',
        author:'Gary Keller',
    },
    addingMethod: function(){
        return this.book3.title +", Year : " + this.yr
    }
}
console.log(lib.addingMethod());

//Activity 5:
//Task 8: and featureReq 3:

const bookInfo = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

for (let property in bookInfo) {
    console.log(`${property}: ${bookInfo[property]}`);
}

//Task 9:

let key = Object.keys(bookInfo);
let value = Object.values(bookInfo);
console.log(key );
console.log(value);
