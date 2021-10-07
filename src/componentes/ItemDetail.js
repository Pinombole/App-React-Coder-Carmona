import { useContext, useState } from "react"
import ItemCount from "./itemCount"
import { CartContext } from "./CartContext"
import { Link } from 'react-router-dom'

const ItemDetail = (propProducto) => {
    const { addItem } = useContext(CartContext)
    const [button, setButton] = useState('no-button');

    const producto = propProducto.detail;

    const ButtonCart = () => {
        return <Link to="/carrito"><button className="btn btn-outline-primary mt-2">Ir al Carrito</button></Link >
    }

    const ButtonSeguir = () => {
        return <Link to="/"><button className="btn btn-outline-primary mt-2">Seguir Comprando</button></Link >
    }

    const onAdd = (cantidad) => {
        const productoAgregado = { ...producto, cantidad };
        addItem(productoAgregado);
        // Agrega botones
        setButton('button')
    }



    return (
        <div className="offset-2 col-8 no-gutters boxDetalle">
            <div className="producto detalle border-primary">
                <h3>{producto.title}</h3>
                <div className="containerImg">
                    <img src={producto.image} alt={producto.title} />
                </div>
                <div>
                    <p className="precio">${producto.price}</p>
                    <p className="descripcion titulo">Descripción</p>
                    <p className="descripcion">{producto.description}</p>
                </div>
                <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                {button === 'button' ? (
                    <div className="botonesDobles">
                        <ButtonSeguir />
                        <ButtonCart />
                    </div>
                ) : (null)}
            </div>
        </div >
    );
}

export default ItemDetail;