import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaUsuarios from './ListaUsuarios';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaUsuarios></ListaUsuarios>
    </>
  )
}

export default App
