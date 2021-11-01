const row = document.querySelector('.row');
const form = document.getElementById('course-form');

function createCard(title, description){
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

  createCard(tittle, description);
});