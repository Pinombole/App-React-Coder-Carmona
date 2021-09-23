import { createContext, useState } from "react"

export const CartContext = createContext()

const { Provider } = CartContext

const CustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (productoAgregado) => {
        if (isInCart(productoAgregado.id)) {
            let aux = carrito
            aux.forEach(producto => {
                if (producto.id === productoAgregado.id) {
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
        const carritoActualizado = carrito.filter(producto => producto.id !== id)
        setCarrito(carritoActualizado)
    }

    const clearCart = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.find(producto => producto.id === id)
    }

    const contexto = {
        carrito,
        addItem
    }

    return (
        <Provider value={contexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider


