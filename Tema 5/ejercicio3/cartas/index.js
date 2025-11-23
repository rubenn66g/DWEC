window.onload=()=>{
jugar();
}
var bloqueado=false;
var minutos=1;
var segundos=0;
var cartas=["cell.jpg","freezer.webp","goku.jpeg","vegetto.jpg","vegeta.jpg"];
var cartasacada=[];
let cartapulsada=false;
let cartaAnterior;
let parejas=0;
function jugar(){
    let imagenes=document.getElementById("imagenes");
    let terminado=document.getElementById("terminado");
    posicion();
    imagenes.addEventListener("click",(e)=>{
        let imagen=e.target;
        if(cartapulsada==false){
             imagen.src="img/"+cartasacada[imagen.id];
             cartaAnterior=imagen;
             cartapulsada=true;
        }
        else{
            imagen.src="img/"+cartasacada[imagen.id];
            if(cartasacada[imagen.id]==cartasacada[cartaAnterior.id]){
                parejas++;
                cartaAnterior=null;
                cartapulsada=false;
                if(parejas==5){
                    terminado.innerHTML="has ganado";
                    clearInterval(intervalo);
                }
            }
            else{
                setTimeout(()=>{
                    imagen.src = "img/carta-detras.jpg";
                    cartaAnterior.src = "img/carta-detras.jpg";
                    cartapulsada=false;
                    cartaAnterior=null;
                },1000)
            }
        }


        
    })
     intervalo = setInterval(() => {
        tiempo();
        if (minutos == 0 && segundos == 0) {
            clearInterval(intervalo);
            terminado.innerHTML = "El tiempo se acabo,Perdiste";
        }
    }, 1000);

    actualizarReloj();
}

function tiempo(){
    if(segundos==0){
        minutos--
        segundos=59;
    }
    else{
        segundos--;
    }
    actualizarReloj();
}
function actualizarReloj(){
    let tiempo=document.getElementById("tiempo");
    tiempo.innerHTML=(minutos<10? "0"+minutos:minutos)+":"+((segundos)<10 ? "0"+segundos:segundos);
}

function generaAleatorio(){
    let aleat=Math.floor(Math.random()*10);

    return aleat;
}
function posicion(){
    for(carta of cartas){
        do{
            posAleatoria1=generaAleatorio();
        }while(cartasacada[posAleatoria1])
        cartasacada[posAleatoria1]=carta;

        do{
            posAleatoria2=generaAleatorio();
        }while(cartasacada[posAleatoria2])
        cartasacada[posAleatoria2]=carta;

}
}