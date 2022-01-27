import { useContext } from "react"
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Inicio() {
    const { store } = useContext(Context);
    return (
        <div className="container-fluid topdiv " id="top">
            <div className="row justify-content-center align-items-center toprow">
                <div className="col-10 text-center topinfo">
                    <p className="fs-1">{store.diccionario.inicio.titulo}
                        <br />
                        <span className="fs-5">
                            {store.diccionario.inicio.subtitulo}{" "}
                        </span >
                        <strong className="fs-3">
                            {store.diccionario.inicio.subtituloNegrita}
                        </strong>
                        <br />
                    </p>
                    <FontAwesomeIcon className="rowdown position-absolute bottom-0 start-50 translate-middle-x" icon={["fas", "arrow-down"]} />
                </div>
            </div>
        </div>
    )
}


