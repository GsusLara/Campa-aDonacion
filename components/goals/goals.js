import { useContext } from "react"
import { Context } from "../../store/appContext";
import { Link as LinkScroll } from "react-scroll"

export default function Goals() {
    const { store } = useContext(Context);
    return (
        <section className="goalsBox text-center fs-5 d-flex align-items-center" id="objetives">
            <div className="container-fluid infoGoals py-5">
                <div className="container mt-5">
                    <h2 className="mb-4">{store.diccionario.goals.info2titulo}</h2>
                    <p>
                        {store.diccionario.goals.info2Parrafo1}
                    </p>
                    <p>
                        {store.diccionario.goals.info2Parrafo2}
                    </p>
                    <p className="fs-4" >{store.diccionario.goals.info2Expresion}</p>
                    <LinkScroll to="donate" >
                        <span className="fw-bold botonDonar">{store.diccionario.goals.info2Boton}</span>
                    </LinkScroll>
                </div>
            </div>
        </section >
    );
}
