import { useState } from "react"
import { Link } from 'react-router-dom'



const ItemCount = ({ stock, initial, onAdd }) => {



    let [contador, setContador] = useState(initial);
    const [button, setButton] = useState('button');

    const handlerButton = () => {
        setButton('input')
    };

    const ButtonCount = () => {
        return <button className="btn-agregar btn btn-primary" onClick={agregaCarrito}>Agregar al Carrito</button>
    }

    const ButtonCart = () => {
        return <button className="btn-agregar btn btn-primary"><Link to="/carrito">Terminar Compra</Link ></button>
    }

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
        <>
            <div className="botoneraCounter border-primary">
                <button className="btn btn-primary btn-sm" onClick={restaContador}><i>-</i></button>
                <p>{contador}</p>
                <button className="btn btn-primary btn-sm" onClick={sumaContador}><i>+</i></button>
            </div>
            <div onClick={handlerButton}>
                {
                    button === 'button' ?
                        <ButtonCount />
                        :
                        <ButtonCart />
                }
            </div>
        </>

    );
}

export default ItemCount;