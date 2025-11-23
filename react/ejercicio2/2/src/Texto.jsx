import { useState } from "react";
function Texto(){
    const[mostrar,setMostrar]= useState(false);
    const [texto,setTexto]= useState(<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sint vel dolor beatae quod, magnam eos dolores! Nam aut saepe voluptates reprehenderit, non doloremque earum! Iusto ex assumenda fugiat laudantium!</p>);
    function desaparecer(){
        setMostrar(!mostrar);
        if(mostrar){
            setTexto(<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sint vel dolor beatae quod, magnam eos dolores! Nam aut saepe voluptates reprehenderit, non doloremque earum! Iusto ex assumenda fugiat laudantium!</p>);
            
        }
        else{
            setTexto("");
        }
    }
    return(
        <>
        {texto}
        <button onClick={desaparecer}>Mostrar/ocultar</button>
        </>
    );
}

export default Texto