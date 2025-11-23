
function Boton1(){
    function click(){
        alert("has pulsado el boton1")
    }
    return(
        <>
            <button onClick={click} >Boton1</button>
        </>
    );
}

function Boton2(){
    function click(){
        alert("has pulsado el boton2")
    }
    return(
        <>
            <button onClick={click} >Boton2</button>
        </>
    );
}
 
function Boton3(){
    function click(){
        alert("has pulsado el boton3")
    }
    return(
        <>
            <button onClick={click} >Boton3</button>
        </>
    );
}

function Total(){
    return(
        <>
            <Boton1/>
            <Boton2/>
            <Boton3/>
        </>
    );
}
export default Total