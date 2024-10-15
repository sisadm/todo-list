// random elements for the list
const toDoArray = [
    'Get Groceries',
    'Call Mum',
    'Get Dentist Appointment',
    'Pay Electricity Bill',
    'Meet with Ed',
    'Clear Email',
    'Visit Uncle', 
    'Go To Paris',
    'Get a Haircut',
]

let randomNumArray = [];


// select elements
let html = document.querySelector('html');
let mainDiv = document.querySelector('#main');
let mainUl = document.querySelector('#mainUl');
let listUl = document.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const saveButton = document.querySelector('.saveButton');
let listItem = document.getElementsByTagName('li');


// svg check image
const svgCode = '<svg width="25px" height="25px" viewBox="0 0 4445 4445" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;"><g transform="matrix(5.55556,0,0,5.55556,0,0)"><circle id="Circle" cx="400" cy="400" r="333.333" style="fill:none;stroke:rgb(28,39,76);stroke-width:50px;"/><path id="Check" d="M283.333,416.667L350,483.333L516.667,316.667" style="fill:none;fill-rule:nonzero;stroke:rgb(28,39,76);stroke-width:50px;stroke-linecap:round;stroke-linejoin:round;"/></g></svg>';


// function add Li to Ul

function addElement(value, addClass) {

    let createLi = document.createElement('li');
    
    if (addClass != null) {
        createLi.classList.add(addClass);
    }
    createLi.innerHTML = `
        <div class='textDiv  notChecked'>
            <span class="liSpan">${svgCode}</span> 
            <span class='text'>${value}</span>
        </div>
        <div class='btnDiv'>
            <button class="delete">Delete</button> 
            <button class="up">&and;</button>
            <button class="down">&or;</button>
        </div>            
        `;
    mainUl.appendChild(createLi);
}


// function to remove .hide class LI

function removeHideLi() {
    const hideLiElements = document.querySelectorAll('.hide');
    for(let i = 0; i < hideLiElements.length; i++){
        hideLiElements[i].remove();
    }
}


// function to check LocalStorage

function checkLocalS() {
    if(localStorage.length == 0) {
        return false;
    } 
    else {
        Object.keys(localStorage).forEach((key) => {
            console.log(localStorage.getItem(key));
        });
    }
}

// random number generator 
function randomNumb() {
    return Math.floor(Math.random() * toDoArray.length);
};


// random quote add to array
function randomArrayFiller() {
    
    for(let i = 0; randomNumArray.length < 4; i++){
        let number = randomNumb();
        if(!randomNumArray.includes(number)) {
            randomNumArray.push(number);
        };
    };
};

// choose random numbers 
function randomToDo(number) {
    console.log(number);
    if(randomNumArray.includes(number)) {
        randomToDo(randomNumb());
    } else {
        randomNumArray.push(number);
    };
};

// Button Functions

// add item event listener
addItemButton.addEventListener('click', () => {
    const hideLiElements = document.querySelectorAll('.hide');
    let = inputValue = addItemInput.value;

    if(inputValue == '') {
        return alert("Please fill the input if you want to add something to list!");
    };

    if (inputValue != "") {
        addElement(inputValue, null);
        addItemInput.value = '';
        removeHideLi();
    } 

    if(!hideLiElements[0] || hideLiElements[0].style.display != 'none') {
        removeHideLi();
    }   
});

// save button 
saveButton.addEventListener('click', () => {
    const li = document.querySelectorAll('li');
    const liDiv = document.querySelectorAll('.textDiv');
    const hideLi = document.querySelectorAll('.hide');
    let savedItemArr = [];

    window.localStorage.clear();

    if(hideLi.length == 0 && li.length > 0) {

        

        // for loop list elements and push it to savedItemArr 
        for(let i = 0; i < li.length; i++){
            
            if(liDiv[i].classList.contains('notChecked')) {
                
                savedItemArr.push(liDiv[i].querySelector('.text').innerHTML);
            }    
            console.log(savedItemArr)
        // for loop savedItemArr and push each one into localStorage 
        }

        

        for(let i = 0; i < savedItemArr.length; i++) {
            window.localStorage.setItem(i, savedItemArr[i]);
        }       
    }

});

// up & down & delete buttons & a
listUl.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON') {  // target the buttons 
        if(event.target.className == 'delete') {  // target the button with delete class
            let li = event.target.parentNode.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if(event.target.className == 'up') {
            let li = event.target.parentNode.parentNode;
            let ul = li.parentNode;
            let prev = li.previousElementSibling;
            if(prev) {
                ul.insertBefore(li, prev);
            }
        }
        if(event.target.className == 'down') {
            let li = event.target.parentNode.parentNode;
            let ul = li.parentNode;
            let next = li.nextElementSibling;
            if(next) {
                ul.insertBefore(next, li);
            }
        }
    }

    
    // event for adding checked class into li elements 

    if(event.target.classList.contains('textDiv') || 
        event.target.className =='text' ||
        event.target.tagName =='svg' ) {
        

        if (event.target.classList.contains('textDiv')) {
            console.log('div')
            if(event.target.classList.contains('checked')) {
                console.log('a')
                event.target.classList.replace('checked', 'notChecked');
            } 
            else {
                event.target.classList.replace('notChecked', 'checked');
                console.log('b')
            }     
        }

        if (event.target.className =='text') {
                console.log(event.target.parentNode)
            if(event.target.parentNode.classList.contains('checked')){
                event.target.parentNode.classList.replace('checked', 'notChecked');
            }
             
            else {
            event.target.parentNode.classList.replace('notChecked', 'checked');
            console.log('b')
            }     
        }

        if (event.target.tagName =='svg') {
        if(event.target.parentNode.parentNode.classList.contains('checked')){
            event.target.parentNode.parentNode.classList.replace('checked', 'notChecked');
        }
         
        else {
        event.target.parentNode.parentNode.classList.replace('notChecked', 'checked');
        console.log('b')
        }     
    }
        }
})



// page start

window.onload = () => {

    // adding each random element to the page
    randomArrayFiller();
    if(localStorage.length == 0) {
        for(const e of randomNumArray) {
            addElement(toDoArray[e], 'hide');
        }

    // fill the list with the elements fromt localStorage
    } else {
        for(let i = 0; i <= localStorage.length - 1; i++){
            if(localStorage.getItem(i) == 'null'){
                i++;
            } else {
                addElement(localStorage.getItem(i), null);
            }    
        };
    }

}