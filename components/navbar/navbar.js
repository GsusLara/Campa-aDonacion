import { useContext, useState } from "react"
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as LinkScroll } from "react-scroll"


export default function Navbar() {
    const { store, actions } = useContext(Context);
    const [btnMenu, setbtnMenu] = useState(false);
    return (
        <nav className="navbar navbar-expand-sm fixed-top pb-0 topMenu">
            <div className="container">
                <div className="me-5">
                    <span
                        className="fs-1 p-0 idiomas" onClick={() => actions.lenguaje(!store.idiomaActual)}><FontAwesomeIcon icon={["fas", "language"]} />
                    </span>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setbtnMenu(!btnMenu)}>
                    <span className="menuicon fs-1" >{btnMenu ? <FontAwesomeIcon icon={["fas", "minus-square"]} /> : <FontAwesomeIcon icon={["fas", "caret-square-down"]} />}</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="container">
                        <ul className="navbar-nav ">
                            <li>
                                <LinkScroll to="about" >
                                    <span className="nav-link fs-5" >{store.diccionario.navbar.link2}</span>
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll to="objetives" >
                                    <span className="nav-link fs-5" >{store.diccionario.navbar.link3}</span>
                                </LinkScroll>
                            </li>
                            <li>
                                <LinkScroll to="donate" >
                                    <span className="nav-link fs-5" >{store.diccionario.navbar.link4}</span>
                                </LinkScroll>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
