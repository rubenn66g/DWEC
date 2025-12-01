import { useState } from 'react';
import Item from './Item';

function ListaCompra() {

    let datosInicialesPrueba={"items":[
        {
            "nombre":"Arroz",
            "cantidad":3
        },
        {
            "nombre":"Pan",
            "cantidad":2
        }
    ]};
    const [listaCompra, setlistaCompra] = useState(datosInicialesPrueba.items);
    const [contenidoInput, setcontenidoInput] = useState("");

    function pulsoBoton() {
        let lista={
            "nombre":contenidoInput,
            "cantidad":1
        }
        setlistaCompra([...listaCompra, lista]);
        console.log(listaCompra);

        setcontenidoInput("");
    }

    function borraElemento(id) {
        setlistaCompra(lista => lista.filter((_, i) => i != id));
    }

    function actualizaElemento(nuevoTexto, id) {
    const nuevaLista = [...listaCompra]; 
    nuevaLista[id].nombre = nuevoTexto;     
    setlistaCompra(nuevaLista);          
}


    let maquetaListaCompra = listaCompra.map((elementoDeArray, indice) =>
        <Item key={indice}
            nombre={elementoDeArray.nombre}
            cantidad={elementoDeArray.cantidad}
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
