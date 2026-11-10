interface EmployeeCardProps {
    nombre: string
    correo: string
    ciudad: string
}

function EmployeeCard ({nombre, correo, ciudad}: EmployeeCardProps){
    return(
        <article className="tarjeta">
            <h3 className="tarjeta-titulo">{nombre}</h3>
            <p className="tarjeta-dato">✉️ {correo}</p>
            <p className="tarjeta-dato">📍 {ciudad}</p>
        </article>
    )
}

export default EmployeeCard