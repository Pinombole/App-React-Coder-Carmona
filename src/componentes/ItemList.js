import Item from "./Item";

const ItemList = (dataProp) => {
    console.log(dataProp.listado)
    return (
        dataProp.listado.map((item) => (
            <Item data={item} />
        ))
    )
};

export default ItemList;