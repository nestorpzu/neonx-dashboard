import { useState } from 'react'
import { getPersonal } from '../services/api'
import type { Employee } from '../types'
import EmployeeCard from '../components/EmployeeCard'
import Loading from '../components/Loading'
import ErrorBanner from '../components/ErrorBanner'
import lupa from '../assets/lupa.png'

function Personal () {
    const [empleados, setEmpleados] = useState<Employee[]>([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState('')
    const [busqueda, setBusqueda] = useState('')

    async function cargarPersonal() {
        setCargando(true)
        setError('')
        try{
            setEmpleados(await getPersonal())
        } catch (e) {
            setError (e instanceof Error ? e.message : 'Error desconocido')
        } finally {
            setCargando(false)
        }
    }

    const texto = busqueda.trim().toLowerCase()

    const filtrados = empleados.filter ((emp) =>
        emp.name.toLowerCase().includes(texto)
    )

    return (
        <section>
            <h2>Personal</h2>
            <div className="barra-acciones">
                <button className="button" onClick={cargarPersonal}>Cargar datos del servidor</button>
                <div className="campo-busqueda">
                    <img className="campo-busqueda-icono" src={lupa} alt="" aria-hidden="true" />
                    <input
                    className="buscador"
                    aria-label="Buscar empleados por nombre"
                    type="search"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Buscar por nombre..."
                    />
                </div>
            </div>
            {/* && : "Si lo de la izquierda es verdad, muestra lo de la derecha. Si lo de la izquierda es falso, no muestres nada" */}
            {cargando && <Loading/>}
            {error && <ErrorBanner mensaje={error} onReintentar={cargarPersonal}/>}

            {/* Antes de cargar */}
            {!cargando && !error && empleados.length === 0 && (
                <p className="aviso">Pulsa "Cargar datos del servidor" para empezar</p>
            )}

            {!cargando && empleados.length > 0 && (
                <p className="aviso">
                    {filtrados.length > 0 
                        ? `Mostrando ${filtrados.length} de ${empleados.length} empleados` 
                        : `Sin resultados para "${texto}"`}
                </p>
            )}

            <div className="grid-tarjetas">
                {filtrados.map((emp) =>
                    <EmployeeCard
                        key={emp.id}
                        nombre={emp.name}
                        correo = {emp.email}
                        ciudad= {emp.city}
                        />
                )}
            </div>

        </section>
    )
}

export default Personal