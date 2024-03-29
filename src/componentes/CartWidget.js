import { Link } from 'react-router-dom'
import { CartContext } from "./CartContext"
import { useContext } from "react"
import CartFloat from './CartFloat'

const CartWidget = () => {
    const { carrito } = useContext(CartContext)

    const calculaCantidad = () => {
        let aux = [];
        carrito.map(prod => aux.push(prod.cantidad))
        let suma = 0;
        aux.forEach(cantidades => suma += cantidades)
        return suma
    }

    const cantidad = calculaCantidad();

    return (
        <div className="cartHover">
            <Link to="/carrito" className="position-relative">
                <span className={cantidad === 0 ? 'hidden' : 'badge rounded-circle bg-danger'}>{cantidad}</span>
                <i className="material-icons cart-icon">shopping_cart</i>
            </Link>
            <CartFloat />
        </div>
    );

}

export default CartWidget;