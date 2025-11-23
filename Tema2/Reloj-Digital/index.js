var segundos=0;
var reloj=document.getElementById("reloj");
var fecha=document.getElementById("fecha");

function intervalo(){
    let horaActual= new Date();
    reloj.innerHTML =(horaActual.getHours()+":"+horaActual.getMinutes()+":"+horaActual.getSeconds());

    let dia = horaActual.getDate();
    let mes = (horaActual.getMonth() + 1);
    let año = horaActual.getFullYear();

    fecha.innerHTML = dia + "/" + mes + "/" + año;
}
intervalo();
setInterval(intervalo,1000);