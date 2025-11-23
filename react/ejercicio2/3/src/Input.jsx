import { useState } from "react";
function Input(){
    const[contenidoInput,setcontenidoInput]= useState("");

    function Limpiar(){
        setcontenidoInput("");
    }
    return(
        <>
        <input value={contenidoInput} onChange={e=>(setcontenidoInput(e.target.value))}/>
        <p>{contenidoInput}</p>
        <p>{contenidoInput.length}</p>
        <button onClick={Limpiar}>Limpiar</button>
        </>
    );
}

export default Input