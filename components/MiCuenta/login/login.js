export default function Login() {
    return (
        <section className="mt-5 vistas position-relative">
            <div className="container-fluid h-custom position-absolute top-50 start-50 translate-middle">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="/5005499.png" className="img-fluid"
                            alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3 fs-1">Iniciar Sesión</p>
                            </div>
                            <div className="form-outline mb-4 mt-5">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Ingrese un correo electrónico registrado" />
                                <label className="form-label" htmlFor="form3Example3">Correo electrónico</label>
                            </div>
                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Ingrese su contraseña" />
                                <label className="form-label" htmlFor="form3Example4">Contraseña</label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-success btn-lg"
                                    style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Entrar</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">¿No tienes cuenta? <a href="#!"
                                    className="link-danger">Regístrate</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
