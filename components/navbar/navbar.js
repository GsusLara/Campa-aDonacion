import { useContext, useState } from "react"
import { Context } from "../../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link as LinkScroll } from "react-scroll"
import { useRouter } from 'next/router';
import Dropdown from 'react-bootstrap/Dropdown';


export default function Navbar() {
    const { store, actions } = useContext(Context);
    const [btnMenu, setbtnMenu] = useState(false);
    const router = useRouter()
    const { locale } = router;
    const lenguajeSelector = (idioma) => {
        router.push(router.pathname, router.pathname, { locale: idioma })
        actions.lenguaje(idioma);
    }
    return (
        <nav className="navbar navbar-expand-sm fixed-top pb-0 topMenu">
            <div className="container">
                <div className="me-5">
                    <Dropdown>
                        <Dropdown.Toggle className="btn dropdown-toggle p-0 m-0 idiomas" id="dropdownMenuButton1">
                            <span className="fs-1 p-0 ">
                                <FontAwesomeIcon icon={["fas", "language"]} />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item  onClick={() => lenguajeSelector("en")}>EN</Dropdown.Item>
                            <Dropdown.Item  onClick={() => lenguajeSelector("es")}>ES</Dropdown.Item>
                            <Dropdown.Item  onClick={() => lenguajeSelector("fr")}>FR</Dropdown.Item>
                            <Dropdown.Item  onClick={() => lenguajeSelector("ar")}>AR</Dropdown.Item>
                            <Dropdown.Item  onClick={() => lenguajeSelector("zh")}>ZH</Dropdown.Item>
                            <Dropdown.Item  onClick={() => lenguajeSelector("hi")}>HI</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
