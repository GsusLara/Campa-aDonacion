import { useContext } from "react"
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import About from "../about/about";
import Goals from "../goals";


export default function Inicio() {
    const { store } = useContext(Context);
    return (
        <>
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
                <About/>
            
                <Goals/>
            
            <section className="cot3n py-5 px-2 p-lg-5 fs-5 " id="donate">
                <div className="container">
                    <div className="text-center">
                        <h1>{store.diccionario.inicio.info3Titulo}</h1>
                        <p className="mt-5">{store.diccionario.inicio.info3Texto}</p>
                    </div>
                    <div className="text-start beneficios">
                        <ul className="list-group mb-5 ">
                            <li className="list-group-item">{store.diccionario.inicio.info3Lista1}</li>
                            <li className="list-group-item">{store.diccionario.inicio.info3Lista2}</li>
                            <li className="list-group-item">{store.diccionario.inicio.info3Lista3}</li>
                            <li className="list-group-item">{store.diccionario.inicio.info3Lista4}</li>
                            <li className="list-group-item">{store.diccionario.inicio.info3Lista5}</li>
                        </ul>
                    </div>
                    <div className="text-center">
                    </div>
                </div>
            </section>
        </>
    )
}


