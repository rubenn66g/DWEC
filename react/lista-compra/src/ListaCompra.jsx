import { useState } from 'react';
import Item from './Item';

function ListaCompra() {

    const [listaCompra, setlistaCompra] = useState(["pan","azucar"]);
    const [contenidoInput, setcontenidoInput] = useState("");

    function pulsoBoton() {
        setlistaCompra([...listaCompra, contenidoInput]);
        console.log(listaCompra);

        setcontenidoInput("");
    }

    function borraElemento(id) {
        setlistaCompra(lista => lista.filter((_, i) => i !== id));
    }

    function actualizaElemento(nuevoTexto, id) {
    const nuevaLista = [...listaCompra]; 
    nuevaLista[id] = nuevoTexto;     
    setlistaCompra(nuevaLista);          
}


    let maquetaListaCompra = listaCompra.map((elementoDeArray, indice) =>
        <Item key={indice}
            nombre={elementoDeArray}
            onDelete={() => borraElemento(indice)}
            onNuevoTexto={(texto) => actualizaElemento(texto,indice)}
        />
    );

    return (
        <>
            <input
                value={contenidoInput}
                onChange={e => setcontenidoInput(e.target.value)}
            />

            <button  onClick={pulsoBoton}>Añadir</button>

            <ul>
                {maquetaListaCompra}
            </ul>
        </>
    );
}

export default ListaCompra;
