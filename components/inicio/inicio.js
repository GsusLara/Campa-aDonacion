import { useContext } from "react"
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Inicio() {
    const { store } = useContext(Context);
    return (
            <div className="container-fluid topdiv " id="top">
                <div className="row justify-content-center align-items-center toprow">
                    <div className="col-10 text-center topinfo">
                        <p >{store.diccionario.inicio.titulo}
                            <br />
                            <span className="txg">{store.diccionario.inicio.subtitulo}{" "} </span><strong>{store.diccionario.inicio.subtituloNegrita}</strong>
                            <br />
                        </p>
                        <FontAwesomeIcon className="rowdown position-absolute bottom-0 start-50 translate-middle-x" icon={["fas", "arrow-down"]} />
                    </div>
                </div>
            </div>
    )
}


