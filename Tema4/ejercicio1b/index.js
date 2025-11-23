window.onload=()=>{
    jugar();
    juego2();
    juego3();
    juego4();
    juego5();

    juego7();

}

function colorAleat(){
    let colores=["Rojo","Azul","Amarillo","Verde"];
    let adivinar=colores[Math.floor(Math.random()*colores.length)];
    let adivina=document.getElementById("adivinar");
    adivina.innerHTML="Adivina el color: "+adivinar;

    return adivinar;
}
function jugar(){
    let juego1=document.getElementById("Juego1");
    let resultado=document.getElementById("Resultado");
    let color;
    let cont=0;
    let adivinar=colorAleat();
        juego1.addEventListener("click",(e)=>{
            color=e.target.id;
            if(color==adivinar){
                resultado.innerHTML="Has acertado el color";
                cont++;
                adivinar=colorAleat();
            }
            else{
                resultado.innerHTML="has fallado el color el numero de aciertos ha sido: "+cont;
                cont=0;
            }
        });
}

function juego2(){
    let boton=document.getElementById("boton");

    boton.addEventListener("mouseover",(e)=>{
        boton.style.backgroundColor="blue";
    })

    boton.addEventListener("mouseout",(e)=>{
        boton.style.backgroundColor="green";
    })

    boton.addEventListener("click",(e)=>{
       boton.innerHTML="me pulsaste";
    })
}

function letraAleat(){
    let letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let aleat=letra[Math.floor(Math.random()*letra.length)]
    tecla.innerHTML="presiona la tecla: "+aleat;
    return aleat;

}
function juego3(){
    let tecla=document.getElementById("tecla");
    let resul=document.getElementById("resul");
    let aleat=letraAleat();
    let cont=0;
    document.addEventListener("keydown",(e)=>{
        if(e.key==aleat){
            tecla.style.color="green";
            aleat=letraAleat();
            cont++;
             resul.innerHTML="has acetado";

        }
        else{
            tecla.style.color="red";
            resul.innerHTML="has perdido pero has acertado: "+cont;
            cont=0;

        }
    })
}
function juego4(){
      let circulo = document.getElementById("circulo");
      let reflex = document.getElementById("reflex");
      let esVerde = false;

      setInterval(() => {
        if (esVerde) {
          circulo.style.backgroundColor = "gray";
          esVerde = false;
        } else {
          circulo.style.backgroundColor = "green";
          esVerde = true;
        }
      }, 2000);

      circulo.addEventListener("click", () => {
        if (esVerde) {
          reflex.innerHTML = "Buenos reflejos";
        } else {
          reflex.innerHTML = "Malos reflejos";
        }
      });
}
function aleatorioNum(){
    let teclado=document.getElementById("teclado");
    let numerosarray=[1,2,3,4,5,6,7,8,9];
    let aleatorio=numerosarray[Math.floor(Math.random()*numerosarray.length)];
    teclado.innerHTML="presiona el numero "+aleatorio;
    return aleatorio;
}
function juego5(){
    let numeros=document.getElementById("numeros");
    let botones=document.getElementById("botones");
    let aleatorio=aleatorioNum();
    botones.addEventListener("click",(e)=>{
        let boton=e.target;
        if(Number(boton.textContent) == aleatorio){
            numeros.innerHTML="has acertado";
            aleatorio=aleatorioNum();
        }
        else{
            numeros.innerHTML="has perdido";
        }
    })
}
function animaSecuencia(arrayMovimientos){
    var colores=document.getElementsByClassName("pulsador");
    pos=0;
    let div;

    arrayMovimiento.forEach((mov,i) => {
        setTimeout(()=>{

            if(div) div.style.opacity ="50%";
            div= colores[mov];
            div.style.opacity=100;
        },i*1000);
    });

    setTimeout(()=>{
        div.style.opacity="50%", 1000*colores.length;
    })
}
function juego6(){

}

function juego7(){
 let presionar=document.getElementById("presionar");
 let file=document.getElementById("file");

 presionar.addEventListener("click",(e)=>{
    let barra=Number(file.value);

    barra+=10;

    file.value = barra;
 })
}

