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

variable.innerHTML => permite cambiar el valor contenido en las etiquetas html, tmabién puedeser utilizado de solo lectura

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

#CSS

tag:nth-child(odd) => obtiene los elementos hijos pares
tag:nth-child(even) => obtiene los elementos hijos inpares





