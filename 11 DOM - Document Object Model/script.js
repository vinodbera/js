const elByID = document.getElementById('element-below-the-input-tag');
console.log(elByID);
console.log(document.getElementById('element-below-the-input-tag'));

console.log(document.getElementsByTagName('h4'));
console.log(document.getElementsByClassName('lorem'));

console.log(document.querySelectorAll('h4.lorem'));
console.log(document.querySelector('h4.lorem'));

console.log(document.querySelectorAll('.lorem'));   //. is used for class
console.log(document.querySelector('#element-below-the-input-tag'));  //# is used for id

//elements properties and methods

console.log(document.querySelector("#loremID").classList);
console.log(document.querySelector("#loremID").className);
console.log(document.querySelector("#loremID").id);
console.log(document.querySelector("#loremID").innerHTML);

const testButton = document.querySelector('button');
testButton.addEventListener('click', ()=> {
    alert('You clicked the button');
})


// working with classes

const menuClicked = (currEl) => {
    const menuElements = document.getElementsByClassName('menu-item');

    for (let i = 0; i<menuElements.length; i++){
        menuElements[i].classList.remove('active');
    }

    currEl.classList.add('active');
}

// creating traversing and removing nodes

document.createElement('h5');
const heading = document.createElement('h3');
const body = document.querySelector('body');
body.appendChild(heading);
body.appendChild(document.createElement('h5'));
heading.innerText = "Using a variable";
document.createElement('h5').innerText = "Without a separate variable"; //hasn't put any text in the tags


const item = document.querySelector('.menu-item');

item.firstElementChild;
item.lastElementChild;

const activeItem = document.querySelector('.active');
activeItem.previousElementSibling;
activeItem.nextElementSibling;
activeItem.parentElement;


activeItem.remove();