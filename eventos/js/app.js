/**EVENTOS DE CLICK */

const button = document.querySelector('.btn.btn-primary');
const title = document.getElementById('title');
const description = document.getElementById('description');
//console.log(description);
//console.log(button);

/*button.addEventListener('dblclick', function(){
  console.log("evento escuchando doble click");
})
*/

button.addEventListener('click', function(e){
  console.log(e);
  if(title.style.display != 'none'){
    title.style.display = 'none';
    description.style.display = 'none';
    e.target.textContent = 'Mostrar';
    //this.textContent = 'Mostrar';
  }else{
    title.style.display = 'block';
    description.style.display = 'block';
    e.target.textContent = 'Ocultar';
    //this.textContent = 'Ocultar';
  }
})

/** EVENTOS DE MOUSE */

button.addEventListener('mouseenter', function(){
  this.className = 'btn btn-danger';
});

button.addEventListener('mouseout', function(){
  this.className = 'btn btn-primary';
});

/** SET TIME OUT */

window.setTimeout(function(a1, a2, a3){
  //console.log(a1,a2,a3);
}, 3000, 'argumento1', 'argumento2', 'argmuento3');

/**EVENTOS DEL TECLADO */

const input = document.getElementById('input');
console.log(input);

input.addEventListener('keydown', function(e){
  //console.log('tecla presionada');
  console.log(`tecla presionada: ${e.key} con un codigo ${e.keyCode}`);
})