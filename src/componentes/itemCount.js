import { useState, useEffect } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

    let [contador, setContador] = useState(initial);

    const sumaContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restaContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const agregaCarrito = () => {
        if (stock > 0) {
            onAdd(contador);
        }

    }

    useEffect(() => {
        console.log("Hay Stock")
    }, [contador])

    return (
        <div className="producto border-primary">
            <div className="botoneraCounter">
                <button className="btn btn-primary btn-sm" onClick={restaContador}><i>-</i></button>
                <p>{contador}</p>
                <button className="btn btn-primary btn-sm" onClick={sumaContador}><i>+</i></button>
            </div>
            <div>
                <button className="btn-agregar btn btn-primary" onClick={agregaCarrito}>Agregar al Carrito</button>
            </div>
        </div>

    );
}

export default ItemCount;