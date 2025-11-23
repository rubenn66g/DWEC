import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import descarga from "./descarga.jpeg";
import mono from "./mono.png";
import Perfil from './Perfil'
function App() {

  return (
    <>
      <Perfil nombre="Rubén" edad={19} isOnline={true} imagenUrl={descarga}/>
      <Perfil nombre="Marta" edad={29} isOnline={false} imagenUrl={mono}/>
      
    </>
  )
}

export default App
