//Activity 1
//Task 1:
const a = document.querySelector('.button1');
a.addEventListener('click' , () => {
    if(document.querySelector(".para").textContent === "Changed"){
    document.querySelector(".para").textContent = "click"
    }else{
        document.querySelector(".para").textContent = "Changed"
    }
})

//Task 2:
const b = document.querySelector(".image")
b.addEventListener('dblclick' , () => {
    document.querySelector(".image").style.display = "none";
});

//Activity 2
//Task 3:
const c = document.querySelector(".color");
c.addEventListener('mouseover' , ()=>{
   
        document.querySelector(".color").style.backgroundColor = "blue";
    
})

//Task4:
c.addEventListener('mouseout' , () => {
    document.querySelector(".color").style.backgroundColor = "red";
})

//Activity 3
//Task 5:
const d = document.querySelector(".write")
d.addEventListener('keydown' , (event) =>{
    console.log(event.key);
})

//Task 6:
const e = document.querySelector(".displayText");
d.addEventListener('keyup' , () =>{
    e.textContent = d.value;
})

//Activity 4
//Task 7:

document.addEventListener( 'DOMContentLoaded' ,() => {
    const form = document.querySelector('.form');
    const select = document.querySelector('.options');
    const displaypara  = document.querySelector('.paraDisplay');
    form.addEventListener('submit' , (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        formData.forEach((value, key) => {
            console.log(`${key} : ${value}`);
        })
    })
//Task 8:
    select.addEventListener('change' , (event) => {
        displaypara.textContent = `${event.target.value}`
    })
})

//Activity 5:
//Task 9:
document.addEventListener('DOMContentLoaded' , () => {
    const parent = document.querySelector('.parent');
    parent.addEventListener('click' , (event) => {
        if(event.target && event.target.matches('li.child')){
            console.log(`You clicked on : ${event.target.textContent}`)
        }
    })
//Task 10
    const addChild = document.querySelector('.addchild');
    addChild.addEventListener('click' , () => {
        const newChild = document.createElement('div');
        newChild.className = 'ChildAdded';
        newChild.textContent = `Child added: ${parent.children.length+1}`;
        parent.appendChild(newChild);
    })

})
//Task 10:



