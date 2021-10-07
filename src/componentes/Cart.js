import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "./CartContext"
import BuyerForm from "./BuyerForm"
import Footer from './Footer'


const Cart = () => {
    const { carrito } = useContext(CartContext)
    const { removeItem, clearCart, getTotal } = useContext(CartContext)
    let [form, setForm] = useState(false)

    const total = getTotal(carrito)

    const showForm = () => {
        setForm(true)
    }

    return (
        <div id="carrito" className="container">
            {carrito.length > 0 ? (
                <>
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
                    <div className="row g-0 seccionTotal">
                        <div className="col-2 offset-6"><h4>Total:</h4></div>
                        <div className="col-2"><h4>${total}</h4></div>
                        <div className="col-2"><button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button></div>
                    </div>
                    <div className="botones-dobles">
                        <Link to="/"><button className="btn btn-danger">Ver mas Productos</button></Link >
                        <button className="btn btn-danger" onClick={showForm}>Terminar Compra</button>

                    </div>
                    {form === true ? (
                        <BuyerForm />
                    ) : (null)}
                </>

            ) : (
                <div className="d-flex flex-column align-items-center mt-2 botones-dobles">
                    <h2 className="px-3">El Carrito está Vacio</h2>
                    <Link to="/"><button className="btn-agregar btn btn-primary">¡Empeza a Comprar!</button></Link>
                </div>
            )}
        </div>
    );
}

export default Cart;