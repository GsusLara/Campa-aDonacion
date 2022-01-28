import { useContext, useState } from "react"
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as LinkScroll } from "react-scroll"
import { useRouter } from 'next/router';


export default function Navbar() {
    const { store, actions } = useContext(Context);
    const [btnMenu, setbtnMenu] = useState(false);
    const router = useRouter()
    const lenguajeSelector = (idioma) => {
        router.push(router.pathname, router.pathname, { locale: idioma })
        actions.lenguaje(idioma);
    }
    return (
        <nav className="navbar navbar-expand-sm fixed-top pb-0 topMenu">
            <div className="container">
                <div className="me-5">
                    {/* <span className="fs-1 p-0 idiomas" onClick={() => lenguajeSelector()}>
                        <FontAwesomeIcon icon={["fas", "language"]} />
                    </span> */}
                    <div className="dropdown">
                        <button className="btn dropdown-toggle p-0 m-0 idiomas" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="fs-1 p-0 ">
                                <FontAwesomeIcon icon={["fas", "language"]} />
                            </span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li className="dropdown-item" onClick={() => lenguajeSelector("en")}>EN</li>
                            <li className="dropdown-item" onClick={() => lenguajeSelector("es")}>ES</li>
                            <li className="dropdown-item" onClick={() => lenguajeSelector("fr")}>FR</li>
                        </ul>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setbtnMenu(!btnMenu)}>
                    <span className="menuicon fs-1" >{btnMenu ? <FontAwesomeIcon icon={["fas", "minus-square"]} /> : <FontAwesomeIcon icon={["fas", "caret-square-down"]} />}</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="container">
                        <ul className="navbar-nav ">
                            <li>
                                <LinkScroll to="top" >
                                    <span className="nav-link fs-3 py-0 my-0 me-2" ><FontAwesomeIcon icon={["fas", "angle-double-up"]} /></span>
                                </LinkScroll>
                            </li>
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
