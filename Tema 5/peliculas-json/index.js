var contadorPaginas = 2;
let cont;
let input;
let enviar;
let input2;
let enviar2;
window.onload = () => {
    cont = document.getElementById("contenedor");
    input = document.getElementById("input");
    enviar = document.getElementById("enviar");

    input2 = document.getElementById("input2");
    enviar2 = document.getElementById("enviar2");

    enviar.addEventListener("click", () => {
        fetchPeli();
    });

    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            fetchPeli();
        }
    });

    document.getElementById("Cargar").addEventListener("click", () => {
        fetch("http://www.omdbapi.com/?s=" + input.value + "&y=" + input2.value + "&apikey=bd04f598&page=" + contadorPaginas)
            .then(response => response.json())
            .then(data => {
                if (data.Search) {         
                    maquetarPelis(cont, data.Search);
                    contadorPaginas++;
                }
            });
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
};

function maquetarPelis(contenedor, listaPelis) {
    for (let pelicula of listaPelis) {
        let miDiv = document.createElement("div");
        miDiv.addEventListener("click", () => lanzaPeticionDetalle(pelicula.imdbID));

        let miImg = document.createElement("img");
        let miTitle = document.createElement("h2");

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
    console.log(id);
}
