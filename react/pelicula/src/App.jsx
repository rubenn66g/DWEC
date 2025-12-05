import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  var [datos,setDatos]=useState([]);
  var [pagina,setPagina]=useState(1);
  var peliculas=datos.map((peli)=><li>{peli.Title}</li>);
  useEffect(()=>{
    fetch("https://www.omdbapi.com/?s=mario&apikey=bd04f598&page="+pagina).then(response => response.json()).then(data => {
      console.log(data);
      var nuevosDatos=datos.concat(data.Search);
      setDatos(nuevosDatos);
    });
  },[pagina]);


  function cargaMas(){
    setPagina(pagina+1);
  }
  return (
    <>
      <ul>
        {peliculas}
      </ul>

      <button onClick={cargaMas}>Carga Más</button>
    </>
  )
}

export default App
