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