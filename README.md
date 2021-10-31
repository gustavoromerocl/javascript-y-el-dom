"# javascript-y-el-dom" 

**** OBTENER ELEMENTOS ****

#CONCEPTOS
dom => document object model
window => objeto que representa la ventana del navegador
document => objeto que contiene la página html
element.tagName => nombre de la etiqueta del elemento
element.id => nombre del id del elemento
element.className => nombre de la clase del elemento
element.style => modifica la propiedad de style css

#JAVASCRIPT

document.getElementById('id'); => obtiene el elemento html con el id indicado

document.getElementsByClassName('class') => obtiene los elementos que coincidan con la clase indicada

document.getElementsByTagName('etiqueta'); => obtiene los elementos que coincidan con la etiqueta

document.querySelector('query css'); => obtiene un elemento de la consulta

document.querySelectorAll('li'); => obtiene todos los elementos que coincidan en una lista

element.childElementCount => retorna la cantidad de hijos del elemento 

element.children => retorna una lista iterable con los hijos del elemento

element.firstElementChild => retorna el primer hijo de la lista

element.lastElementChild => retorna el ultimo hijo del elemento

element.parentElement => retorna el padre el elemento

element.nextElementSibling => retorna el hermano siguiente del elemento

Element.previousElementSibling => retorna el hermano anterior del elemento

element.childNodes => retorna los nodos que contiene el elemento
element.childNodes.length => retorna al acantidad de nodos que contiene el elemento

#CSS

tag:nth-child(odd) => obtiene los elementos hijos pares
tag:nth-child(even) => obtiene los elementos hijos inpares

**** ATRIBUTOS ****

variable.innerHTML => Es un atributo de lectura y escritura del html en un elemento 

variable.textContent => obtiene el texto contenido en el nodo del html

**** EVENTOS ****

#tipos de eventos

click => evento del mouse
dblclick => evento del mouse
keydown => evento de teclado
submit => evento de formulario
change => evento de cambio de valor

#atributos del evento

ev.target => hace referencia al objeto que desencadena el evento, tambien es posible acceder usando la palabra this
ev.key => hace referencia a la tecla que fue presionada
ev.keyCode => hace referencia al codigo que identifca la tecla
ev.preventDefault() => Evita que la pagina recargue cuando se envia un formulario

setTimeout => funcion del objeto window que ejecuta una funcion despues de determinado tiempo
addEventListener => agrega un detector de eventos al elemento, recibe un callback con el argmumento event








