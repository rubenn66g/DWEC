import React from 'react';
import estrella1 from './img/estrella.png';
import estrella2 from './img/estrella2.webp'
export default function TarjetaPeli({ peli, esFavorito, alAlternarFav, alVerDetalle }) {
    return (
        <div className="peli-caja">
            <img 
                className="imagenPeli" 
                src={peli.Poster} 
                alt={peli.Title} 
                onClick={() => alVerDetalle(peli.imdbID)}
                onError={(e) => e.target.src = "https://png.pngtree.com/thumb_back/fw800/background/20250902/pngtree-3d-small-red-error-mark-image_18846840.webp"}
            />
            <h2>{peli.Title}</h2>
            <img 
                className="favorito"
                src={esFavorito ? {estrella1} : {estrella2}} 
                onClick={() => alAlternarFav(peli.imdbID)}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
}