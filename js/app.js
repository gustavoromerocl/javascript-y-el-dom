const title = document.getElementById('title');
title.innerHTML = "Cursos";
//console.log(title);

const description = document.getElementById('description');
description.innerHTML = "Listado de cursos";

//const items = document.getElementsByClassName('list-group-item');
//console.log(items);

const items = document.getElementsByTagName('li');

for (let i = 0; i < items.length; i++) {
  if(i % 2 == 0){
    const element = items[i];
    element.style.background = '#f2f2f2'
  }
  
  //console.log(element);
}

const idElement = document.querySelector('#first-course');
const classElement = document.querySelector('.list-group-item');
const tagElement = document.querySelector('li');
const ccsQueryElement = document.querySelector('div.row > ul.list-group > li')

console.log(idElement);
console.log(classElement);
console.log(tagElement);
console.log(ccsQueryElement);

const multiElements = document.querySelectorAll('li');
const multiOddElements = document.querySelectorAll('li:nth-child(odd)');

console.log(multiElements);
console.log(multiOddElements);