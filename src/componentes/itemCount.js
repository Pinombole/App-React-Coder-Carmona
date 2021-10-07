import { useState } from "react"


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

    return (
        <div className="counterBox">
            <div className="botoneraCounter border-primary">
                <button className="btn btn-sm" onClick={restaContador}><i>-</i></button>
                <p>{contador}</p>
                <button className="btn btn-sm" onClick={sumaContador}><i>+</i></button>
            </div>
            <button className="btn btn-primary" onClick={agregaCarrito}>Agregar al Carrito</button>
        </div>
    );
}

export default ItemCount;
