import React, { useEffect, useState } from 'react';

export default function VentanaInfo({ id, alCerrar }) {
    const [detalle, setDetalle] = useState(null);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=bd04f598&i=${id}&plot=full`)
            .then(res => res.json())
            .then(data => setDetalle(data));
    }, [id]);

    if (!detalle) return null;

    return (
        <div id="peli" className="mostrar">
            <div className="padre">
                <div className="divPeli">
                    <img className="imgPeli" src={detalle.Poster} alt={detalle.Title} />
                    <h2 className="titulo">{detalle.Title}</h2>
                    <p className="autor">Director: {detalle.Director}</p>
                    <p className="año">Año: {detalle.Year}</p>
                    <p className="calificacion">IMDb: {detalle.imdbRating}/10</p>
                    <p className="actores">Reparto: {detalle.Actors}</p>
                    <p className="plot">{detalle.Plot}</p>
                    <button className="Cerrar" onClick={alCerrar}>X</button>
                </div>
            </div>
        </div>
    );
}