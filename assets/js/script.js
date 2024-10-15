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

// creating elements
let createUl = document.createElement('ul');
let createLi = document.createElement('li');
let createSpan = document.createElement('span');
let createDiv = document.createElement('div');
let createBtn = document.createElement('button');

// svg check image
const svgCode = '<svg width="25px" height="25px" viewBox="0 0 4445 4445" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;"><g transform="matrix(5.55556,0,0,5.55556,0,0)"><circle id="Circle" cx="400" cy="400" r="333.333" style="fill:none;stroke:rgb(28,39,76);stroke-width:50px;"/><path id="Check" d="M283.333,416.667L350,483.333L516.667,316.667" style="fill:none;fill-rule:nonzero;stroke:rgb(28,39,76);stroke-width:50px;stroke-linecap:round;stroke-linejoin:round;"/></g></svg>';


// function add Li to Ul

function addElement(value, addClass) {
    
    if (addClass != null) {
        createLi.classList.add(addClass);
    }
    createLi.innerHTML = `
        <div>
            <span class="liSpan notChecked">${svgCode}</span> 
            <span class='text'>${value}</span>
        </div>
        <div>
            <button class="delete">Delete</button> 
            <button class="up">&and;</button>
            <button class="down">&or;</button>
        </div>            
        `;
    let.appendChild(createLi);
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