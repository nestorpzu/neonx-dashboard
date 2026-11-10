import { useState } from 'react'
import { getInventario} from '../services/api'
import type { Product } from '../types'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'
import ErrorBanner from '../components/ErrorBanner'

function Inventario () {
    const [productos, setProductos] = useState<Product[]>([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState('')

    async function cargarInventario() {
        setCargando(true)
        setError('')
        try{
            setProductos(await getInventario())
        } catch (e) {
            setError (e instanceof Error ? e.message : 'Error desconocido')
        } finally {
            setCargando(false)
        }
    }

    return (
        <section>
            <h2>Inventario</h2>
            <button className="button" onClick={cargarInventario}>
                Cargar datos del servidor
            </button>
            {cargando && <Loading/>}
            {error && <ErrorBanner mensaje={error} onReintentar={cargarInventario}/>}

            {!cargando && !error && productos.length === 0 && (
                <p className="aviso">Pulsa "Cargar datos del servidor" para empezar</p>
            )}
        
            <div className="grid-tarjetas">
                {productos.map((p) =>
                    <ProductCard
                        key={p.id}
                        titulo={p.title}
                        precio = {p.price}
                        categoria= {p.category}
                        imagen={p.image}
                        />
                )}
            </div>

        </section>
    )
}

export default Inventario