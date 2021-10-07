import { useContext } from "react"
import { CartContext } from "./CartContext"

const CartFloat = () => {
    const { carrito } = useContext(CartContext)
    const { removeItem, getTotal } = useContext(CartContext)

    const total = getTotal(carrito)

    return (
        <div id="carritoFloat" className="container-fluid">
            {carrito.length > 0 ? (
                <>
                    {carrito.map(producto => {
                        const productoId = producto.id;
                        return <div className="row g-0 itemCarrito" key="{producto.id}">
                            <div className="col-4">
                                <div className="containerImg"><img src={producto.image} alt={producto.title} /></div>
                            </div>
                            <div className="col-3">
                                <p>{producto.cantidad}</p>
                            </div>
                            <div className="col-3">
                                <p>${producto.price}</p>
                            </div>
                            <div className="col-2 iconoBorrar">
                                <a href="#" className="material-icons delete-icon" onClick={() => removeItem(productoId)}>delete</a>
                            </div>
                        </div>
                    })}
                    {<div className="row g-0 seccionTotal">
                        <div className="col-3 offset-4"><h4>Total:</h4></div>
                        <div className="col-3"><h4>${total}</h4></div>
                    </div>}
                </>
            ) : (
                <div className="d-flex flex-column align-items-center">
                    <h2 className="px-3">El Carrito está Vacio</h2>
                </div>
            )}
        </div>
    );
}

export default CartFloat;