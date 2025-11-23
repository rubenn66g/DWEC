import { useState } from "react";
function Boton(){
    const[contador,setContador]= useState(0);

    function Incrementar(){
        setContador(contador+1);
    }

    function Decrementar(){
        if(contador>0)
            setContador(contador-1);
    }

    function Resetear(){
        setContador(0);
    }

    function Duplicar(){
        setContador(contador*2);
    }
    return(
        <>
            <h1>contador:{contador}</h1>

            <button onClick={Incrementar}>Incrementar</button>
            <button onClick={Decrementar}>decrementar</button>
            <button onClick={Resetear}>Resetear</button>
            <button onClick={Duplicar}>Duplicar</button>


        </>
    );
}

export default Boton