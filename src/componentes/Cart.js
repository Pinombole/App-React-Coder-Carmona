import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

const Cart = () => {
    const { carrito } = useContext(CartContext)
    const { removeItem, clearCart } = useContext(CartContext)

    return (
        <>
            {carrito.length > 0 ? (
                <div className="container">
                    {carrito.map(producto => {
                        const productoId = producto.id;
                        return <div className="row g-0 itemCarrito" key="{producto.id}">
                            <div className="col-6">
                                <div className="titulosCarrito">{producto.title}</div>
                                <div className="containerImg"><img src={producto.image} alt={producto.title} /></div>
                            </div>
                            <div className="col-2">
                                <div className="titulosCarrito">Cantidad</div>
                                <p>{producto.cantidad}</p>
                            </div>
                            <div className="col-2">
                                <div className="titulosCarrito">Precio</div>
                                <p>${producto.price}</p>
                            </div>
                            <div className="col-2 iconoBorrar">
                                <a href="#" className="material-icons delete-icon" onClick={() => removeItem(productoId)}>delete</a>
                            </div>
                        </div>
                    })}
                    <h4 className="total">Total</h4>
                    <button className="btn btn-primary btn-sm" onClick={clearCart}>Vaciar Carrito de Compra
                    </button>
                </div>
            ) : (
                <div className="container">
                    <h2 className="px-3">El Carrito está Vacio</h2>
                    <Link to="/"><button className="btn-agregar btn btn-primary">¡Empeza a Comprar!</button></Link>
                </div>
            )}
        </>
    );
}

export default Cart;