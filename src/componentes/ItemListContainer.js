import { useState, useEffect } from "react"
import ItemList from "./ItemList"

const fakeStore = `https://fakestoreapi.com/products/category/women's%20clothing`;

const ItemListContainer = () => {

    let [dataToShow, setDataShow] = useState([]);

    useEffect(() => {
        fetch(fakeStore)
            .then(res => res.json())
            .then(json => setDataShow(json));
    }, [])

    return (
        dataToShow.length === 0 ? (
            <h4>Cargando Producto...</h4>
        ) : (
            <div className="container">
                <div className="row no-gutters">
                    <ItemList listado={dataToShow} />
                </div>
            </div>
        )
    );
}

export default ItemListContainer;