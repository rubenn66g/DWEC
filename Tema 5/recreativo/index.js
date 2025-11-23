var miBola;
var velocidadY=10;
var posicionYBola=200;
var velocidadX=8;
var miBarra;
var posicionXBarra=0;
var posicionXBola=100;
var misBloques;
var vidas=3;
var vidasText;
var ganar;
var reiniciar;
window.onload=()=>{
    miBola=document.getElementById("bola");
    miBarra=document.getElementById("barra");
    misBloques=document.getElementsByClassName("bloque");
    vidasText=document.getElementById("vidas");
    ganar=document.getElementById("ganar");
    reiniciar=document.getElementById("reiniciar");
    animaJuego();


    document.addEventListener("keydown",(e)=>{
        if(e.key == "ArrowRight" && posicionXBarra<500){
            posicionXBarra+=10;
            miBarra.style.marginLeft = posicionXBarra+"px";
        }
        if(e.key == "ArrowLeft" && posicionXBarra>0){
            posicionXBarra-=10;
            miBarra.style.marginLeft = posicionXBarra+"px";
        }
    })
    
}
function animaJuego(){
    var miIntervalo;
    miIntervalo=setInterval(()=>{
        posicionYBola+=velocidadY;
        miBola.style.marginTop = posicionYBola+"px";
        posicionXBola+=velocidadX;
        miBola.style.marginLeft = posicionXBola+"px";
        if(posicionYBola<=0){
            velocidadY*=-1;
        }
        else if(posicionYBola>=500)
        {
            velocidadY*=-1;
            let vidasImgs = document.querySelectorAll("#vidas .vida");
            if(vidasImgs.length > 0){
            vidasImgs[vidasImgs.length - 1].remove();
            }
            vidas--;
            
        }
        if(vidas==0){
            ganar.innerHTML="has perdido";
            clearInterval(miIntervalo);
        }
        if(posicionXBola>=500 || posicionXBola<=0){
            velocidadX*=-1;
        }

        //choque con barra
        if(miBola.getBoundingClientRect().bottom >= miBarra.getBoundingClientRect().top &&
        miBola.getBoundingClientRect().right >= miBarra.getBoundingClientRect().left &&
        miBola.getBoundingClientRect().left <= miBarra.getBoundingClientRect().right){
            velocidadY *= -1;
        }

        //choque con bloque
         for (i=0;i<misBloques.length;i++) {
            if (
                miBola.getBoundingClientRect().bottom >= misBloques[i].getBoundingClientRect().top &&
                miBola.getBoundingClientRect().top <= misBloques[i].getBoundingClientRect().bottom &&
                miBola.getBoundingClientRect().right >= misBloques[i].getBoundingClientRect().left &&
                miBola.getBoundingClientRect().left <= misBloques[i].getBoundingClientRect().right
            ) {
                velocidadY *= -1;
                misBloques[i].parentNode.removeChild(misBloques[i]);
            }

        }
        if (misBloques.length == 0) {
            clearInterval(miIntervalo);
            ganar.innerHTML="has ganado";
        }

         
    },80)
}