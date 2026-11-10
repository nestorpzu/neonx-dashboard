import '../styles/sidebar.css'
import type { Seccion } from '../types'

const PESTANAS: Seccion[] = ['Personal', 'Inventario', 'Incidencias']

interface SidebarProps {
    seccion: Seccion
    onSeleccionar : (seccion: Seccion) => void
}

const ICONOS: Record<Seccion, string> = {
    Personal: '👥',
    Inventario: '📦',
    Incidencias: '🛠️',
}

function Sidebar ({ seccion, onSeleccionar }: SidebarProps) {
    return (
        <aside className="sidebar">
            <h2 className="sidebar-titulo">Secciones</h2>

            <nav className="sidebar-nav" aria-label="Secciones de la aplicación">
                {PESTANAS.map((pestana) =>(
                    <button 
                    key={pestana}
                    type="button"
                    // los === compara el valor y compara el tipo de dato, es mejor que ==
                    className= {pestana === seccion ? 'sidebar-btn activo' : 'sidebar-btn'}
                    // aria-current: Dice al lector de pantalla cuál de los tres botones es el activo.
                    aria-current={pestana === seccion ? 'page' : undefined}                   
                    onClick= {() => onSeleccionar(pestana)}
                    >
                        <span className="sidebar-btn-icono" aria-hidden="true">{ICONOS[pestana]}</span>
                        
                        <span>{pestana}</span>

                    </button>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar;