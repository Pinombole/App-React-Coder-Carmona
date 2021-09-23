import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import { firestore } from '../firebase.js'

const ItemDetailContainer = () => {

    const { id } = useParams();
    let [detailToShow, setDetailShow] = useState([]);

    useEffect(() => {
        const db = firestore;

        const collection = db.collection("productos")

        const query = collection.doc(id).get()

        query
            .then((snapshot) => {
                const produDetalle = { ...snapshot.data(), id: snapshot.id }

                setDetailShow(produDetalle)
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