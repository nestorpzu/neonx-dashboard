import { useState } from 'react'
import { getIncidencias } from '../services/api'
import type { Incident } from '../types'
import IncidentCard from '../components/IncidentCard'
import Loading from '../components/Loading'
import ErrorBanner from '../components/ErrorBanner'

function Incidencias () {
    const [incidencias, setIncidencias] = useState<Incident[]>([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState('')

    async function cargarIncidencias() {
        setCargando(true)
        setError('')
        try{
            setIncidencias(await getIncidencias())
        } catch (e) {
            setError (e instanceof Error ? e.message : 'Error desconocido')
        } finally {
            setCargando(false)
        }
    }

    return (
        <section>
            <h2>Incidencias</h2>
            <button className="button" onClick={cargarIncidencias}>
                Cargar datos del servidor
            </button>
            
            {cargando && <Loading/>}
            {error && <ErrorBanner mensaje={error} onReintentar={cargarIncidencias}/>}

            {!cargando && !error && incidencias.length === 0 && (
                <p className="aviso">Pulsa "Cargar datos del servidor" para empezar</p>
            )}

            <div className="lista-incidencias">
                {incidencias.map((i) =>
                    <IncidentCard
                        key={i.id}
                        titulo={i.title}
                        completada = {i.completed}
                        />
                )}
            </div>

        </section>
    )
}

export default Incidencias