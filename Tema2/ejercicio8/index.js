function error(err) {
  console.warn(`Error (${err.code}): ${err.message}`);
}

var puntos = [];
var polyline;
var marker;
var map;
var circle;
var centro;
var radio = 20;

function obtengoPosicion(posicion) {
  const punto = [posicion.coords.latitude, posicion.coords.longitude];
  puntos.push(punto);

  if (puntos.length === 1) {
    centro = punto;
    map = L.map('map').setView(punto, 19);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    marker = L.marker(punto).addTo(map);

    circle = L.circle(centro, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: radio
    }).addTo(map);

    polyline = L.polyline(puntos, { color: 'blue' }).addTo(map);

  } else {
    map.setView(punto, 19);
    marker.setLatLng(punto);
    polyline.setLatLngs(puntos);

    var distancia = map.distance(centro, punto);

    if (distancia > radio) {
      console.log("¡Estás fuera del área permitida!");
    } else {
        console.log("estas dentro del circulo");
    }
  }
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(obtengoPosicion, error);
} else {
  console.log("No se soporta la geolocalización en este navegador.");
}

//7
/*function calcularDistancia(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const rad = Math.PI / 180; 
  const dLat = (lat2 - lat1) * rad;
  const dLon = (lon2 - lon1) * rad;
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(lat1 * rad) * Math.cos(lat2 * rad) *
    Math.pow(Math.sin(dLon / 2), 2);
  const distancia = 2 * R * Math.asin(Math.sqrt(a));
  return distancia;
}

console.log(calcularDistancia(37.196002, -3.621191,37.192832, -3.616674));
*/
