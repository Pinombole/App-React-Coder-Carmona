import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

const fakeStore = `https://fakestoreapi.com/products`;

const ItemDetailContainer = () => {

    const { id } = useParams();
    let [detailToShow, setDetailShow] = useState([]);

    useEffect(() => {
        fetch(fakeStore)
            .then(res => res.json())
            .then((json) => {
                const aux = json.find(json => json.id == id)
                setDetailShow(aux)
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