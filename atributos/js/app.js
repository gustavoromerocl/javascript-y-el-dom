/**INNER HTML*/

const description = document.getElementById('description');
console.log(description.innerHTML);


description.textContent = 'listado de cursos'
console.log(description.textContent);

description.innerHTML = `<strong>${description.textContent}</strong>`;