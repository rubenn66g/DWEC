import { useState } from "react";
import { useEffect } from "react";
function Alta(){
const[nuevoTexto,setNuevoTexto]=useState("");

    var formulario=<form>
            <label>Nombre</label>
            <input type="text"/>
            <label>Email</label>
            <input type="email"/>
            <label>Ciudad</label>
            <input type="text"/>
            </form>
    return(
        <>
        {formulario}
        </>
    )
}
export default Alta;