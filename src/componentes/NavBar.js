import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div id="navBar">
                <Link to="/"><h1>Tienda Loca</h1></Link>
                <div>
                    <Link to="/productos/men's clothing" className="btn btn-outline-info mx-1">Ropa Hombre</Link>
                    <Link to="/productos/women's clothing" className="btn btn-outline-info mx-1">Ropa Mujer</Link>
                    <Link to="/productos/jewelery" className="btn btn-outline-info mx-1">Joyas</Link>
                </div>
                <CartWidget />
            </div>
        </>
    )
}

export default NavBar;