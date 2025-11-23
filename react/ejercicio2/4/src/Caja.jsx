import { useState } from "react";
function Caja(){
    const[color,setColor]=useState("grey");
    const[contenidoInput,setcontenidoInput]= useState("");
    return(
        <>
            <div
                style={{
                    width: "200px",
                    height: "200px",
                    backgroundColor: color,
                    border: "2px solid black",
                    marginBottom: "20px",
                }}>     
            </div>

            <input value={contenidoInput} onChange={e=>(setcontenidoInput(e.target.value),setColor(e.target.value))} />
        </>
    );
}

export default Caja