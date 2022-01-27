import { useContext } from "react"
import { Context } from "../../store/appContext";

export default function About() {
    const { store } = useContext(Context);
    return (
        <div className="container aboutBox d-flex align-items-center" id="about">
            <div className="row justify-content-center">
                <div className="col-12 text-center mt-5 mb-5">
                    <h1>{store.diccionario.about.info1Titulo}</h1>
                    <p className="fs-4 mt-4">{store.diccionario.about.info1Subtitulo}</p>
                    <div className="row justify-content-md-center">
                <Card
                    imagen={"crecimiento.png"} descripcion={"bitradeCode"} titulo={store.diccionario.about.card2Titulo} info={store.diccionario.about.card2Info}>
                </Card>
                <Card
                    imagen={"economia-global.png"} descripcion={"bitradeCode"} titulo={store.diccionario.about.card3Titulo} info={store.diccionario.about.card3Info}>
                </Card>
                <Card
                    imagen={"gratis.png"} descripcion={"bitradeCode"} titulo={store.diccionario.about.card4Titulo} info={store.diccionario.about.card4Info}>
                </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
const Card = (props) => {
    const { imagen, descripcion, titulo, info } = props
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center mt-5 p-2 mx-auto fs-6" style={{ width: "18rem", border: "none" }}>
                <img className="img-card mx-auto" src={imagen} alt={descripcion} />
                <div className="card-body">
                    <h5 className="card-title"> <strong>{titulo}</strong></h5>
                    <p className="card-text pt-3">{info}</p>
                </div>
            </div>
        </div>
    )
}
