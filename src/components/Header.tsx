import '../styles/header.css'
import { useEffect, useState } from 'react';
import logo from '../assets/neon.svg'


function Header(){
    // Inicializador perezoso: la función solo se ejecuta en el primer render.
    const [hora, setHora] = useState(() => new Date().toLocaleTimeString('es-ES')); 

    useEffect(() => {
        // Creamos un interval para actualizar la hora cada segundo.
        const intervalo = setInterval(() => {
        setHora(new Date().toLocaleTimeString('es-ES'));
        }, 1000); 

        // Limpieza: se ejecuta al desmontar el componente.
        // Sin esto, el interval seguiría vivo para siempre.
        return () => clearInterval(intervalo) 
    }, [])  // [] = ejecútalo solo una vez, al montar
    
    return (
        <header className="header">
            <div className="header-marca">
                <img className="header-logo" src = {logo} alt = "Logo de NeonX" />
                <div>
                    <h1 className="header-nombre">NeonX</h1>
                </div>
            </div>
            <div className="header-reloj">
                <span className="header-etiqueta">Hora del sistema</span>
                <time className="header-tiempo">{hora}</time>
            </div>
        </header>
    )
}

export default Header;