import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail";

const id = "17";
const fakeStore = `https://fakestoreapi.com/products/category/women's%20clothing`;

const ItemDetailContainer = () => {

    let [detailToShow, setDetailShow] = useState([]);

    useEffect(() => {
        fetch(fakeStore)
            .then(res => res.json())
            .then((json) => {
                const aux = json.find(json => json.id == id)
                setDetailShow(aux)
                console.log(aux)
            })
    }, [])

    return (
        <div className="container">
            <div className="row no-gutters">
                <ItemDetail detail={detailToShow} />
            </div>
        </div>

    );
}

export default ItemDetailContainer;