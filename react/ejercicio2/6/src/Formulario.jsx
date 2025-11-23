import { useState } from "react";

function Formulario(){

    const[contenidoInput,setcontenidoInput]= useState("");
    const[contenidoInput1,setcontenidoInput1]= useState("");
    const[mostrar,setMostrar]= useState([]);
    function click(){
        setMostrar(["Nombre: "+contenidoInput+" ","Email: "+contenidoInput1]);
        setcontenidoInput("");
        setcontenidoInput1("");
    }
    return(
        <>
            <form action="">
                <label>Nombre:</label><br />
                <input  value={contenidoInput} onChange={e=>(setcontenidoInput(e.target.value))}/> <br /><br />
                <label>Email:</label><br />
                <input value={contenidoInput1} onChange={e=>(setcontenidoInput1(e.target.value))}/>
            </form><br />

            <button onClick={click}>Enviar</button>

            <p>{mostrar}</p>
        </>
    );
}

export default  Formulario