 // Aquí tu código

 const agregar = document.getElementById('agregar');
 const lista = document.getElementById('lista');

 agregar.addEventListener ('click', function() {

    const nuevoElemento = prompt('Ingrese el nuevo elemento');
    const nuevoLi = document.createElement('li');

    nuevoLi.textContent = nuevoElemento;

    lista.appendChild(nuevoLi);

    });