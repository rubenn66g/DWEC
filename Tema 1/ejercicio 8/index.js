//1
let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");

if(edad>=18 && permiso.toLowerCase()=="si"){
    console.log("puedes entrar");
}
else{
    console.log("no puedes entrar");
}

//2
let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");

if(matematicas=="si"||fisica=="si"||quimica=="si"){
    console.log("pasas de curso");
}
else{
    console.log("no pasas de curso");
}
//3
let contraseña = prompt("Ingrese la contraseña");

if(contraseña!="1234"){
    console.log("contraseña incorrecta");
}
else{
    console.log("contraseña correcta");
}
//4
let numero = Number(prompt("Ingrese un número"));

if(numero>=10 && numero<=50){
    console.log("el numero esta entre 10 y 50");
}
else{
    console.log("el numero no esta en el rango");
}
//5
let edad1 = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");

if(edad1>=18 || tutor=="si"){
    console.log("ya puedes entrar");
}
else{
    console.log("no puedes entrar");
}

//6
let usuario = prompt("Ingrese su usuario");
let contraseña1 = prompt("Ingrese su contraseña");

if(usuario=="admin" && contraseña1=="1234" || usuario=="invitado" && contraseña1==""){
    console.log("Puedes entrar");
}
else{
    console.log("no puedes entrar");
}

//7
let numero1 = Number(prompt("Ingrese un número"));

if(numero1<100 && numero1>0){
    console.log("el numero es menor que 100 y positivo");
}
else{
    console.log("el numero es mayor que 100 o negativo");
}
//8
let dia = prompt("Ingrese un día de la semana");

if(dia=="lunes" || dia=="martes"||dia=="miercoles"||dia=="jueves"||dia=="viernes"){
    console.log("es dia laborable");
}
else{
    console.log("no es dia laborable");
}

//9
let edad2 = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad");

if(edad2>=18 && nacionalidad=="español"){
    console.log("puedes votar");
}
else{
    console.log("no puedes votar");
}
//10
let usuario1, contraseña2;

while (!(usuario1 === "admin" && contraseña2 === "1234")) {
    usuario = prompt("Usuario:");
    contraseña2 = prompt("Contraseña:");
}
console.log("¡Acceso permitido!");