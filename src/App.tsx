import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Personal from './views/Personal'
import Inventario from './views/Inventario'
import Incidencias from './views/Incidencias'
import type { Seccion } from './types'

function App() {

  const [seccion, setSeccion] = useState<Seccion> ('Personal')

  return (
    <div className="app">
      <Header/>
      <div className="app-cuerpo">
        <Sidebar seccion= {seccion} onSeleccionar={setSeccion}/>
        <main id="panel_central" className = "panel">
          {seccion === 'Personal' && <Personal />}
          {seccion === 'Inventario' && <Inventario />}
          {seccion === 'Incidencias' && <Incidencias />}
        </main> 
      </div>
    </div>
  )
}

export default App
