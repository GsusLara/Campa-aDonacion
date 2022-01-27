import { useContext } from "react"
import { Context } from "../../store/appContext";

export default function About() {
    const { store } = useContext(Context);
    return (
        <div className="container aboutBox d-flex align-items-center" id="about">
            <div className="row justify-content-center">
                <div className="col-12 text-center mt-5 mb-5">
                    <h5>{store.diccionario.about.info1Titulo}</h5>
                    <span className="txg">{store.diccionario.about.info1Subtitulo}</span>
                    <div className="row">
                    <Card
                    imagen={"acuerdo.png"} descripcion={"bitradeCode"} titulo={store.diccionario.about.card1Titulo} info={store.diccionario.about.card1Info}>
                </Card>
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
