// import { propTypes } from "react-bootstrap/esm/Image";
import { useContext } from "react"
import ItemCount from "./itemCount"
import { CartContext } from "./CartContext"

const ItemDetail = (producto) => {
    const { addItem } = useContext(CartContext)

    const datosProducto = producto.detail;

    const onAdd = (cantidad) => {
        const productoAgregado = { ...datosProducto, cantidad };
        addItem(productoAgregado);
    }

    return (
        <div className="offset-2 col-8 no-gutters">
            <div className="producto detalle border-primary">
                <h3>{datosProducto.title}</h3>
                <div className="containerImg">
                    <img src={datosProducto.image} alt={datosProducto.title} />
                </div>
                <div>
                    <p className="precio">${datosProducto.price}</p>
                    <p className="descripcion titulo">Descripción</p>
                    <p className="descripcion">{datosProducto.description}</p>
                </div>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
        </div>
    );
}

export default ItemDetail;