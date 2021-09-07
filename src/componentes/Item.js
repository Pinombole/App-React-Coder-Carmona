import ItemCount from "./itemCount"
import { Link } from "react-router-dom"

const Item = (itemProp) => {
    const mensajeAdd = (cantidad) => {
        if (cantidad === 1) {
            console.log(`Se agregó ${cantidad} producto al Carrito`)
        }
        else {
            console.log(`Se agregaron ${cantidad} productos al Carrito`)
        }
    }

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 no-gutters">
            <div className="producto border-primary" id={itemProp.data.id}>
                <Link to={`/item/${itemProp.data.id}`}>
                    <h4>{itemProp.data.title}</h4>
                    <div className="containerImg">
                        <img src={itemProp.data.image} alt={itemProp.data.title} />
                    </div>
                    <div>
                        <p className="precio">${itemProp.data.price}</p>
                    </div>
                </Link>
                <ItemCount stock={10} initial={1} onAdd={mensajeAdd} />
            </div>
        </div>

    );
}

export default Item;