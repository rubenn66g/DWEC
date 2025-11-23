window.onload=()=>{
    //1
    //document.addEventListener("click",()=> alert("has clickado"));
    //2
    //document.addEventListener("mousemove",(e)=> console.log(e.clientX,e.clientY));
   //4
    let boton =document.getElementById("boton");
    boton.addEventListener("click",limpiar);

    limpiar();

    let img;// document.getElementById("imagen");
    let imagenes=document.getElementById("imagenes");

    let clickado=false;
    imagenes.addEventListener("click",(e)=>{
        if(!clickado){
            //es la primera vez que clickan la imagen tengo que arrastrarla
            img=e.target;           
            clickado=true
            cx=e.clientX-img.offsetLeft;
            cy=e.clientY-img.offsetTop;
        }
        else{
            clickado=false;
        }
    });

    document.addEventListener("mousemove",(e)=>{
        //obtengo la posicion del raton
        if(clickado){
            //muevo la imagen -> cambio su posicion en estilos ->img.style.
            console.log( "han clicado la imagen y en sus estilos su pos es ",e.clientX,e.clientY);
            img.style.top = (e.clientY-cx)+ "px";
            img.style.left=(e.clientX-cy)+"px";
            img.style.position ="absolute";
        }
    })

}
function entra(e){
    if(e.ctrlKey){
        e.target.style.backgroundColor="red";
    }
    else if(e.shiftKey){
        e.target.style.backgroundColor="blue";   
    }
        else if(e.altKey){
            e.target.style.backgroundColor="white";
        }
}

function limpiar(){
    let tabla =document.getElementById("mitabla");
     let aux="";
    for(i=0;i<30;i++){
        aux+="<tr>";
        for(j=0;j<30;j++){
            aux+="<td> </td>";
        }
        aux+="</tr>";
    }
    tabla.innerHTML =aux;

    //asociar eventos
    let tr=document.getElementsByTagName("td");

    for(celda of tr){
        celda.addEventListener("mouseover",entra)
    }
}