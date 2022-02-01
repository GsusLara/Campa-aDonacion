import { useState, useEffect, useContext } from "react";
import { Context } from "../../store/appContext";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link"

export default function BtcPay() {
    const { store } = useContext(Context);
    const [direccion, setdireccion] = useState("pendiente");
    const [monto, setmonto] = useState(0);

    //actions
    const pagar = async () => {
        const response = await fetch("/api/facturacion")
        const data = await response.json()
        setdireccion(data.direccion)
    }
    const validarPago = (recAddr) => {
        const ws = new WebSocket("wss://ws.blockchain.info/inv");
        ws.onopen = () => {
            ws.send(JSON.stringify(
                {
                    "op": "addr_sub",
                    "addr": recAddr
                }
            ))
        }
        ws.onmessage = (message) => {
            let response = JSON.parse(message.data);
            let transacciones = response.x.out;
            for (let i = 0; i < transacciones.length; i++) {
                if (transacciones[i].addr == recAddr) {
                    let montoRecibido = transacciones[i].value / 100000000;
                    setmonto(montoRecibido);
                    setdireccion("pagado");
                }
            }
        }
    }
    const limpiarPago = () => {
        setdireccion("pendiente");
        setmonto(0);
    }

    useEffect(() => {
        setTimeout(() => { pagar() }, 1000)
    }, []);

    // Render
    if (direccion == "pendiente") {
        return <Cargando store={store} />
    } else if (direccion == "pagado") {
        return <Pagado monto={monto} limpiarPago={limpiarPago} store={store} />
    } else {
        return <Tiquet direccion={direccion} limpiarPago={limpiarPago} validarPago={validarPago} store={store} />
    }

}


//Components

const Cargando = (props) => {
    const { store } = props
    return (
        <div className="position-relative mx-auto">
            <div className="d-flex align-items-center">
                <strong>{store.diccionario.btcP4y.cargand0}</strong>
                <div className="spinner-border m-3" role="status" aria-hidden="true"></div>
            </div>
        </div>
    )
}

const Tiquet = (props) => {
    const { direccion, limpiarPago, validarPago, store } = props;
    useEffect(() => {
        setTimeout(() => {
            validarPago(direccion);
        }, 2000);
    }, [])
    return (
        <div className="col-12 text-center mt-5">
            <h4>{store.diccionario.btcP4y.p4gandoT1tulo}</h4>
            <div className="col-8 col-md-5 col-lg-3 col-xxl-4 mx-auto text-center qrcode">
                <img src={`https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${direccion}`} className="img-fluid p-0" alt="BTC wallet" />
            </div>
            <div className="col-10 col-lg-6  mx-auto text-center ">
                <div className="position-relative mt-xxl-5 hash ">
                    <div className="p-3">
                        <span>{direccion}</span>
                    </div>
                    <CopyToClipboard text={direccion}>
                        <FontAwesomeIcon icon={["fas", "copy"]} className="clipboard position-absolute top-0 end-0" />
                    </CopyToClipboard>
                </div>
            </div>
            <div className="col-10 mt-xxl-3 text-center mx-auto">
                <span className="spinner-border m-2 align-middle spinner" role="status" />
                <strong>{store.diccionario.btcP4y.p4gandoP1e}</strong>
            </div>
            <Link href="/">
                <a type="button" className="btn btn-danger mt-3" onClick={() => limpiarPago()}>{store.diccionario.btcP4y.p4gandoB0ton}</a>
            </Link>
        </div>
    )
}

const Pagado = (props) => {
    const { monto, limpiarPago, store } = props
    return (
        <div className="col-12 text-center mt-4">
            <h1>{store.diccionario.btcP4y.recib0T1tulo}</h1>
            <div className="mt-5">
                <h5>{store.diccionario.btcP4y.recib0M0nto}</h5>
                <h4><strong>{monto} BTC</strong></h4>
            </div>
            <Link href="/">
                <a type="button" className="btn btn-primary mt-5" onClick={() => limpiarPago()}>{store.diccionario.btcP4y.recib0B0ton}</a>
            </Link>
        </div>
    )
}




