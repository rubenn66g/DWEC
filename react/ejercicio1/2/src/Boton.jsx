function Boton(){
    function click(){
        alert("click");
    }
    return(
        <>
            <button onClick={click}> haz click</button>
        </>
    );

    
}

export default Boton