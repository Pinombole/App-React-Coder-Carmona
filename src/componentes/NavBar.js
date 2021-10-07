import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div id="navBar">
                <Link to="/"><h1>Tienda Loca</h1></Link>
                <div>
                    <Link to="/productos/Ropa-Hombre"><button className="btn btn-outline-warning mx-1">Ropa Hombre</button></Link>
                    <Link to="/productos/Ropa-Mujer"><button className="btn btn-outline-warning mx-1">Ropa Mujer</button></Link>
                    <Link to="/productos/Joyas"><button className="btn btn-outline-warning mx-1">Joyas</button></Link>
                </div>
                <CartWidget />
            </div>
        </>
    )
}

export default NavBar;