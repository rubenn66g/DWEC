//1
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));

console.log(num1+=num2);
console.log(num1-=num2);
console.log(num1*=num2);
console.log(num1/=num2);

//2
let numero = Number(prompt("Ingrese un número"));

const resultado= numero%2==0 ? "el numero es par" : "el numero es impar";

console.log(resultado);

//3
let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));

const resultado1= a>b && a>c ? "a es mayor que b y c":"a es menor que c o b";
const resultado2= b>a && b>c ? "b es mayor que a y c":"b es menor que c o b";
const resultado3= c>b && c>a ? "c es mayor que b y a":"c es menor que a o b";

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

//4
let num = Number(prompt("Ingrese un número"));

for(let i=0;i<=10;i++){
    console.log(i+" X "+num+" = "+i*num);
}

//5
let N = Number(prompt("Ingrese un número"));
let suma=0;
for(let i =0;i<=N;i++){
    suma+=N
}
console.log(suma);
//6
let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i+1}`));
    
    let numeros=num>0 ? positivos++ : negativos++;
}
console.log(positivos);
console.log(negativos);

//7
let numero1 = Number(prompt("Ingrese un número"));
var primo=true;
for(i=2;i<numero1;i++){
    var primo2=numero1%i==0 ? primo=true : primo=false; 
}
var primo3=primo==true ? "el numero es primo" : "el numero no es primo";

console.log(primo3);
//8

let numero2 = Number(prompt("Ingrese un número"));
var factorial = 1;

for(i=1;i<=numero2;i++){
   factorial*=i;
}
console.log(factorial);

//9
let N2 = Number(prompt("Ingrese un número"));
for(i=0;i<=N2;i++){
    if(i%2==0){
        console.log(i);
    }
}
//10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;

while(intento !== numeroSecreto) {
    intento = Number(prompt("Adivina el número entre 1 y 10"));
    if(numeroSecreto>intento){
        alert("el numero es mayor");
    }
    if(numerosecreto<intento){
        alert("el numero es menor");
    }
}

if(intento==numeroSecreto){
    alert("ganaste");
}