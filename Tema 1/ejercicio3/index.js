//1
for(let i=0;i<10;i++){
    console.log(i);
}
//2
var b =0;
for(var a=0;a<=5;a++){
    b=b+a;
}
console.log("la suma de los numeros son = "+b);
//3
var numero=5;
for(var c=0;c<=10;c++){
    console.log("la multiplicacion de "+numero+" X "+c+" = "+numero*c);
}
//4
var cuenta=10;
while(cuenta>=0){
    console.log(cuenta);
    cuenta--;
}
//5
var suma=0;
var numero=1;
while(suma+numero<=20){
    suma=suma+numero;
    console.log(suma)
    numero++;
}
//6
do{
    var contrasena=prompt("escribe la contraseña");
}while(contrasena!="1234");

console.log("contraseña correcta");
//7
var numero2=1;
do{
    console.log(numero2);
    numero2++;
}while(numero2<=5);
