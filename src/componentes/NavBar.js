import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <>

            <div id="navBar" className="container-fluid">
                <h1>Tienda Loca</h1>
                <a className="btn btn-outline-info mx-1" href="#" role="button">Productos</a>
                <a className="btn btn-outline-info mx-1" href="#" role="button">Tus Compras</a>
                <a className="btn btn-outline-info mx-1" href="#" role="button">Contacto</a>
                <CartWidget />
            </div>
        </>
    )
}

export default NavBar;