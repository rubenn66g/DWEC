//1
let sum = (num1, num2) => num1+num2;
console.log(sum);

//2
let stringLength = str => console.log(`the length of "${str}" is:`, str.length);

//3
srt.length=length;
let stringLength1= str => console.log(`the length of "${str}" is:`, length);

//4
let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];

let showalert = name => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);

//5
let nombre = (edad,nombre)=>`hola yo soy "${nombre}" y mi edad es "${edad}"`;

//6
contador=0;
let sumaarray= intengers=>{
    for(i=0;i<intengers.length;i++){
        contador+=intengers[i];
    }

    console.log(contador)
};

//7
let eye="eye";

let fire=(eye)=>{return `bulls-"${eye}"`};

//8
const fibonacci = n => {
  if (n <3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

//factorial sin recursividad

/*function fact(n){
  for(let i=1;i<n;i++)
  {
    n*=i;
  }
  return n;
}
console.log(fact(4));
*/