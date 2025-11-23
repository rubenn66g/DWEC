import Menu from "./Menu";
function Cabecera({simple, titulo}){
    let resultado;
    if(!simple){
        resultado=(
            <>
            <h1>{titulo}</h1>
            <Menu/>
            </>
        );
    }
    else{
        resultado=<h1>Cabecera simple</h1>
    }
    return(
       resultado
    );
}

export default Cabecera