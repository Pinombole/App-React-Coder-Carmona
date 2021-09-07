import Item from "./Item";

const ItemList = (dataProp) => {
    return (
        dataProp.listado.map((item) => (
            <Item data={item} />
        ))
    )
};

export default ItemList;