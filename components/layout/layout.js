import Navbar from "../navbar"

export default function Layout(props) {
    const { children } = props
    return (
        <section className="container-fluid Pagina">
            <Navbar />
            {children}
        </section>
    )
}
