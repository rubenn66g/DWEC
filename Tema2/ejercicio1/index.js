//1
let numero=Number(prompt("Introduce un numero"));

let numero2=parseInt(prompt("Introduce un numero"));

let numero3=parseFloat(prompt("Introduce un numero"));

//2
function esEntero(numero4){
    if(Number.isInteger(numero4)){
        return true;
    }
    else{
        return false;
    } 
}
console.log(esEntero(5));

//3
let numero5=NaN;
let numero6="hello";
let numero7= undefined;
let numero8=0/0;
let numero9=parseInt("abc");
console.log(Number.isNaN(numero5));
console.log(Number.isNaN(numero6));
console.log(Number.isNaN(numero7));
console.log(Number.isNaN(numero8));
console.log(Number.isNaN(numero9));

//4
let num=1/0;
console.log(Number.isFinite(num));

//5
let num1=3.141592;
console.log(num1.toFixed(2));
console.log(num1.toFixed(4));
console.log(num1.toFixed(6));

//6
let num2=123456;
console.log(num2.toExponential(2));

//7
let num3=255;
console.log(num3.toString(2));
console.log(num3.toString(8));
console.log(num3.toString(16));

//8
let num4=123.456789;
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(7));

//9
function esValido(cadena){
    if(isNaN(cadena)){
        return "la cadena no es valida";
    }
    
    if(Number.isInteger(cadena)){
        return "es un numero entero";
    }
    else{
        return "es un numero con decimales";
    }
}
console.log(esValido("hola"));
console.log(esValido(5));
console.log(esValido(4.5));