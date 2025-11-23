//1
for (var i=1; i <= 6; i++) {
     document.write("<h" + i + ">Cabecera h" + i + "</h" + i + ">");
}
//2
document.write("<h2>columnas for</h2>");
var columnas = Number(prompt("Introduce las columnas"));
var alto = Number(prompt("Introduce el alto"));
var ancho = Number(prompt("Introduce el ancho"));
document.write('<table border="0" cellspacing="2" bgcolor="black">');
document.write('<tr height="' + alto + '">');
for (var i=0; i<columnas;i++) {
    if (i%2==0) {
        document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>');
    }
    else {
        document.write('<td width="' + ancho + '" bgcolor="black">&nbsp;</td>');
    }
}
document.write('</tr>');
document.write('</table>');

//3
document.write("<h2>columnas while</h2>");
var columnas1 = Number(prompt("Introduce las columnas"));
var alto1 = Number(prompt("Introduce el alto"));
var ancho1 = Number(prompt("Introduce el ancho"));
var i=0;
document.write('<table border="0" cellspacing="2" bgcolor="black">');
document.write('<tr height="' + alto1 + '">');
while(i<columnas1){
    if (i%2==0) {
        document.write('<td width="' + ancho1 + '" bgcolor="white">&nbsp;</td>');
    }
    else {
        document.write('<td width="' + ancho1 + '" bgcolor="black">&nbsp;</td>');
    }
    i++;
}

document.write('</tr>');
document.write('</table>');
//4
var num_adivinar=Number(prompt("introduce el numero que quieres adivinar"));
var num=null;

while(num!=num_adivinar){
     num=Number(prompt("escribe un numero"));
     if(num<num_adivinar){
        alert("el numero es mayor");
     }
     if(num>num_adivinar){
        alert("el numero es menor");
     }
}
alert("has acertado el numero");
//5
var num_adivinar1=Number(prompt("introduce el numero que quieres adivinar"));
var num1=null;

do{
    num1=Number(prompt("escribe un numero"));
    if(num1<num_adivinar1){
        alert("el numero es mayor");
    }
    if(num1>num_adivinar1){
        alert("el numero es menor");
    }
}while(num1!=num_adivinar1)
alert("has acertado el numero");
//6
document.write("<h2>Tablas de multiplicar</h2>");
for (var i = 1; i <= 10; i++) {
    document.write("Tabla del " + i +"<br>");
    
    for (var j = 1; j <= 10; j++) {
        document.write(j +" x "+ i +" = "+(j * i)+"<br>");
    }
    
}
//7
document.write("<h2>filas y columnas</h2>");
var columnas2 = Number(prompt("Introduce las columnas"));
var filas2=Number(prompt("Introduce las filas"));
var alto2 = Number(prompt("Introduce el alto"));
var ancho2= Number(prompt("Introduce el ancho"));
document.write('<table border="0" cellspacing="2" bgcolor="black">');
for (var i = 0; i < filas2; i++) {
    document.write('<tr height="' + alto2 + '">');
    for (var j = 0; j < columnas2; j++) {
        document.write('<td width="' + ancho2 + '" bgcolor="white">&nbsp;</td>');
    }
    document.write("</tr>");
}
document.write('</table>');



//8
document.write("<h2>tablero de ajedrez</h2>")
var alto_ancho= Number(prompt("Introduce el ancho y alto"));
document.write('<table border="0" cellspacing="2" bgcolor="black">');
for (var i = 0; i < 8; i++) {
    document.write('<tr height="' + alto_ancho + '">');
    for (var j = 0; j < 8; j++) {
        document.write('<td width="' + alto_ancho + '" bgcolor="white">&nbsp;</td>');
    }
    document.write('</tr>');
}
document.write('</table>');