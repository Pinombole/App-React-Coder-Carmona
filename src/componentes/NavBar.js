import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>
            <div id="navBar">
                <h1>Tienda Loca</h1>
                <div>
                    <a className="btn btn-outline-info mx-1" href="#" role="button">Productos</a>
                    <a className="btn btn-outline-info mx-1" href="#" role="button">Tus Compras</a>
                    <a className="btn btn-outline-info mx-1" href="#" role="button">Contacto</a>
                </div>
                <CartWidget />
            </div>
        </>
    )
}

export default NavBar;