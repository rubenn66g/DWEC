var contadorPaginas = 2;
let cont;
let input;
let enviar;
let input2;
let enviar2;
let peticionEnCurso;
window.onload = () => {
    peticionEnCurso=false;
    cont = document.getElementById("contenedor");
    input = document.getElementById("input");
    enviar = document.getElementById("enviar");

    input2 = document.getElementById("input2");
    enviar2 = document.getElementById("enviar2");

    enviar.addEventListener("click", () => {
        fetchPeli();
    });

    input.addEventListener("keyup",()=>{
        if(input.value.length>=3){
            fetchPeli();
        }
    })

    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            fetchPeli();
        }
    });

    input2.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            fetch("http://www.omdbapi.com/?s=" + input.value + "&y=" + input2.value + "&apikey=bd04f598&page=1")
                .then(response => response.json())
                .then(data => {
                    cont.innerHTML = "";
                    if (data.Search) {   
                        maquetarPelis(cont, data.Search);
                    }
                });
        }
    });

    enviar2.addEventListener("click", () => {
        fetchPeliAno();
    });

    let busqueda=document.getElementById("Buscador");
    let botonBuscador=document.getElementById("botonBuscador");
    let inicio=document.getElementById("inicio");
    botonBuscador.addEventListener("click",()=>{
        busqueda.style.visibility="visible";
        inicio.style.visibility="hidden";
        
    })
};

function maquetarPelis(contenedor, listaPelis) {
    for (let pelicula of listaPelis) {
        let miDiv = document.createElement("div");
        miDiv.addEventListener("click", () => lanzaPeticionDetalle(pelicula.imdbID));

        let miImg = document.createElement("img");
        miImg.className="imagenPeli";
        let miTitle = document.createElement("h2");
        miImg.onerror=(e)=>{e.target.src="https://png.pngtree.com/thumb_back/fw800/background/20250902/pngtree-3d-small-red-error-mark-image_18846840.webp"}
        miImg.src = pelicula.Poster;
        miTitle.textContent = pelicula.Title;

        miDiv.appendChild(miImg);
        miDiv.appendChild(miTitle);
        contenedor.appendChild(miDiv);
    }
}

function fetchPeli() {
    cont.innerHTML = "";
    fetch("http://www.omdbapi.com/?s=" + input.value + "&apikey=bd04f598&page=1")
        .then(response => response.json())
        .then(data => {
            if (data.Search) { 
                maquetarPelis(cont, data.Search);
            }
        });
}
function fetchPeliAno(){
    fetch("http://www.omdbapi.com/?s=" + input.value + "&y=" + input2.value + "&apikey=bd04f598&page=1")
            .then(response => response.json())
            .then(data => {
                cont.innerHTML = "";
                if (data.Search) {    
                    maquetarPelis(cont, data.Search);
                }
    })
}

function lanzaPeticionDetalle(id) {
     fetch("http://www.omdbapi.com/?apikey=bd04f598&i=" + id + "&plot=full")
        .then(response => response.json())
        .then(data => {
            maquetar1Peli(data)
        })
}

function maquetar1Peli(pelicula){
    let contenedor=document.getElementById("peli");
    contenedor.innerHTML="";
    contenedor.className = "mostrar";
    let padre = document.createElement("div");
    padre.className="padre";
    let div = document.createElement("div");
    div.className="divPeli";
    let Img = document.createElement("img");
    Img.className="imgPeli";
    Img.onerror=(e)=>{e.target.src="https://png.pngtree.com/thumb_back/fw800/background/20250902/pngtree-3d-small-red-error-mark-image_18846840.webp"}
    let Title = document.createElement("h2");
    Title.className="titulo";
    Img.src = pelicula.Poster;
    Title.textContent = pelicula.Title;
    let autor= document.createElement("p");
    autor.className="autor";
    autor.textContent="Autor: "+pelicula.Director;
    let year= document.createElement("p");
    year.className="año";
    year.textContent="Año: "+pelicula.Year;
    let plot=document.createElement("p");
    plot.className="plot";
    plot.textContent=pelicula.Plot;
    let actores=document.createElement("p");
    actores.className="actores";
    actores.textContent="Actores: "+pelicula.Actors;
    let calificacion = document.createElement("p");
    calificacion.className = "calificacion";
    calificacion.textContent = "Calificación IMDb: " + pelicula.imdbRating+"/10";
    let botonCerrar=document.createElement("button");
    botonCerrar.textContent="X";
    botonCerrar.className="Cerrar";
    div.appendChild(Img);
    div.appendChild(Title);
    div.appendChild(autor);
    div.appendChild(year);
    div.appendChild(calificacion);
    div.appendChild(actores);
    div.appendChild(plot);
    div.appendChild(botonCerrar);
    padre.appendChild(div);
    contenedor.appendChild(padre);
    botonCerrar.addEventListener("click",()=>{
        contenedor.removeChild(padre);
    })
}

window.onscroll=()=>{
    let cercaFinal= window.innerHeight +scrollY >= document.body.offsetHeight -200;

    if(cercaFinal){
        if(!peticionEnCurso){
            peticionEnCurso=true;
            fetch("http://www.omdbapi.com/?s=" + input.value + "&y=" + input2.value + "&apikey=bd04f598&page=" + contadorPaginas)
                .then(response => response.json())
                .then(data => {
                    if (data.Search) {         
                        maquetarPelis(cont, data.Search);
                        contadorPaginas++;
                        peticionEnCurso=false;
                    }
            });
        }
    }
}