import { useState } from "react";

function Item({ nombre, onDelete,cantidad, onNuevoTexto }) {

    const [modoEdicion, setmodoEdicion] = useState(false);
    const [nombreEditado, setnombreEditado] = useState(nombre);
    const[cantidades,setCantidades]=useState(cantidad);
    let jsxResultado;

    function entraEnEdicion() {
        setmodoEdicion(true);
    }

    function avisaGuardarCambios() {
        setmodoEdicion(false);
        onNuevoTexto(nombreEditado);
    }

    function cancelarEdicion() {
        setmodoEdicion(false);
        setnombreEditado(nombre);
    }

    if (!modoEdicion)
        jsxResultado = (
            <li>
                {nombre} - {cantidades}
                <button onClick={entraEnEdicion}>Editar</button>
                <button onClick={onDelete}>Borrar</button>
            </li>
        );
    else
        jsxResultado = (
            <li>
                <input
                    value={nombreEditado}
                    onChange={e => setnombreEditado(e.target.value)}
                />
                <button onClick={avisaGuardarCambios}>Guardar Cambios</button>
                <button onClick={cancelarEdicion}>Cancelar</button>
            </li>
        );

    return jsxResultado;
}

export default Item;
