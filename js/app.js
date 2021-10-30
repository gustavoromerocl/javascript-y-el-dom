const title = document.getElementById('title');
title.innerHTML = "Cursos";
//console.log(title);

const description = document.getElementById('description');
description.innerHTML = "Listado de cursos";

const items = document.getElementsByClassName('list-group-item');
//console.log(items);

for (let i = 0; i < items.length; i++) {
  const element = items[i];
  console.log(element);
}