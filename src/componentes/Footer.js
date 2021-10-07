import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="d-flex flex-column justify-content-center">
                    <h5>Contactoz</h5>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Email</a>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <h5>App Realizada por Emmanuel Carmona con Create React App</h5>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <h5>Secciones</h5>
                    <Link to="/productos/Ropa-Hombre">Ropa de Hombre</Link>
                    <Link to="/productos/Ropa-Mujer">Ropa de Mujer</Link>
                    <Link to="/productos/Joyas">Joyas</Link>
                    <Link to="/">Home</Link>
                    <Link to="/carrito">Carrito de Compra</Link>
                </div>
            </div>
        </>
    )
}

export default Footer;