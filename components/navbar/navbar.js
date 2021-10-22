import Link from "next/link"
import Image from 'next/image'
import logo from "../../public/bitrade.png"
export default function Navbar() {
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
                            <a className="nav-link" aria-current="page" >Inicio</a>
                        </Link>
                        <a className="nav-link" href="#">Mi Cuenta</a>
                        <Link href="/planes">
                            <a className="nav-link" >Fondos de inversión</a>
                        </Link>
                        <Link href="/tradeview">
                            <a className="nav-link" >Trade View</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
