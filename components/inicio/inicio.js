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
                            <span className="txg">Ganancias seguras todos los días </span><strong>sin comisiones</strong>
                            <br />
                        </p>
                        <FontAwesomeIcon className="rowdown position-absolute bottom-0 start-50 translate-middle-x" icon={["fas", "arrow-down"]} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center cot3n mb-5">
                    <div className="col-12 text-center mt-5 ">
                        <h5>CONOZCA SOBRE NOSOTROS</h5>
                        <span className="txg">¿Qué nos hace únicos?</span>
                    </div>
                    <Card imagen={"acuerdo.png"} descripcion={"bitradeCode"} titulo={"Confianza"} info={"Solidez y respaldo con más de diez años de experiencia en el estudio del mercado, operando en plataformas con regulación y licenciamiento NYSE y NASDAQ"}></Card>
                    <Card imagen={"crecimiento.png"} descripcion={"bitradeCode"} titulo={"Crecimiento"} info={"Nuestras transacciones y equipo de analistas financieros garantizan un crecimiento del capital independientemente del valor del mercado"}></Card>
                    <Card imagen={"economia-global.png"} descripcion={"bitradeCode"} titulo={"Futuro"} info={"El bitcoin es la moneda del futuro, descentralizada, segura, y con alcance mundial, sin pagos de impuestos remesas o retenciones."}></Card>
                    <Card imagen={"gratis.png"} descripcion={"bitradeCode"} titulo={"Libertad"} info={"Las inversiones son la única manera de conseguir la libertad financiera, generando ingresos pasivos seguros y confiables."}></Card>
                </div>
            </div>
            <div className="cot4n text-center py-5 px-3 p-lg-5 fs-5">
                <div className="container ">
                    <h2 className="mb-4">¿Como ganamos?</h2>
                    <p>
                        La rentabilidad para poder ofrecerte la posibilidad de duplicar tu dinero en un plazo relativamente corto proviene de nuestro equipo profesional de analistas de mercado encargados de ejecutar operaciones de compra y venta del fondo, esta práctica es conocida mundialmente como <strong>Trading</strong>, es aplicable a todo tipo de títulos de valor presentes en el mercado como, acciones, divisas, cripto activos entre otros.
                    </p>
                    <p>
                        Dada la alta volatilidad del Bitcoin, la percepción de una ganancia es relativamente rápida, se mantiene el fondo en BTC y durante el día varia su tipo de cambio constantemente, al haber un aumento en el valor respecto al dólar en una tasa superior a un 4% se ejecuta la venta, y esta se mantiene hasta percibir una caída superior a un 4% donde vuelve a convertirse en BTC.
                    </p>
                    <h1 className="mt-4 mb-4">¿sencillo?</h1>
                    <p>¡inténtalo tú mismo!</p>
                    <Link href="/tradeview">
                        <a type="button" className="btn btn-outline-secondary">Trade view</a>
                    </Link>
                </div>
            </div>
            <div className="cot3n py-5 px-3 p-lg-5 fs-5 text-center">
                <div className="container">
                    <h1>¡Dejalo en manos de los expertos!</h1>
                    <p className="mt-5">Unete a uno de nuestros fondos de inverción y disfruta de lo beneficios de ganar mientras duermes</p>
                    <ul className="list-group m-5">
                        <li className="list-group-item">Ganancias de hasta un 25%</li>
                        <li className="list-group-item">Retiros sin comisiones ni costes</li>
                        <li className="list-group-item">Sin pagos de anualidades o membresia</li>
                        <li className="list-group-item">No requiere referido o patrocinador para ingresar</li>
                        <li className="list-group-item">interés compuesto capilalizable en periodos programados</li>
                    </ul>
                    <Link href="/planes">
                        <a type="button" className="btn btn-outline-success">Invierte ahora</a>
                    </Link>
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
