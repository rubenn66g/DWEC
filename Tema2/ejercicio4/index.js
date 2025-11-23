//1
let cadena="javascript";
console.log(cadena.length);

//2
let cad="Hola Mundo";
console.log(cad.charAt(0));
console.log(cad.charAt(9));

//3
let cadena1="Programar es divertido";
console.log(cadena1.toUpperCase());
console.log(cadena1.toLowerCase());

//4
let hola="hola";
let mundo="mundo";
console.log(hola+" "+mundo);
console.log(hola.concat(mundo));

//5
console.log(cad.indexOf("o"));
console.log(cad.lastIndexOf("o"));

//6
let cad1="Javascript es genial";
console.log(cad1.substring(0,10));
console.log(cad1.slice(14));

//7
let cadena2="El perro corre rapido";
console.log(cadena2.replace("perro","gato"));

//8
let cad2="Frontend Developer";

console.log(cad2.includes("end"));
console.log(cad2.startsWith("Front"));
console.log(cad2.endsWith("per"));

//9
let string=("rojo,verde,azul,amarillo");
let array=string.split(",");
console.log(array);

//10
console.log(hola.repeat(5));

//11
let texto = "   Hola mundo   ";
let resultado = texto.trim();

console.log(resultado); 

//12
let numero = "7";
let resultado1 = numero.padStart(3, "0");

console.log(resultado1); 

//13
function contarVocales(cadena) {
  let vocales = "aeiou";
  let contador = 0;
  let texto = cadena.toLowerCase();
  for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
      contador++;
    }
  }
  return contador;
}
console.log(contarVocales("JavaScript es genial")); 


//14
function esPalindromo(palabra) {
  palabra = palabra.toLowerCase(); 
  let invertida = "";

  for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
  }
  return invertida ==palabra;
}

console.log(esPalindromo("radar")); 
console.log(esPalindromo("mundo"));  

//15
let texto1 = "JavaScript";
let invertido = "";

for (let i = texto1.length - 1; i >= 0; i--) {
  invertido += texto1[i];
}

console.log(invertido); 

//16
let cadena3=cad.split(" ");
let resultado2="";
for(i=0;i<cadena3.length;i++){
  cadena3[i][0] = cadena3[i][0].toUpperCase();
  resultado2+=cadena3[i]+" ";
}
console.log(resultado2);

//17
let tarjeta = "1234567812345678";
let oculto = tarjeta.slice(-4).padStart(tarjeta.length, "*");

console.log(oculto); 

//18
const frase = "El lenguaje JavaScript es muy poderoso";
const totalPalabras = frase.split(" ").length;

console.log(totalPalabras); 



