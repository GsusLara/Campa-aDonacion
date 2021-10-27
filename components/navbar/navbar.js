import { useContext } from "react"
import { Context } from "../../store/appContext";
import Link from "next/link"
import Image from 'next/image'
import logo from "../../public/bitrade.png"


export default function Navbar() {
    const { store, actions } = useContext(Context);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top pb-0">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand p-0" >
                        <Image src={logo} alt="logo bootstrap" width="40" height="34" className="d-inline-block  p-0 " />
                        <span className="m-2  align-top">BitradeCore</span>
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link href="/">
                            <a className="nav-link" aria-current="page" >{store.diccionario.navbar.link1}</a>
                        </Link>
                        <Link href="/Cuenta">
                            <a className="nav-link" >{store.diccionario.navbar.link2}</a>
                        </Link>
                        <Link href="/Productos">
                            <a className="nav-link" >{store.diccionario.navbar.link3}</a>
                        </Link>
                        <Link href="/Tradeview">
                            <a className="nav-link" >{store.diccionario.navbar.link4}</a>
                        </Link>
                        
                    </div>
                    <div className="collapse navbar-collapse" />
                        <a className="nav-link text-success idiomas" onClick={()=>actions.lenguaje(!store.idiomaActual)}>{store.diccionario.navbar.idiomas}</a>
                </div>
            </div>
        </nav>
    )
}
