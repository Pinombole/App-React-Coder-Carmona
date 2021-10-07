import { createContext, useState } from "react"

export const CartContext = createContext()

const { Provider } = CartContext

const CustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (productoAgregado) => {
        if (isInCart(productoAgregado.id)) {
            let aux = [...carrito]
            aux.forEach(producto => {
                if (producto.id === productoAgregado.id && producto.stock !== 0) {
                    producto.cantidad += productoAgregado.cantidad;
                    setCarrito(aux);
                }
            })
        }
        else {
            setCarrito([...carrito, productoAgregado])
        }
    }

    const removeItem = (id) => {
        let productoCarrito = carrito.filter(producto => producto.id === id)
        let carritoActualizado = [...carrito]
        if (productoCarrito[0].cantidad > 1) {
            productoCarrito[0].cantidad -= 1;
            setCarrito(carritoActualizado);
        }
        else {
            const carritoActualizado = carrito.filter(producto => producto.id !== id)
            setCarrito(carritoActualizado)
        }
    }

    const clearCart = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.find(producto => producto.id === id)
    }

    const getTotal = (carrito) => {
        if (carrito.length !== 0) {
            const aux = [];
            carrito.forEach(e => { aux.push(e.price * e.cantidad) })
            const reducer = (acc, curr) => acc + curr;
            const suma = aux.reduce(reducer)
            return suma
        }
    }

    const contexto = {
        carrito,
        addItem,
        removeItem,
        clearCart,
        getTotal
    }

    return (
        <Provider value={contexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider


