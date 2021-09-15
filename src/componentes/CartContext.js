import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

const { Provider } = CartContext

const CustomProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const addItem = (producto) => {
        if (isInCart(producto.id)) {
            const aux = isInCart(producto.id)
            aux.cantidad = aux.cantidad + producto.cantidad
            setCarrito([aux])
            console.log("Cantidad Actualizada:", carrito)
        }
        else {
            setCarrito([...carrito, producto])
        }
    }

    const removeItem = (id) => {
        const carritoActualizado = carrito.filter(producto => producto.id !== id)
        setCarrito(carritoActualizado)
    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (id) => {
        return carrito.find(producto => producto.id === id)
    }

    const contexto = {
        carrito,
        addItem
    }

    useEffect(() => {
        console.log(contexto.carrito)
    }, [])

    return (
        <Provider value={contexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider


