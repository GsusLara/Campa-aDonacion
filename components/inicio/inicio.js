import { useContext } from "react"
import { Context } from "../../store/appContext";
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Inicio() {
    const { store } = useContext(Context);
    return (
        <>
            <div className="container-fluid topdiv ">
                <div className="row justify-content-center align-items-center toprow">
                    <div className="col-10 text-center topinfo">
                        <p >{store.diccionario.inicio.titulo}
                            <br />
                            <span className="txg">{store.diccionario.inicio.subtitulo}{" "} </span><strong>{store.diccionario.inicio.subtituloNegrita}</strong>
                            <br />
                        </p>
                        <FontAwesomeIcon className="rowdown position-absolute bottom-0 start-50 translate-middle-x" icon={["fas", "arrow-down"]} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center cot3n mb-5">
                    <div className="col-12 text-center mt-5 ">
                        <h5>{store.diccionario.inicio.info1Titulo}</h5>
                        <span className="txg">{store.diccionario.inicio.info1Subtitulo}</span>
                    </div>
                    <Card imagen={"acuerdo.png"} descripcion={"bitradeCode"} titulo={store.diccionario.inicio.card1Titulo} info={store.diccionario.inicio.card1Info}></Card>
                    <Card imagen={"crecimiento.png"} descripcion={"bitradeCode"} titulo={store.diccionario.inicio.card2Titulo} info={store.diccionario.inicio.card2Info}></Card>
                    <Card imagen={"economia-global.png"} descripcion={"bitradeCode"} titulo={store.diccionario.inicio.card3Titulo} info={store.diccionario.inicio.card3Info}></Card>
                    <Card imagen={"gratis.png"} descripcion={"bitradeCode"} titulo={store.diccionario.inicio.card4Titulo} info={store.diccionario.inicio.card4Info}></Card>
                </div>
            </div>
            <div className="cot4n text-center py-5 px-3 p-lg-5 fs-5">
                <div className="container ">
                    <h2 className="mb-4">{store.diccionario.inicio.info2titulo}</h2>
                    <p>
                        {store.diccionario.inicio.info2Parrafo1}
                    </p>
                    <p>
                        {store.diccionario.inicio.info2Parrafo2}
                    </p>
                    <h1 className="mt-4 mb-4">{store.diccionario.inicio.info2Subtitulo}</h1>
                    <p>{store.diccionario.inicio.info2Expresion}</p>
                    <Link href="/Tradeview">
                        <a type="button" className="btn btn-outline-secondary">{store.diccionario.inicio.info2Boton}</a>
                    </Link>
                </div>
            </div>
            <div className="cot3n py-5 px-2 p-lg-5 fs-5 ">
                <div className="container">
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
                    <div className="text-center">
                        <Link href="/Productos" >
                            <a type="button" className="btn btn-outline-success">{store.diccionario.inicio.info3Boton}</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const Card = (props) => {
    const { imagen, descripcion, titulo, info } = props
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center mt-5 p-2 mx-auto" style={{ width: "18rem", border: "none" }}>
                <img className="img-card mx-auto" src={imagen} alt={descripcion} />
                <div className="card-body">
                    <h5 className="card-title"> <strong>{titulo}</strong></h5>
                    <p className="card-text pt-3">{info}</p>
                </div>
            </div>
        </div>
    )
}
