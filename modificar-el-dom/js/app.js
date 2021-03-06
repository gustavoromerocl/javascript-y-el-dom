const row = document.querySelector('.row');
const form = document.getElementById('course-form');
let div = null;

/**AGREGAR ELEMENTOS AL DOM */
function createCard(title, description){
  div = document.createElement('div');
  div.className = 'col-sm-6 col-md-4';

  let thumbnail = document.createElement('div');
  thumbnail.className = 'thumbnail';

  let caption = document.createElement('div');
  caption.className = 'caption';

  let h3 = document.createElement('h3');
  h3.textContent = title;

  let p1 = document.createElement('p');
  p1.textContent = description

  let p2 = document.createElement('p');

  let a = document.createElement('a');
  a.textContent = 'Eliminar';
  a.className = 'btn btn-danger';

  p2.addEventListener('click', deleteCard)

  p2.appendChild(a);
  caption.appendChild(h3);
  caption.appendChild(p1);
  caption.appendChild(p2);
  thumbnail.appendChild(caption);
  div.appendChild(thumbnail);

  row.appendChild(div);
}

/**CREAR ELEMENTO NUEVO */
function createCardByInnerHtml(title, description){
  let html = `<div class="col-sm-6 col-md-4"> 
                <div class="thumbnail">
                  <div class="caption">
                    <h3 id="title_card">${title}</h3>
                    <p id="description_card">${description}</p>
                    <p>
                      <a href="#" class="btn btn-danger">Accion</a>
                    </p>
                  </div>
                </div>
              </div>`;
  row.innerHTML += html;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  let tittle = document.getElementById('title-form').value;
  let description = document.getElementById('description-form').value;

  //createCardByInnerHtml(tittle, description);
  createCard(tittle, description);
});

/**ELIMINAR ELEMENTOS */

function deleteCard(e){
  //El padre y le elemento a eliminar
  let ancestor = get_ancestors(e.target, 4);
  row.removeChild(ancestor);
}

function get_ancestors(ancestor, level){
  if(level === 0){
    return ancestor
  }
  level--;
  return get_ancestors(ancestor.parentElement, level)
}
