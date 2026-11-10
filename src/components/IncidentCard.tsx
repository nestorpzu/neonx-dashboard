interface IncidentCardProps{
    titulo: string
    completada: boolean
}

function IncidentCard({titulo, completada}: IncidentCardProps){
    return(
        <article className={completada ? 'tarjeta incidencia resuelta' : 'tarjeta incidencia pendiente'}>
            <span className="incidencia-icono" aria-hidden="true">{completada ? '✅' : '⏳'}</span>
            <p className="incidencia-titulo">{titulo}</p>
            <span className="incidencia-estado">{completada ? 'Resuelta' : 'Pendiente'}</span>
        </article>
    )
}

export default IncidentCard