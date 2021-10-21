import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Inicio() {
    return (
        <>
            <div className="container-fluid topdiv ">
                <div className="row justify-content-center align-items-center toprow">
                    <div className="col-10 text-center topinfo">
                        <p >¡Invierta de forma segura, con los expertos en trading!
                            <br />
                            <span className="txg">Ganancias seguras todos los días </span><strong>sin comisiones</strong></p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center cot3n">
                    <div className="col-12 text-center mt-5">
                        <h5>CONOZCA SOBRE NOSOTROS</h5>
                        <span className="txg">¿Qué nos hace ser únicos?</span>
                    </div>
                    <Card imagen={"acuerdo.png"} descripcion={"bitradeCode"} titulo={"Confianza"} info={"Solidez y respaldo con más de diez años de experiencia en el estudio del mercado,con regulacion y licenciamiento NYSE y NASDAQ"}></Card>
                    <Card imagen={"crecimiento.png"} descripcion={"bitradeCode"} titulo={"Crecimiento"} info={"Nuestras transacciones y equipo de analistas financieros garantizan un crecimiento del capital independientemente del valor del mercado"}></Card>
                    <Card imagen={"economia-global.png"} descripcion={"bitradeCode"} titulo={"Futuro"} info={"El bitcoin es la moneda del futuro, descentralizada, segura, y con alcance mundial, sin pagos de inpuestos remesas o retenciones."}></Card>
                    <Card imagen={"gratis.png"} descripcion={"bitradeCode"} titulo={"Libertad"} info={"Las inversiones son la unica manera de conseguir la libertad financiera, con un ingresos pasivos seguros y confiables"}></Card>
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
