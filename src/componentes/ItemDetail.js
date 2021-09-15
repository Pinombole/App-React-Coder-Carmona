import { propTypes } from "react-bootstrap/esm/Image";
import ItemCount from "./itemCount";

const ItemDetail = (producto) => {
    const datosProducto = producto.detail;
    const onAdd = (cantidad) => {
        const productoAgregado = { ...datosProducto, cantidad };
        console.log("Producto Agregado:", productoAgregado);
    }

    return (
        <div className="offset-2 col-8 no-gutters">
            <div className="producto detalle border-primary" id={datosProducto.id}>
                <h3>{datosProducto.title}</h3>
                <div className="containerImg">
                    <img src={datosProducto.image} alt={producto.title} />
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