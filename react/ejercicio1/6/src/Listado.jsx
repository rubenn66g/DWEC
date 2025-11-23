
function Listado({item}){
    return(
        <>
           {item.map((elementos)=> <li>{elementos}</li>)}
        </>
    );
}

export default Listado;