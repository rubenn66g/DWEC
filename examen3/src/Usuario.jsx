import { useState } from "react";
import { useEffect } from "react";
import Alta from "./Alta";
function Usuario(nombre,email,ciudad,onDelete, onAdd){
    const [estado,setEstado]=useState("activo");

    function cambiarEstado(){
        setEstado("inactivo");
    }

    return(
        <>
            <li>
                {nombre}-{email}-{ciudad}-{estado}
                <button onClick={cambiarEstado}>Cambiar Estado</button>
                <button onClick={onDelete}>Borrar</button>
            </li>

            <button onClick={onAdd}>Añadir</button>
        </>
    );
}

export default Usuario;