
function Perfil({nombre,edad,isOnline,imagenUrl}){
    let circulo;
    if(isOnline){
        circulo=<div
         style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    justifyContent: "center"
                }}
                    ></div>
    }
    else{
        circulo=<div
         style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    justifyContent: "center"
                }}
                    ></div>
    }
    return(
        <>
            <img src={imagenUrl}/>
            <p>Nombre: {nombre}</p>
            <p>Edad: {edad}</p>

            {circulo}
            

        </>
    );
}

export default Perfil