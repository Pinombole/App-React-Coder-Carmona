import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <Link to="/carrito"><a href="#" className="material-icons cart-icon">shopping_cart</a></Link>
    );

}

export default CartWidget;