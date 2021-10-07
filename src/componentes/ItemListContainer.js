import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { firestore } from '../firebase.js'
import Spinner from 'react-bootstrap/Spinner'
import ItemList from './ItemList'


const ItemListContainer = () => {

    let [productos, setProductos] = useState([])
    let [loading, setLoading] = useState(true)
    let { categoria } = useParams()

    useEffect(() => {

        if (categoria) {

            const collection = firestore.collection("productos")
                .where("category", "==", categoria)
                .get()

            collection
                .then((snapshot) => {
                    setProductos(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    setLoading(false)
                })
                .catch((error) => {
                    console.error(error)
                })
        }
        else {
            const collection = firestore.collection("productos").get()

            collection
                .then((snapshot) => {
                    setProductos(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                    setLoading(false)
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }, [categoria])

    return (
        loading === true ? (
            <div className="spinner">
                <Spinner animation="border" variant="danger" className="mx-2" />
                <h4 className="mx-2">Cargando Productos...</h4>
            </div>

        ) : (
            <>
                <div className="container">
                    <div className="row no-gutters">
                        <ItemList listado={productos} />
                    </div>
                </div>
            </>
        )
    );
}

export default ItemListContainer;