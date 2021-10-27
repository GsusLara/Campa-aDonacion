import { useContext } from "react"
import { Context } from "../../store/appContext";
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function PlanesComponent() {
    const { store } = useContext(Context);
    return (
        <div className="container mt-5 planes">
            <div className="row justify-content-center">
                <div className="col-11 text-center">
                    <h1 className="fs-1 mt-3 mb-3">{store.diccionario.planes.Titulo}</h1>
                    <p>{store.diccionario.planes.Subtitulo}.</p>
                </div>
                <Cardplan store={store} perfil={store.diccionario.planes.Card1} monto="100" descripcion={store.diccionario.planes.Card1Texto}/>
                <Cardplan store={store} perfil={store.diccionario.planes.Card2} monto="500" descripcion={store.diccionario.planes.Card2Texto}/>
                <Cardplan store={store} perfil={store.diccionario.planes.Card3} monto="1000" descripcion={store.diccionario.planes.Card3Texto}/>
                <Cardplan store={store} perfil={store.diccionario.planes.Card4} monto="2500" descripcion={store.diccionario.planes.Card4Texto}/>
                <Cardplan store={store} perfil={store.diccionario.planes.Card5} monto="5000" descripcion={store.diccionario.planes.Card5Texto}/>
                <Cardplan store={store} perfil={store.diccionario.planes.Card6} monto="10 000" descripcion={store.diccionario.planes.Card6Texto}/>
            </div>
        </div>
    )
}

const Cardplan = (props) => {
    const { store, perfil, monto, descripcion } = props
    return (
        <div className="col-10 col-lg-3 text-center m-2">
            <div className="card cardplan">
                <div className="card-body">
                    <h5 className="card-title fw-bold fs-3">{perfil}</h5>
                    <span className="card-subtitle mb-2 text-muted"><FontAwesomeIcon icon={["fas", "dollar-sign"]} /> <span className="m-2 fs-1">{monto}</span></span>
                    <p className="card-text fw-light">{descripcion}</p>
                    <Link href="/Cuenta">
                        <a type="button" className="btn btn-primary">{store.diccionario.planes.CardBoton}</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
