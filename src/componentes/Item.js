import ItemCount from "./itemCount"

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
        <div className="producto border-primary item" id={itemProp.id}>
            <h4>{itemProp.nombre}</h4>
            <div>
                <img src={itemProp.pictureURL} alt={itemProp.nombre} />
            </div>
            <div>
                <p className="precio">${itemProp.precio}</p>
            </div>
            <ItemCount stock={10} initial={1} onAdd={mensajeAdd} />
        </div>

    );
}

export default Item;