import React from 'react';

export default function BarraBusqueda({ onBusqueda, onAnio, onTipo, onVerFavs, modoFav }) {
    return (
        <header id="headerArea">
            <div id="logoContainer">
                <img id="logo" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-movie-cinema-entertainment-logo-with-neon-sign-effect-vector-illustration-png-image_3669645.jpg" alt="logo" />
            </div>
            <div id="inputsContainer">
                <input type="text" id="input" placeholder="Título..." onChange={(e) => onBusqueda(e.target.value)} />
                <input type="text" id="input2" placeholder="Año..." onChange={(e) => onAnio(e.target.value)} />
                <select id="tipo" onChange={(e) => onTipo(e.target.value)}>
                    <option value="">Cualquier tipo</option>
                    <option value="movie">Película</option>
                    <option value="series">Serie</option>
                </select>
                <button id="favoritos" onClick={onVerFavs}>
                    {modoFav ? "Volver" : "Mis Favoritos"}
                </button>
            </div>
        </header>
    );
}