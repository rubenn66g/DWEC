import { useState } from "react";
function Formulario(){
    const[contenidoInput,setcontenidoInput]= useState("");
    const[contenidoInput1,setcontenidoInput1]= useState("");
    function click(){
        alert("Hola "+contenidoInput+" "+contenidoInput1)
        setcontenidoInput("");
        setcontenidoInput1("");
    }
    return(
        <>
            <label>Nombre</label>
            <input value={contenidoInput} onChange={e=>(setcontenidoInput(e.target.value))}/>
            <label> Apellidos</label>
            <input value={contenidoInput1} onChange={e=>(setcontenidoInput1(e.target.value))} />

            <button onClick={click}>Saludame</button>
        </>
    );
}

export default Formulario