let restaurantes={
        "datos": [
            {
                "nombre": "Platos",
                "direccion": "C/colon",
                "url": "www.platos.com",
                "imagenes":["https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudGVzfGVufDB8fDB8fHww",
                    "https://sevillasecreta.co/wp-content/uploads/2022/02/Restaurantes-mas-bonitos-Sevilla.jpg"
                ]
            },
            {
               "nombre": "Neptuno",
                "direccion": "C/brocal",
                "url": "www.neptuno.com",
                "imagenes":["https://media.revistaad.es/photos/61e820bb5088abbdd8ac8b47/16:9/w_1280,c_limit/Terracotta%205200px%20Entrada%20(3).jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lk3hvfDQB2XlHItuJRx8ZyIAN5RhptHQbw&s"
                ] 
            },
            {
                "nombre": "Manueles",
                "direccion": "C/montes",
                "url": "www.manueles.com",
                "imagenes":["https://phantom-elmundo.unidadeditorial.es/1ba05970c724713abca7617061a3a743/resize/414/f/jpg/assets/multimedia/imagenes/2021/07/27/16273807770497.jpg",
                    "https://ideade.es/wp-content/uploads/2022/12/diseno-de-restaurantes-minami-5.jpg"
                ]
            }
        ]
}

let cont;
var datos=[];
window.onload=()=>{
   cont= document.getElementById("cont");
    datos= JSON.parse(localStorage.getItem("datos"));
    if(!datos){
        localStorage.setItem("datos",JSON.stringify([]));
        datos=[];
    }
   ejercicio1(cont,restaurantes);
   ejercicio4("montes","c/local","www.montes.com",1);
   ejercicio6();
}

function ejercicio1(cont,restaurantes){
    for( restaurante of restaurantes.datos){
        let miDiv = document.createElement("div");

        let miTable = document.createElement("table");
        let miFila = document.createElement("tr");
        let p1= document.createElement("p");
        p1.textContent=restaurante.nombre;
        let p2= document.createElement("p");
        p2.textContent=restaurante.direccion;
        let p3= document.createElement("p");
        p3.textContent=restaurante.url;
        let miEnlace=document.createElement("a");
        miEnlace.innerHTML="imagenes";
        miEnlace.href="#";
        let miImg=document.createElement("img");

        miEnlace.addEventListener("click",(e)=>{
            let indice=e.target;
            let imagen=restaurantes.datos[0].imagenes;
            for(i=0;i<imagen.length;i++){
                    miImg.src=imagen[i];
                    cont.appendChild(miImg);
            }

        })
        

        miFila.appendChild(p1);
        miFila.appendChild(p2);
        miFila.appendChild(p3);
        miFila.appendChild(miEnlace);
        miTable.appendChild(miFila);
        miDiv.appendChild(miTable);
        cont.appendChild(miDiv);
    }
}

function ejercicio4(nombre,direccion,web,id){
    let idTabla=document.getElementById(id);
    let fila=idTabla.createElement("tr");
    fila.innerHTML=nombre;
    let fila2=idTabla.createElement("tr");
    fila2=direccion;
    let fila3=idTabla.createElement("tr");
    fila3=web;
    datos.push(nombre,direccion,web);
    localStorage.setItem("datos",JSON.stringify(datos));
}

function ejercicio5(posicion,id){
    let id=document.getElementById(id);
    datos.splice(datos.indexOf(posicion),1);
    localStorage.setItem("pelisFav",JSON.stringify(pelisFav));
}

function ejercicio6(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => { 
            for(array of data)
                console.log(array.name);
    });
}

