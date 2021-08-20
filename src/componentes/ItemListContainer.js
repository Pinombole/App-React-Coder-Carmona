import ItemCount from "./itemCount"

const ItemListContainer = (props) => {
    const mensajeAdd = (cantidad) => {
        if (cantidad === 1) {
            console.log(`Se agregó ${cantidad} producto al Carrito`)
        }
        else {
            console.log(`Se agregaron ${cantidad} productos al Carrito`)
        }
    }

    return (
        <>
            <div id="itemListContainer">
                <h3>{props.saludo}</h3>
                <ItemCount stock={10} initial={1} onAdd={mensajeAdd} />
            </div>
        </>
    );
}

export default ItemListContainer;