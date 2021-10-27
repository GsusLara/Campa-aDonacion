import { useContext } from "react"
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
    const { store } = useContext(Context);
    return (
        <footer className="bg-light text-center text-lg-start mt-5 foicons">
            <div className="container p-4">
                <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center fs-1 mt-lg-5 ">
                <span className="p-4 align-bottom"><FontAwesomeIcon icon={["fas", "file-alt"]}/></span>
                <span className="p-4 align-bottom"><FontAwesomeIcon icon={["fas", "info-circle"]} /></span>
                        </div>
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0 ">
                        <h5 className="text-uppercase text-center">{store.diccionario.footer.Titulo}</h5>
                        <p>
                        {store.diccionario.footer.Texto}
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                <span>
                    Copyright <FontAwesomeIcon icon={["far", "copyright"]} />{" "}{store.diccionario.footer.derechos}
                </span>
            </div>
        </footer>
    )
}
