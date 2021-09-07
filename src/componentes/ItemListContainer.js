import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList"

const fakeStore = `https://fakestoreapi.com/products`;

const ItemListContainer = () => {

    let [dataToShow, setDataShow] = useState([]);
    let { categoria } = useParams()

    useEffect(() => {
        fetch(fakeStore)
            .then(res => res.json())
            .then((json) => {
                let ropaHombre = json.filter(p => p.category === "men's clothing");
                let ropaMujer = json.filter(p => p.category === "women's clothing");
                let joyas = json.filter(p => p.category === "jewelery");
                let aux = [...ropaHombre, ...ropaMujer, ...joyas];
                aux.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

                let categoriaTienda = aux;

                if (categoria) {
                    categoriaTienda = aux.filter((item) => item.category === categoria)
                }
                else {
                    categoriaTienda = aux;

                }
                console.log("categoriaTienda")
                console.log(categoriaTienda)
                setDataShow(categoriaTienda)
            });
    }, [categoria])

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