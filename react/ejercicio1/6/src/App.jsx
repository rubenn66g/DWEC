import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Listado from './Listado'
function App() {
  let array=['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
  return (
    <>
    <ul>
      <Listado item={array}/>
    </ul>
    </>
  )
}

export default App
