import Item from "./Item";

const ItemList = (dataProp) => {
    return (
        dataProp.listado.map((item) => (
            <Item id={item.id} nombre={item.nombre} precio={item.precio} pictureURL={item.pictureURL} />
        ))
    )
};

export default ItemList;