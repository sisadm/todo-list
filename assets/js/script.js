// select elements
let html = document.querySelector('html');
let mainDiv = document.querySelector('#main');
let mainUl = document.querySelector('#mainUl');

// creating elements
let createUl = document.createElement('ul');
let createLi = document.createElement('li');
let createSpan = document.createElement('span');
let createDiv = document.createElement('div');
let createBtn = document.createElement('button');

// svg check image
const svgCode = '<svg width="25px" height="25px" viewBox="0 0 4445 4445" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;"><g transform="matrix(5.55556,0,0,5.55556,0,0)"><circle id="Circle" cx="400" cy="400" r="333.333" style="fill:none;stroke:rgb(28,39,76);stroke-width:50px;"/><path id="Check" d="M283.333,416.667L350,483.333L516.667,316.667" style="fill:none;fill-rule:nonzero;stroke:rgb(28,39,76);stroke-width:50px;stroke-linecap:round;stroke-linejoin:round;"/></g></svg>';

// adding id to the new ul
createUl.setAttribute('id', 'mainUl');
// appending into the main div element
mainDiv.appendChild(createUl)

// adding 
createSpan.innerHTML = svgCode;
createLi.appendChild(createSpan);
createLi.innerHTML += 'egy';

createDiv.appendChild()



mainUl.appendChild(createLi);



