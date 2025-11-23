//1
let numero=Number(prompt("escribe un numero(positivo o negativo)"));

if(numero>0){
    console.log("El numero es positivo")
}
else{
    console.log("El numero es negativo")
}
//2
let edad=Number(prompt("escribe tu edad"));

if(edad>=18){
    console.log("eres mayor de edad");
}
else{
    console.log("eres menor de edad")
}
//3
let numero1=Number(prompt("escribe un numero(par o impar)"));

if(numero1%2==0){
    console.log("el numero es par");
}
else{
    console.log("el numero es impar");
}

//4
let calificacion=Number(prompt("escribe la calificacion"));

if(calificacion>=5){
    console.log("estas aprobado");
}
else{
    console.log("estas suspenso");
}

//5
let number=Number(prompt("escribe un numero"));
let number2=Number(prompt("escribe otro numero"));

if(number>number2){
    console.log("el numero "+number+" es mayor que "+number2);
}
if(number<number2){
    console.log("el numero "+number+" es menor que "+number2);
}

if(number==number2){
    console.log("los numeros son iguales");
}
//6
var numero3=Number(prompt("dime un numero del 1 al 7"));

switch(numero3){
    case 1:
        console.log("Lunes");
    break;
    case 2:
        console.log("Martes");
    break;
    case 3:
        console.log("Miercoles");
    break;
    case 4:
        console.log("Jueves");
    break;
    case 5:
        console.log("Viernes");
    break;
    case 6:
        console.log("Sabado");
    break;
    case 7:
        console.log("Domingo");
    break;
    default:
        console.log("ese numero no es entre el 1 y el 7");
    break;
}
//7
var opcion=Number(prompt("dime una opcion 1- 3"));
switch(opcion){
    case 1:
        console.log("opcion a");
    break;
    case 2:
        console.log("opcion b");
    break;
    case 3:
        console.log("opcion c");
    break;
    default:
        console.log("opcion no valida");
    break;
}

//8
var color=prompt("dime un color(verde amarillo rojo)");
switch(color){
    case "rojo":
        console.log("Alto");
    break;
    case "amarillo":
        console.log("precaucion");
    break;
    case "verde":
        console.log("avanza");
    break;
    default:
        console.log("opcion no valida");
    break;
}
//9
var fruta=prompt("dime una fruta(manzana-platano-uva)");
switch(fruta){
    case "manzana":
        console.log("Es una manzana roja");
    break;
    case "platano":
        console.log("Es un platano amarillo");
    break;
    case "uva":
        console.log("Es una uva morada");
    break;
    default:
        console.log("Fruta no reconocida");
    break;
}
//10
var nota=prompt("escribe tu nota(a b c d f)");
switch(nota){
    case "a":
        console.log("Excelente");
    break;
    case "b":
        console.log("Muy bien");
    break;
    case "c":
        console.log("Bien");
    break;
    case "d":
        console.log("Suficiente");
    break;
    case "f":
        console.log("Reprobado");
    break;
    default:
        console.log("nota incorrecta");
        break;
}