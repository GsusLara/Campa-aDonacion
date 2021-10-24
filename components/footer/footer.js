import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start mt-5 foicons">
            <div className="container p-4">
                <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center fs-1 mt-lg-5 ">
                <span className="p-4 align-bottom"><FontAwesomeIcon icon={["fas", "file-alt"]}/></span>
                <span className="p-4 align-bottom"><FontAwesomeIcon icon={["fas", "info-circle"]} /></span>
                        </div>
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0 ">
                        <h5 className="text-uppercase text-center">POLITICAS DE USO Y DATOS</h5>
                        <p>
                            De conformidad con las leyes de protección de datos personales de usuarios de la plataforma, te recomendamos dedicar un momento en revisar los puntos claves establecidos para el uso manejo de los datos y servicios ofrecidos por BitradeCode, puedes acceder a nuestro documentación en cualquier momento que lo desees.
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                <span>
                    Copyright <FontAwesomeIcon icon={["far", "copyright"]} /> 2021 BitradeCore. Todos los derechos reservados.
                </span>
            </div>
        </footer>
    )
}
