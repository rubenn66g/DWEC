/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */

function isodd(x){
    let valor=true;
    if(x%2==0){
        valor=false;
    }
    return valor;
}
console.log(isodd(3));

/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

function inRange(x,min,max){
    let esta=false;
    if(x<max && x>min){
        esta=true
    }
    return esta;
}

console.log(inRange(2,-4,10));

/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(number){
    let numeroGrande= Math.max(...number);
    return numeroGrande;
}

console.log(getBiggestNumber([3,8,2,1,10]));

/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */

function getPercentage(number,percentage){
    let resultado=(number*0.01)*percentage;
    return resultado;
}
console.log(getPercentage(200,10));

/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

function getRandomColorSequence(colors,length){
    let coloresAleat=[];
    for(i=0;i<length;i++){
        coloresAleat.push(colors[Math.floor(Math.random()*(colors.length-0)+0)]);
    }
    return coloresAleat;
}
console.log(getRandomColorSequence(["red","blue","green"],4));

/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

function getRockPaperScissor(){
    let eleccion=["piedra","papel","tijeras"];
    let resultado =eleccion[Math.floor(Math.random()*eleccion.length-0)+0];
    return resultado;
}

console.log(getRockPaperScissor());

/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

function getRockPaperScissorRandomSequence(length){
    let eleccion=["piedra","papel","tijeras"];
    let array=[];
    for(i=0;i<length;i++){
        array.push(eleccion[Math.floor(Math.random()*(eleccion.length-0)+0)]);
    }
    return array;
}
console.log(getRockPaperScissorRandomSequence(4));
/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */
function filterNumbersGreaterThan(numbers,filters){
    let menores=[];
    for(i=0;i<numbers.length;i++){
        if(numbers[i]<filters)
            menores.push(numbers[i]);
    }
    return menores;
}
console.log(filterNumbersGreaterThan([3,8,12,1,7,4],7));

/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

function getFactorial(x){
    let fact=1;
    for(i=1;i<=x;i++){
       fact *= i;
    }
    return fact
}

console.log(getFactorial(4));

/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */

function areArraysEqual(a, b) 
{
    let iguales=true;
    if (a.length != b.length){
        iguales=false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]){
            let iguales= false;
        }
    }
     return iguales
}

console.log(areArraysEqual([1,4],[1,4]));

/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

function toHackerSpeak(text){
    let hack=text;
    for(i=0;i<text.length;i++){
        if(text[i]=="a"){
            hack=hack.replace("a",4);
        }
        if(text[i]=="e"){
            hack=hack.replace("e",3);
        }
        if(text[i]=="i"){
            hack=hack.replace("i",1);
        }
        if(text[i]=="o"){
            hack=hack.replace("o",0);
        }
        if(text[i]=="s"){
           hack= hack.replace("s",5);
        }
    }
    return hack;
}

console.log(toHackerSpeak("im a hacker now"));

/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */

function getFileExtension(file){
    let final=file.indexOf(".");
    let extension = file.substring(final + 1);
    return extension;
}

console.log(getFileExtension("imagen.jpg"));

/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {Array[]} arr - Array 2D a "aplanar" 
 * @returns {Array} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 4, 3, 10, 2, 5]
 */

function flatArray(arr) {
  let plano = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      plano.push(arr[i][j]);
    }
  }
  return plano;
}

console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]]));

/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

function removeDuplicates(arr){
    let noDuplicados=[];
    for(i=0;i<arr.length;i++){

    }
}

//relacion 2
//20
let a=[1,2,3,4,5];
let ac=0;
console.log(a.filter((v)=> v%2==0).map((v)=>v*v).reduce((ac,v)=>(ac+v),0));

//15
let ar=[1,3,4,5,6,3,5,3];
let apariciones=0;
ar.forEach((valor)=> {if (valor==3) apariciones++});
