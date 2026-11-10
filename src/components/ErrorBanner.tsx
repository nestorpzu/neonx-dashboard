interface ErrorBannerProps {
    mensaje: string
    onReintentar: () => void
}

function ErrorBanner ({mensaje, onReintentar}: ErrorBannerProps) {
    return(
        <div className="error-banner" role="alert">
            <span className="error-banner-icono" aria-hidden="true">⚠️</span>
            <div className="error-banner-texto">
                <strong>No se han podido cargar los datos</strong>
                <p>{mensaje}</p>
            </div>

            <button type="button" className="button" onClick={onReintentar}>
                Reintentar
            </button>
        </div>
    )
}

export default ErrorBanner