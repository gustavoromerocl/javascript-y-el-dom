
/**OBETENER ELEMENTOS POR ID */
const title = document.getElementById('title');
title.innerHTML = "Cursos";
//console.log(title);

const description = document.getElementById('description');
description.innerHTML = "Listado de cursos";

/**OBTENER ELEMENTOS POS CLASE */
//const items = document.getElementsByClassName('list-group-item');
//console.log(items);

/**OBTENER ELEMENTOS POR ETIQUETA */

const items = document.getElementsByTagName('li');

for (let i = 0; i < items.length; i++) {
  if(i % 2 == 0){
    const element = items[i];
    element.style.background = '#f2f2f2'
  }
  
  //console.log(element);
}

/**OBTENER ELEMENTOS POR QUERYS DE CSS */
const idElement = document.querySelector('#first-course');
const classElement = document.querySelector('.list-group-item');
const tagElement = document.querySelector('li');
const ccsQueryElement = document.querySelector('div.row > ul.list-group > li')

//console.log(idElement);
//console.log(classElement);
//console.log(tagElement);
//console.log(ccsQueryElement);

const multiElements = document.querySelectorAll('li');
const multiOddElements = document.querySelectorAll('li:nth-child(odd)');

//console.log(multiElements);
//console.log(multiOddElements);

/**ELEMENTOS HIJOS */

const list = document.querySelector('ul');
//console.log(list.childElementCount);
//console.log(list.children);
//console.log(list.firstElementChild);
//console.log(list.lastElementChild);

//console.log(list.firstElementChild.innerHTML);
//console.log(list.lastElementChild.innerHTML);


for (let i = 0; i < list.children.length; i++) {
    const element = list.children[i];
    //console.log(element);
}

/**ELEMENTOS HERMANOS */

const brotherElement = document.querySelector('div.row > ul.list-group > li');
//console.log(brotherElement.parentElement);//padre
//console.log(brotherElement.parentElement.parentElement);//abuelo
//console.log(brotherElement.nextElementSibling);//hermano siguiente

const lastElement = document.getElementById('last-course');
//console.log(lastElement.previousElementSibling);//hermano anterior

/**NODOS */

const nodo = document.getElementById('first-course');
console.log(nodo.childElementCount);
console.log(nodo.childNodes);
console.log(nodo.childNodes.length);
