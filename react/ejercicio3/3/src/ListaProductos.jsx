import Productos from "./Productos";
function ListaProductos({productos}){

    let maquetaLista=productos.map((e,id)=><Productos key={id} nombre={e.nombre} precio={e.precio}/>)
    return(
        <>
            {maquetaLista}
        </>
    );
}

export default ListaProductos;