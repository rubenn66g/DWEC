//1
let a=new Date();
console.log(a);

//2
let nacimiento=new Date(2006,8,10);
console.log(nacimiento);

//3
console.log(a.getFullYear());
console.log(a.getMonth());
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getHours());
console.log(a.getMinutes());
console.log(a.getSeconds());

//4
console.log(a.toDateString());
console.log(a.toTimeString());

//5
function sumarDias(fecha,dias){
    let fechaActual= new Date(fecha);
    fechaActual.getTime();
    let suma=dias*24*60*60*1000;
    let nueva=new Date(fechaActual+suma);
    return nueva;
}
console.log(sumarDias(a,3));

//6
let b=new Date();
let finalAño=new Date(2025,11,31);

console.log(Math.floor(((finalAño-b)/(1000 * 60 * 60 * 24))));

//7
if(b>finalAño){
    console.log("el date b es mayor que el otro");
}
else{
    console.log("el date b es menor que el otro");
}

//8
function devolverDia(año,mes){
    let fecha1=new Date(año,mes,1);
    return fecha1.getDay()
}
console.log(devolverDia(2025,8));

//9
let fechaActual=new Date();

console.log(fechaActual.toISOString());

//10
console.log(fechaActual);
console.log(fechaActual.toUTCString());

//11
function fecha(Date){
    return Date;
}
console.log(fechaActual);

//12
console.log(new Intl.DateTimeFormat("en-US").format(fechaActual));
console.log(new Intl.DateTimeFormat("es-ES").format(fechaActual));
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(fechaActual));

//13
let c=new Date();
let añoNuevo=new Date(2026,0,1);
let tiempo=añoNuevo-c;
let dias = Math.floor(tiempo/ (1000 * 60 * 60 * 24));
let horas = Math.floor((tiempo/ (1000 * 60 * 60)) % 24);
let minutos = Math.floor((tiempo / (1000 * 60)) % 60);
let segundos = Math.floor((tiempo / 1000) % 60);

console.log("Dias: "+dias+" Horas: "+horas+" Minutos: "+minutos+" Segundos:"+segundos);
//14
let nacimiento1 = new Date("2006-08-10");
let hoy = new Date();

let años = hoy.getFullYear() - nacimiento.getFullYear();
let meses = hoy.getMonth() - nacimiento.getMonth();
let dias1 = hoy.getDate() - nacimiento.getDate();

console.log("dias "+dias1+" meses "+meses+" años"+años);

//15
let año = 2025;
let mes = 9; 
let dias2 = 30;

let fechas = [];

for (let i = 0; i <= dias2; i++) {
  fechas[i]=(año + "-" + mes + "-" + i);
}

console.log(fechas);

//16
//devuelve la fecha del siguiente viernes 13
function encuentaViernes13(){
    let resultado = new Date();
    let encontrado=false;
    while(!encontrado){
        if(resultado.getDay()==5 && resultado.getDate()==13)
            encontrado=true;
        else
            resultado.setDate(resultado.getDate()+1);
    }
    return resultado;
}
console.log(encuentaViernes13());






