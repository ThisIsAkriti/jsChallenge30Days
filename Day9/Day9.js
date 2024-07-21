//Activity1:
//Task1:
document.querySelector(".firstDiv").innerHTML = "Html Content changed";
//Task2:
document.querySelector(".firstDiv").style.backgroundColor = "yellow";

//Activity2:
//Task3:
const div = document.createElement("div");
div.append("Appending Text");
document.querySelector("body").append(div);
//Task4:
const li = document.createElement('li').prepend = "List Created";
document.querySelector('.list').append(li);

//Activity3:
//Task5:
document.querySelector('.para').remove();
//Task6:
document.querySelector('.lastchild').lastElementChild.remove();

//Activity4:
//Task7:
document.querySelector('.imageHi').setAttribute('src' , "./icons8-thank-you-50.png") 

//Task8:
document.querySelector('.add').classList.add('highlight');
document.querySelector('.remove').classList.remove('highlight');

//Activity5:
//Task9:

const text = document.querySelector('.paraColor');
document.querySelector('.toggleButon').addEventListener('click' , () => {
    if(text.style.backgroundColor === 'pink'){
        text.style.backgroundColor = 'green';
        text.innerHTML = "Color Toggled to green";
    }
    else{
    text.style.backgroundColor = 'pink';
    text.innerHTML = "Color Toggled to pink";
    }
})
//Task 10:
const hoverOver = document.querySelector(".hover")
hoverOver.addEventListener('mouseover' , () => {
   document.querySelector(".hover").style.border = "2px solid green"
})
hoverOver.addEventListener('mouseout' , () => {
    document.querySelector(".hover").style.border = "2px solid yellow"
 })