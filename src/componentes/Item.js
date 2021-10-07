import { Link } from "react-router-dom"
import { useContext } from "react"
import ItemCount from "./itemCount"
import { CartContext } from "./CartContext"

const Item = (itemProp) => {
    const { addItem } = useContext(CartContext)
    const itemData = itemProp.data

    const onAdd = (cantidad) => {
        const productoAgregado = { ...itemData, cantidad };
        addItem(productoAgregado);
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 no-gutters">
            <div className="producto border-primary" id={itemData.id}>
                <Link to={`/item/${itemData.id}`}>
                    <h4>{itemData.title}</h4>
                    <div className="containerImg">
                        <img src={itemData.image} alt={itemData.title} />
                    </div>
                    <div>
                        <p className="precio">${itemData.price}</p>
                    </div>
                </Link>
                <Link to={`/item/${itemData.id}`}>
                    <button className="btn-agregar btn btn-primary">Ver Detalle</button>
                </Link>
                <div>
                    <ItemCount stock={itemData.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
        </div>

    );
}

export default Item;