import { useContext } from "react"
import { Context } from "../../store/appContext";
import Link from "next/link"
import Footer from "../footer";
import Image from 'next/image'
import btc from "../../public/btc.png"
import paypal from "../../public/paypal.png"

export default function Donate() {
    const { store } = useContext(Context);
    return (
        <div className="donateBox fs-5 d-flex flex-column " id="donate">
            <div className="container mt-5 mb-5">
                <div className="text-center">
                    <h1>{store.diccionario.donate.info3Titulo}</h1>
                    <p className="mt-5">{store.diccionario.donate.info3Texto}</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6 col-md-2 m-5">
                        <Link href={"/donar"}>
                            <a> <button type="button" className="btnBtc p-1">
                                <Image
                                    src={btc}
                                    alt="donar bitcoin"
                                />
                            </button>
                            </a>
                        </Link>
                    </div>
                    <div className="col-6 col-md-2 m-5">
                        <button type="button" className="btnPaypal p-2 pb-0">
                            <Image
                                src={paypal}
                                alt="donar paypal"
                            />
                        </button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}
