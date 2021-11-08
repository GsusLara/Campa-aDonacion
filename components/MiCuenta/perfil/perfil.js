import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Perfil() {
    return (
        <div className="container mt-5 perfilbox">
            <div className="row">
                <div className="col-12 mt-5">
                    <h1>Bienvenido</h1>
                    <h2>usuario</h2>
                </div>
                <div className="col-10 col-lg-4 mt-5">
                    <span>Tu saldo actual</span><br />
                    <span className="fs-1"><FontAwesomeIcon icon={["fas", "dollar-sign"]} className="fs-4" /> 0</span>

                </div>
                <div className="divider mt-5 mb-5" />
                <div className="col-12">
                    <h3>Detalle de inversiones</h3>
                    <table className="table mt-3">
                        {/* <thead className="text-center">
                            <tr>
                                
                                <th scope="col">Transaccion</th>
                                <th scope="col">Monto</th>
                                <th scope="col">Progreso</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead> */}
                        <tbody className="text-center">
                            <tr>
                                <th scope="row"className="col-12">Inversión</th>
                                <td>$ 100</td>
                                <td className="col-12">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{ width: "1%" }} aria-valuenow="1" aria-valuemin="1" aria-valuemax="100">1%</div>
                                    </div>
                                </td>
                                <td className="col-12">
                                    <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-danger mx-3" type="button">Retirar inversión</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}
