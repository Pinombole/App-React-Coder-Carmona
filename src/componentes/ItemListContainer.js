import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'
import { firestore } from '../firebase.js'

const ItemListContainer = () => {

    let [productos, setProductos] = useState([]);
    let { categoria } = useParams()

    useEffect(() => {
        const db = firestore;

        const collection = db.collection("productos")

        const query = collection.get()

        query
            .then((snapshot) => {
                const docs = snapshot.docs

                const productosDb = []

                docs.forEach(doc => {
                    const docSnapshot = doc

                    const productoCompleto = { ...docSnapshot.data(), id: docSnapshot.id }

                    productosDb.push(productoCompleto)
                })

                if (categoria) {
                    const aux = productosDb.filter((item) => item.categoryId === categoria)
                    setProductos(aux)
                }
                else {
                    setProductos(productosDb)
                }
            })
            .catch((error) => {
                console.error(error)
            })

    }, [categoria])

    return (
        productos.length === 0 ? (
            <h4>Cargando Producto...</h4>
        ) : (
            <div className="container">
                <div className="row no-gutters">
                    <ItemList listado={productos} />
                </div>
            </div>
        )
    );
}

export default ItemListContainer;