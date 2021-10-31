/**EVENTOS DE CLICK */

const button = document.querySelector('.btn.btn-primary');
const title = document.getElementById('title');
const description = document.getElementById('description');
console.log(description);
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