import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div id="navBar">
                <Link to="/"><h1>Tienda Loca</h1></Link>
                <div>
                    <Link to="/productos/1"><button className="btn btn-outline-info mx-1">Ropa Hombre</button></Link>
                    <Link to="/productos/2"><button className="btn btn-outline-info mx-1">Ropa Mujer</button></Link>
                    <Link to="/productos/3"><button className="btn btn-outline-info mx-1">Joyas</button></Link>
                </div>
                <CartWidget />
            </div>
        </>
    )
}

export default NavBar;