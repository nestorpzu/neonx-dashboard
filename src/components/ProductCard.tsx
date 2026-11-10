interface ProductCardProps{
    titulo: string
    precio: number
    categoria: string
    imagen: string
}

function ProductCard ({titulo, precio, categoria, imagen}: ProductCardProps) {
    return (
        <article className="tarjeta">
            {precio > 50 && (
                <span className="etiqueta-alto-valor">Activo de Alto Valor</span>
            )}
            <img className="tarjeta-imagen" src={imagen} alt={titulo}/>
            <h3 className="tarjeta-titulo">{titulo}</h3>
            <p className="tarjeta-dato">{categoria}</p>
            <strong className="tarjeta-precio">${precio.toFixed(2)}</strong>
        </article>
    )
}

export default ProductCard