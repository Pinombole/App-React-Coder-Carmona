import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { firestore } from '../firebase.js'
import Spinner from 'react-bootstrap/Spinner'
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    let [detailToShow, setDetailShow] = useState([]);
    let [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {

        const collection = firestore.collection("productos").doc(id).get()

        collection
            .then((snapshot) => {
                setDetailShow({ ...snapshot.data(), id: snapshot.id })
                setLoading(false)
            })
    }, [id])

    return (
        loading === true ? (
            <div className="container spinner">
                <Spinner animation="border" variant="danger" className="mx-2" />
                <h4 className="mx-2">Espera un momento...</h4>
            </div>
        ) : (
            <>
                <div className="container">
                    <div className="row no-gutters">
                        <ItemDetail detail={detailToShow} />
                    </div>
                </div>
            </>
        )
    );
}

export default ItemDetailContainer;