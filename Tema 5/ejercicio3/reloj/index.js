var minutos=0;
var segundos=0;
var intervalo=null;
window.onload =()=>{
    reloj=document.getElementById("reloj");
    let empezar=document.getElementById("empezar");
    let parar=document.getElementById("parar");
    let reset=document.getElementById("reset");

    empezar.addEventListener("click",()=>{
       intervalo=setInterval(tiempo,1000);
    })

    parar.addEventListener("click",()=>{
        clearInterval(intervalo);
        intervalo=null;
    })

    reset.addEventListener("click",()=>{
        clearInterval(intervalo);
        intervalo=null;
        minutos=0;
        segundos=0;
        actualizarReloj();

    })
};
function tiempo(){
    if(segundos==60){
        minutos++
        segundos=0;
    }
    else{
        segundos++;
    }
    actualizarReloj();
}
function actualizarReloj(){
    reloj.innerHTML=(minutos<10? "0"+minutos:minutos)+":"+((segundos)<10 ? "0"+segundos:segundos);
}