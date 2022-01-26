import Navbar from "../navbar"




export default function Layout(props) {
    const { children } = props
    return (
        <div className="container-fluid Pagina">
            <Navbar />
            {children}
        </div>
    )
}
