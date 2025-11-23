//1
function absoluto(numero){
    return Math.abs(numero);
}
console.log(absoluto(-2));

//2
let numero2=Number(prompt("Escribeme un numero decimal"));
console.log(Math.round(numero2));
console.log(Math.ceil(numero2));
console.log(Math.floor(numero2));

//3
console.log(Math.pow(5,3));
console.log(Math.sqrt(81));

//4
let array = [10,-5,3,99,42];
console.log(Math.max(...array));
console.log(Math.min(...array));

//5
console.log(Math.random());

//6
console.log(Math.floor(Math.random()*6)+1);

//7
function rango(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(1,10);
//8
let grados=45*Math.PI/180;

console.log(Math.sin(grados));
console.log(Math.cos(grados));

//9
let grados2=60;

console.log(Math.atan(grados));

//10
let num1=10;

console.log(Math.log(num1));

//11
let numeroAdivinar=Math.floor(Math.random()*100)+1;
 var numero3=0;
while(numeroAdivinar!=numero3){
    numero3=Number(prompt("dime un numero"));
    if(numero3>numeroAdivinar){
        alert("el numero es menor");
    }
    if(numero3<numeroAdivinar){
        alert("el numero es mayor");
    }
}
if(numero3==numeroAdivinar){
    alert("has acertado");
}

//12
let x1=Number(prompt("dime x1"));
let x2=Number(prompt("dime x2"));
let y1=Number(prompt("dime y1"));
let y2=Number(prompt("dime y2"));

console.log(Math.sqrt(Math.pow((x2-x1),2))+(Math.pow((y2-y1),2)));

//13
let numeroGanador=Math.floor(Math.random()*36)+1;
console.log("el numero ganador es : "+numeroGanador);
//14
let numeroramdom=rango(10,99);
let letras="abcdefghijk";

let pass="";
for(let i=0;i<6;i++){
    pass+=letras[rango(0,letras.length)];
}
console.log(numeroramdom+pass);

