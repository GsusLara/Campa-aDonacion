import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PlanesComponent() {
    return (
        <div className="container mt-5 planes">
            <div className="row justify-content-center">
                <div className="col-11 text-center">
                    <h1 className="fs-1 mt-3 mb-3">Adquiere un fondo a la medida!</h1>
                    <p>Las opciones se ajustan a los principales perfiles de inversionistas, elige la que mejor te defina.</p>
                </div>
                <CardPlan perfil="Conservador" monto="100" descripcion="Ganancia total de un 25%"/>
                <CardPlan perfil="Moderado" monto="500" descripcion="Ganancia total de un 35%"/>
                <CardPlan perfil="Emprendedor" monto="1000" descripcion="Ganancia total de un 50%"/>
                <CardPlan perfil="Audaz" monto="2500" descripcion="Ganancia total de un 75%"/>
                <CardPlan perfil="Atrevido" monto="5000" descripcion="Ganancia total de un 85%"/>
                <CardPlan perfil="Arriesgado" monto="10 000" descripcion="Ganancia total de un 95%"/>
            </div>
        </div>
    )
}

const CardPlan = (props) => {
    const { perfil, monto, descripcion } = props
    return (
        <div className="col-10 col-lg-3 text-center m-2">
            <div className="card cardplan">
                <div className="card-body">
                    <h5 className="card-title fw-bold fs-3">{perfil}</h5>
                    <span className="card-subtitle mb-2 text-muted"><FontAwesomeIcon icon={["fas", "dollar-sign"]} /> <span className="m-2 fs-1">{monto}</span></span>
                    <p className="card-text fw-light">{descripcion}</p>
                    <Link href="/Cuenta">
                        <a type="button" className="btn btn-primary">ADQUIRIR</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
