const button = document.querySelector('.btn.btn-primary');

//console.log(button);

button.addEventListener('click', function(){
  console.log("evento escuchando");
})

button.addEventListener('dblclick', function(){
  console.log("evento escuchando doble click");
})