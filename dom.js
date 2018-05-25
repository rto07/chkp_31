// here be your javascript
/*Using createElement and getElementById. Add a new Shirt to the ul. Set the innerText equal to 'Mens T-shirt'.*/

let ul = document.getElementById('list')
let li = document.createElement('li')
li.innerText = 'Mens T-Shirt'
ul.prepend(li)