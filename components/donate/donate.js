import { useContext } from "react"
import { Context } from "../../store/appContext";
import Footer from "../footer"

export default function Donate() {
    const { store } = useContext(Context);
    return (
        <div className="donateBox fs-5" id="donate">
            <div className="container ">
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
            </div>
            <Footer />
        </div>
    );
}
