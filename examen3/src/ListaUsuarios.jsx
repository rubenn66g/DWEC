import { useState } from "react";
import { useEffect } from "react";
import Usuario from "./Usuario";
import Alta from "./Alta";
function ListaUsuarios(){
    var [listaUsuarios,setListaUsuarios]=useState([]);

    function borrarUsuario(id){
        setListaUsuarios(lista=>lista.filter((_, i) => i != id))
    }

    function anadirUsuario(){
        <Alta></Alta>
    }

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                for( var array of data){
                    setListaUsuarios(array);

                }
            }); 
    },[listaUsuarios]) 
    let  maquetaUsuarios = listaUsuarios.map((elementoDeArray, indice) =>
                    <Usuario key={indice}
                        nombre={elementoDeArray.nombre}
                        email={elementoDeArray.email}
                        ciudad={elementoDeArray.ciudad}
                        onDelete={() => borrarUsuario(indice)}
                        onAdd={()=> anadirUsuario()}
                    />);

    if(maquetaUsuarios==""){
        maquetaUsuarios=<p>no hay ningun usuario</p>
    }
    
    return(
        <>
            <ul>
                {maquetaUsuarios}
            </ul>
        </>
    )
}

export default ListaUsuarios;