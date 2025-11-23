import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './Saludo'
function App() {

  return (
    <>
      <Saludo nombre="Rubén"/>
      <Saludo nombre="José"/>
      <Saludo nombre="Manuel"/>
    </>
  )
}

export default App
