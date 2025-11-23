const entradaItem = document.getElementById('entradaItem');
const botonEnviar = document.getElementById('botonEnviar');
const listaItems = document.getElementById('listaItems');
const botonLimpiar = document.getElementById('botonLimpiar');

botonEnviar.addEventListener('click', () => {
    const valor = entradaItem.value.trim();
    if (valor === '') return;

    const li = document.createElement('li');

    const textoItem = document.createElement('span');
    textoItem.textContent = valor;

    const botonEditar = document.createElement('span');
    botonEditar.textContent = 'editar';
    botonEditar.className = 'editar';
    botonEditar.addEventListener('click', () => {
        const nuevoValor = prompt('Edit item:', textoItem.textContent);
        if (nuevoValor) textoItem.textContent = nuevoValor;
    });

    const botonEliminar = document.createElement('span');
    botonEliminar.textContent = 'eliminar';
    botonEliminar.className = 'eliminar';
    botonEliminar.addEventListener('click', () => li.remove());

    li.appendChild(textoItem);
    li.appendChild(botonEditar);
    li.appendChild(botonEliminar);
    listaItems.appendChild(li);

    entradaItem.value = '';
});

entradaItem.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') botonEnviar.click();
});

botonLimpiar.addEventListener('click', () => {
    listaItems.innerHTML = '';
});
