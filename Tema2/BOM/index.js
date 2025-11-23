document.getElementById("navegador").innerHTML = "Navegador " + navigator.appCodeName+" "+navigator.appName+ " "+navigator.product;
document.getElementById("idioma").innerHTML = "Idioma "+navigator.language;
document.getElementById("plataforma").innerHTML ="Plataforma "+navigator.platform;
document.getElementById("resolucion").innerHTML ="Resolucion " +screen.width+" X "+screen.height;

document.getElementById("navegacion").innerHTML="URL actual: "+window.location.href;

document.getElementById("resolucion2").innerHTML ="Resolucion " +screen.width+" X "+screen.height;
document.getElementById("area").innerHTML ="Area Disponible "+screen.availWidth +" X "+ screen.availHeight;
document.getElementById("orientacion").innerHTML ="Orientación "+screen.orientation;
document.getElementById("color").innerHTML ="Profundidad de color "+screen.colorDepth;
document.getElementById("pixel").innerHTML ="Profundidad de pixel"+screen.pixelDepth;
function volver(){
location.href="https://www.w3schools.com/";
}
