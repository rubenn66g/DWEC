//1
let numeros=Math.floor(Math.random()*(9999-1000))+1000;

let letras="abcdefghijk";

let pass="";
for(let i=0;i<4;i++){
    pass+=letras[Math.floor(Math.random()*(letras.length))];
}
console.log(numeros+" - "+pass);

//2
function lanzarDados(dados,caras){
    let resultados=[];
    let total=0;
    for(i=0;i<dados;i++){
         let num=Math.floor(Math.random()*caras)+1;
         resultados.push(num);
         total+=num;
    }

    return dados+" dados de "+caras+" caras -> "+resultados+" total "+total;
}
console.log(lanzarDados(5,6));

//3
function alfaNumerico(){
    let letras="abcdefghijklnmopqrstuvwxyz123456789";
    let pass="";
    for(let i=0;i<16;i++){
        pass+=letras[Math.floor(Math.random()*(letras.length))];
    }
    console.log(pass);
}
console.log(alfaNumerico());

//4
function validarContraseña(contraseña){
    let mayus="";
    let num="";
    let car="";
    let long="tiene los caracteres suficientes";
    if(contraseña.length<7){
        long="no tiene los caracteres suficientes"
    }
    for(i=0;i<contraseña.length;i++){
            let numeros="1234567890";
            let mayusculas="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
            let caracteres="#-$%&";
            let boolean1=false;
            let boolean2=false;
            let boolean3=false;
            if(contraseña[i]==contraseña[i].toUpperCase()&& boolean1!=false){
                mayus="tiene mayusculas";
                boolean1=true;
            }
            else{
                    mayus="no tiene mayusculas";
            }
            if(numeros.includes(contraseña[i])&&boolean2!=false){
                num="tiene numeros";
                boolean2=true;
            }
            else{
                num="no tiene numeros";
            }
            if(caracteres.includes(contraseña[i]&& boolean3!=false)){
                car="tiene caracteres especiales";
                boolean3=true;
            }
            else{
                car="no tiene caracteres especiales";
            }
    }
    console.log(long+", "+mayus+", "+num+", "+car);
}
console.log(validarContraseña("#Ruben1"));

//5
function comprimirTexto(cadena) {
  let res = "";
  let contador = 1;

  for (let i = 1; i <= cadena.length; i++) {
    if (i < cadena.length && cadena[i] == cadena[i - 1]) {
      contador++;
    } else {
      res += cadena[i - 1] + contador;
      contador = 1;
    }
  }

  return res;
}

console.log(comprimirTexto("aaabbcddd")); 

//6
function reves(cadena2) {
  let res = "";
  for (let i = 0; i < cadena2.length; i ++) {
    res+=cadena2[i].repeat(Number(cadena2[i+1]));   
  }
  
  return res;
}

console.log(reves("a4b2c1")); 

//7
let aleatorio = Math.floor(Math.random() * 100) + 1; 
let intentos = 7;

console.log("Adivina el número (1-100). Tienes 7 intentos.");

while (intentos > 0 ) {
  let numero = Number(prompt("Ingresa tu número: "));

  if (numero == aleatorio) {
    console.log("¡Ganaste! El número era " + aleatorio);
  } else if (numero< aleatorio) {
    intentos--;
    console.log(" Sube. Te quedan " + intentos + " intentos.");
  } else {
    intentos--;
    console.log(" Baja. Te quedan " + intentos + " intentos.");
  }

  if (intentos == 0) {
    console.log("Perdiste. El número era " + aleatorio);
  }
}

//8
function esLuhn(numeros){
  let luhn="";
   for (let i = numeros.length - 1; i >= 0; i--) {
      if(numeros[i].length %2 ==0){
        
      }
   }
}

//9
let cadena3="10 20 30 40 50 60";
let n=0;
let array=cadena3.split(" ");
let suma=0;
for(i=0;i<array.length;i++){
   suma +=Number(array[i]);
}
if(array.length%2==0){
   n= array.length/2;
}

let sumaCuadrados = 0;
for (let i = 0; i < array.length; i++) {
  let d = array[i] - (suma/array.length);
  sumaCuadrados += d * d; 
}

let varianza = sumaCuadrados / array.length;
let desviacion = Math.sqrt(varianza);
console.log("promedio: "+suma/array.length);
console.log ("mediana: "+array[n]);
console.log("desviacion: "+desviacion);

//10
let palabra = "javascript";
let letrasAdivinadas = ["j","v","s","c","r","i","p","t"]; 

function mostrar() {
  let salida = "";
  for (let i = 0; i < palabra.length; i++) {
    if (letrasAdivinadas.includes(palabra[i])) {
      salida += palabra[i];
    } else {
      salida += "_";
    }
  }
  console.log(salida);
}


mostrar();


let intento = "a"; 
if (!letrasAdivinadas.includes(intento)) {
  letrasAdivinadas.push(intento);
}
mostrar();