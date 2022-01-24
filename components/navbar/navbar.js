import { useContext } from "react"
import { Context } from "../../store/appContext";


export default function Navbar() {
    const { store, actions } = useContext(Context);
    return (
        <nav className="navbar navbar-expand-lg fixed-top pb-0 topMenu">
            <div className="container">
                <div></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                            <a className="nav-link fs-5" >{store.diccionario.navbar.link2}</a>
                            <a className="nav-link fs-5" >{store.diccionario.navbar.link3}</a>
                            <a className="nav-link fs-5" >{store.diccionario.navbar.link4}</a>
                    </div>
                    <div className="collapse navbar-collapse" />
                        <a className="nav-link text-success idiomas" onClick={()=>actions.lenguaje(!store.idiomaActual)}>{store.diccionario.navbar.idiomas}</a>
                </div>
            </div>
        </nav>
    )
}
