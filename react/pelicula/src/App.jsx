import React, { useState, useEffect } from 'react';
import './App.css';
import BarraBusqueda from './BarraBusqueda';
import TarjetaPeli from './TarjetaPeli';
import VentanaInfo from './VentanaInfo';

export default function App() {
    const [iniciado, setIniciado] = useState(false);
    const [resultado, setResultado] = useState([]);
    const [numPagina, setNumPagina] = useState(1);
    const [txtBusqueda, setTxtBusqueda] = useState("");
    const [anioFiltro, setAnioFiltro] = useState("");
    const [tipoFiltro, setTipoFiltro] = useState("");
    const [soloFavs, setSoloFavs] = useState(false);
    const [listaFavs, setListaFavs] = useState(JSON.parse(localStorage.getItem("pelisFav")) || []);
    const [idDetalle, setIdDetalle] = useState(null);

    useEffect(() => {
        if (txtBusqueda.length >= 3 || anioFiltro !== "") {
            fetch(`https://www.omdbapi.com/?apikey=bd04f598&s=${txtBusqueda}&page=${numPagina}&y=${anioFiltro}&type=${tipoFiltro}`)
                .then(res => res.json())
                .then(data => {
                    if (data.Search) {
                        setResultado(prev => (numPagina === 1 ? data.Search : [...prev, ...data.Search]));
                    }
                });
        }
    }, [numPagina, txtBusqueda, anioFiltro, tipoFiltro]);

    useEffect(() => {
        localStorage.setItem("pelisFav", JSON.stringify(listaFavs));
    }, [listaFavs]);

    useEffect(() => {
        const checkScroll = () => {
            if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 150) && !soloFavs) {
                setNumPagina(p => p + 1);
            }
        };
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, [soloFavs]);

    const gestionarFav = (id) => {
        setListaFavs(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    };

    if (!iniciado) {
        return (
            <div id="inicio">
                <h1>Buscador de Peliculas</h1>
                <button id="botonBuscador" onClick={() => setIniciado(true)}>Acceder al Buscador</button>
            </div>
        );
    }

    return (
        <div id="Buscador">
            <BarraBusqueda 
                onBusqueda={(val) => { setTxtBusqueda(val); setNumPagina(1); }}
                onAnio={(val) => { setAnioFiltro(val); setNumPagina(1); }}
                onTipo={(val) => { setTipoFiltro(val); setNumPagina(1); }}
                onVerFavs={() => setSoloFavs(!soloFavs)}
                modoFav={soloFavs}
            />

            <div id="contenedor">
                {resultado
                    .filter(p => !soloFavs || listaFavs.includes(p.imdbID))
                    .map(p => (
                        <TarjetaPeli 
                            key={p.imdbID} 
                            peli={p} 
                            esFavorito={listaFavs.includes(p.imdbID)} 
                            alAlternarFav={gestionarFav} 
                            alVerDetalle={setIdDetalle}
                        />
                    ))}
            </div>

            {idDetalle && <VentanaInfo id={idDetalle} alCerrar={() => setIdDetalle(null)} />}
        </div>
    );
}